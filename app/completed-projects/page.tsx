import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProjectGallery } from '@/components/project-gallery'
import { CtaBand } from '@/components/cta-band'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Completed Projects',
  description: 'Renovations, new homes, commercial fit outs, remedial and retirement living projects delivered by Elko across Sydney.',
}

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Completed Projects"
        title="Proof of work."
        intro="A selection of homes, workplaces and communities delivered across Greater Sydney, each one overseen by both directors from first meeting to final handover."
        crumbs={[{ label: 'Completed Projects', href: '/completed-projects' }]}
      />
      <ProjectGallery projects={projects} />
      <CtaBand />
    </>
  )
}
