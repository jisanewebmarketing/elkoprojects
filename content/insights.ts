// Elko Projects — Insights hub (spec Phase 10).
// Seeds five FAQs per category from the client-approved FAQ sets in
// content/faqs.ts. `reviewed` is true because this content is client-supplied;
// any future, Elko-generated answers should be added with reviewed:false until
// the directors approve them.

import { faqsByKey, type Faq } from './faqs'

export type InsightCategory = {
  key: string
  label: string
  intro: string
  reviewed: boolean
  faqs: Faq[]
}

export const insightsCategories: InsightCategory[] = [
  {
    key: 'residential',
    label: 'Residential',
    intro: 'Renovating, extending or building a home in Sydney.',
    reviewed: true,
    faqs: faqsByKey['residential'],
  },
  {
    key: 'commercial',
    label: 'Commercial',
    intro: 'Office, hospitality, medical and retail fit outs.',
    reviewed: true,
    faqs: faqsByKey['commercial'],
  },
  {
    key: 'remedial',
    label: 'Remedial & Strata',
    intro: 'Balconies, roofs, facades, waterproofing and strata works.',
    reviewed: true,
    faqs: faqsByKey['remedial'],
  },
  {
    key: 'new-builds',
    label: 'New Builds',
    intro: 'Custom homes, knockdown rebuilds and design-and-construct.',
    reviewed: true,
    faqs: faqsByKey['residential/custom-home-new-builds'],
  },
  {
    key: 'inspections',
    label: 'Inspections',
    intro: 'Builder-led building and compliance inspections.',
    reviewed: true,
    faqs: faqsByKey['building-inspections'],
  },
]
