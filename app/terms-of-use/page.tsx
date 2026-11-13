import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ComingSoon } from '@/components/coming-soon'
import { contact } from '@/content/company'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern the use of the Elko Projects website.',
}

// Placeholder — the Terms of Use are drafted in Phase 15 and must have legal
// review before go-live.
export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        intro="The terms that govern your use of this website."
        crumbs={[{ label: 'Terms of Use', href: '/terms-of-use' }]}
      />
      <ComingSoon
        body={`Our Terms of Use are being finalised and will be published here after legal review. For any question in the meantime, contact us at ${contact.email}.`}
      />
    </>
  )
}
