import type { Metadata } from 'next'
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
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
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
        <aside className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-widest">Phone</h2>
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="font-display text-2xl font-bold hover:text-primary">
                {p.display} <span className="text-base font-medium text-muted-foreground">{p.name}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-widest">Email</h2>
            <a href={`mailto:${contact.email}`} className="font-display text-xl font-bold hover:text-primary">
              {contact.email}
            </a>
            <p className="text-muted-foreground">{contact.hours}</p>
          </div>
          <div className="overflow-hidden rounded-md border border-border">
            <iframe
              title="Map of Greater Sydney service area"
              src="https://www.openstreetmap.org/export/embed.html?bbox=150.85%2C-34.10%2C151.35%2C-33.65&layer=mapnik"
              className="aspect-[4/3] w-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-widest">Service areas</h2>
            <ul className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <li key={a} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{a}</li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-wrap gap-4 font-semibold">
            <li><a href={contact.instagram} className="hover:text-primary">Instagram</a></li>
            <li><a href={contact.facebook} className="hover:text-primary">Facebook</a></li>
            <li><a href={contact.linkedin} className="hover:text-primary">LinkedIn</a></li>
            <li><a href={contact.tiktok} className="hover:text-primary">TikTok</a></li>
          </ul>
        </aside>
      </section>
    </>
  )
}
