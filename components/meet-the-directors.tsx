import Image from 'next/image'
import { Check } from 'lucide-react'
import { directors, directorsIntro } from '@/content/company'
import { SectionHeading } from '@/components/section-heading'

const commitments = [
  'Both directors on every project, from quote to defect walk',
  'Ring-fenced budgets with no cross-funding between jobs',
  'Every variation documented and approved before work proceeds',
  'Zero NCAT cases, EPA breaches or stop work orders',
]

export function MeetTheDirectors() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="Meet the directors" title="Two directors. One standard." body={directorsIntro} />

      <div className="mt-16 flex flex-col gap-20 lg:gap-28">
        {directors.map((d) => {
          const firstName = d.name.split(' ')[0]
          return (
            <article key={d.name} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Identity — photo + name, sticky on desktop */}
              <div className="flex flex-col gap-5 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <figure className="relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-secondary">
                  {d.headshot ? (
                    <Image
                      src={d.headshot}
                      alt={`${d.name}, ${d.role}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center font-display text-5xl font-bold text-muted-foreground">
                      {d.initials}
                    </span>
                  )}
                </figure>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{d.role}</p>
                  <h3 className="font-display text-2xl font-extrabold md:text-3xl">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.quals}</p>
                </div>
              </div>

              {/* Narrative — bio, experience, principles */}
              <div className="flex flex-col gap-8 lg:col-span-8">
                <div className="flex flex-col gap-4">
                  {d.summary.map((para, i) => (
                    <p key={i} className="text-pretty text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</h4>
                  <ul className="mt-4 divide-y divide-border overflow-hidden rounded-md border border-border">
                    {d.experience.map((e) => (
                      <li key={e.area} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-5">
                        <span className="w-24 shrink-0 font-display font-bold">{e.years}</span>
                        <span className="leading-relaxed">
                          <span className="font-semibold">{e.area}</span>
                          <span className="text-muted-foreground"> — {e.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    How {firstName} works
                  </h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {d.principles.map((p) => (
                      <div key={p.title} className="flex flex-col gap-1.5 rounded-md border border-border bg-card p-5">
                        <p className="font-display font-bold leading-snug">{p.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <ul className="mt-20 grid gap-3 border-t border-border pt-12 sm:grid-cols-2">
        {commitments.map((c) => (
          <li key={c} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-3.5" aria-hidden />
            </span>
            <span className="leading-relaxed">{c}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
