// Server-only email helpers shared by the enquiry server actions.
// Imported only from files marked 'use server', so RESEND_API_KEY and the
// recipient list never reach the client bundle.

export const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'Elko Projects Website <noreply@elkoprojects.com.au>'

// Where enquiry notifications are delivered. Override in the environment with
// CONTACT_EMAIL as a comma-separated list, e.g.
//   CONTACT_EMAIL="admin@elkoprojects.com.au,someone@example.com"
const DEFAULT_RECIPIENTS = [
  'admin@elkoprojects.com.au',
  'jisan@ewebmarketing.com.au',
  'nauman@ewebmarketing.com.au',
]

export const recipients: string[] = process.env.CONTACT_EMAIL
  ? process.env.CONTACT_EMAIL.split(',').map((s) => s.trim()).filter(Boolean)
  : DEFAULT_RECIPIENTS

export function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)
}

export async function sendViaResend(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    // Not configured — actions still succeed so staging works, but no email is
    // sent. Set RESEND_API_KEY (and verify the sending domain) for production.
    console.warn('[enquiry] RESEND_API_KEY not set — email NOT sent.')
    return
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Resend responded ${res.status}`)
}

// Small per-instance rate limiter (first line of defence alongside the
// honeypot). Swap for a shared store if the site scales to many instances.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

export function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}
