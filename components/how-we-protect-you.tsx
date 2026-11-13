import { Wallet, FileCheck2, CalendarCheck, ClipboardCheck } from 'lucide-react'

// Reusable "How we protect you" section (spec Phase 3). All points are sourced
// from the client commitments in docs/ELKO_BUILD_SPEC.md §1.
const points = [
  {
    icon: Wallet,
    title: 'Ring-fenced budget',
    body: 'Every project runs on its own budget. There is no cross-funding between jobs, so your money stays on your project.',
  },
  {
    icon: FileCheck2,
    title: 'Documented variations',
    body: 'Every scope change is documented, costed and approved by you before work proceeds. No verbal variations.',
  },
  {
    icon: CalendarCheck,
    title: 'Weekly reporting',
    body: 'You get a clear written update every week, so you always know where your project is up to.',
  },
  {
    icon: ClipboardCheck,
    title: 'Defect walks',
    body: 'Both directors walk the defects with you before completion, so nothing is signed off until it is right.',
  },
]

export function HowWeProtectYou() {
  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How we protect you</p>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.02] md:text-5xl">
            Your budget and programme, protected from day one.
          </h2>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-md bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <li key={p.title} className="flex flex-col gap-4 bg-ink p-6">
              <span className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <p.icon className="size-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="leading-relaxed text-ink-foreground/75">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
