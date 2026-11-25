// Elko Projects — company source of truth.
// Every figure and claim here comes from docs/ELKO_BUILD_SPEC.md section 1.
// Nothing is invented. Unconfirmed figures carry `confirmed: false` and are gated
// behind NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS until the client signs them off.

export const company = {
  legalName: 'Elko Projects Pty Ltd',
  tradingName: 'Elko Projects',
  abn: '33 658 065 822',
  founded: 'March 2022',
  founders: ['Elias Nader', 'Marko Bratkovic'],
  ownership: 'Privately owned, director-led',
  region: 'Greater Sydney, NSW',
}

export const contact = {
  phones: [
    { name: 'Elias', display: '0423 334 792', href: 'tel:+61423334792' },
    { name: 'Marko', display: '0430 646 447', href: 'tel:+61430646447' },
  ],
  email: 'admin@elkoprojects.com.au',
  instagram: 'https://www.instagram.com/elko.projects/',
  // TODO(client): dedicated Elko Building Inspections Instagram handle.
  inspectionsInstagram: 'https://www.instagram.com/elko.projects/',
  facebook: 'https://www.facebook.com/ElkoProjectsPtyLtd',
  linkedin: 'https://www.linkedin.com/company/elko-projectsptyltd/',
  tiktok: 'https://www.tiktok.com/@elko.projects',
  hours: 'Mon to Fri 7am to 5pm',
}

// Shown as the compact credentials bar on the homepage.
export const credentials = [
  { label: 'Builders Licence', value: '385208C' },
  { label: 'Building Practitioner', value: 'BUP4254517' },
  { label: 'Master Builders', value: 'Full member' },
  { label: 'HIA', value: 'Member & insured' },
  { label: 'Public Liability', value: '$20M · QBE' },
]

// Reusable <CredentialsStrip/> content (spec Phase 1): licence, BP number,
// $20M PL, HOW, MBA/HIA, WHS/SWMS.
export const credentialsStrip = [
  { label: 'NSW Contractor Licence', value: '385208C' },
  { label: 'Building Practitioner', value: 'BUP4254517 · General (Unrestricted)' },
  { label: 'Public Liability', value: '$20M · QBE' },
  { label: "Home Owner's Warranty", value: 'Approved' },
  { label: 'Memberships', value: 'Master Builders · HIA' },
  { label: 'Safety', value: 'WHS plans & SWMS on every project' },
]

// Full licensing / registration detail (used on About, Safety, Remedial).
export const licensing = {
  contractorLicence: 'NSW Contractor Licence 385208C',
  buildingPractitioner:
    'Building Practitioner, Body Corporate — BUP4254517, General (Unrestricted), under the Design and Building Practitioners Act 2020 (NSW), issued by Building Commission NSW (9 Sep 2025 – 8 Sep 2030)',
  scope: 'Licensed for remedial works, renovations and new builds, including Class 2',
  publicLiability: '$20 million public liability (QBE)',
  homeOwnersWarranty: "Home Owner's Warranty approved",
  memberships: ['Master Builders Association (full member)', 'HIA (member and insured)'],
  safety: 'Site-specific WHS management plans and SWMS for every project',
}

// Reusable <CompliancePanel/> content (spec Phase 1).
export const complianceRecord = [
  'Zero NCAT cases',
  'Zero EPA breaches',
  'No stop work orders',
  'No court cases',
  'No injury-related delays',
  'No cross-project funding (ring-fenced budget per project)',
]

export const mission =
  'To redefine the standard of construction delivery through director-led accountability, financial transparency, and an unwavering commitment to quality that protects the interests of every client, on every project, without exception.'

export const values = [
  { title: 'Accountability', body: 'Director-led delivery means the people who quote your project also build and hand it over.' },
  { title: 'Integrity', body: 'Financial transparency and documented variations, with no verbal changes and no surprises.' },
  { title: 'Relationships', body: 'We select projects we can deliver properly and build long-term trust with every client.' },
]

export const foundations = [
  { title: 'Director-led delivery', body: 'Both directors are personally involved in every project.' },
  { title: 'Financial integrity', body: 'Transparent pricing and ring-fenced, documented budgets.' },
  { title: 'Complete compliance', body: 'Full licensing, insurance and safety documentation on every job.' },
  { title: 'Controlled project selection', body: 'We take on work we can deliver to our standard.' },
  { title: 'End-to-end management', body: 'One accountable team from first meeting to final handover.' },
]

export const commitments = [
  'Weekly client reporting',
  'Variations documented, costed and approved before work proceeds — no verbal variations',
  'Early procurement planning',
  'Defect walks before completion',
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
  'Willoughby',
  'Northern Beaches',
  'City of Sydney',
  'Inner West',
  'Canada Bay',
  'Ryde',
  'Ku-ring-gai',
  'The Hills',
]

export type DirectorExperience = { years: string; area: string; detail: string }
export type DirectorPrinciple = { title: string; body: string }

export type Director = {
  name: string
  role: string
  quals: string
  /** One-line focus used on the compact home-page card. */
  focus: string
  /** Fuller bio paragraphs for the About "Meet the directors" section. */
  summary: string[]
  /** Years-by-area experience breakdown. */
  experience: DirectorExperience[]
  /** "How {first name} works" operating principles. */
  principles: DirectorPrinciple[]
  initials: string
  // Professional headshot (supplied by the client). Falls back to an initials
  // badge when absent. TODO(client): swap for the professional director shoot.
  headshot?: string
}

