import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProjectShowcase } from '@/components/project-showcase'
import { ProgrammeCertainty } from '@/components/programme-certainty'
import { CredentialsStrip } from '@/components/credentials-strip'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { contact } from '@/content/company'
import { getFaqs } from '@/content/faqs'

const faqs = getFaqs('display-units')

const intro =
  'Display suite fit outs for unit and house developments. We build the display your sales campaign depends on — a finish that sells the development and a programme that hits your launch date.'

const included = [
  'Display suite fit outs for apartments and houses',
  'Premium finishes that present the development at its best',
  'Builder-grade construction, not a temporary mock-up',
  'Fast-track programmes aligned to your sales launch',
  'One accountable team, director-led from first meeting to handover',
]

export const metadata: Metadata = {
  title: 'Display Units & Display Suite Fit Outs Sydney',
  description:
    'Display suite fit outs for unit and house developments across Sydney, delivered for developers by a director-led builder. Includes The Osborne, Lane Cove.',
  alternates: { canonical: '/display-units' },
  openGraph: {
    title: 'Display Units & Display Suite Fit Outs Sydney | Elko Projects',
    description:
      'Display suite fit outs for unit and house developments across Sydney, delivered for developers by a director-led builder.',
    url: '/display-units',
    images: ['/images/osborne-lane-cove.jpg'],
  },
}

const crumbs = [{ label: 'Display Units', href: '/display-units' }]

export default function DisplayUnitsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Display Units', description: intro, url: '/display-units' }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Display suite fit outs for developers"
        title="Display Units"
        intro={intro}
        image="/images/osborne-lane-cove.jpg"
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">What we deliver</h2>
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {included.map((inc) => (
            <li key={inc} className="flex items-start gap-3 border-b border-border py-4">
              <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-lg">{inc}</span>
            </li>
          ))}
        </ul>
      </section>

      <ProjectShowcase slugs={['the-osborne-lane-cove']} />
      <ProgrammeCertainty />
      <FaqList faqs={faqs} />

      {/* Developer-focused CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-md bg-ink px-6 py-16 text-ink-foreground md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">For developers</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] md:text-5xl">
              Planning a development? Let&rsquo;s talk about your display suite.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-foreground/85">
              Tell us about your project and your sales timeline. We&rsquo;ll scope a display suite that presents the
              development at its best and is ready when your campaign launches.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90"
            >
              Enquire about your development <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink-foreground/50 px-6 py-3.5 font-semibold hover:bg-ink-foreground hover:text-ink"
            >
              {contact.email}
            </a>
            <a href={contact.phones[1].href} className="inline-flex items-center gap-2 text-sm font-medium text-ink-foreground/85 hover:underline">
              <Phone className="size-4" aria-hidden />
              {`${contact.phones[1].name} · ${contact.phones[1].display}`}
            </a>
          </div>
        </div>
      </section>

      <CredentialsStrip className="pb-16" />
    </>
  )
}
