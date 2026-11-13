import { stats, turnover, statVisible } from '@/content/company'

// Homepage stats band (spec Phase 1). Driven by content/company.ts with a
// `confirmed` flag per stat; unconfirmed stats (and the turnover slot) render
// only when NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS=true.
const mdCols: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
}

export function StatsBand() {
  const items = [...stats, turnover].filter(statVisible)
  if (items.length === 0) return null

  return (
    <section aria-label="Elko Projects at a glance" className="bg-ink text-ink-foreground">
      <dl className={`mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-foreground/15 px-5 lg:px-8 ${mdCols[items.length] ?? 'md:grid-cols-4'}`}>
        {items.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 bg-ink px-2 py-8 text-center">
            <dt className="order-2 text-sm leading-snug text-ink-foreground/75">{s.label}</dt>
            <dd className="order-1 font-display text-4xl font-extrabold text-accent md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
