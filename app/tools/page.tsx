import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ComingSoon } from '@/components/coming-soon'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Free calculators and checkers for owners, strata committees and developers — a strata levy share calculator, a NSW home warranty checker and an inspection type finder.',
}

// Placeholder — the Tools menu (strata levy share calculator, home warranty
// period checker, inspection type finder) is built in Phase 14.
export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title="Tools"
        intro="Simple, free calculators and checkers for owners, strata committees and developers."
        image="/images/building-inspection.jpg"
        crumbs={[{ label: 'Tools', href: '/tools' }]}
      />
      <ComingSoon body="A strata levy share calculator, a NSW home warranty period checker and an inspection type finder are coming soon. For anything you need now, the directors are a phone call away." />
      <CtaBand image="/images/building-inspection.jpg" />
    </>
  )
}
