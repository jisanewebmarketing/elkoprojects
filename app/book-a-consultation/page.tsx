import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EnquiryForm } from '@/components/enquiry-form'
import { CostEstimator } from '@/components/cost-estimator'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book an on-site consultation with the Elko Projects directors.',
}

const next = [
  { title: 'Call', body: 'A director calls within one business day to understand your project.' },
  { title: 'Site visit', body: 'Elias or Marko meets you on site to review scope, budget and timeline.' },
  { title: 'Quote', body: 'A commercially clear, documented proposal. Not a ballpark on a handshake.' },
]

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Meet the directors on site."
        intro="Tell us a little about your project and when suits you. We qualify every project before quoting, so you get an honest answer on fit, budget and programme."
        crumbs={[{ label: 'Book a Consultation', href: '/book-a-consultation' }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <EnquiryForm
            submitLabel="Book now"
            successTitle="Your consultation request is in."
            fields={[
              { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
              { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
              { name: 'date', label: 'Preferred day', type: 'date', required: true },
              { name: 'time', label: 'Preferred time', type: 'select', options: ['Morning', 'Midday', 'Afternoon'] },
              {
                name: 'type',
                label: 'Project type',
                type: 'select',
                required: true,
                options: ['Complete renovation', 'New home build', 'Granny flat', 'Commercial fit out', 'Retirement living', 'Remedial', 'Building inspection'],
              },
              {
                name: 'budget',
                label: 'Budget range',
                type: 'select',
                options: ['Under $100k', '$100k to $300k', '$300k to $750k', '$750k to $1.5M', '$1.5M+'],
              },
              { name: 'details', label: 'Project details', type: 'textarea' },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-5">
          <CostEstimator />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest">What happens next</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {next.map((n, i) => (
                <li key={n.title} className="flex gap-4 border-b border-border pb-3">
                  <span className="font-display text-2xl font-extrabold text-primary">{i + 1}</span>
                  <div>
                    <p className="font-bold">{n.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{n.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
