import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ComingSoon } from '@/components/coming-soon'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Display Units',
  description:
    'Display suite fit outs for unit and house developments across Sydney, delivered for developers by a director-led builder.',
}

// Placeholder — the full Display Units page is built in Phase 5.
export default function DisplayUnitsPage() {
  return (
    <>
      <PageHero
        eyebrow="For developers"
        title="Display Units"
        intro="Display suite fit outs for unit and house developments, delivered to the finish your sales campaign depends on."
        image="/images/osborne-lane-cove.jpg"
        crumbs={[{ label: 'Display Units', href: '/display-units' }]}
      />
      <ComingSoon body="We build developer display suites for apartments and homes, including The Osborne in Lane Cove (engaged by Scion for Winim). The full Display Units page is on its way — in the meantime, talk to the directors about your development." />
      <CredentialsStrip className="py-8" />
      <CtaBand image="/images/osborne-lane-cove.jpg" />
    </>
  )
}
