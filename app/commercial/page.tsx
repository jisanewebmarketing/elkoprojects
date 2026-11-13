import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProgrammeCertainty } from '@/components/programme-certainty'
import { CredentialsStrip } from '@/components/credentials-strip'
import { RelatedProjects } from '@/components/related-projects'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo'
import { commercialHub, commercialPages } from '@/content/commercial'

export const metadata: Metadata = {
  title: 'Commercial Fit Out & Construction Sydney',
  description: commercialHub.intro,
  alternates: { canonical: '/commercial' },
  openGraph: {
    title: 'Commercial Fit Out & Construction Sydney | Elko Projects',
    description: commercialHub.intro,
    url: '/commercial',
    images: [commercialHub.image],
  },
}

const crumbs = [{ label: 'Commercial', href: '/commercial' }]

export default function CommercialHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Commercial', description: commercialHub.intro, url: '/commercial' }),
        ]}
      />

      <PageHero
        eyebrow={commercialHub.eyebrow}
        title={commercialHub.title}
        intro={commercialHub.intro}
        image={commercialHub.image}
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">Commercial services</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commercialPages.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/commercial/${p.slug}`}
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

      <RelatedProjects category="Commercial" />
      <ProgrammeCertainty />
      <CredentialsStrip className="py-10" />
      <CtaBand image={commercialHub.image} />
    </>
  )
}
