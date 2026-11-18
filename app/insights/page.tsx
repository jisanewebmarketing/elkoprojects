import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { InsightsBrowser } from '@/components/insights-browser'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { insightsCategories } from '@/content/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Practical answers on renovating, building and remediation in Sydney — residential, commercial, remedial and strata, new builds and inspections.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | Elko Projects',
    description: 'Practical answers on renovating, building and remediation across Sydney.',
    url: '/insights',
    images: ['/images/dural.jpg'],
  },
}

const crumbs = [{ label: 'Insights', href: '/insights' }]

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), ...insightsCategories.map((c) => faqSchema(c.faqs))]} />

      <PageHero
        eyebrow="Guides & FAQs"
        title="Insights"
        intro="Practical answers on renovating, building and remediation across Sydney — grouped by the kind of project you have."
        image="/images/dural.jpg"
        crumbs={crumbs}
      />
      <InsightsBrowser categories={insightsCategories} />
      <CtaBand image="/images/dural.jpg" />
    </>
  )
}
