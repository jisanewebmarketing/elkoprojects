// Elko Projects — project list (source of truth: docs/ELKO_BUILD_SPEC.md §1).
// `category` stays within the existing display union so the gallery filter and
// <RelatedProjects/> keep working; `type` carries the finer-grained spec type.
// `featured: true` means a real photo exists and the project is safe to surface
// on the homepage. Projects without their own photos use an interim stand-in
// image (TODO(client): real project-specific photography).

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Remedial'
  | 'Retirement living'
  | 'Display units'

export type ProjectType =
  | 'Remedial'
  | 'Residential'
  | 'Commercial'
  | 'Display Units'
  | 'New build'
  | 'Duplex'
  | 'Apartment'
  | 'Retirement Living'

export type Project = {
  slug: string
  title: string
  location: string
  region: string
  category: ProjectCategory
  type: ProjectType
  scope: string
  image: string
  status?: string
  year?: string
  featured?: boolean
  /** Full case-study copy / overview, where the client has supplied it. */
  caseStudy?: string
  /** Optional detail-page extras (client will supply over time). */
  outcome?: string
  quote?: { text: string; by: string }
  /** Extra hero-gallery images beyond the main image. */
  gallery?: string[]
  /** Scope of works per photo (Kongstruction-style), client-written. */
  scopePhotos?: { image: string; caption: string; scope: string }[]
  /** Scope tags shown in the facts panel. */
  tags?: string[]
}

