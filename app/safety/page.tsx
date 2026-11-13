import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CompliancePanel } from '@/components/compliance-panel'
import { CtaBand } from '@/components/cta-band'
import { licensing } from '@/content/company'

export const metadata: Metadata = {
  title: 'Safety',
  description:
    'Site-specific WHS management plans and SWMS on every Elko Projects job, backed by full licensing, insurance and a clean compliance record.',
}

// Phase 9 preview. Downloadable policy documents are a TODO(client) slot — do not
// upload until the client confirms which documents can be public.
export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety first"
        title="Safety, managed proactively."
        intro="Every Elko project runs on a site-specific WHS management plan and Safe Work Method Statements, kept current as the works progress."
        image="/images/on-site-directors.jpg"
        crumbs={[{ label: 'Safety', href: '/safety' }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">WHS on every site</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{licensing.safety}.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Marko leads site operations and manages safety proactively, so hazards are controlled before work starts, not
              after something goes wrong.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Policy documents</h2>
            {/* TODO(client): link approved WHS / safety policy documents for public download (Phase 9). */}
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Our safety and WHS policy documents are available on request. Downloadable copies will be published here once
              finalised for public release.
            </p>
          </div>
        </div>
      </section>

      <CredentialsStrip className="py-8" />
      <CompliancePanel />
      <CtaBand image="/images/on-site-directors.jpg" />
    </>
  )
}
