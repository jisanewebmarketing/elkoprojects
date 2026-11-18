// Short vertical (9:16) on-site reels supplied by the client. Served from
// /public/videos (compressed for web; originals were ~20 MB phone footage).
// Each has a poster frame so nothing autoplays before it is in view.

export type Reel = {
  src: string
  poster: string
  location: string
  title: string
  blurb: string
}

export const reels: Reel[] = [
  {
    src: '/videos/randwick-reel.mp4',
    poster: '/videos/randwick-reel.jpg',
    location: 'Randwick',
    title: 'Full home renovation',
    blurb: 'Light-filled kitchen and living, with custom joinery and herringbone oak floors.',
  },
  {
    src: '/videos/bronte-reel.mp4',
    poster: '/videos/bronte-reel.jpg',
    location: 'Bronte',
    title: 'Coastal home renovation',
    blurb: 'From a pass over the coast to the finished interiors and tiled bathrooms, near Bronte beach.',
  },
]
