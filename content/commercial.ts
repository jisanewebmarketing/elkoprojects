// Elko Projects — Commercial sub-pages (spec Phase 4).
// Verifies the existing 5 commercial pages, adds the Rhodes office fitout as the
// project on the office page, and carries the capability-statement point on
// detailed programming, early procurement and strategic sequencing (rendered via
// <ProgrammeCertainty/>). All claims sourced from docs/ELKO_BUILD_SPEC.md §1.

export type CommercialPage = {
  slug: string
  h1: string
  summary: string
  metaTitle: string
  metaDescription: string // kept <= 155 chars
  eyebrow: string
  intro: string
  included: string[]
  projectSlugs: string[]
  faqs: { q: string; a: string }[]
  image: string
}

export const commercialHub = {
  eyebrow: 'Fit outs and refurbishments for business',
  title: 'Commercial',
  intro:
    'Offices, hospitality venues, medical centres and retail tenancies, delivered with programme certainty so your business can open on the date you planned.',
  image: '/images/rhodes-office.jpg',
}

const AFTERHOURS_FAQ = {
  q: 'Can you work after hours?',
  a: 'Yes. We regularly programme works around trading hours and building management requirements.',
}
const CERT_FAQ = {
  q: 'Do you handle certification?',
  a: 'We coordinate consultants, certifiers and building management, and hand over complete documentation.',
}
const PROGRAMME_FAQ = {
  q: 'How do you protect my opening date?',
  a: 'We programme the works in detail, procure long-lead items early, and sequence the trades strategically to protect your operating timeframes.',
}

export const commercialPages: CommercialPage[] = [
  {
    slug: 'office-fit-outs-renovations',
    h1: 'Office fit outs & renovations',
    summary: 'Workplaces built around how your team actually works.',
    metaTitle: 'Office Fit Outs & Renovations Sydney | Elko Projects',
    metaDescription:
      'Office fit outs and renovations in Sydney: glazed suites, joinery, breakout spaces, make-good works and after-hours delivery, to a clear programme.',
    eyebrow: 'Commercial',
    intro:
      'Office fit outs and renovations built around how your team actually works. From glazed suites and partitioning to joinery and breakout spaces, we deliver after hours and to a clear programme so your workplace opens on time.',
    included: [
      'Partitioning and glazed suites',
      'Joinery and breakout spaces',
      'Make-good works',
      'After-hours delivery',
    ],
    projectSlugs: ['rhodes-office-fitout'],
    faqs: [AFTERHOURS_FAQ, PROGRAMME_FAQ, CERT_FAQ],
    image: '/images/rhodes-office.jpg',
  },
  {
    slug: 'hospitality-fit-out-renovations',
    h1: 'Hospitality fit out & renovations',
    summary: 'Restaurants, cafes and bars built to open on time.',
    metaTitle: 'Hospitality Fit Out & Renovations Sydney | Elko Projects',
    metaDescription:
      'Hospitality fit outs in Sydney: bar and kitchen fit outs, front-of-house joinery, compliance and certification, staged around trading to open on time.',
    eyebrow: 'Commercial',
    intro:
      'Hospitality fit outs and renovations for restaurants, cafes and bars, built to open on time. We stage the works around trading and manage compliance and certification so your venue is ready for service.',
    included: [
      'Bar and kitchen fit outs',
      'Front-of-house joinery',
      'Compliance and certification',
      'Staged works around trading',
    ],
    projectSlugs: [],
    faqs: [AFTERHOURS_FAQ, PROGRAMME_FAQ, CERT_FAQ],
    image: '/images/hospitality-fitout.jpg',
  },
  {
    slug: 'medical-centre-fit-out-renovations',
    h1: 'Medical centre fit out & renovations',
    summary: 'Clinical spaces with the compliance detail done properly.',
    metaTitle: 'Medical Centre Fit Out & Renovations Sydney | Elko Projects',
    metaDescription:
      'Medical centre fit outs in Sydney: consult and treatment rooms, accessibility upgrades, infection-control finishes and services coordination.',
    eyebrow: 'Commercial',
    intro:
      'Medical centre fit outs and renovations with the compliance detail done properly. Consult and treatment rooms, accessibility upgrades and infection-control finishes, with services coordinated and documented.',
    included: [
      'Consult and treatment rooms',
      'Accessibility upgrades',
      'Infection-control finishes',
      'Services coordination',
    ],
    projectSlugs: [],
    faqs: [CERT_FAQ, PROGRAMME_FAQ],
    image: '/images/osborne-lane-cove.jpg',
  },
  {
    slug: 'refurbishments',
    h1: 'Commercial refurbishments',
    summary: 'Refreshing tired spaces without disrupting the business.',
    metaTitle: 'Commercial Refurbishments Sydney | Elko Projects',
    metaDescription:
      'Commercial refurbishments in Sydney: finishes upgrades, lighting and ceiling works, amenities refurbishment and staged programmes that keep you trading.',
    eyebrow: 'Commercial',
    intro:
      'Commercial refurbishments that refresh tired spaces without disrupting the business. Finishes, lighting, ceilings and amenities, delivered in staged programmes around your operating hours.',
    included: [
      'Finishes upgrades',
      'Lighting and ceiling works',
      'Amenities refurbishment',
      'Staged programmes',
    ],
    projectSlugs: [],
    faqs: [AFTERHOURS_FAQ, PROGRAMME_FAQ],
    image: '/images/rhodes-office.jpg',
  },
  {
    slug: 'shop-fit-outs',
    h1: 'Shop fit outs',
    summary: 'Retail and display suites with a finish that sells.',
    metaTitle: 'Shop Fit Outs Sydney | Elko Projects',
    metaDescription:
      'Retail shop fit outs in Sydney: shopfronts and signage zones, display joinery, developer display suites and fast-track programmes with a finish that sells.',
    eyebrow: 'Commercial',
    intro:
      'Retail shop fit outs and display suites with a finish that sells. Shopfronts, signage zones and display joinery, delivered on fast-track programmes to hit your trading date.',
    included: [
      'Shopfronts and signage zones',
      'Display joinery',
      'Developer display suites',
      'Fast-track programmes',
    ],
    projectSlugs: [],
    faqs: [PROGRAMME_FAQ, AFTERHOURS_FAQ],
    image: '/images/osborne-lane-cove.jpg',
  },
]

export function getCommercialPage(slug: string) {
  return commercialPages.find((p) => p.slug === slug)
}
