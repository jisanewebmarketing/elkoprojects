// Backward-compatible re-export shim.
// The canonical, typed content layer now lives in content/*.ts (spec ground rule
// #4). Existing imports from '@/lib/site-data' keep working via these re-exports.
// Prefer importing from '@/content/*' directly in new code.

export {
  company,
  contact,
  credentials,
  credentialsStrip,
  licensing,
  complianceRecord,
  mission,
  values,
  foundations,
  commitments,
  serviceAreas,
  directors,
  stats,
  turnover,
  statVisible,
  showUnconfirmedStats,
  reviewsHeadline,
  combinedExperienceLine,
  reviews,
} from '@/content/company'
export type { Director, Stat } from '@/content/company'

export { services, getService } from '@/content/services'
export type { Service, SubService } from '@/content/services'

export { projects, getProject } from '@/content/projects'
export type { Project, ProjectCategory, ProjectType } from '@/content/projects'

export { mainNav, footerLegal, serviceLines, aboutLinks } from '@/content/navigation'
export type { NavItem, NavLink } from '@/content/navigation'

// Homepage "how we deliver" steps. Spec Phase 8 revises these labels to
// Consultation / Design / Construct / Handover and relocates them.
export const process = [
  { title: 'Analyse & qualify', body: 'We meet on site to understand scope, budget and timeline, and qualify the project before committing.' },
  { title: 'Design & budget', body: 'Our consultants, engineers and architects produce a design within a realistic, documented budget.' },
  { title: 'Review & approve', body: 'We review for buildability, cost and programme. Nothing starts without your sign-off.' },
  { title: 'Build & hand over', body: 'Weekly reporting, director-led site control and a defect walk with both directors before completion.' },
]
