import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { EnquiryForm } from '@/components/enquiry-form'
import { contact, serviceAreas } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact Elko Projects. Speak directly with directors Elias Nader and Marko Bratkovic.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk directly to a director."
        intro="No call centre, no sales team. Your enquiry goes straight to Elias and Marko."
        crumbs={[{ label: 'Contact us', href: '/contact-us' }]}
      />

      {/* Enquiry + director contact */}
      <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 pb-20 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Tell us about your project</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
              The more you share — scope, timeline, site address — the more useful our first call will be.
              Elias or Marko will reply within one business day.
            </p>
          </div>
          <EnquiryForm
            submitLabel="Send enquiry"
            fields={[
              { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
              { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
              { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
              {
                name: 'service',
                label: 'Project type',
                type: 'select',
                options: ['Residential', 'Commercial', 'Retirement Living', 'Remedial', 'Building Inspection'],
              },
              { name: 'details', label: 'Project details', type: 'textarea', required: true },
            ]}
          />
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-5">
          <figure className="relative aspect-[5/4] overflow-hidden rounded-md">
            <Image
              src="/images/contact-directors.jpg"
              alt="Elko directors Elias Nader and Marko Bratkovic"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-bottom"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-sm bg-background/95 px-3 py-1.5 text-sm font-semibold">
              Elias &amp; Marko, Directors
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</h2>
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className="font-display text-xl font-bold leading-tight hover:text-primary">
                  {p.display}
                  <span className="block text-sm font-medium text-muted-foreground">{p.name}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</h2>
              <a href={`mailto:${contact.email}`} className="font-display text-base font-bold leading-tight break-words hover:text-primary">
                {contact.email}
              </a>
              <p className="mt-auto text-sm text-muted-foreground">{contact.hours}</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Where we build — map + service areas, full width */}
      <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="h-full overflow-hidden rounded-md border border-border">
              <iframe
                title="Map of Greater Sydney service area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=150.85%2C-34.10%2C151.35%2C-33.65&layer=mapnik"
                className="aspect-[16/10] w-full lg:h-full lg:min-h-[420px] lg:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Service areas</p>
              <p className="mt-3 text-balance text-2xl font-extrabold leading-snug md:text-3xl">
                Director-led construction right across Greater Sydney.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <li key={a} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Follow Elko</h2>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                <li><a href={contact.instagram} className="hover:text-primary">Instagram</a></li>
                <li><a href={contact.facebook} className="hover:text-primary">Facebook</a></li>
                <li><a href={contact.linkedin} className="hover:text-primary">LinkedIn</a></li>
                <li><a href={contact.tiktok} className="hover:text-primary">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
