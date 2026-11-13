import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { remedialPages, getRemedialPage } from '@/content/remedial'
import { getProject } from '@/content/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return remedialPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getRemedialPage(slug)
  if (!page) return {}
  const path = `/remedial/${page.slug}`
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: path, images: [page.image] },
  }
}

export default async function RemedialSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getRemedialPage(slug)
  if (!page) notFound()

  const crumbs = [
    { label: 'Remedial & Strata', href: '/remedial' },
    { label: page.h1, href: `/remedial/${page.slug}` },
  ]
  const projects = page.projectSlugs.map(getProject).filter((p) => p !== undefined)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: page.h1, description: page.intro, url: `/remedial/${page.slug}` }),
          ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
        ]}
      />

      <PageHero eyebrow={page.eyebrow} title={page.h1} intro={page.intro} image={page.image} crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold md:text-4xl">What&rsquo;s included</h2>
            <ul className="mt-8 flex flex-col">
              {page.included.map((inc) => (
                <li key={inc} className="flex items-start gap-3 border-b border-border py-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-lg">{inc}</span>
                </li>
              ))}
            </ul>
            {page.relatedLink && (
              <Link
                href={page.relatedLink.href}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                {page.relatedLink.label} <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-md border border-border bg-secondary/40 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest">Why Elko</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  Class 2 registered — General (Unrestricted)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  We investigate the cause before we quote
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  Both directors on every project
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  Documentation your committee or insurer will accept
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-3xl font-extrabold md:text-4xl">Recent {projects.length > 1 ? 'projects' : 'project'}</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {projects.map((p) => (
                <article key={p!.slug} className="flex flex-col overflow-hidden rounded-md border border-border bg-card">
                  <div className="relative aspect-[16/10]">
                    <Image src={p!.image || '/placeholder.svg'} alt={`${p!.title}, ${p!.location}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    {p!.status && (
                      <span className="absolute left-3 top-3 rounded-sm bg-background px-2 py-1 text-xs font-semibold">{p!.status}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{p!.type} · {p!.region}</p>
                      <h3 className="font-display text-xl font-bold">{p!.title}, {p!.location}</h3>
                    </div>
                    {p!.caseStudy && <p className="leading-relaxed text-muted-foreground">{p!.caseStudy}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CredentialsStrip className="py-10" />
      <FaqList faqs={page.faqs} />
      <CtaBand image={page.image} />
    </>
  )
}
