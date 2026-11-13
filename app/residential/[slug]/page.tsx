import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { CredentialsStrip } from '@/components/credentials-strip'
import { HowWeProtectYou } from '@/components/how-we-protect-you'
import { ProjectShowcase } from '@/components/project-showcase'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { residentialPages, getResidentialPage } from '@/content/residential'

export const dynamicParams = false

export function generateStaticParams() {
  return residentialPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getResidentialPage(slug)
  if (!page) return {}
  const path = `/residential/${page.slug}`
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: path, images: [page.image] },
  }
}

export default async function ResidentialSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getResidentialPage(slug)
  if (!page) notFound()

  const crumbs = [
    { label: 'Residential', href: '/residential' },
    { label: page.h1, href: `/residential/${page.slug}` },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: page.h1, description: page.intro, url: `/residential/${page.slug}` }),
          ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
        ]}
      />

      <PageHero eyebrow={page.eyebrow} title={page.h1} intro={page.intro} image={page.image} crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">What&rsquo;s included</h2>
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {page.included.map((inc) => (
            <li key={inc} className="flex items-start gap-3 border-b border-border py-4">
              <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-lg">{inc}</span>
            </li>
          ))}
        </ul>
      </section>

      <ProjectShowcase slugs={page.projectSlugs} />
      <HowWeProtectYou />
      <CredentialsStrip className="py-10" />
      <FaqList faqs={page.faqs} />
      <CtaBand image={page.image} />
    </>
  )
}
