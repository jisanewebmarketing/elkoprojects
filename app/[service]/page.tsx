import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { CtaBand } from '@/components/cta-band'
import { RelatedProjects } from '@/components/related-projects'
import { InspectionQuote } from '@/components/inspection-quote'
import { CredentialsStrip } from '@/components/credentials-strip'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { getService, services } from '@/lib/site-data'

export const dynamicParams = false

// /remedial (Phase 2) and /residential (Phase 3) have dedicated app/<slug>/*
// routes, so exclude their slugs from this dynamic route.
const DEDICATED = new Set(['remedial', 'residential'])
export function generateStaticParams() {
  return services.filter((s) => !DEDICATED.has(s.slug)).map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params
  const s = getService(service)
  if (!s) return {}
  const path = `/${s.slug}`
  return {
    title: s.title,
    description: s.intro,
    alternates: { canonical: path },
    openGraph: { title: `${s.title} | Elko Projects`, description: s.intro, url: path, images: s.image ? [s.image] : undefined },
  }
}

const categoryFor: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  'retirement-living': 'Retirement living',
  remedial: 'Remedial',
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const s = getService(service)
  if (!s) notFound()

  const crumbs = [{ label: s.title, href: `/${s.slug}` }]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: s.title, description: s.intro, url: `/${s.slug}` }),
          ...(s.faqs.length ? [faqSchema(s.faqs)] : []),
        ]}
      />
      <PageHero eyebrow={s.short} title={s.title} intro={s.intro} image={s.image} crumbs={crumbs} />

      {s.items && (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">{`${s.title} services`}</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item) => (
              <li key={item.slug}>
                <Link href={`/${s.slug}/${item.slug}`} className="group flex h-full flex-col gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{item.summary}</p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {s.workTypes && (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">What we do</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {s.workTypes.map((w) => (
              <li key={w.title} id={w.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="flex flex-col gap-2 bg-card p-6">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {s.slug === 'building-inspections' && <InspectionQuote />}

      {categoryFor[s.slug] && <RelatedProjects category={categoryFor[s.slug]} />}

      <CredentialsStrip className="py-8" />
      <FaqList faqs={s.faqs} />
      <CtaBand image={s.image} />
    </>
  )
}
