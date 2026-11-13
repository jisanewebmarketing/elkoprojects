export const contact = {
  phones: [
    { name: 'Elias', display: '0423 334 792', href: 'tel:+61423334792' },
    { name: 'Marko', display: '0430 646 447', href: 'tel:+61430646447' },
  ],
  email: 'admin@elkoprojects.com.au',
  instagram: 'https://www.instagram.com/elko.projects/',
  inspectionsInstagram: 'https://www.instagram.com/elko.projects/',
  facebook: 'https://www.facebook.com/ElkoProjectsPtyLtd',
  linkedin: 'https://www.linkedin.com/company/elko-projectsptyltd/',
  tiktok: 'https://www.tiktok.com/@elko.projects',
  hours: 'Mon to Fri 7am to 5pm',
}

export const credentials = [
  { label: 'Builders Licence', value: '385208C' },
  { label: 'Building Practitioner', value: 'BUP4254517' },
  { label: 'Master Builders', value: 'Full member' },
  { label: 'HIA', value: 'Member & insured' },
  { label: 'Public Liability', value: '$20M · QBE' },
]

export const directors = [
  {
    name: 'Elias Nader',
    role: 'Operations Director',
    quals: 'B. Construction Management · M. Project Management',
    focus:
      'Pre-construction, pricing, commercial control and client relationships. Elias is your point of contact from first meeting to final invoice.',
  },
  {
    name: 'Marko Bratkovic',
    role: 'Construction Director',
    quals: 'B. Construction Management',
    focus:
      'Live delivery, site operations, trade sequencing, QA and defects. Marko runs the site and walks every defect with you before handover.',
  },
]

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
    title: 'Remedial',
    short: 'Facades, balconies, waterproofing and strata works.',
    intro:
      'Class 2B unrestricted remedial and insurance works across residential, commercial and strata, with structured documentation your committee or insurer will accept.',
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
        a: 'Most reports are delivered within 48 hours of the inspection.',
      },
    ],
  },
]

export type ProjectCategory = 'Residential' | 'Commercial' | 'Remedial' | 'Retirement living' | 'Display units'

export type Project = {
  title: string
  location: string
  region: string
  category: ProjectCategory
  scope: string
  image: string
  status?: string
}

export const projects: Project[] = [
  {
    title: 'Full Home Renovation',
    location: 'St Ives',
    region: 'Upper North Shore',
    category: 'Residential',
    scope: 'Structural alterations & premium interiors',
    image: '/images/st-ives.jpg',
  },
  {
    title: 'The Osborne Display Suite',
    location: 'Lane Cove',
    region: 'North Shore',
    category: 'Display units',
    scope: "Engaged by Scion for Winim's prestige apartment development",
    image: '/images/osborne-lane-cove.jpg',
  },
  {
    title: 'Corporate Office Fitout',
    location: 'Rhodes',
    region: 'Rhodes Waterside',
    category: 'Commercial',
    scope: 'Full office fitout with glazed suites',
    image: '/images/rhodes-office.jpg',
  },
  {
    title: 'Premium House Renovation',
    location: 'Dural',
    region: 'The Hills District',
    category: 'Residential',
    scope: 'High-end full home renovation',
    image: '/images/dural.jpg',
  },
  {
    title: 'Custom Residence',
    location: 'Yowie Bay',
    region: 'Sutherland Shire',
    category: 'Residential',
    scope: 'Bespoke new home · in-house architect',
    image: '/images/yowie-bay-residence.jpg',
    status: 'Completing 2026',
  },
  {
    title: 'Luxury Duplex',
    location: 'Sylvania',
    region: 'Sutherland Shire',
    category: 'Residential',
    scope: 'Design & construct · in-house consultants',
    image: '/images/sylvania-duplex.jpg',
    status: 'Completing 2026',
  },
  {
    title: 'Monsignor John Peoples Units',
    location: 'Five Dock',
    region: 'Inner West',
    category: 'Retirement living',
    scope: 'Unit refurbishment & accessibility upgrades',
    image: '/images/five-dock-units.jpg',
  },
  {
    title: 'Strata Facade & Balconies',
    location: 'Randwick',
    region: 'Eastern Suburbs',
    category: 'Remedial',
    scope: 'Balcony waterproofing & facade restoration',
    image: '/images/remedial-facade.jpg',
  },
  {
    title: 'Restaurant Fit Out',
    location: 'Potts Point',
    region: 'Inner East',
    category: 'Commercial',
    scope: 'Hospitality fit out delivered to programme',
    image: '/images/hospitality-fitout.jpg',
  },
]

export const reviews = [
  {
    quote:
      'We highly recommend Elko Projects. Elias and Marko were professional, innovative, tidy, on time and communicated every step of the way. Exceptional service.',
    name: 'Simon Arnold',
    source: 'Google Review',
  },
  {
    quote:
      'I have recently finished renovating the whole house with Elko and I cannot be more satisfied with the result. Their attention to detail and communication throughout the process was outstanding.',
    name: 'Chris Chang',
    source: 'Google Review',
  },
  {
    quote:
      'We couldn’t be happier with our new office fit-out! The team were professional, efficient, and delivered an exceptional result.',
    name: 'Dana',
    source: 'Google Review · Local Guide',
  },
]

export const serviceAreas = [
  'Sutherland Shire',
  'Bayside',
  'Randwick',
  'Waverley',
  'Mosman',
  'Woollahra',
  'Lane Cove',
  'Hunters Hill',
  'Northern Beaches',
  'City of Sydney',
  'Inner West',
  'Canada Bay',
  'Ryde',
  'Ku-ring-gai',
  'The Hills',
]

export const process = [
  { title: 'Analyse & qualify', body: 'We meet on site to understand scope, budget and timeline, and qualify the project before committing.' },
  { title: 'Design & budget', body: 'Our consultants, engineers and architects produce a design within a realistic, documented budget.' },
  { title: 'Review & approve', body: 'We review for buildability, cost and programme. Nothing starts without your sign-off.' },
  { title: 'Build & hand over', body: 'Weekly reporting, director-led site control and a defect walk with both directors before completion.' },
]

export const mainNav = [
  { label: 'About us', href: '/about-us' },
  { label: 'Residential', href: '/residential', children: services[0].items },
  { label: 'Commercial', href: '/commercial', children: services[1].items },
  { label: 'Retirement Living', href: '/retirement-living' },
  { label: 'Remedial', href: '/remedial' },
  { label: 'Building Inspections', href: '/building-inspections' },
  { label: 'Completed Projects', href: '/completed-projects' },
  { label: 'Contact us', href: '/contact-us' },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
