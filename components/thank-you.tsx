import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { contact } from '@/content/company'

export function ThankYou({
  eyebrow = 'Enquiry received',
  title,
  message,
}: {
  eyebrow?: string
  title: string
  message: string
}) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-5 py-24 text-center lg:px-8">
      <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <CheckCircle2 className="size-8" aria-hidden />
      </span>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="text-balance font-display text-3xl font-extrabold md:text-4xl">{title}</h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{message}</p>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90"
        >
          View our projects <ArrowRight className="size-4" aria-hidden />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-semibold hover:border-primary"
        >
          Back to home
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <span>Prefer to talk now? Call a director:</span>
        <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {contact.phones.map((ph) => (
            <a key={ph.href} href={ph.href} className="font-semibold text-foreground hover:text-primary">
              {ph.name} <span className="font-normal text-muted-foreground">·</span> {ph.display}
            </a>
          ))}
        </span>
      </div>
    </section>
  )
}
