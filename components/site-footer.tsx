import Link from 'next/link'
import { contact, company, licensing } from '@/content/company'
import { services } from '@/content/services'
import { footerLegal } from '@/content/navigation'
import { Wordmark } from '@/components/wordmark'

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
              <Link href="/completed-projects" className="hover:text-primary">Projects</Link>
            </li>
            <li>
              <Link href="/tools" className="hover:text-primary">Tools</Link>
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
          <ul className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
            <li><a href={contact.instagram} className="underline-offset-4 hover:underline">Instagram</a></li>
            <li><a href={contact.facebook} className="underline-offset-4 hover:underline">Facebook</a></li>
            <li><a href={contact.linkedin} className="underline-offset-4 hover:underline">LinkedIn</a></li>
            <li><a href={contact.tiktok} className="underline-offset-4 hover:underline">TikTok</a></li>
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
