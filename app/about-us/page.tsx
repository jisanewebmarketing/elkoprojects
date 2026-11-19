import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { DirectorsSection } from '@/components/directors-section'
import { OnSiteStrip } from '@/components/on-site-strip'
import { HowWeProtectYou } from '@/components/how-we-protect-you'
import { CompliancePanel } from '@/components/compliance-panel'
import { CredentialsStrip } from '@/components/credentials-strip'
import { ServiceAreas } from '@/components/home/service-areas'
import { ReviewsSection } from '@/components/reviews-section'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { mission, values } from '@/content/company'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Elko Projects is a privately owned, director-led construction company in Greater Sydney. Meet the directors and how they protect every client.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'About us | Elko Projects',
    description: 'Director-led construction across Greater Sydney — two directors, one standard.',
    url: '/about-us',
    images: ['/images/about-hero.jpg'],
  },
}

const crumbs = [{ label: 'About us', href: '/about-us' }]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="About Elko Projects"
        title="A builder run by the people on your site."
        intro="Elko is a privately owned, director-led construction company built on a simple rule: the directors you meet are the directors who build your project."
        image="/images/about-hero.jpg"
        crumbs={crumbs}
      />

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary md:col-span-3">Our mission</p>
          <p className="text-balance text-2xl font-extrabold leading-snug md:col-span-9 md:text-3xl">{mission}</p>
        </div>
      </section>

      <DirectorsSection />

      <OnSiteStrip />

      {/* Values */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What we value" title="Accountability. Integrity. Relationships." />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="flex flex-col gap-2 rounded-md border border-border bg-card p-6">
                <h3 className="text-xl font-extrabold">{v.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowWeProtectYou />

      <CredentialsStrip className="py-16" />
      <CompliancePanel />

      <ServiceAreas />
      <ReviewsSection />
      <CtaBand />
    </>
  )
}
