// Short vertical (9:16) on-site reels supplied by the client. Served from
// /public/videos (compressed for web; originals were ~20 MB phone footage).
// Each has a poster frame so nothing autoplays before it is in view.

export type Reel = {
  src: string
  poster: string
  location: string
  title: string
  blurb: string
  /** Optional accent badge, e.g. 'Before & after'. */
  tag?: string
}

export const reels: Reel[] = [
  {
    src: '/videos/before-after-reel.mp4',
    poster: '/videos/before-after-reel.jpg',
    location: 'Randwick',
    title: 'Before & after',
    blurb: 'From stripped-back structure to a finished home — a director walks the Randwick transformation.',
    tag: 'Before & after',
  },
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
  {
    src: '/videos/demolition.mp4',
    poster: '/videos/demolition.jpg',
    location: 'On site',
    title: 'Stripping back',
    blurb: 'Opening up a doorway — the structural graft behind every renovation.',
  },
  {
    src: '/videos/five-dock-kitchen.mp4',
    poster: '/videos/five-dock-kitchen.jpg',
    location: 'Five Dock',
    title: 'Kitchen takes shape',
    blurb: 'Setting out a new kitchen on a Five Dock renovation.',
  },
  {
    src: '/videos/a-day-on-site.mp4',
    poster: '/videos/a-day-on-site.jpg',
    location: 'On site',
    title: 'A day on site',
    blurb: 'A look at how much goes into a single day on a live build.',
  },
]
