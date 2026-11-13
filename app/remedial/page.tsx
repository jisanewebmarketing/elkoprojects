import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CredentialsStrip } from '@/components/credentials-strip'
import { RelatedProjects } from '@/components/related-projects'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo'
import { remedialHub, remedialPages } from '@/content/remedial'

export const metadata: Metadata = {
  title: 'Remedial & Strata Builder Sydney',
  description: remedialHub.intro,
  alternates: { canonical: '/remedial' },
  openGraph: {
    title: 'Remedial & Strata Builder Sydney | Elko Projects',
    description: remedialHub.intro,
    url: '/remedial',
    images: [remedialHub.image],
  },
}

const crumbs = [{ label: 'Remedial & Strata', href: '/remedial' }]

export default function RemedialHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Remedial & Strata', description: remedialHub.intro, url: '/remedial' }),
        ]}
      />

      <PageHero
        eyebrow={remedialHub.eyebrow}
        title={remedialHub.title}
        intro={remedialHub.intro}
        image={remedialHub.image}
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">Remedial &amp; strata services</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remedialPages.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/remedial/${p.slug}`}
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

      <RelatedProjects category="Remedial" />
      <CredentialsStrip className="py-8" />
      <CtaBand image={remedialHub.image} />
    </>
  )
}
