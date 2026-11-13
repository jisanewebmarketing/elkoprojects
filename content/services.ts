// Elko Projects — service lines (source of truth: docs/ELKO_BUILD_SPEC.md §1).
// Facts corrected per CLIENT_TODO: registration is General (Unrestricted), Class 2
// capable — not "Class 2B"; inspection reports are delivered in 48–72 hours.
// Per-phase page expansions (remedial sub-pages, residential sub-pages, etc.)
// build on this structure in their own phases.

export type SubService = {
  slug: string
  title: string
  summary: string
  includes: string[]
  image: string
}

export type Service = {
  slug: string
  title: string
  short: string
  intro: string
  image: string
  items?: SubService[]
  workTypes?: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'residential',
    title: 'Residential',
    short: 'Renovations, new homes and granny flats.',
    intro:
      'Whole-home renovations, bespoke new homes and granny flats, built for homeowners who care how the job is finished, not just how fast it is quoted.',
    image: '/images/yowie-bay-residence.jpg',
    items: [
      {
        slug: 'complete-renovations',
        title: 'Complete renovations',
        summary: 'Structural alterations, kitchens, bathrooms and full home transformations.',
        includes: [
          'Structural alterations and removal of load-bearing walls',
          'Kitchens, bathrooms and laundries',
          'Extensions and additions',
          'Flooring, joinery and lighting packages',
        ],
        image: '/images/st-ives.jpg',
      },
      {
        slug: 'new-home-builds',
        title: 'New home builds',
        summary: 'Custom homes and duplexes, design and construct through our consultant network.',
        includes: [
          'Custom new homes and knockdown rebuilds',
          'Duplex and dual-occupancy developments',
          'Design and construct with in-house consultants',
          'DA / CC approvals managed for you',
        ],
        image: '/images/sylvania-duplex.jpg',
      },
      {
        slug: 'granny-flats',
        title: 'Granny flats',
        summary: 'Secondary dwellings designed, approved and built as one package.',
        includes: [
          'Site assessment and approval pathway',
          'Design options to suit your block',
          'Services, connections and landscaping',
          'Fixed-scope, documented pricing',
        ],
        image: '/images/granny-flat.jpg',
      },
    ],
    faqs: [
      {
        q: 'Will the directors actually be on my job?',
        a: 'Yes. Elias and Marko are on every project. The people you meet at the start are the people managing your site and walking the defects at the end.',
      },
      {
        q: 'How do you handle variations?',
        a: 'Every scope change is documented, costed and approved by you before work proceeds. No verbal variations.',
      },
      {
        q: 'Is my deposit used on other projects?',
        a: 'Never. Every project runs on its own ring-fenced budget. There is no cross-funding between jobs.',
      },
    ],
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    short: 'Fit outs and refurbishments for business.',
    intro:
      'Offices, hospitality venues, medical centres and retail tenancies, delivered with programme certainty so your business can open on the date you planned.',
    image: '/images/rhodes-office.jpg',
    items: [
      {
        slug: 'office-fit-outs-renovations',
        title: 'Office fit outs & renovations',
        summary: 'Workplaces built around how your team actually works.',
        includes: ['Partitioning and glazed suites', 'Joinery and breakout spaces', 'Make-good works', 'After-hours delivery'],
        image: '/images/rhodes-office.jpg',
      },
      {
        slug: 'hospitality-fit-out-renovations',
        title: 'Hospitality fit out & renovations',
        summary: 'Restaurants, cafes and bars built to open on time.',
        includes: ['Bar and kitchen fit outs', 'Front-of-house joinery', 'Compliance and certification', 'Staged works around trading'],
        image: '/images/hospitality-fitout.jpg',
      },
      {
        slug: 'medical-centre-fit-out-renovations',
        title: 'Medical centre fit out & renovations',
        summary: 'Clinical spaces with the compliance detail done properly.',
        includes: ['Consult and treatment rooms', 'Accessibility upgrades', 'Infection-control finishes', 'Services coordination'],
        image: '/images/osborne-lane-cove.jpg',
      },
      {
        slug: 'refurbishments',
        title: 'Refurbishments',
        summary: 'Refreshing tired spaces without disrupting the business.',
        includes: ['Finishes upgrades', 'Lighting and ceiling works', 'Amenities refurbishment', 'Staged programmes'],
        image: '/images/dural.jpg',
      },
      {
        slug: 'shop-fit-outs',
        title: 'Shop fit outs',
        summary: 'Retail and display suites with a finish that sells.',
        includes: ['Shopfronts and signage zones', 'Display joinery', 'Developer display suites', 'Fast-track programmes'],
        image: '/images/osborne-lane-cove.jpg',
      },
    ],
    faqs: [
      {
        q: 'Can you work after hours?',
        a: 'Yes. We regularly programme works around trading hours and building management requirements.',
      },
      {
        q: 'Do you handle certification?',
        a: 'We coordinate consultants, certifiers and building management, and hand over complete documentation.',
      },
    ],
  },
  {
    slug: 'retirement-living',
    title: 'Retirement Living',
    short: 'Upgrades and compliance for retirement communities.',
    intro:
      'Renovations, refurbishments and compliance works for retirement villages, delivered around residents with care, clear communication and minimal disruption.',
    image: '/images/five-dock-units.jpg',
    workTypes: [
      { title: 'Renovations & alterations', body: 'Unit upgrades, kitchens, bathrooms and accessibility changes.' },
      { title: 'Refurbishments', body: 'Common areas, facades and landscaping refreshed in stages.' },
      { title: 'Compliance work', body: 'Fire, accessibility and safety upgrades documented for operators.' },
      { title: 'Inspections', body: 'Condition reports and rectification scopes for village managers.' },
    ],
    faqs: [
      {
        q: 'How do you work around residents?',
        a: 'We stage works, communicate schedules in advance and keep sites clean and safe every day.',
      },
    ],
  },
  {
    slug: 'remedial',
    title: 'Remedial & Strata',
    short: 'Facades, balconies, waterproofing and strata works.',
    intro:
      'Registered Class 2 remedial and insurance works across residential, commercial and strata, with structured documentation your committee or insurer will accept.',
    image: '/images/remedial-facade.jpg',
    workTypes: [
      { title: 'Facade works', body: 'Render, cladding and concrete repair to restore the building envelope.' },
      { title: 'Strata works', body: 'Common property rectification managed with the committee and strata manager.' },
      { title: 'Roof works', body: 'Roof repairs, replacements and flashings.' },
      { title: 'Waterproofing works', body: 'Membranes for wet areas, planters, podiums and balconies.' },
      { title: 'Balcony works', body: 'Balustrades, tiling, drainage and structural repairs.' },
      { title: 'Restorations', body: 'Fire, storm and insurance make-good reinstatements.' },
      { title: 'Windows', body: 'Window replacement and leak rectification.' },
      { title: 'Compliance inspections & rectifications', body: 'Defect identification and documented rectification.' },
    ],
    faqs: [
      {
        q: 'Do you work with insurers?',
        a: 'Yes. We prepare scopes and documentation for insurance reinstatement and strata committees.',
      },
      {
        q: 'Are you registered for Class 2 (apartment) buildings?',
        a: 'Yes. Our Building Practitioner registration is General (Unrestricted), which covers remedial works on Class 2 buildings.',
      },
    ],
  },
  {
    slug: 'building-inspections',
    title: 'Building Inspections',
    short: 'Elko Building Inspections, by licensed builders.',
    intro:
      'Inspections carried out by qualified builders who know what a defect costs to fix, with reports that rank every issue by priority.',
    image: '/images/building-inspection.jpg',
    workTypes: [
      { title: 'Pre and post construction', body: 'Document the property before works begin and confirm quality at completion.' },
      { title: 'Pre and post lease', body: 'Protect landlords and tenants with a clear record of condition.' },
      { title: 'Pre and post purchase', body: 'Know what you are buying, and what it will cost to put right.' },
    ],
    faqs: [
      {
        q: 'How quickly do I get the report?',
        a: 'Most reports are delivered within 48 to 72 hours of the inspection.',
      },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
