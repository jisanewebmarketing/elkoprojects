import { ShieldCheck } from 'lucide-react'
import { credentialsStrip } from '@/content/company'

// Reusable licence / insurance / safety strip (spec Phase 1).
// Drop it onto any service or detail page above the FAQs or CTA.
export function CredentialsStrip({ className }: { className?: string }) {
  return (
    <section aria-label="Licensing, insurance and safety" className={className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-md border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-6 py-4">
            <ShieldCheck className="size-5 text-primary" aria-hidden />
            <h2 className="text-sm font-bold uppercase tracking-widest">Licensed, insured &amp; compliant</h2>
          </div>
          <dl className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {credentialsStrip.map((c) => (
              <div key={c.label} className="flex flex-col gap-1 bg-card px-6 py-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</dt>
                <dd className="font-display text-base font-bold">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
