import Image from 'next/image'
import { Check } from 'lucide-react'
import { directors } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const commitments = [
  'Both directors on every project, from quote to defect walk',
  'Ring-fenced budgets with no cross-funding between jobs',
  'Every variation documented and approved before work proceeds',
  'Zero NCAT cases, EPA breaches or stop work orders',
]

export function DirectorsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-auto">
          <Image
            src="/images/on-site-directors.jpg"
            alt="Elko directors reviewing drawings on site beside new timber framing"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <p className="absolute bottom-4 left-4 rounded-sm bg-background px-3 py-2 text-sm font-semibold">
            On site, every week
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Overseen by the Directors"
            title="Two directors. One standard."
            body="Elias and Marko have known each other for over 20 years. Elko is small enough that both are personally involved in every build, and structured enough to deliver to the standard Sydney's best clients expect."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {directors.map((d) => (
              <li key={d.name} className="flex flex-col gap-2 rounded-md border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{d.role}</p>
                <h3 className="text-xl font-extrabold">{d.name}</h3>
                <p className="text-xs text-muted-foreground">{d.quals}</p>
                <p className="text-sm leading-relaxed">{d.focus}</p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
