import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function CtaBand({ image = '/images/st-ives.jpg' }: { image?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-md text-ink-foreground">
        <Image src={image || '/placeholder.svg'} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden />
        <div className="flex flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-12 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Ready to start?</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] md:text-5xl">
              Meet the directors who will build your project.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-foreground/85">
              Book a consultation and we will come to site, talk through scope and budget, and tell you honestly
              whether we are the right fit.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90"
            >
              Book a Consultation <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href={contact.phones[0].href} className="text-sm font-medium underline-offset-4 hover:underline">
              {`Or call Elias on ${contact.phones[0].display}`}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
