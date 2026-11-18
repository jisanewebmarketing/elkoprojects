import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ConsultationForm, type ServiceCategory } from '@/components/consultation-form'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { residentialPages } from '@/content/residential'
import { commercialPages } from '@/content/commercial'
import { remedialPages } from '@/content/remedial'

export const metadata: Metadata = {
  title: 'Book a free site visit & quote',
  description:
    'Tell us about your project and a director will arrange a free on-site visit and a clear, documented quote — residential, commercial, remedial and inspections.',
  alternates: { canonical: '/book-a-consultation' },
  openGraph: {
    title: 'Book a free site visit & quote | Elko Projects',
    description: 'Meet the directors on site. A free site visit and an honest, documented quote.',
    url: '/book-a-consultation',
  },
}

// Built on the server from the typed content layer, then passed to the client
// form as plain data (labels only — no functions or rates).
const categories: ServiceCategory[] = [
  { label: 'Residential renovations & builds', subs: residentialPages.map((p) => p.h1) },
  { label: 'Commercial fit-out & refurbishment', subs: commercialPages.map((p) => p.h1) },
  { label: 'Remedial & strata', subs: remedialPages.map((p) => p.h1) },
  { label: 'Display units', subs: [] },
  { label: 'Retirement living', subs: [] },
  { label: 'Building inspections', subs: [] },
]

const next = [
  { title: 'We call you', body: 'A director calls within one business day to understand your project and check it’s a fit.' },
  { title: 'Free site visit', body: 'Elias or Marko meets you on site to review scope, access, budget and timeline — at no cost.' },
  { title: 'A documented quote', body: 'A commercially clear, itemised proposal. Not a ballpark on a handshake.' },
]

const crumbs = [{ label: 'Book a Consultation', href: '/book-a-consultation' }]

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Free site visit & quote"
        title="Meet the directors on site."
        intro="Tell us a little about your project and we’ll arrange a free site visit. We qualify every project before quoting, so you get an honest answer on fit, budget and programme — and a documented quote, not a guess."
        crumbs={crumbs}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <ConsultationForm categories={categories} />
        </div>
        <aside className="flex flex-col gap-8 lg:col-span-5">
          <div className="rounded-md border border-border bg-secondary p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest">What happens next</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {next.map((n, i) => (
                <li key={n.title} className="flex gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="font-display text-2xl font-extrabold text-primary">{i + 1}</span>
                  <div>
                    <p className="font-bold">{n.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{n.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-md border border-border p-6">
            <p className="text-sm font-bold uppercase tracking-widest">Prefer to talk?</p>
            <p className="mt-3 leading-relaxed">
              Call us on{' '}
              <a href="tel:0423334792" className="font-semibold text-primary underline-offset-4 hover:underline">
                0423 334 792
              </a>{' '}
              or email{' '}
              <a href="mailto:admin@elkoprojects.com.au" className="font-semibold text-primary underline-offset-4 hover:underline">
                admin@elkoprojects.com.au
              </a>
              .
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
