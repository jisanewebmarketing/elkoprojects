import Image from 'next/image'
import { EnquiryForm } from '@/components/enquiry-form'
import { contact } from '@/lib/site-data'

const igTiles = ['/images/building-inspection.jpg', '/images/dural.jpg', '/images/st-ives.jpg']

export function InspectionQuote() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
      <div className="lg:col-span-7">
        <h2 className="text-3xl font-extrabold md:text-4xl">Request an inspection quote</h2>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          Tell us the address and the type of inspection. A licensed builder will confirm price and availability.
        </p>
        <div className="mt-8">
          <EnquiryForm
            submitLabel="Request a quote"
            fields={[
              { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
              { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
              { name: 'address', label: 'Property address', required: true, autoComplete: 'street-address' },
              {
                name: 'type',
                label: 'Inspection type',
                type: 'select',
                required: true,
                options: ['Pre and post construction', 'Pre and post lease', 'Pre and post purchase'],
              },
            ]}
          />
        </div>
      </div>
      <aside className="flex flex-col gap-4 lg:col-span-5">
        <h2 className="text-sm font-bold uppercase tracking-widest">Elko Building Inspections on Instagram</h2>
        <ul className="grid grid-cols-3 gap-2">
          {igTiles.map((src) => (
            <li key={src} className="relative aspect-square overflow-hidden rounded-sm">
              <Image src={src || '/placeholder.svg'} alt="" fill sizes="15vw" className="object-cover" />
            </li>
          ))}
        </ul>
        <a href={contact.inspectionsInstagram} className="font-semibold text-primary hover:underline">
          Follow @elko.projects
        </a>
      </aside>
    </section>
  )
}
