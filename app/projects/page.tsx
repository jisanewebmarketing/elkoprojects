import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProjectGallery } from '@/components/project-gallery'
import { ProjectReels } from '@/components/project-reels'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { projects } from '@/content/projects'
import { reels } from '@/content/reels'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Renovations, new homes, commercial fit outs, remedial and retirement living projects delivered by Elko across Greater Sydney, each overseen by both directors.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Elko Projects',
    description: 'A selection of homes, workplaces and buildings delivered across Greater Sydney.',
    url: '/projects',
  },
}

const crumbs = [{ label: 'Projects', href: '/projects' }]

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Our work"
        title="Projects"
        intro="A selection of homes, workplaces and communities delivered across Greater Sydney, each one overseen by both directors from first meeting to final handover."
        crumbs={crumbs}
      />
      <ProjectGallery projects={projects} />
      <ProjectReels
        reels={reels}
        eyebrow="On site"
        title="On site, in motion"
        intro="Short walk-throughs from recent projects."
        className="bg-secondary py-20"
      />
      <CtaBand />
    </>
  )
}
