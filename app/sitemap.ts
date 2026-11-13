import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { remedialPages } from '@/content/remedial'
import { residentialPages } from '@/content/residential'
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
    '/tools',
    '/insights',
    '/privacy-policy',
    '/terms-of-use',
  ]

  const servicePaths = services.flatMap((s) => [
    `/${s.slug}`,
    ...(s.items ?? []).map((i) => `/${s.slug}/${i.slug}`),
  ])

  const remedialPaths = remedialPages.map((p) => `/remedial/${p.slug}`)
  const residentialPaths = residentialPages.map((p) => `/residential/${p.slug}`)

  return [...staticPaths, ...servicePaths, ...remedialPaths, ...residentialPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
