import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/site-data'

export function RelatedProjects({ category }: { category: string }) {
  const list = projects.filter((p) => p.category === category).slice(0, 3)
  if (list.length === 0) return null

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold md:text-4xl">{`Featured ${category.toLowerCase()} projects`}</h2>
          <Link href="/completed-projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            See all projects <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {list.map((p) => (
            <li key={p.title}>
              <figure className="flex flex-col gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                  <Image src={p.image || '/placeholder.svg'} alt={`${p.title}, ${p.location}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption>
                  <p className="font-display text-lg font-bold">{p.title}, {p.location}</p>
                  <p className="text-sm text-muted-foreground">{p.scope}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