// Client-supplied intro for the About "Meet the directors" section.
export const directorsIntro =
  'Elko Projects is led by two hands-on directors with 22+ years of combined experience across remedial, residential, commercial, industrial and major infrastructure projects. Every Elko project has a director involved from start to finish.'

export const directors: Director[] = [
  {
    name: 'Elias Nader',
    role: 'Co-Founder & Operations Director',
    initials: 'EN',
    headshot: '/images/elias-nader.jpg',
    quals: 'B. Construction Management (Construction Economics) · M. Project Management (Construction), Western Sydney University · Licensed Builder · Building Practitioner · MBA member · HIA Member',
    focus:
      'Runs operations, programming and client communication — bringing the systems and accountability of major infrastructure to every Elko project.',
    summary: [
      'At Elko, Elias runs operations, programming and client communication. He brings the systems and accountability of major infrastructure to every project — whether it is a strata remediation, a commercial fit-out or a luxury home.',
    ],
    experience: [
      { years: '4 years', area: 'Remedial construction', detail: 'Restoring and protecting existing buildings for owners and strata' },
      { years: '5 years', area: 'Residential', detail: 'Apartments, luxury townhouses and high-end apartment developments' },
      { years: '1 year', area: 'Commercial', detail: 'Office builds and fit-outs' },
      { years: '1 year', area: 'Industrial', detail: 'Warehouses and office suites' },
    ],
    principles: [
      { title: 'Plan it properly, build it once.', body: 'Good outcomes are set up long before work starts on site.' },
      { title: 'No surprises.', body: 'Clients, owners and strata committees always know where their project stands.' },
      { title: 'Systems over shortcuts.', body: 'Clear processes, accurate reporting and full documentation on every job.' },
      { title: 'Own the outcome.', body: 'If it carries the Elko name, he is accountable for it.' },
    ],
  },
  {
    name: 'Marko Bratkovic',
    role: 'Co-Founder & Construction Director',
    initials: 'MB',
    headshot: '/images/marko-bratkovic.jpg',
    quals: 'Bachelor of Construction Management (Construction Economics) · Licensed Builder · Building Practitioner · MBA member · HIA Member',
    focus:
      'Leads site delivery — trades, quality control and the day-to-day running of every project, delivered in occupied, live environments.',
    summary: [
      'Marko has 11 years of hands-on delivery experience across remedial, residential and commercial construction. He is known for his precision, high standards and ability to deliver complex work in occupied, live environments.',
      'Marko leads Elko’s site delivery — managing trades, quality control and the day-to-day running of every project. In remedial work, he finds the root cause of a defect and fixes it properly the first time, so clients are not paying for the same problem again.',
    ],
    experience: [
      { years: '4 years', area: 'Major remedial works', detail: 'Waterproofing, roof works, façade works and balcony remediation' },
      { years: '4 years', area: 'Residential', detail: 'Apartments, luxury townhouses and high-end apartment developments' },
      { years: '3 years', area: 'Commercial retail fit-outs', detail: 'Fast-paced shop fit-outs to tight programs, plus high-end refurbishments' },
    ],
    principles: [
      { title: 'Fix the cause, not the symptom.', body: 'Every remedial job starts by understanding why it failed.' },
      { title: 'The standard you walk past is the standard you accept.', body: 'Quality is checked at every stage, not just at handover.' },
      { title: 'Respect the people living and working there.', body: 'Clean, safe sites with minimal disruption for residents and tenants.' },
      { title: 'Build it like it’s your own.', body: 'Every membrane, joint and finish gets the care he’d want in his own home.' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Headline stats. `confirmed: false` => rendered only when the flag is on.
// ---------------------------------------------------------------------------

export const showUnconfirmedStats = process.env.NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS === 'true'

export type Stat = {
  value: string
  label: string
  confirmed: boolean
}

export const stats: Stat[] = [
  { value: '22+', label: 'years combined experience', confirmed: true }, // client-supplied in director bios
  { value: '100+', label: 'projects delivered', confirmed: false },
  { value: '50+', label: 'five-star reviews', confirmed: false },
  { value: 'Class 2', label: 'licensed for Class 2 buildings', confirmed: true },
]

// Turnover slot — exact wording TODO(client); gated behind the same flag.
export const turnover: Stat = { value: '$5M+', label: 'annual turnover', confirmed: false }

// A stat is visible when it is confirmed, or when the unconfirmed-stats flag is on.
export function statVisible(stat: Stat) {
  return stat.confirmed || showUnconfirmedStats
}

// Convenience: the headline review claim, degrading gracefully when unconfirmed.
export const reviewsHeadline = showUnconfirmedStats
  ? '50+ five-star reviews across Google, Facebook and HiPages.'
  : 'Five-star reviews across Google, Facebook and HiPages.'

// Convenience: the directors' combined-experience line for the hero badge.
// Client-confirmed (supplied in the director bios), so shown regardless of the
// unconfirmed-stats flag.
export const combinedExperienceLine = '22+ years combined'

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
