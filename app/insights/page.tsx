import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ComingSoon } from '@/components/coming-soon'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Practical guides and FAQs on renovating, building and remediation in Sydney, from a director-led construction company.',
}

// Placeholder — the Insights hub (category filter + seeded FAQs) is built in Phase 10.
export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & FAQs"
        title="Insights"
        intro="Practical answers on renovating, building and remediation across Sydney."
        image="/images/dural.jpg"
        crumbs={[{ label: 'Insights', href: '/insights' }]}
      />
      <ComingSoon body="We're putting together clear, practical guides and FAQs on residential, commercial, remedial and strata work, new builds and inspections. Check back soon." />
      <CtaBand image="/images/dural.jpg" />
    </>
  )
}
