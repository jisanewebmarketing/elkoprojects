import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { residentialPages } from '@/content/residential'
import { commercialPages } from '@/content/commercial'
import { remedialPages } from '@/content/remedial'
import { projects } from '@/content/projects'
import { approvedDrawings } from '@/content/drawings'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPaths = [
    '/',
    '/about-us',
    '/our-process',
    '/safety',
    '/contact-us',
    '/book-a-consultation',
    '/projects',
    '/display-units',
    '/insights',
    '/privacy-policy',
    '/terms-of-use',
  ]

  // Service hubs (each served by a dedicated route).
  const hubPaths = services.map((s) => `/${s.slug}`)

  // Dedicated sub-pages (canonical slugs).
  const subPaths = [
    ...residentialPages.map((p) => `/residential/${p.slug}`),
    ...commercialPages.map((p) => `/commercial/${p.slug}`),
    ...remedialPages.map((p) => `/remedial/${p.slug}`),
  ]

  const projectPaths = projects.map((p) => `/projects/${p.slug}`)

  // Phase 12: only list the drawings showcase once approved images exist.
  const drawingsPath = approvedDrawings.length > 0 ? ['/projects/design-and-documentation'] : []

  return [...staticPaths, ...hubPaths, ...subPaths, ...projectPaths, ...drawingsPath].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