export const projects: Project[] = [
  {
    slug: 'st-ives-renovation',
    title: 'Full Home Renovation',
    location: 'St Ives',
    region: 'Upper North Shore',
    category: 'Residential',
    type: 'Residential',
    scope: 'Full home renovation with structural alterations',
    image: '/images/projects/st-ives/hero.jpg',
    status: 'Complete',
    featured: true,
    tags: ['Full renovation', 'Structural alterations', 'Kitchen', 'Bathrooms', 'Joinery', 'Bushland setting'],
    gallery: [
      '/images/projects/st-ives/entry.jpg',
      '/images/projects/st-ives/kitchen-island.jpg',
      '/images/projects/st-ives/kitchen-sink.jpg',
      '/images/projects/st-ives/double-vanity.jpg',
      '/images/projects/st-ives/vanity.jpg',
      '/images/projects/st-ives/bath.jpg',
      '/images/projects/st-ives/shower.jpg',
      '/images/projects/st-ives/feature.jpg',
      '/images/projects/st-ives/bedroom.jpg',
    ],
  },
  {
    slug: 'rhodes-office-fitout',
    title: 'Corporate Office Fitout',
    location: 'Rhodes',
    region: 'City of Canada Bay',
    category: 'Commercial',
    type: 'Commercial',
    scope: 'Corporate office fitout with glazed suites',
    image: '/images/rhodes-office.jpg',
    status: 'Complete',
    featured: true,
  },
  {
    slug: 'the-osborne-lane-cove',
    title: 'The Osborne Display Suite',
    location: 'Lane Cove',
    region: 'Lower North Shore',
    category: 'Display units',
    type: 'Display Units',
    scope: 'Display suite — engaged by Scion for Winim',
    image: '/images/projects/osborne/hero.jpg',
    status: 'Complete',
    featured: true,
    tags: ['Display suite', 'Display kitchen', 'Stone & joinery', 'Ensuites', 'Styling'],
    gallery: [
      '/images/projects/osborne/model.jpg',
      '/images/projects/osborne/kitchen.jpg',
      '/images/projects/osborne/media.jpg',
      '/images/projects/osborne/dining.jpg',
      '/images/projects/osborne/lounge.jpg',
      '/images/projects/osborne/vanity.jpg',
      '/images/projects/osborne/bath.jpg',
      '/images/projects/osborne/ensuite.jpg',
      '/images/projects/osborne/shower.jpg',
    ],
  },
  {
    slug: 'dural-renovation',
    title: 'High-End Home Renovation',
    location: 'Dural',
    region: 'The Hills District',
    category: 'Residential',
    type: 'Residential',
    scope: 'High-end full home renovation',
    image: '/images/dural.jpg', // interim stand-in — TODO(client): real Dural project photos
    status: 'Complete',
  },
  {
    slug: 'yowie-bay-new-home',
    title: 'Bespoke New Home',
    location: 'Yowie Bay',
    region: 'Sutherland Shire',
    category: 'Residential',
    type: 'New build',
    scope: 'Bespoke new home · design and construct',
    image: '/images/yowie-bay-residence.jpg',
    status: 'Live',
    featured: true,
  },
  {
    slug: 'sylvania-duplex',
    title: 'Luxury Duplex',
    location: 'Sylvania',
    region: 'Sutherland Shire',
    category: 'Residential',
    type: 'Duplex',
    scope: 'Luxury duplex · design and construct',
    image: '/images/sylvania-duplex.jpg',
    status: 'Live',
    featured: true,
  },
  {
    slug: 'willoughby-balcony-remediation',
    title: 'Balcony Remediation',
    location: 'Willoughby',
    region: 'Willoughby City Council',
    category: 'Remedial',
    type: 'Remedial',
    scope: 'Full balcony remediation to AS 4654.2',
    image: '/images/remedial-facade.jpg', // TODO(client): project-specific photos
    status: 'Complete 2026',
    year: '2026',
    featured: true,
    caseStudy:
      'Full balcony remediation comprising demolition of existing tiles, screed and failed membranes back to the structural slab. Concrete cancer and spalling were rectified by breaking out delaminated concrete, treating corroded reinforcement and reinstating with polymer-modified repair mortar. New falls were established before installing a compliant waterproofing membrane system to AS 4654.2, followed by tiling, perimeter sealants and rectification of overflows and drainage outlets.',
  },
  {
    slug: 'monsignor-john-peoples-units',
    title: 'Monsignor John Peoples Units',
    location: 'Five Dock',
    region: 'Inner West',
    category: 'Retirement living',
    type: 'Retirement Living',
    scope: 'Retirement living unit refurbishment — current project', // TODO(client): confirm detailed scope + photos
    image: '/images/five-dock-units.jpg',
    status: 'Current',
    featured: true,
  },
  {
    slug: 'ingleburn-industrial-roof-facade',
    title: 'Industrial Roof & Façade Repairs',
    location: 'Ingleburn',
    region: 'South West Sydney',
    category: 'Remedial',
    type: 'Remedial',
    scope: 'Industrial roof & façade repairs',
    image: '/images/safety-onsite.jpg', // interim stand-in — TODO(client): project-specific photos
    status: 'Complete 2025',
    year: '2025',
    caseStudy:
      'Water ingress investigation including flood testing and leak tracing to identify failure points across the roof and building envelope. Roof works comprised replacement of corroded metal roof sheeting, new flashings and cappings, and box gutter and downpipe rectification to restore effective stormwater discharge. Façade works were delivered via rope access and EWP, including removal and replacement of failed sealants to panel joints, window perimeters and penetrations.',
  },
  {
    slug: 'surry-hills-devonshire-st-roof',
    title: 'Devonshire St Roof Repairs',
    location: 'Surry Hills',
    region: 'Inner City',
    category: 'Remedial',
    type: 'Remedial',
    scope: 'Roof repairs & leak rectification',
    image: '/images/team/detail.jpg', // interim stand-in — TODO(client): project-specific photos
    status: 'Complete 2023',
    year: '2023',
    caseStudy:
      'Roof condition inspection and water testing to locate active leak sources. Works included replacement of cracked and broken roof tiles, removal and re-bedding of ridge capping with full repointing in flexible pointing compound, and replacement of deteriorated flashings and valley irons. Gutters and downpipes were renewed, roof penetrations resealed, and the roof surface pressure cleaned and recoated to restore full watertightness and extend service life.',
  },
  {
    slug: 'potts-point-apartment',
    title: 'Luxury Apartment Transformation',
    location: 'Potts Point',
    region: 'Inner City',
    category: 'Residential',
    type: 'Apartment',
    scope: 'Luxury apartment transformation (with Sokkar Group)',
    image: '/images/projects/potts-point/hero.jpg',
    status: 'Live',
    featured: true,
  },
  {
    slug: 'mosman-renovation',
    title: 'High-End Internal Renovation',
    location: 'Mosman',
    region: 'Lower North Shore',
    category: 'Residential',
    type: 'Residential',
    scope: 'High-end internal renovation with bespoke bathrooms and joinery',
    image: '/images/projects/mosman/hero.jpg',
    status: 'Complete',
    featured: true,
    tags: ['Internal renovation', 'Bathrooms', 'Freestanding bath', 'Marble', 'Custom joinery', 'Walk-in shower'],
    gallery: [
      '/images/projects/mosman/vanity.jpg',
      '/images/projects/mosman/shower.jpg',
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
