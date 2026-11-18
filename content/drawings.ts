// Phase 12 — Drawings showcase (CONFIDENTIAL). Scaffold only.
//
// ┌──────────────────────────────────────────────────────────────────────────┐
// │  DO NOT COMMIT ORIGINAL DRAWINGS.                                          │
// │  Every image added here must first have all names, addresses,             │
// │  consultants, logos, title blocks, QR codes and stamps BLACKED OUT        │
// │  (not blurred alone) and be FLATTENED to a PNG/WebP. Each redacted image  │
// │  must be signed off by the client before it is committed, and the         │
// │  sign-off tracked in docs/CLIENT_TODO.md.                                  │
// └──────────────────────────────────────────────────────────────────────────┘
//
// The /projects/design-and-documentation route renders the lightbox gallery
// ONLY when this list is non-empty; until then it returns 404 and is kept out
// of the sitemap. To publish, drop the approved image(s) in
// /public/images/drawings/ and add an entry below.

export type ApprovedDrawing = {
  /** Path under /public, e.g. '/images/drawings/balcony-detail.webp' */
  image: string
  /** Short alt/caption — no client names, addresses or consultant details. */
  caption: string
  /** Optional grouping, e.g. 'Remedial', 'Residential'. */
  category?: string
  /** Natural pixel dimensions of the flattened image (for layout). */
  width: number
  height: number
}

// Empty until the client signs off redacted, flattened drawings.
export const approvedDrawings: ApprovedDrawing[] = []
