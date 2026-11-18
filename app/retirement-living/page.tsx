import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { ProjectShowcase } from '@/components/project-showcase'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { retirementLiving } from '@/content/retirement-living'

export const metadata: Metadata = {
  title: 'Retirement Living Renovations & Refurbishments Sydney',
  description: retirementLiving.intro,
  alternates: { canonical: '/retirement-living' },
  openGraph: {
    title: 'Retirement Living Renovations & Refurbishments Sydney | Elko Projects',
    description: retirementLiving.intro,
    url: '/retirement-living',
    images: [retirementLiving.image],
  },
}

const crumbs = [{ label: 'Retirement Living', href: '/retirement-living' }]

export default function RetirementLivingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Retirement Living', description: retirementLiving.intro, url: '/retirement-living' }),
          faqSchema(retirementLiving.faqs),
        ]}
      />

      <PageHero
        eyebrow={retirementLiving.eyebrow}
        title={retirementLiving.title}
        intro={retirementLiving.intro}
        image={retirementLiving.image}
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">What we do</h2>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {retirementLiving.workTypes.map((w) => (
            <li key={w.title} className="flex flex-col gap-2 bg-card p-6">
              <h3 className="text-lg font-bold">{w.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="grid gap-8 rounded-md bg-secondary/50 p-8 md:grid-cols-12 md:p-10">
          <h2 className="text-2xl font-extrabold md:col-span-4 md:text-3xl">Backed by aged-care and retirement-living experience</h2>
          <p className="leading-relaxed text-muted-foreground md:col-span-8">{retirementLiving.background}</p>
        </div>
      </section>

      <ProjectShowcase slugs={['monsignor-john-peoples-units']} heading="Current project" />

      <CredentialsStrip className="py-10" />
      <FaqList faqs={retirementLiving.faqs} />
      <CtaBand image={retirementLiving.image} />
    </>
  )
}
