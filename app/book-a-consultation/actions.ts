'use server'

import { headers } from 'next/headers'

export type SubmitResult = { ok: true } | { ok: false; error: string }

// Very small in-memory rate limiter (per server instance). Good enough as a
// first line of defence alongside the honeypot; swap for a shared store if the
// site scales to many instances.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const ADMIN_EMAIL = process.env.CONTACT_EMAIL || 'admin@elkoprojects.com.au'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Elko Projects Website <noreply@elkoprojects.com.au>'
const MAX_FILES = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024 // 10 MB
const ALLOWED = /\.(pdf|jpe?g|png)$/i

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)
}

async function sendViaResend(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    // Not configured — the form still succeeds so staging works, but no email is
    // sent. Set RESEND_API_KEY (and verify the sending domain) for production.
    console.warn('[book-a-consultation] RESEND_API_KEY not set — enquiry NOT emailed.')
    return
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Resend responded ${res.status}`)
}

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
      to: [ADMIN_EMAIL],
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
