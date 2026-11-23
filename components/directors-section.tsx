import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { directors } from '@/lib/site-data'
import { directorsIntro } from '@/content/company'
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
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Overseen by the Directors"
          title="Two directors. One standard."
          body={directorsIntro}
        />

        <ul className="grid gap-6 lg:grid-cols-2">
          {directors.map((d) => (
            <li key={d.name} className="grid overflow-hidden rounded-md border border-border bg-card sm:grid-cols-[240px_1fr]">
              <div className="relative aspect-[4/5] bg-secondary sm:aspect-auto">
                {d.headshot ? (
                  <Image
                    src={d.headshot}
                    alt={`${d.name}, ${d.role}`}
                    fill
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center font-display text-4xl font-bold text-muted-foreground">
                    {d.initials}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{d.role}</p>
                <h3 className="text-2xl font-extrabold">{d.name}</h3>
                <p className="text-xs text-muted-foreground">{d.quals}</p>
                <p className="mt-1 text-sm leading-relaxed">{d.focus}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/about-us"
          className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
        >
          Meet the directors in full <ArrowRight className="size-4" aria-hidden />
        </Link>

        <ul className="grid gap-3 sm:grid-cols-2">
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
    </section>
  )
}
