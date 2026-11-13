import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href: string }

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumbs = [],
}: {
  eyebrow: string
  title: string
  intro: string
  image?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-28 lg:px-8 lg:pt-32">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">Home</Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.href} className="flex items-center gap-1">
              <ChevronRight className="size-3.5" aria-hidden />
              <Link href={c.href} className="hover:text-foreground">{c.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-5xl font-extrabold leading-[0.98] md:text-7xl">{title}</h1>
        </div>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:col-span-5">{intro}</p>
      </div>
      {image && (
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-md md:aspect-[21/9]">
          <Image src={image || '/placeholder.svg'} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
      )}
    </section>
  )
}
