'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Project, ProjectCategory } from '@/lib/site-data'

const filters: ('All' | ProjectCategory)[] = ['All', 'Residential', 'Commercial', 'Remedial', 'Retirement living', 'Display units']

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === f ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">{`${shown.length} projects shown`}</p>

      <ul className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.title}>
            <figure className="group flex flex-col gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title}, ${p.location}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.status && (
                  <span className="absolute left-3 top-3 rounded-sm bg-background px-2 py-1 text-xs font-semibold">{p.status}</span>
                )}
              </div>
              <figcaption className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category} · {p.region}</p>
                <p className="font-display text-xl font-bold">{p.title}, {p.location}</p>
                <p className="text-sm text-muted-foreground">{p.scope}</p>
                <p className="mt-1 text-xs font-medium text-primary">Overseen by E. Nader & M. Bratkovic</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
