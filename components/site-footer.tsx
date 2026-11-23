import Image from 'next/image'
import Link from 'next/link'
import { contact, company, licensing } from '@/content/company'
import { services } from '@/content/services'
import { footerLegal } from '@/content/navigation'
import { Wordmark } from '@/components/wordmark'

// Inline brand glyphs (lucide-react no longer ships social brand icons).
function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={path} />
    </svg>
  )
}

const socials = [
  {
    label: 'Instagram',
    href: contact.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'Facebook',
    href: contact.facebook,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'LinkedIn',
    href: contact.linkedin,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
  {
    label: 'TikTok',
    href: contact.tiktok,
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
]

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'Safety', href: '/safety' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact-us' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Wordmark className="h-auto w-40" priority={false} />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium residential, commercial, remedial and retirement living construction across Greater Sydney.
            Director-led on every project.
          </p>
          <dl className="mt-2 flex flex-col gap-1 text-xs text-muted-foreground">
            <div>
              <dt className="inline">ABN </dt>
              <dd className="inline font-medium text-foreground">{company.abn}</dd>
            </div>
            <div>
              <dt className="inline">NSW Contractor Licence </dt>
              <dd className="inline font-medium text-foreground">385208C</dd>
            </div>
            <div>
              <dt className="inline">Building Practitioner </dt>
              <dd className="inline font-medium text-foreground">BUP4254517</dd>
            </div>
          </dl>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Proud members of</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex h-12 items-center justify-center rounded-md bg-white px-2.5">
                <Image src="/images/mba-member.jpg" alt="Master Builders Association member" width={200} height={93} className="h-8 w-auto" />
              </span>
              <span className="flex h-12 items-center justify-center rounded-md bg-white px-2.5">
                <Image src="/images/hia-member.png" alt="HIA member" width={211} height={239} className="h-9 w-auto" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">What we build</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/display-units" className="hover:text-primary">Display Units</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary">Projects</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Company</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">{l.label}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted-foreground">{licensing.safety}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Contact</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-primary">
                  {p.name} · {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="text-muted-foreground">{contact.hours}</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {socials.map(({ label, href, path }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <BrandIcon path={path} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{`© ${new Date().getFullYear()} ${company.legalName}. All rights reserved.`}</p>
          <ul className="flex flex-wrap gap-4">
            {footerLegal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/book-a-consultation" className="hover:text-foreground">Free site visit &amp; quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
