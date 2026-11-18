// Phase 12 — Drawings showcase (confidential). This route is live ONLY once the
// client has supplied signed-off, redacted, flattened images in
// content/drawings.ts. While that list is empty it returns 404 (and the page is
// kept out of the sitemap), so there is never an empty public page.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { DrawingsGallery } from '@/components/drawings-gallery'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { approvedDrawings } from '@/content/drawings'

export const metadata: Metadata = {
  title: 'Design & documentation',
  description:
    'A selection of design and construction documentation from Elko Projects — detailing the drawings and detailing behind our residential, commercial and remedial work.',
  alternates: { canonical: '/projects/design-and-documentation' },
}

const crumbs = [
  { label: 'Projects', href: '/projects' },
  { label: 'Design & documentation', href: '/projects/design-and-documentation' },
]

export default function DesignAndDocumentationPage() {
  if (approvedDrawings.length === 0) notFound()

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Design & documentation"
        title="The detail behind the build."
        intro="A selection of design and construction documentation, showing the drawings and detailing that sit behind our projects."
        crumbs={crumbs}
      />
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <DrawingsGallery drawings={approvedDrawings} />
      </section>
      <CtaBand />
    </>
  )
}
