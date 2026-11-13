import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '@/content/company'

// Honest placeholder for sections that are scheduled in a later build phase.
// Keeps the navigation complete (no 404s) without inventing content.
export function ComingSoon({ body }: { body: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="rounded-md border border-dashed border-border bg-card p-8 md:p-12">
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90"
          >
            Book a free site visit &amp; quote <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a href={contact.phones[0].href} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            <Phone className="size-4" aria-hidden />
            {`Call ${contact.phones[0].name} · ${contact.phones[0].display}`}
          </a>
        </div>
      </div>
    </section>
  )
}
