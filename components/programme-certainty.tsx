import { CalendarClock, PackageCheck, Workflow } from 'lucide-react'

// Capability-statement copy point for commercial work (spec Phase 4):
// detailed programming, early procurement of long-lead items, and strategic
// sequencing to protect operating timeframes.
const points = [
  {
    icon: CalendarClock,
    title: 'Detailed programming',
    body: 'We programme the works in detail up front, so every trade and milestone is mapped before we start on site.',
  },
  {
    icon: PackageCheck,
    title: 'Early procurement',
    body: 'Long-lead items are identified and procured early, so materials never hold up your opening date.',
  },
  {
    icon: Workflow,
    title: 'Strategic sequencing',
    body: 'Trades are sequenced strategically, often after hours and around trading, to protect your operating timeframes.',
  },
]

export function ProgrammeCertainty() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Programme certainty</p>
        <h2 className="text-balance text-3xl font-extrabold leading-[1.05] md:text-4xl">
          Open on the date you planned.
        </h2>
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <li key={p.title} className="flex flex-col gap-4 rounded-md border border-border bg-card p-6">
            <span className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <p.icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
