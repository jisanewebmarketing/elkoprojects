// Elko Projects — Building Inspections page (spec Phase 7).
// Elko Building Inspections is the sister business. Copy is sourced from
// docs/ELKO_BUILD_SPEC.md §1 and the client FAQ document. Pricing ("from
// $600 + GST") is client-supplied. FAQs live in content/faqs.ts
// ('building-inspections'). Instagram handle is still TODO(client).

export const buildingInspections = {
  eyebrow: 'Elko Building Inspections',
  title: 'Building Inspections',
  intro:
    'Inspections carried out by licensed, qualified builders who build and rectify properties every week — so we don’t just find defects, we know what each one costs to fix. Every issue is ranked by priority.',
  image: '/images/building-inspection.jpg',

  // Six core inspection types (spec Phase 7).
  types: [
    {
      title: 'Pre-construction',
      body: 'Records the condition of your property, and often neighbouring properties, before works start — dated evidence if damage is later alleged.',
    },
    {
      title: 'Post-construction',
      body: 'Confirms the quality of finished work before final payment and handover.',
    },
    {
      title: 'Pre-lease',
      body: 'Documents a property’s condition before a tenancy begins, protecting both landlord and tenant.',
    },
    {
      title: 'Post-lease',
      body: 'Records condition at the end of a tenancy, for a clear comparison against the pre-lease report.',
    },
    {
      title: 'Pre-purchase',
      body: 'Know what you are buying — a builder-led report ranking defects before you commit to a purchase.',
    },
    {
      title: 'Post-purchase',
      body: 'A condition record after settlement, with defects documented and ranked by priority.',
    },
  ],

  // Additional report types we also provide (client FAQ).
  alsoAvailable: ['Dilapidation reports', 'Pre-renovation condition reports', 'Handover inspections'],

  // The four-step process (source of truth §1).
  process: [
    { title: 'Call to book', body: 'Call or submit the form to book your inspection.' },
    { title: 'Fee proposal', body: 'We send a clear fee proposal for the inspection you need.' },
    { title: 'Site visit & consultation', body: 'A licensed builder attends the property and talks through what they find.' },
    { title: 'Report', body: 'You receive the report within 48–72 hours, with every defect ranked by priority.' },
  ],

  reportTurnaround: '48–72 hours',
  priceNote: 'from $600 + GST',

  fixWhatWeFind: {
    title: 'We can fix what we find',
    body: 'Elko Building Inspections identifies the defects, and our sister business Elko Projects can carry out the rectification works. Because the scope is written by builders, it translates directly into a priced, buildable repair — with no gap between the report and the repair.',
    href: '/remedial/compliance-inspections-rectifications',
  },
}
