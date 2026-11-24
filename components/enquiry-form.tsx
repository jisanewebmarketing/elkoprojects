'use client'

import { useState, useTransition, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { submitEnquiry } from '@/app/contact-us/actions'

type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date'
  options?: string[]
  required?: boolean
  autoComplete?: string
}

const inputClass =
  'w-full rounded-sm border border-input bg-card px-3.5 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30'

export function EnquiryForm({
  fields,
  submitLabel,
  successTitle = 'Thanks, we have your details.',
  redirectTo,
}: {
  fields: Field[]
  submitLabel: string
  successTitle?: string
  /** When set, navigate here on success instead of showing the inline message. */
  redirectTo?: string
}) {
  const router = useRouter()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    const data = new FormData(form)
    setError(null)
    startTransition(async () => {
      const res = await submitEnquiry(data)
      if (!res.ok) {
        setError(res.error)
        return
      }
      if (redirectTo) router.push(redirectTo)
      else setSent(true)
    })
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-3 rounded-md border border-border bg-card p-8">
        <CheckCircle2 className="size-8 text-primary" aria-hidden />
        <p className="font-display text-2xl font-bold">{successTitle}</p>
        <p className="leading-relaxed text-muted-foreground">
          Elias or Marko will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-border bg-card p-6 md:grid-cols-2 md:p-8">
      {/* Honeypot — hidden from real users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        defaultValue=""
      />
      {fields.map((f) => {
        const id = `f-${f.name}`
        const wide = f.type === 'textarea'
        return (
          <div key={f.name} className={wide ? 'flex flex-col gap-2 md:col-span-2' : 'flex flex-col gap-2'}>
            <label htmlFor={id} className="text-sm font-semibold">
              {f.label}
              {f.required && <span className="text-primary"> *</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea id={id} name={f.name} rows={5} required={f.required} className={inputClass} />
            ) : f.type === 'select' ? (
              <select id={id} name={f.name} required={f.required} defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type ?? 'text'}
                required={f.required}
                autoComplete={f.autoComplete}
                className={inputClass}
              />
            )}
          </div>
        )
      })}
      <div className="flex flex-col gap-3 md:col-span-2">
        {error && (
          <p role="alert" className="text-sm font-medium text-destructive">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {pending ? 'Sending…' : submitLabel}
        </button>
      </div>
    </form>
  )
}
