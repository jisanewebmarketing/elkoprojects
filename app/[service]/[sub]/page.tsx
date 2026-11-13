import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { CtaBand } from '@/components/cta-band'
import { RelatedProjects } from '@/components/related-projects'
import { CredentialsStrip } from '@/components/credentials-strip'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { getService, services } from '@/lib/site-data'

export const dynamicParams = false

// Residential (Phase 3) and Commercial (Phase 4) sub-pages are served by their
// dedicated app/<slug>/* routes; exclude them here to avoid a route conflict.
const DEDICATED = new Set(['remedial', 'residential', 'commercial'])
export function generateStaticParams() {
  return services
    .filter((s) => !DEDICATED.has(s.slug))
    .flatMap((s) => (s.items ?? []).map((i) => ({ service: s.slug, sub: i.slug })))
}

async function resolve(params: Promise<{ service: string; sub: string }>) {
  const { service, sub } = await params
  const s = getService(service)
  const item = s?.items?.find((i) => i.slug === sub)
  return { s, item }
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; sub: string }> }): Promise<Metadata> {
  const { s, item } = await resolve(params)
  if (!s || !item) return {}
  const path = `/${s.slug}/${item.slug}`
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: path },
    openGraph: { title: `${item.title} | Elko Projects`, description: item.summary, url: path, images: item.image ? [item.image] : undefined },
  }
}

const deliver = [
  { title: 'Plan', body: 'Site visit with a director, documented scope and a commercially clear proposal.' },
  { title: 'Build', body: 'Director-led site control, weekly reporting and documented variations only.' },
  { title: 'Hand over', body: 'Defect walk with both directors, full documentation and warranties.' },
]

export default async function SubServicePage({ params }: { params: Promise<{ service: string; sub: string }> }) {
  const { s, item } = await resolve(params)
  if (!s || !item) notFound()

  const crumbs = [
    { label: s.title, href: `/${s.slug}` },
    { label: item.title, href: `/${s.slug}/${item.slug}` },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: item.title, description: item.summary, url: `/${s.slug}/${item.slug}` }),
          ...(s.faqs.length ? [faqSchema(s.faqs)] : []),
        ]}
      />
      <PageHero eyebrow={s.title} title={item.title} intro={item.summary} image={item.image} crumbs={crumbs} />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">What is included</h2>
          <ul className="mt-8 flex flex-col">
            {item.includes.map((inc) => (
              <li key={inc} className="flex items-start gap-3 border-b border-border py-4">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-lg">{inc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">How we deliver it</h2>
          <ol className="mt-8 flex flex-col gap-4">
            {deliver.map((d, i) => (
              <li key={d.title} className="flex gap-5 rounded-md border border-border bg-card p-5">
                <span className="font-display text-3xl font-extrabold text-primary">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{d.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedProjects category={s.slug === 'residential' ? 'Residential' : 'Commercial'} />
      <CredentialsStrip className="py-8" />
      <FaqList faqs={s.faqs} />
      <CtaBand image={item.image} />
    </>
  )
}
