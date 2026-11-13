import { Plus } from 'lucide-react'

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 className="text-4xl font-extrabold lg:col-span-4">Common questions</h2>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                {f.q}
                <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
