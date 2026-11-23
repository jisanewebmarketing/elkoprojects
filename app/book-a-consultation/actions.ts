'use server'

import { headers } from 'next/headers'
import { FROM_EMAIL, recipients, esc, sendViaResend, rateLimited } from '@/lib/email'

export type SubmitResult = { ok: true } | { ok: false; error: string }

const MAX_FILES = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024 // 10 MB
const ALLOWED = /\.(pdf|jpe?g|png)$/i

export async function submitConsultation(formData: FormData): Promise<SubmitResult> {
  try {
    // Honeypot — real users never fill this hidden field.
    if ((formData.get('company') as string)?.trim()) return { ok: true }

    const h = await headers()
    const ip = (h.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
    if (rateLimited(ip)) return { ok: false, error: 'Too many requests. Please try again in a minute.' }

    const get = (k: string) => ((formData.get(k) as string) || '').trim()
    const name = get('name')
    const email = get('email')
    const phone = get('phone')
    const address = get('address')
    const category = get('category')
    const scope = get('scope')
    const consent = formData.get('consent') === 'on'

    if (!name || !email || !phone || !address || !category || !scope) {
      return { ok: false, error: 'Please complete all required fields.' }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, error: 'Please enter a valid email address.' }
    if (!consent) return { ok: false, error: 'Please accept the privacy consent to continue.' }

    // Attachments
    const files = formData.getAll('files').filter((f): f is File => f instanceof File && f.size > 0)
    const attachments: { filename: string; content: string }[] = []
    for (const f of files.slice(0, MAX_FILES)) {
      if (!ALLOWED.test(f.name)) return { ok: false, error: `Unsupported file type: ${f.name}. Use PDF, JPG or PNG.` }
      if (f.size > MAX_FILE_BYTES) return { ok: false, error: `${f.name} is larger than 10 MB.` }
      const buf = Buffer.from(await f.arrayBuffer())
      attachments.push({ filename: f.name, content: buf.toString('base64') })
    }

    const fields = ([
      ['Name', name],
      ['Email', email],
      ['Phone', phone],
      ['Preferred contact', get('contactMethod')],
      ['Property address / suburb', address],
      ['Property type', get('propertyType')],
      ['Service category', category],
      ['Sub-service', get('subService')],
      ['Scope', scope],
      ['Budget range', get('budget')],
      ['Target start date', get('startDate')],
      ['Design status', get('designStatus')],
      ['Enquirer', get('role')],
      ['How did you hear about us', get('heard')],
    ] as [string, string][]).filter(([, v]) => v)

    const rows = fields.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5b6268;vertical-align:top">${esc(k)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`).join('')
    const adminHtml = `<h2>New site visit &amp; quote request</h2><table style="font:14px/1.5 system-ui,sans-serif">${rows}</table>${attachments.length ? `<p>${attachments.length} file(s) attached.</p>` : ''}`

    await sendViaResend({
      from: FROM_EMAIL,
      to: recipients,
      reply_to: email,
      subject: `Site visit & quote — ${name} (${category})`,
      html: adminHtml,
      attachments,
    })

    await sendViaResend({
      from: FROM_EMAIL,
      to: [email],
      subject: 'We’ve received your request — Elko Projects',
      html: `<p>Hi ${esc(name)},</p><p>Thanks for your enquiry. A director will be in touch within one business day to arrange your free site visit and quote.</p><p>— Elko Projects<br>admin@elkoprojects.com.au · 0423 334 792</p>`,
    })

    return { ok: true }
  } catch (err) {
    console.error('[book-a-consultation] submit failed', err)
    return { ok: false, error: 'Something went wrong sending your request. Please call us on 0423 334 792.' }
  }
}
