import { Check } from 'lucide-react'
import { complianceRecord } from '@/content/company'
import { SectionHeading } from '@/components/section-heading'

// Reusable compliance-record panel (spec Phase 1).
export function CompliancePanel({
  heading = 'A clean record, on every job.',
  eyebrow = 'Compliance & safety record',
}: {
  heading?: string
  eyebrow?: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={heading} />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {complianceRecord.map((item) => (
          <li key={item} className="flex items-start gap-3 rounded-md border border-border bg-card p-5">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-3.5" aria-hidden />
            </span>
            <span className="font-medium leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
