import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function ServiceLanes() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we build"
          title="Five service lines. One standard of finish."
          body="Focused builders produce better outcomes. Each line has a defined delivery approach, and every one is run by the directors."
        />
      </div>

      <ul className="mt-14 grid gap-4 md:grid-cols-6">
        {services.map((s, i) => (
          <li key={s.slug} className={cn(i < 2 ? 'md:col-span-3' : 'md:col-span-2')}>
            <Link
              href={`/${s.slug}`}
              className="group relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-md text-ink-foreground md:min-h-[26rem]"
            >
              <Image
                src={s.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" aria-hidden />
              <div className="flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="text-2xl font-extrabold md:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-foreground/85">{s.short}</p>
                  {s.items && (
                    <p className="mt-3 text-xs uppercase tracking-widest text-ink-foreground/70">
                      {s.items.map((x) => x.title).join(' · ')}
                    </p>
                  )}
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
