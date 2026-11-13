// Elko Projects — Residential sub-pages (spec Phase 3).
// Copy weaves the client's keywords (face lift, refurbishment, makeover,
// extension, restoration) naturally. Every claim comes from
// docs/ELKO_BUILD_SPEC.md §1 — nothing invented. Pages with no project data
// carry no case study (service copy only, per the spec).

export type ResidentialPage = {
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

export const residentialHub = {
  eyebrow: 'Renovations, new homes and granny flats',
  title: 'Residential',
  intro:
    'Whole-home renovations, bespoke new homes, duplexes and granny flats, built for homeowners who care how the job is finished, not just how fast it is quoted.',
  image: '/images/yowie-bay-residence.jpg',
}

const DIRECTORS_FAQ = {
  q: 'Will the directors actually be on my project?',
  a: 'Yes. Elias and Marko are on every project. The people you meet at the start are the people managing your site and walking the defects at the end.',
}
const VARIATIONS_FAQ = {
  q: 'How do you handle variations?',
  a: 'Every scope change is documented, costed and approved by you before work proceeds. There are no verbal variations.',
}
const BUDGET_FAQ = {
  q: 'Is my deposit used on other projects?',
  a: 'Never. Every project runs on its own ring-fenced budget, with no cross-funding between jobs.',
}
const APPROVALS_FAQ = {
  q: 'Do you manage council approvals?',
  a: 'Yes. On design-and-construct projects we coordinate the consultants and manage the DA or CC/CDC approvals for you.',
}

export const residentialPages: ResidentialPage[] = [
  {
    slug: 'complete-apartment-renovations',
    h1: 'Complete apartment renovations',
    summary: 'Strata apartment transformations, with compliance and access managed.',
    metaTitle: 'Apartment Renovations Sydney | Elko Projects',
    metaDescription:
      'Complete apartment renovations in Sydney, from a cosmetic makeover to a full strata transformation, with strata compliance and building access managed.',
    eyebrow: 'Residential',
    intro:
      'Complete apartment renovations and refurbishments, from a cosmetic makeover to a full strata apartment transformation. We manage strata compliance and building access so the works run smoothly for you and your neighbours.',
    included: [
      'Full apartment transformations and refurbishments',
      'Kitchens, bathrooms and laundries',
      'Flooring, joinery and finishes',
      'Strata compliance and approvals managed',
      'Building access and protection of common areas',
      'Staged works to minimise disruption to neighbours',
    ],
    projectSlugs: ['potts-point-apartment'],
    faqs: [
      {
        q: 'Do you manage strata approvals and building access?',
        a: 'Yes. We handle strata compliance and coordinate building access, and protect common areas so the works run smoothly for you and your neighbours.',
      },
      VARIATIONS_FAQ,
      DIRECTORS_FAQ,
    ],
    image: '/images/osborne-lane-cove.jpg',
  },
  {
    slug: 'complete-house-renovations',
    h1: 'Complete house renovations',
    summary: 'From a single-room face lift to a full home makeover with structural work.',
    metaTitle: 'House Renovations Sydney | Elko Projects',
    metaDescription:
      'Complete house renovations in Sydney: from a single-room face lift to a full home makeover with structural alterations, kitchens, bathrooms and extensions.',
    eyebrow: 'Residential',
    intro:
      'Complete house renovations, from a single-room face lift to a full home makeover with structural alterations. Kitchens, bathrooms, extensions and premium finishes, delivered to the standard you would expect of a new build.',
    included: [
      'Full home renovations and makeovers',
      'Kitchens, bathrooms and laundries',
      'Structural alterations and removal of load-bearing walls',
      'Extensions and additions',
      'Flooring, joinery and lighting packages',
    ],
    projectSlugs: ['st-ives-renovation', 'dural-renovation'],
    faqs: [DIRECTORS_FAQ, VARIATIONS_FAQ, BUDGET_FAQ],
    image: '/images/st-ives.jpg',
  },
  {
    slug: 'alterations-additions',
    h1: 'House alterations & additions',
    summary: 'Major and minor extensions and additions, integrated seamlessly.',
    metaTitle: 'House Alterations & Additions Sydney | Elko Projects',
    metaDescription:
      'House alterations and additions in Sydney: major and minor extensions, structural alterations and full home additions, seamlessly integrated.',
    eyebrow: 'Residential',
    intro:
      'House alterations and additions — major and minor extensions, structural alterations and full home additions, integrated seamlessly with your existing home so the new work looks like it was always there.',
    included: [
      'Major and minor extensions',
      'Structural alterations',
      'Ground-floor and first-floor additions',
      'Seamless integration with the existing structure',
      'Reconfigured layouts for how you live',
    ],
    projectSlugs: ['st-ives-renovation'],
    faqs: [APPROVALS_FAQ, VARIATIONS_FAQ, DIRECTORS_FAQ],
    image: '/images/dural.jpg',
  },
  {
    slug: 'terrace-renovations-extensions',
    h1: 'Terrace renovations, alterations & extensions',
    summary: 'Sympathetic restoration married to a practical extension.',
    metaTitle: 'Terrace Renovations & Extensions Sydney | Elko Projects',
    metaDescription:
      'Terrace renovations and extensions in Sydney: heritage-sensitive restoration with rear or attic extensions and structural work in tight footprints.',
    eyebrow: 'Residential',
    intro:
      'Terrace renovations, alterations and extensions across Sydney’s terraces and city terrace villas. We restore period character while opening up and modernising the home — a sympathetic restoration married to a practical extension.',
    included: [
      'Heritage-sensitive restoration of period detail',
      'Rear and attic extensions',
      'Structural alterations within tight terrace footprints',
      'Kitchens, bathrooms and joinery',
      'Improving natural light and flow',
    ],
    projectSlugs: [],
    faqs: [DIRECTORS_FAQ, APPROVALS_FAQ],
    image: '/images/st-ives.jpg',
  },
  {
    slug: 'townhouse-renovations',
    h1: 'Townhouse renovations',
    summary: 'Multi-level refurbishments with body corporate access managed.',
    metaTitle: 'Townhouse Renovations Sydney | Elko Projects',
    metaDescription:
      'Townhouse renovations in Sydney: kitchens, bathrooms, flooring and finishes across multiple levels, with body corporate and strata access managed.',
    eyebrow: 'Residential',
    intro:
      'Townhouse renovations and refurbishments — kitchens, bathrooms, flooring and finishes that modernise your townhouse, with multi-level works and body corporate access managed where needed.',
    included: [
      'Kitchen and bathroom renovations',
      'Flooring and finishes',
      'Multi-level works',
      'Body corporate and strata access managed',
      'Modernised layout and storage',
    ],
    projectSlugs: [],
    faqs: [DIRECTORS_FAQ, VARIATIONS_FAQ],
    image: '/images/dural.jpg',
  },
  {
    slug: 'custom-home-new-builds',
    h1: 'Custom home new builds',
    summary: 'Bespoke homes, design and construct through our consultant network.',
    metaTitle: 'Custom Home Builder Sydney | Elko Projects',
    metaDescription:
      'Custom home new builds in Sydney: bespoke homes and knockdown rebuilds, designed and built through our in-house consultant network, approvals managed.',
    eyebrow: 'Residential',
    intro:
      'Bespoke custom homes, designed and built through our in-house consultant network. From concept to completion we manage the design, approvals and construction, so your new home is delivered by one accountable team.',
    included: [
      'Bespoke custom homes',
      'Knockdown rebuilds',
      'Design and construct with in-house consultants',
      'DA / CC approvals managed for you',
      'Premium fixtures and finishes',
    ],
    projectSlugs: ['yowie-bay-new-home'],
    faqs: [APPROVALS_FAQ, DIRECTORS_FAQ, BUDGET_FAQ],
    image: '/images/yowie-bay-residence.jpg',
  },
  {
    slug: 'duplexes',
    h1: 'Duplex construction',
    summary: 'Dual-occupancy, design and construct as one package.',
    metaTitle: 'Duplex Builder Sydney | Elko Projects',
    metaDescription:
      'Duplex and dual-occupancy construction in Sydney, designed and built as one package, with feasibility, approvals and premium finishes to both dwellings.',
    eyebrow: 'Residential',
    intro:
      'Duplex and dual-occupancy construction, designed and built as one package. We handle the design, approvals and build, so your dual-occupancy development runs to a clear scope and budget.',
    included: [
      'Dual-occupancy and duplex developments',
      'Design and construct',
      'DA / CDC approvals managed',
      'Feasibility and site assessment',
      'Premium finishes to both dwellings',
    ],
    projectSlugs: ['sylvania-duplex'],
    faqs: [APPROVALS_FAQ, VARIATIONS_FAQ, BUDGET_FAQ],
    image: '/images/sylvania-duplex.jpg',
  },
  {
    slug: 'granny-flats',
    h1: 'Granny flats',
    summary: 'Secondary dwellings to add value and function, built as one package.',
    metaTitle: 'Granny Flats Sydney | Elko Projects',
    metaDescription:
      'Granny flats and secondary dwellings in Sydney that add value and function, designed, approved and built as one fixed-scope package.',
    eyebrow: 'Residential',
    intro:
      'Granny flats and secondary dwellings that add value and function to your property, designed, approved and built as one fixed-scope package.',
    included: [
      'Secondary dwellings',
      'Site assessment and approval pathway',
      'Design options to suit your block',
      'Services, connections and landscaping',
      'Fixed-scope, documented pricing',
    ],
    projectSlugs: [],
    faqs: [APPROVALS_FAQ, DIRECTORS_FAQ],
    image: '/images/granny-flat.jpg',
  },
]

export function getResidentialPage(slug: string) {
  return residentialPages.find((p) => p.slug === slug)
}
