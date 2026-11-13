// Elko Projects — Remedial & Strata sub-pages (spec Phase 2).
// Every "included" item and FAQ answer comes from docs/ELKO_BUILD_SPEC.md §1.
// Nothing is invented. Case studies reference projects in content/projects.ts.

export type RemedialPage = {
  slug: string
  h1: string
  /** Short one-liner for the hub card grid. */
  summary: string
  metaTitle: string
  metaDescription: string // kept <= 155 chars
  eyebrow: string
  intro: string
  included: string[]
  /** Project slugs (content/projects.ts) to surface as recent work. */
  projectSlugs: string[]
  faqs: { q: string; a: string }[]
  image: string
  /** Optional related internal link rendered in the intro area. */
  relatedLink?: { href: string; label: string }
}

export const remedialHub = {
  eyebrow: 'Facades, balconies, waterproofing and strata works',
  title: 'Remedial & Strata',
  intro:
    'Registered Class 2 remedial and insurance works across residential, commercial and strata, with structured documentation your committee or insurer will accept.',
  image: '/images/remedial-facade.jpg',
}

export const remedialPages: RemedialPage[] = [
  {
    slug: 'balcony-works',
    h1: 'Balcony remediation',
    summary: 'Strip to slab, repair, re-fall and waterproof to AS 4654.2.',
    metaTitle: 'Balcony Remediation Sydney | Elko Projects',
    metaDescription:
      'Balcony remediation in Sydney: strip to slab, concrete cancer repair, new falls and waterproofing to AS 4654.2, tiling, sealants and drainage.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Full balcony remediation for strata and commercial buildings. We strip failed balconies back to the structural slab, rectify concrete cancer and spalling, re-establish falls and reinstate a compliant waterproofing system to AS 4654.2.',
    included: [
      'Demolition of existing tiles, screed and failed membranes back to the structural slab',
      'Concrete cancer and spalling repair — breaking out delaminated concrete and treating corroded reinforcement',
      'Reinstatement with polymer-modified repair mortar',
      'New falls established before waterproofing',
      'Waterproofing membrane system installed to AS 4654.2',
      'Tiling, perimeter sealants and rectification of overflows and drainage outlets',
    ],
    projectSlugs: ['willoughby-balcony-remediation'],
    faqs: [
      {
        q: 'Are you registered to work on Class 2 apartment buildings?',
        a: 'Yes. Our Building Practitioner registration is General (Unrestricted), which covers remedial works on Class 2 buildings.',
      },
      {
        q: 'What does AS 4654.2 mean?',
        a: 'AS 4654.2 is the Australian Standard for external above-ground waterproofing. We reinstate balcony membranes to comply with it.',
      },
      {
        q: 'Do you investigate the cause before quoting?',
        a: 'Yes. We establish why the balcony has failed before we scope the works, so the repair addresses the real cause and not just the symptom.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'roof-works',
    h1: 'Roof repairs and leak rectification',
    summary: 'Find the leak, replace, re-point and recoat — tiled or metal.',
    metaTitle: 'Roof Repairs & Leak Rectification Sydney | Elko Projects',
    metaDescription:
      'Roof repairs and leak rectification in Sydney: water testing, tile and metal sheeting replacement, ridge re-bed and repoint, flashings, gutters and recoat.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Roof repairs and leak rectification across tiled and metal roofs. We locate the source with inspection and water testing, then replace tiles or sheeting, re-bed and repoint ridge capping, renew flashings, gutters and downpipes, and recoat to restore watertightness.',
    included: [
      'Roof inspection and water testing to locate active leaks',
      'Replacement of cracked and broken roof tiles',
      'Ridge capping removal, re-bedding and full repointing in flexible pointing compound',
      'Replacement of corroded metal roof sheeting, flashings, cappings and valley irons',
      'Box gutter, gutter and downpipe rectification',
      'Roof penetrations resealed',
      'Roof surface pressure cleaned and recoated to extend service life',
    ],
    projectSlugs: ['surry-hills-devonshire-st-roof', 'ingleburn-industrial-roof-facade'],
    faqs: [
      {
        q: 'How do you find the leak?',
        a: 'We start with a roof inspection and water testing to locate the active source before we quote the repair.',
      },
      {
        q: 'Do you work on both tiled and metal roofs?',
        a: 'Yes. Tile replacement, ridge re-bedding and repointing on tiled roofs, and metal sheeting, flashings and box gutter works on metal roofs.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'facade-works',
    h1: 'Facade repairs and remediation',
    summary: 'Restore the building envelope with sealants and concrete repair.',
    metaTitle: 'Facade Repairs & Remediation Sydney | Elko Projects',
    metaDescription:
      'Facade repairs and remediation in Sydney: water ingress investigation, joint and penetration sealants, structural and concrete repair, rope access and EWP.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Facade repairs and remediation to restore the building envelope. We investigate water ingress with flood testing, replace failed sealants to panel joints, window perimeters and penetrations, and carry out structural and concrete repairs — accessed by rope access and EWP where needed.',
    included: [
      'Water ingress investigation and flood testing',
      'Removal and replacement of failed sealants to panel joints, window perimeters and penetrations',
      'Rope access and elevated work platform (EWP) delivery',
      'Building and heritage restoration',
      'Structural and concrete repairs',
    ],
    projectSlugs: ['ingleburn-industrial-roof-facade'],
    faqs: [
      {
        q: 'How do you access high-level facades?',
        a: 'By rope access and elevated work platforms (EWP), with a site-specific WHS management plan and SWMS for the works.',
      },
      {
        q: 'Do you carry out heritage facade restoration?',
        a: 'Yes. We deliver building and heritage restoration alongside structural and concrete repair.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'waterproofing',
    h1: 'Waterproofing remediation',
    summary: 'Remove failed membranes, re-fall and waterproof to AS 4654.2.',
    metaTitle: 'Waterproofing Remediation Sydney | Elko Projects',
    metaDescription:
      'Waterproofing remediation in Sydney: investigation and flood testing, removal of failed membranes, new falls, AS 4654.2 membranes, sealants and drainage.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Waterproofing remediation for balconies, podiums and wet areas. We investigate and flood test to find the failure, remove failed membranes and screeds, re-establish falls, and install a waterproofing system to AS 4654.2.',
    included: [
      'Investigation and flood testing to confirm the point of failure',
      'Removal of failed membranes and screeds',
      'New falls established',
      'Waterproofing membranes installed to AS 4654.2',
      'Perimeter and penetration sealants',
      'Rectification of drainage outlets',
    ],
    projectSlugs: ['willoughby-balcony-remediation'],
    faqs: [
      {
        q: 'What is AS 4654.2?',
        a: 'It is the Australian Standard for external above-ground waterproofing. Our remediation membranes are installed to comply with it.',
      },
      {
        q: 'Do you flood test before quoting?',
        a: 'Yes. We investigate and flood test to confirm the real point of failure before we scope the works.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'strata-works',
    h1: 'Strata remedial works',
    summary: 'Class 2 common-property rectification, documented for the committee.',
    metaTitle: 'Strata Remedial Builder Sydney | Class 2 | Elko Projects',
    metaDescription:
      'Class 2 strata remedial builder, Sydney: balconies, roofs, facades, waterproofing, structural repair and insurance make-good, with committee documentation.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Strata remedial works managed around residents and the committee. As a Class 2 registered builder we deliver balcony, roof, facade and waterproofing rectification, structural and concrete repair and insurance make-good, with the documentation your committee and strata manager need.',
    included: [
      'Class 2 registered (General, Unrestricted)',
      'Balcony, roof, facade and waterproofing rectification',
      'Structural and concrete repair',
      'Insurance make-good and reinstatement',
      'Strata compliance and documentation for the committee and strata manager',
      'Access logistics managed around residents',
    ],
    projectSlugs: ['willoughby-balcony-remediation'],
    faqs: [
      {
        q: 'Are you registered for Class 2 (apartment) buildings?',
        a: 'Yes. Our Building Practitioner registration is General (Unrestricted), which covers remedial works on Class 2 buildings.',
      },
      {
        q: 'Do you prepare documentation for the committee and insurer?',
        a: 'Yes. We prepare scopes and documentation for insurance reinstatement and for the strata committee and manager.',
      },
      {
        q: 'How do you manage access and residents?',
        a: 'We stage works, communicate schedules in advance, and coordinate access with the committee and strata manager to keep disruption to a minimum.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'restorations',
    h1: 'Restorations and insurance works',
    summary: 'Heritage, structural and insurance make-good after damage.',
    metaTitle: 'Building Restoration & Insurance Works Sydney | Elko Projects',
    metaDescription:
      'Building restoration and insurance works, Sydney: heritage restoration, structural and concrete repair, and fire, impact and storm make-good.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Restoration and insurance works. We carry out building and heritage restoration, structural and concrete repair, and make-good and reinstatement after fire, impact or storm damage, with scopes and documentation prepared for insurers.',
    included: [
      'Building and heritage restoration',
      'Structural and concrete repair',
      'Fire, impact and storm damage reinstatement',
      'Insurance make-good and reinstatement',
      'Water ingress remediation',
    ],
    projectSlugs: [],
    faqs: [
      {
        q: 'Do you work with insurers?',
        a: 'Yes. We prepare scopes and documentation for insurance reinstatement and make-good.',
      },
      {
        q: 'Are the directors involved in restoration projects?',
        a: 'Yes. Both directors are personally involved in every project, from the first site visit to final handover.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'windows',
    h1: 'Window leak repairs and resealing',
    summary: 'Trace the leak and reseal window perimeters and penetrations.',
    metaTitle: 'Window Leak Repairs & Resealing Sydney | Elko Projects',
    metaDescription:
      'Window leak repairs and resealing in Sydney: leak tracing, window perimeter sealant replacement, penetration sealing, rope access and EWP.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Window leak repairs and resealing. We trace the leak, replace failed window-perimeter sealants, seal penetrations, and access upper levels by rope access and EWP.',
    included: [
      'Leak tracing to locate the source',
      'Replacement of failed window perimeter sealants',
      'Penetration sealing',
      'Rope access and elevated work platform (EWP) access',
    ],
    projectSlugs: ['ingleburn-industrial-roof-facade'],
    faqs: [
      {
        q: 'How do you find a window leak?',
        a: 'We trace the leak to its source before scoping the repair, so we reseal the right joints rather than guessing.',
      },
      {
        q: 'Can you reach upper-level windows?',
        a: 'Yes. We use rope access and elevated work platforms (EWP), with a site-specific WHS management plan and SWMS.',
      },
    ],
    image: '/images/remedial-facade.jpg',
  },
  {
    slug: 'compliance-inspections-rectifications',
    h1: 'Compliance inspections and rectifications',
    summary: 'Inspect, report in 48–72 hours, then rectify what we find.',
    metaTitle: 'Building Compliance Inspections & Rectification Sydney | Elko Projects',
    metaDescription:
      'Building compliance inspections and rectification, Sydney: defect identification, 48–72 hour reports and rectification by the same team.',
    eyebrow: 'Remedial & Strata',
    intro:
      'Compliance inspections and rectifications. Our sister business, Elko Building Inspections, identifies defects through a four-step process and delivers a report within 48–72 hours — and Elko Projects can carry out the rectification works identified.',
    included: [
      'Elko Building Inspections four-step process: call to book, fee proposal, site visit and consultation, report',
      'Report delivered within 48–72 hours',
      'Defect identification and documented rectification scope',
      'Rectification works carried out by Elko Projects',
    ],
    projectSlugs: [],
    relatedLink: { href: '/building-inspections', label: 'Elko Building Inspections' },
    faqs: [
      {
        q: 'How quickly do I get the inspection report?',
        a: 'Most reports are delivered within 48 to 72 hours of the inspection.',
      },
      {
        q: 'Can you fix what the inspection finds?',
        a: 'Yes. Elko Building Inspections identifies the defects and Elko Projects can carry out the rectification works.',
      },
    ],
    image: '/images/building-inspection.jpg',
  },
]

export function getRemedialPage(slug: string) {
  return remedialPages.find((p) => p.slug === slug)
}
