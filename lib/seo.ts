import { company, contact, serviceAreas } from '@/content/company'

// Canonical site origin. Set NEXT_PUBLIC_SITE_URL per environment
// (e.g. the staging URL on staging). Falls back to the production domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.elkoprojects.com.au').replace(/\/$/, '')

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: company.legalName,
    alternateName: company.tradingName,
    url: SITE_URL,
    email: contact.email,
    telephone: contact.phones[0].display,
    foundingDate: '2022',
    areaServed: serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    sameAs: [contact.instagram, contact.facebook, contact.linkedin, contact.tiktok],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.tradingName,
    url: SITE_URL,
  }
}

export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ label: 'Home', href: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  }
}

export function serviceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(url),
    provider: { '@type': 'GeneralContractor', name: company.legalName, url: SITE_URL },
    areaServed: { '@type': 'State', name: 'New South Wales' },
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
