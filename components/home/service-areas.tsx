import { serviceAreas } from '@/lib/site-data'

export function ServiceAreas() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
        <h2 className="shrink-0 text-sm font-bold uppercase tracking-widest">Building across Greater Sydney</h2>
        <ul className="flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <li key={a} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
