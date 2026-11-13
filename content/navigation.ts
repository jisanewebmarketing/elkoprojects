// Elko Projects — primary navigation IA (spec Phase 1 mega-menu).
// Every item carries a one-line description shown in the desktop mega panel and
// under each label in the mobile drawer.
//
// NOTE: "Projects" points at /completed-projects for now; Phase 11 introduces
// /projects (grid + /projects/[slug]) and this href moves across then.

import { services } from './services'

export type NavChild = { label: string; href: string; description: string }
export type NavItem = { label: string; href: string; description: string; children?: NavChild[] }

const residential = services.find((s) => s.slug === 'residential')
const commercial = services.find((s) => s.slug === 'commercial')

function childrenFor(serviceSlug: string, items = [] as NonNullable<(typeof services)[number]['items']>): NavChild[] {
  return items.map((i) => ({
    label: i.title,
    href: `/${serviceSlug}/${i.slug}`,
    description: i.summary,
  }))
}

export const mainNav: NavItem[] = [
  {
    label: 'Residential',
    href: '/residential',
    description: 'Renovations, new homes, duplexes and granny flats.',
    children: childrenFor('residential', residential?.items),
  },
  {
    label: 'Commercial',
    href: '/commercial',
    description: 'Office, hospitality, medical and retail fit outs.',
    children: childrenFor('commercial', commercial?.items),
  },
  {
    label: 'Remedial & Strata',
    href: '/remedial',
    description: 'Facades, balconies, waterproofing and strata rectification.',
    // Children (8 remedial sub-pages) are added in Phase 2.
  },
  {
    label: 'Display Units',
    href: '/display-units',
    description: 'Display suite fit outs for developers.',
  },
  {
    label: 'Retirement Living',
    href: '/retirement-living',
    description: 'Renovations, refurbishments and compliance for villages.',
  },
  {
    label: 'Building Inspections',
    href: '/building-inspections',
    description: 'Builder-led inspections with 48–72 hour reports.',
  },
  {
    label: 'Projects',
    href: '/completed-projects',
    description: 'Completed homes, workplaces and buildings across Sydney.',
  },
  {
    label: 'Tools',
    href: '/tools',
    description: 'Free calculators and checkers for owners and committees.',
  },
  {
    label: 'About',
    href: '/about-us',
    description: 'Who we are, how we work and how we keep sites safe.',
    children: [
      { label: 'About Us', href: '/about-us', description: 'Two directors, one standard.' },
      { label: 'Our Process', href: '/our-process', description: 'Consultation, design, construct, handover.' },
      { label: 'Safety', href: '/safety', description: 'WHS plans and SWMS on every project.' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Guides and FAQs on building, renovating and remediation.',
  },
  {
    label: 'Contact',
    href: '/contact-us',
    description: 'Book a free site visit and quote.',
  },
]

// Footer legal + utility links.
export const footerLegal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Safety', href: '/safety' },
]
