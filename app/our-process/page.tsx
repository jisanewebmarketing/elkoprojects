import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How Elko Projects delivers: consultation, design, construct and handover — director-led, with weekly reporting, documented variations and defect walks.',
}

// Process stages (source: docs/ELKO_BUILD_SPEC.md Phase 8 / capability statement).
const stages = [
  {
    title: 'Consultation',
    body: 'We determine scope, requirements and expectations, and qualify the project before committing to it.',
  },
  {
    title: 'Design',
    body: 'We work with architects, structural engineers and consultants towards a design that is achievable within budget, identifying design errors and buildability issues early.',
  },
  {
    title: 'Construct',
    body: 'Meticulous site and project management, with weekly client reporting, documented and approved variations, and early procurement of long-lead items.',
  },
  {
    title: 'Handover',
    body: 'Defect walks with a director, complete handover documentation and a focus on client satisfaction.',
  },
]

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we deliver"
        title="Our Process"
        intro="A stage-gate process that protects your budget and programme, run by the directors from first meeting to final handover."
        image="/images/on-site-directors.jpg"
        crumbs={[{ label: 'Our Process', href: '/our-process' }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <ol className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-4 bg-card p-6">
              <span className="font-display text-5xl font-extrabold text-primary">{i + 1}</span>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <CredentialsStrip className="py-8" />
      <CtaBand image="/images/on-site-directors.jpg" />
    </>
  )
}
