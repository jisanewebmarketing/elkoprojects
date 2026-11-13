import { Star } from 'lucide-react'
import { reviews, reviewsHeadline } from '@/content/company'
import { SectionHeading } from '@/components/section-heading'

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="Client reviews" title={reviewsHeadline} />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.name}>
            <figure className="flex h-full flex-col justify-between gap-6 rounded-md border border-border bg-card p-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-pretty text-lg leading-relaxed">{`"${r.quote}"`}</blockquote>
              </div>
              <figcaption className="border-t border-border pt-4 text-sm">
                <span className="block font-semibold">{r.name}</span>
                <span className="text-muted-foreground">{r.source}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
