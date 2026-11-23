'use server'

import { headers } from 'next/headers'
import { FROM_EMAIL, recipients, esc, sendViaResend, rateLimited } from '@/lib/email'

export type SubmitResult = { ok: true } | { ok: false; error: string }

// Friendly labels for known fields; anything else falls back to the field name.
const LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  service: 'Project type',
  details: 'Project details',
  address: 'Address',
  suburb: 'Suburb',
  property: 'Property',
  message: 'Message',
}

// Generic enquiry handler used by the Contact and Building Inspections forms.
// Emails every submitted field to the office and sends the enquirer a
// confirmation. Validation is deliberately light (name + email) so it works
// across the different field sets each form uses.
export async function submitEnquiry(formData: FormData): Promise<SubmitResult> {
  try {
    // Honeypot — real users never fill this hidden field.
    if ((formData.get('company') as string)?.trim()) return { ok: true }

    const h = await headers()
    const ip = (h.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
    if (rateLimited(ip)) return { ok: false, error: 'Too many requests. Please try again in a minute.' }

    const get = (k: string) => ((formData.get(k) as string) || '').trim()
    const name = get('name')
    const email = get('email')

    if (!name || !email) return { ok: false, error: 'Please add your name and email.' }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, error: 'Please enter a valid email address.' }

    const entries = ([...formData.entries()].filter(
      ([k, v]) => typeof v === 'string' && (v as string).trim() && k !== 'company',
    ) as [string, string][])

    const rows = entries
      .map(([k, v]) => {
        const label = LABELS[k] || k.charAt(0).toUpperCase() + k.slice(1)
        return `<tr><td style="padding:4px 12px 4px 0;color:#5b6268;vertical-align:top">${esc(label)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`
      })
      .join('')

    const service = get('service')
    const adminHtml = `<h2>New website enquiry</h2><table style="font:14px/1.5 system-ui,sans-serif">${rows}</table>`

    await sendViaResend({
      from: FROM_EMAIL,
      to: recipients,
      reply_to: email,
      subject: `Website enquiry — ${name}${service ? ` (${service})` : ''}`,
      html: adminHtml,
    })

    await sendViaResend({
      from: FROM_EMAIL,
      to: [email],
      subject: 'We’ve received your enquiry — Elko Projects',
      html: `<p>Hi ${esc(name)},</p><p>Thanks for getting in touch with Elko Projects. Elias or Marko will reply within one business day.</p><p>— Elko Projects<br>admin@elkoprojects.com.au · 0423 334 792</p>`,
    })

    return { ok: true }
  } catch (err) {
    console.error('[enquiry] submit failed', err)
    return { ok: false, error: 'Something went wrong sending your enquiry. Please call us on 0423 334 792.' }
  }
}
