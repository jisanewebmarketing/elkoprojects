'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { InsightCategory } from '@/content/insights'

export function InsightsBrowser({ categories }: { categories: InsightCategory[] }) {
  const [active, setActive] = useState(categories[0]?.key ?? '')
  const current = categories.find((c) => c.key === active) ?? categories[0]

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div role="group" aria-label="Filter insights by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={active === c.key}
            onClick={() => setActive(c.key)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === c.key ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground',
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold md:text-4xl">{current.label}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{current.intro}</p>
          </div>
          <div className="divide-y divide-border border-y border-border lg:col-span-8">
            {current.faqs.map((f) => (
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
      )}
    </section>
  )
}
