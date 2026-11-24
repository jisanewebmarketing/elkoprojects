/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimize + serve responsive AVIF/WebP (Vercel Image Optimization).
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400, // 31 days
  },
  async redirects() {
    return [
      // Residential slugs renamed in Phase 3.
      { source: '/residential/complete-renovations', destination: '/residential/complete-house-renovations', permanent: true },
      { source: '/residential/new-home-builds', destination: '/residential/custom-home-new-builds', permanent: true },
      // Projects moved from /completed-projects to /projects in Phase 11.
      { source: '/completed-projects', destination: '/projects', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
