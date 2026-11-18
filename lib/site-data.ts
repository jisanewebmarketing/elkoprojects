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

// "How we deliver" stages (spec Phase 8): Consultation, Design, Construct,
// Handover. Shown on the homepage and About; the full /our-process page carries
// the longer descriptions.
export const process = [
  { title: 'Consultation', body: 'We determine scope, requirements and expectations, and qualify the project before committing.' },
  { title: 'Design', body: 'We work with architects, engineers and consultants to a design that is achievable within budget, catching buildability issues early.' },
  { title: 'Construct', body: 'Meticulous site management, weekly client reporting, documented variations and early procurement.' },
  { title: 'Handover', body: 'Defect walks with a director, complete handover documentation and client satisfaction.' },
]
