import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { DirectorsSection } from '@/components/directors-section'
import { ProcessSteps } from '@/components/process-steps'
import { ReviewsSection } from '@/components/reviews-section'
import { CtaBand } from '@/components/cta-band'
import { credentials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About us',
  description: 'Meet Elias Nader and Marko Bratkovic, the directors behind every Elko Projects build.',
}

const record = ['Zero NCAT cases', 'Zero EPA breaches', 'No stop work orders', 'No injury-related delays', 'No court cases', 'No cross-project funding']

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Elko Projects"
        title="A $5M+ a year builder, run by the people on your site."
        intro="Elko is a privately owned construction company built on a 20-year friendship and a simple rule: the directors you meet are the directors who build your project."
        image="/images/on-site-directors.jpg"
        crumbs={[{ label: 'About us', href: '/about-us' }]}
      />
      <DirectorsSection />

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Licences & insurances</p>
            <h2 className="mt-4 text-4xl font-extrabold">Fully qualified. Fully licensed.</h2>
            <dl className="mt-8 flex flex-col">
              {credentials.map((c) => (
                <div key={c.label} className="flex justify-between gap-4 border-b border-border py-4">
                  <dt className="text-muted-foreground">{c.label}</dt>
                  <dd className="font-display font-bold">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Compliance & safety record</p>
            <h2 className="mt-4 text-4xl font-extrabold">A clean record, on every job.</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {record.map((r) => (
                <li key={r} className="rounded-md border border-border bg-card p-5 font-display text-lg font-bold">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <ReviewsSection />
      <CtaBand />
    </>
  )
}
