import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

// Real on-site + team photography (client-supplied). Portrait frames, so they
// sit in a tile grid rather than a wide banner.
const photos = [
  { src: '/images/team/onsite-director.jpg', alt: 'An Elko director on site during a renovation' },
  { src: '/images/team/branded.jpg', alt: 'Elko Projects team member on site in branded workwear' },
  { src: '/images/team/detail.jpg', alt: 'Fixing a structural bracket to brickwork on site' },
  { src: '/images/team/walkthrough.jpg', alt: 'An Elko director checking a doorway during the build' },
  { src: '/images/team/on-call.jpg', alt: 'An Elko director taking a call on site' },
  { src: '/images/team/directors.jpg', alt: 'Elko directors Elias Nader and Marko Bratkovic' },
]

export function OnSiteStrip({
  className = 'bg-secondary py-20',
  title = 'On your site, not behind a desk',
  body = 'The directors and our team are on the tools and on site through the build — measuring, coordinating trades and checking the detail that makes the difference.',
}: {
  className?: string
  title?: string
  body?: string
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="On the tools" title={title} body={body} />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-md bg-card">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
