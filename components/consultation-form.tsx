'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Paperclip, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { submitConsultation } from '@/app/book-a-consultation/actions'

export type ServiceCategory = { label: string; subs: string[] }

const inputClass =
  'w-full rounded-sm border border-input bg-card px-3.5 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30'

const propertyTypes = ['House', 'Terrace', 'Townhouse', 'Apartment', 'Duplex', 'Commercial', 'Strata building', 'Retirement living']
const contactMethods = ['Phone', 'Email', 'Either']
const budgets = ['Under $100k', '$100k – $300k', '$300k – $750k', '$750k – $1.5M', '$1.5M+', 'Not sure yet']
const designStatuses = ['No plans', 'Concept only', 'DA approved', 'CDC approved', 'Construction drawings']
const roles = ['Owner', 'Strata committee', 'Developer', 'Tenant', 'Other']
const heardOptions = ['Google', 'Referral', 'Social media', 'HiPages', 'Repeat client', 'Other']

type Values = Record<string, string>
const STEPS = ['Your details', 'Your property', 'The work', 'Budget & timing', 'About you']

export function ConsultationForm({ categories }: { categories: ServiceCategory[] }) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<Values>({ contactMethod: 'Either' })
  const [files, setFiles] = useState<File[]>([])
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const set = (k: string, v: string) => setValues((p) => ({ ...p, [k]: v }))
  const subs = useMemo(() => categories.find((c) => c.label === values.category)?.subs ?? [], [categories, values.category])

  function validateStep(s: number): string {
    if (s === 0) {
      if (!values.name?.trim() || !values.phone?.trim()) return 'Please enter your name and phone.'
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email ?? '')) return 'Please enter a valid email address.'
    }
    if (s === 1 && !values.address?.trim()) return 'Please enter the property address or suburb.'
    if (s === 2 && (!values.category || !values.scope?.trim())) return 'Please choose a service and describe the work.'
    if (s === 4 && !consent) return 'Please accept the privacy consent to continue.'
    return ''
  }

  function next() {
    const e = validateStep(step)
    if (e) return setError(e)
    setError('')
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }
  function back() {
    setError('')
    setStep((s) => Math.max(s - 1, 0))
  }

  function onFiles(list: FileList | null) {
    if (!list) return
    const allowed = /\.(pdf|jpe?g|png)$/i
    const picked = Array.from(list).filter((f) => allowed.test(f.name) && f.size <= 10 * 1024 * 1024)
    setFiles((prev) => [...prev, ...picked].slice(0, 5))
  }

  async function onSubmit() {
    for (let s = 0; s < STEPS.length; s++) {
      const e = validateStep(s)
      if (e) {
        setStep(s)
        return setError(e)
      }
    }
    setSubmitting(true)
    setError('')
    const fd = new FormData()
    Object.entries(values).forEach(([k, v]) => v && fd.append(k, v))
    if (consent) fd.append('consent', 'on')
    files.forEach((f) => fd.append('files', f))
    const res = await submitConsultation(fd)
    if (res.ok) {
      router.push('/book-a-consultation/thank-you')
      return
    }
    setSubmitting(false)
    setError(res.error)
  }

  return (
    <div className="rounded-md border border-border bg-card p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold">
          Step {step + 1} of {STEPS.length} · <span className="text-muted-foreground">{STEPS[step]}</span>
        </p>
        <div className="flex gap-1.5">
          {STEPS.map((s, i) => (
            <span key={s} className={cn('h-1.5 w-8 rounded-full', i <= step ? 'bg-primary' : 'bg-border')} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {/* Honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" onChange={(e) => set('company', e.target.value)} />

        {step === 0 && (
          <>
            <Field label="Name" required><input className={inputClass} autoComplete="name" value={values.name ?? ''} onChange={(e) => set('name', e.target.value)} /></Field>
            <Field label="Phone" required><input className={inputClass} type="tel" autoComplete="tel" value={values.phone ?? ''} onChange={(e) => set('phone', e.target.value)} /></Field>
            <Field label="Email" required wide><input className={inputClass} type="email" autoComplete="email" value={values.email ?? ''} onChange={(e) => set('email', e.target.value)} /></Field>
            <Field label="Preferred contact method" wide>
              <Select value={values.contactMethod ?? 'Either'} onChange={(v) => set('contactMethod', v)} options={contactMethods} />
            </Field>
          </>
        )}

        {step === 1 && (
          <>
            <Field label="Project address or suburb" required wide><input className={inputClass} autoComplete="street-address" value={values.address ?? ''} onChange={(e) => set('address', e.target.value)} /></Field>
            <Field label="Property type" wide><Select value={values.propertyType ?? ''} onChange={(v) => set('propertyType', v)} options={propertyTypes} placeholder="Select" /></Field>
          </>
        )}

        {step === 2 && (
          <>
            <Field label="Service category" required>
              <Select value={values.category ?? ''} onChange={(v) => { set('category', v); set('subService', '') }} options={categories.map((c) => c.label)} placeholder="Select" />
            </Field>
            <Field label="Sub-service">
              <Select value={values.subService ?? ''} onChange={(v) => set('subService', v)} options={subs} placeholder={subs.length ? 'Select' : '—'} disabled={subs.length === 0} />
            </Field>
            <Field label="Describe the work" required wide>
              <textarea className={inputClass} rows={5} value={values.scope ?? ''} onChange={(e) => set('scope', e.target.value)} />
            </Field>
            <Field label="Plans or photos (PDF, JPG, PNG — up to 5, 10MB each)" wide>
              <label className="flex cursor-pointer items-center gap-2 rounded-sm border border-dashed border-input px-3.5 py-3 text-sm text-muted-foreground hover:border-primary">
                <Paperclip className="size-4" aria-hidden /> Add files
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => onFiles(e.target.files)} />
              </label>
              {files.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between gap-2 text-sm">
                      <span className="truncate">{f.name}</span>
                      <button type="button" onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} aria-label={`Remove ${f.name}`}>
                        <X className="size-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <Field label="Budget range"><Select value={values.budget ?? ''} onChange={(v) => set('budget', v)} options={budgets} placeholder="Select" /></Field>
            <Field label="Target start date"><input className={inputClass} type="date" value={values.startDate ?? ''} onChange={(e) => set('startDate', e.target.value)} /></Field>
            <Field label="Design status" wide><Select value={values.designStatus ?? ''} onChange={(v) => set('designStatus', v)} options={designStatuses} placeholder="Select" /></Field>
          </>
        )}

        {step === 4 && (
          <>
            <Field label="You are a…"><Select value={values.role ?? ''} onChange={(v) => set('role', v)} options={roles} placeholder="Select" /></Field>
            <Field label="How did you hear about us?"><Select value={values.heard ?? ''} onChange={(v) => set('heard', v)} options={heardOptions} placeholder="Select" /></Field>
            <div className="flex items-start gap-3 md:col-span-2">
              <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 size-4" />
              <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                I consent to Elko Projects collecting and handling my information to respond to this enquiry, as described in the{' '}
                <Link href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">Privacy Policy</Link>. <span className="text-primary">*</span>
              </label>
            </div>
          </>
        )}
      </div>

      {error && <p role="alert" className="mt-5 rounded-sm bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">{error}</p>}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary">
            <ArrowLeft className="size-4" aria-hidden /> Back
          </button>
        ) : (
          <span />
        )}
        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Next <ArrowRight className="size-4" aria-hidden />
          </button>
        ) : (
          <button type="button" onClick={onSubmit} disabled={submitting} className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
            {submitting ? 'Sending…' : 'Book a free site visit & quote'} <ArrowRight className="size-4" aria-hidden />
          </button>
        )}
      </div>
    </div>
  )
}

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-2', wide && 'md:col-span-2')}>
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </div>
  )
}

function Select({ value, onChange, options, placeholder, disabled }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string; disabled?: boolean }) {
  return (
    <select className={inputClass} value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  )
}
