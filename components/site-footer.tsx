import Link from 'next/link'
import { contact, credentials, mainNav, services } from '@/lib/site-data'
import { Wordmark } from '@/components/wordmark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Wordmark className="h-20" />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium residential, commercial and remedial construction across Greater Sydney. Director-led on every project.
          </p>
          <p className="text-xs text-muted-foreground">ABN 33 658 065 822</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Services</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/completed-projects" className="hover:text-primary">
                Completed Projects
              </Link>
            </li>
          </ul>
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

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">Licensed & insured</h2>
          <dl className="flex flex-col gap-2 text-sm">
            {credentials.map((c) => (
              <div key={c.label} className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="text-muted-foreground">{c.label}</dt>
                <dd className="font-medium">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{`© ${new Date().getFullYear()} Elko Projects Pty Ltd. All rights reserved.`}</p>
          <ul className="flex flex-wrap gap-4">
            {mainNav.slice(-2).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-foreground">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/book-a-consultation" className="hover:text-foreground">Book a Consultation</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
