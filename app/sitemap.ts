import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { residentialPages } from '@/content/residential'
import { commercialPages } from '@/content/commercial'
import { remedialPages } from '@/content/remedial'
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
    '/completed-projects',
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

  return [...staticPaths, ...hubPaths, ...subPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
