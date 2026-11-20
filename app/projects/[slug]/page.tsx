import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { absoluteUrl, SITE_URL } from '@/lib/seo'
import { projects, getProject } from '@/content/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  const path = `/projects/${p.slug}`
  const description = `${p.title}, ${p.location} — ${p.scope}. ${p.type} project delivered by Elko Projects.`
  return {
    title: `${p.title}, ${p.location}`,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${p.title}, ${p.location} | Elko Projects`, description, url: path, images: p.image ? [p.image] : undefined },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  const crumbs = [
    { label: 'Projects', href: '/projects' },
    { label: `${p.title}, ${p.location}`, href: `/projects/${p.slug}` },
  ]
  const overview = p.caseStudy
  const related = projects.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3)
  const gallery = [p.image, ...(p.gallery ?? [])].filter((src) => src && src !== '/placeholder.svg')

  const facts: { label: string; value: string }[] = [
    { label: 'Location', value: `${p.location}, ${p.region}` },
    { label: 'Category', value: p.type },
    ...(p.year ? [{ label: 'Year', value: p.year }] : []),
    ...(p.status ? [{ label: 'Status', value: p.status }] : []),
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${p.title}, ${p.location}`,
    url: absoluteUrl(`/projects/${p.slug}`),
    ...(overview ? { description: overview } : {}),
    image: p.image ? `${SITE_URL}${p.image}` : undefined,
    creator: { '@type': 'GeneralContractor', name: 'Elko Projects Pty Ltd', url: SITE_URL },
  }

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), jsonLd]} />

      <PageHero
        eyebrow={p.type}
        title={p.title}
        intro={`${p.location}, ${p.region} — ${p.scope}.`}
        image={p.image}
        crumbs={crumbs}
      />

      {/* Project facts */}
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <div className="rounded-md border border-border bg-card p-6 sm:p-8">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          {p.tags && p.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Scope of works per photo (client-written) */}
      {p.scopePhotos && p.scopePhotos.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">Scope of works</h2>
          <div className="mt-10 flex flex-col gap-12">
            {p.scopePhotos.map((sp, i) => (
              <div key={i} className="grid items-center gap-8 lg:grid-cols-2">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-md ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Image src={sp.image || '/placeholder.svg'} alt={sp.caption} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{sp.caption}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{sp.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra gallery images */}
      {gallery.length > 1 && (
        <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(1).map((src) => (
              <li key={src} className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image src={src} alt={`${p.title}, ${p.location}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Quote */}
      {p.quote && (
        <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
          <blockquote className="rounded-md bg-secondary/50 p-8 text-center md:p-12">
            <p className="text-pretty font-display text-2xl font-bold leading-snug md:text-3xl">&ldquo;{p.quote.text}&rdquo;</p>
            <footer className="mt-4 text-sm text-muted-foreground">{p.quote.by}</footer>
          </blockquote>
        </section>
      )}

      <CredentialsStrip className="py-10" />

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-extrabold md:text-4xl">More {p.category.toLowerCase()} projects</h2>
              <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                All projects <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/projects/${r.slug}`} className="group flex flex-col gap-3">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                      <Image src={r.image || '/placeholder.svg'} alt={`${r.title}, ${r.location}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-lg font-bold">{r.title}, {r.location}</p>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand image={p.image} />
    </>
  )
}
