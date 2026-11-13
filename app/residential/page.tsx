import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { HowWeProtectYou } from '@/components/how-we-protect-you'
import { CredentialsStrip } from '@/components/credentials-strip'
import { RelatedProjects } from '@/components/related-projects'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo'
import { residentialHub, residentialPages } from '@/content/residential'

export const metadata: Metadata = {
  title: 'Residential Builder & Renovations Sydney',
  description: residentialHub.intro,
  alternates: { canonical: '/residential' },
  openGraph: {
    title: 'Residential Builder & Renovations Sydney | Elko Projects',
    description: residentialHub.intro,
    url: '/residential',
    images: [residentialHub.image],
  },
}

const crumbs = [{ label: 'Residential', href: '/residential' }]

export default function ResidentialHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Residential', description: residentialHub.intro, url: '/residential' }),
        ]}
      />

      <PageHero
        eyebrow={residentialHub.eyebrow}
        title={residentialHub.title}
        intro={residentialHub.intro}
        image={residentialHub.image}
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">Residential services</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {residentialPages.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/residential/${p.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div>
                  <h3 className="text-xl font-bold">{p.h1}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.summary}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedProjects category="Residential" />
      <HowWeProtectYou />
      <CredentialsStrip className="py-10" />
      <CtaBand image={residentialHub.image} />
    </>
  )
}
