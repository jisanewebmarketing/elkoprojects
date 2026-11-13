// Elko Projects — primary navigation IA (redesigned mega-menu).
// The six service lines are grouped under a single "Services" mega panel so the
// top bar stays uncluttered on desktop. Each link carries a one-line description
// (shown in the desktop panel and the mobile drawer) and an optional icon.
//
// NOTE: "Projects" points at /completed-projects for now; Phase 11 introduces
// /projects (grid + /projects/[slug]) and this href moves across then.

export type NavLink = { label: string; href: string; description: string; icon?: string }
export type NavItem = {
  label: string
  href?: string
  description?: string
  /** Render children as a wide mega panel (used for Services). */
  mega?: boolean
  children?: NavLink[]
}

// The six service lines, surfaced in the Services mega panel.
export const serviceLines: NavLink[] = [
  { label: 'Residential', href: '/residential', description: 'Renovations, new homes, duplexes and granny flats.', icon: 'Home' },
  { label: 'Commercial', href: '/commercial', description: 'Office, hospitality, medical and retail fit outs.', icon: 'Building2' },
  { label: 'Remedial & Strata', href: '/remedial', description: 'Facades, balconies, waterproofing and strata rectification.', icon: 'HardHat' },
  { label: 'Display Units', href: '/display-units', description: 'Display suite fit outs for developers.', icon: 'LayoutTemplate' },
  { label: 'Retirement Living', href: '/retirement-living', description: 'Renovations, refurbishments and compliance for villages.', icon: 'HeartHandshake' },
  { label: 'Building Inspections', href: '/building-inspections', description: 'Builder-led inspections with 48–72 hour reports.', icon: 'ClipboardCheck' },
]

export const aboutLinks: NavLink[] = [
  { label: 'About Us', href: '/about-us', description: 'Two directors, one standard.', icon: 'Users' },
  { label: 'Our Process', href: '/our-process', description: 'Consultation, design, construct, handover.', icon: 'Route' },
  { label: 'Safety', href: '/safety', description: 'WHS plans and SWMS on every project.', icon: 'ShieldCheck' },
]

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    description: 'What we build across Greater Sydney.',
    mega: true,
    children: serviceLines,
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
    children: aboutLinks,
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
