import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ComingSoon } from '@/components/coming-soon'
import { contact } from '@/content/company'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Elko Projects collects, uses and protects personal information.',
}

// Placeholder — the Privacy Policy is drafted against the Australian Privacy
// Principles in Phase 15 and must have legal review before go-live.
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we collect, use, store and disclose personal information."
        crumbs={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
      />
      <ComingSoon
        body={`Our Privacy Policy is being finalised against the Australian Privacy Principles and will be published here after legal review. For any privacy question in the meantime, contact us at ${contact.email}.`}
      />
    </>
  )
}
