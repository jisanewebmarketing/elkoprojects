import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Wrench } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { CredentialsStrip } from '@/components/credentials-strip'
import { InspectionQuote } from '@/components/inspection-quote'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'
import { buildingInspections as bi } from '@/content/building-inspections'
import { getFaqs } from '@/content/faqs'

const faqs = getFaqs('building-inspections')

export const metadata: Metadata = {
  title: 'Building Inspections Sydney',
  description:
    'Builder-led building inspections across Sydney: pre and post construction, lease and purchase. Priority-ranked reports in 48–72 hours, from $600 + GST.',
  alternates: { canonical: '/building-inspections' },
  openGraph: {
    title: 'Building Inspections Sydney | Elko Building Inspections',
    description:
      'Builder-led building inspections across Sydney, with priority-ranked reports in 48–72 hours and the team that can fix what it finds.',
    url: '/building-inspections',
    images: [bi.image],
  },
}

const crumbs = [{ label: 'Building Inspections', href: '/building-inspections' }]

export default function BuildingInspectionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: 'Building Inspections', description: bi.intro, url: '/building-inspections' }),
          faqSchema(faqs),
        ]}
      />

      <PageHero eyebrow={bi.eyebrow} title={bi.title} intro={bi.intro} image={bi.image} crumbs={crumbs} />

      {/* Inspection types */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">Inspection types</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bi.types.map((t) => (
            <li key={t.title} className="flex flex-col gap-2 rounded-md border border-border bg-card p-6">
              <h3 className="text-lg font-bold">{t.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          We also provide {bi.alsoAvailable.join(', ').replace(/,([^,]*)$/, ' and$1')}.
        </p>
      </section>

      {/* How it works — 4-step process */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How it works</p>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.05] md:text-4xl">Four steps, report in {bi.reportTurnaround}.</h2>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-md bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {bi.process.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3 bg-ink p-6">
                <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="leading-relaxed text-ink-foreground/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Report turnaround + fix what we find */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-8">
            <span className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Clock className="size-5" aria-hidden />
            </span>
            <h3 className="text-xl font-bold">Reports in {bi.reportTurnaround}</h3>
            <p className="leading-relaxed text-muted-foreground">
              Most reports are delivered within {bi.reportTurnaround} of the inspection — every defect photographed, ranked by
              priority and explained in practical terms, so you can act on a purchase, lease or construction contract quickly.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-8">
            <span className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Wrench className="size-5" aria-hidden />
            </span>
            <h3 className="text-xl font-bold">{bi.fixWhatWeFind.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{bi.fixWhatWeFind.body}</p>
            <Link href={bi.fixWhatWeFind.href} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Compliance inspections &amp; rectifications <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <InspectionQuote />

      <CredentialsStrip className="py-8" />
      <FaqList faqs={faqs} />
      <CtaBand image={bi.image} />
    </>
  )
}
