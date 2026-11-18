# Client TODO — Elko Projects website

Items the client (Elko Projects) must confirm or supply. Nothing on this list is
invented in the site: wherever a fact is missing it is rendered as a marked
placeholder (`{/* TODO(client) */}`) or gated behind a feature flag, per the
build spec ground rule #2.

Source of truth: `docs/ELKO_BUILD_SPEC.md` section 1.

---

## Must confirm before go-live

- [ ] **Headline numbers.** Confirm years of experience (**22+** combined vs 21+),
      project count (**100+** vs the older capability statement's 30+), and
      **"50+ five-star reviews"**. These are gated behind
      `NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS` (on for staging, off for production)
      and marked `confirmed: false` in `content/company.ts`. Flip `confirmed: true`
      per stat once signed off.
- [ ] **"$5M+ annual turnover"** — confirm the exact wording to display. Currently
      a gated placeholder in `content/company.ts` (`turnover`). Note: a business
      with >$3M annual turnover is **not** covered by the Privacy Act small
      business exemption (see Phase 15 / `/privacy-policy`).
- [ ] **"Class 2B" wording.** Registration is **General (Unrestricted)**, Class 2
      capable — not "Class 2B". The old "Class 2B unrestricted" wording has been
      removed from the site; confirm there is no other collateral still using it.

## Photography & media

- [ ] Director headshots (Elias Nader, Marko Bratkovic) — professional photos
      coming. Placeholders used in `components/directors-section.tsx` / About.
- [ ] Team shots, branded-shirt photos, project photos and videos.
  - [x] Two client site reels added (Randwick, Bronte) — shown in the vertical
        "Straight from our sites" / "On site, in motion" sections on the homepage
        and `/projects`. Web-compressed copies live in `/public/videos`; the
        ~20 MB originals were not committed. More reels can be added in
        `content/reels.ts`.
- [ ] Project photos for: Willoughby, Ingleburn, Surry Hills (remedial), Potts
      Point apartment, Monsignor John Peoples Units. Currently placeholder images.
- [ ] Scope-of-works note per chosen photo for each project (for the Phase 11
      `/projects/[slug]` detail template `{ image, caption, scope }` array).

## Content to supply

- [ ] **Monsignor John Peoples Units (Five Dock):** scope and photos (name only so far).
- [ ] Scope lines for St Ives, Dural, Rhodes, The Osborne, Yowie Bay, Sylvania,
      Potts Point (currently one-liners from the source of truth).
- [ ] **Elko Building Inspections Instagram handle** (`content/company.ts`
      `inspectionsInstagram` currently points at the main @elko.projects account)
      and any pricing to show on `/building-inspections`.
- [ ] **Safety documents** approved for public download (Dropbox). Do not upload
      until the client confirms which documents can be public (Phase 9).
- [ ] **Redacted drawings** for the Phase 12 drawings showcase — each image
      blacked-out (not blurred), flattened to PNG/WebP, and **signed off** before
      it is committed. Track sign-off here:
  - [ ] (none supplied yet)
      The showcase is already scaffolded: drop approved images in
      `/public/images/drawings/` and add an entry to `content/drawings.ts`. The
      `/projects/design-and-documentation` page and its sitemap entry turn on
      automatically once that list is non-empty (it 404s while empty).
- [ ] **Rate ranges** — the invented-rate cost estimator was **removed** (ground
      rule #2). If renovation / granny-flat estimators are wanted (Phase 14),
      supply real client rate ranges and they can be rebuilt. The pricing-free
      `/tools` page (strata levy calculator, warranty checker, inspection
      finder) was **deleted at the client's request**.

## Legal

- [x] Legal review of the **Privacy Policy** (`/privacy-policy`) and the
      **Terms of Use** (`/terms-of-use`) — **reviewed 18 Nov 2026**. The visible
      "Draft for review" banner on the Terms page has been removed.
- [ ] **Privacy Policy — confirm items** (carried as `TODO(client)` in
      `app/privacy-policy/page.tsx`):
  - [ ] Section 5 (overseas disclosure): list the countries for the service
        providers Elko actually uses.
  - [ ] Section 6 (advertising): remove any advertising tools (Google Ads / Meta)
        not actually installed at launch.
  - [ ] Section 7 (retention): confirm Elko's retention period.
  - [ ] Confirm the office address shown (Level 1, Unit D, 19/21 Loyalty Rd,
        North Rocks NSW 2151) and the "last updated" date.

## Approvals

- [ ] Director approval of all **Insights FAQs** (Phase 10, each flagged
      `reviewed: false` until approved).
- [ ] **Verify figures in the published service FAQs** (`content/faqs.ts`) before
      go-live: the building-inspection price ("from **$600 + GST**") and the
      stated timeframes (one-bedroom unit turnover in **5–6 weeks**, commercial
      refurbishment in a **~5-week staged period**). These come from the client's
      FAQ document; confirm they are current.
- [ ] Optional SEO enhancement (client doc's implementation notes): add inline
      internal links inside FAQ answers (e.g. "balcony remediation" →
      `/remedial/balcony-works`, "free site visit" → `/book-a-consultation`).
      Deferred — answers currently render as plain text.

---

## Book a consultation form & legal (Phases 13 / 15)

- [ ] **Terms of Use** (`/terms-of-use`) is a drafted starting point and must be
      reviewed by Elko's lawyer before go-live (it carries a visible "Draft for
      review" banner). It governs website use only — not the building contract.
- [ ] **Confirm the enquiry destination inbox.** Submissions from
      `/book-a-consultation` email to `CONTACT_EMAIL` (defaults to
      `admin@elkoprojects.com.au`). Confirm the address and the From address.
- [ ] Decide whether the enquirer confirmation email copy is acceptable
      (`app/book-a-consultation/actions.ts`).

## Build / environment notes (for developers)

- **Consultation form email (Resend).** `/book-a-consultation` posts to a server
  action (`app/book-a-consultation/actions.ts`) that emails the office and the
  enquirer via the Resend REST API. Set `RESEND_API_KEY` (and a verified sending
  domain) in production, plus optional `CONTACT_EMAIL` / `CONTACT_FROM_EMAIL` —
  see `.env.example`. Without the key the form still returns success but sends no
  email (safe for staging; it `console.warn`s). Protections: honeypot field,
  per-IP in-memory rate limit, attachment allow-list (PDF/JPG/PNG, ≤5, ≤10 MB).
  The old invented-rate "cost estimator" was removed (ground rule #2).
- `NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS` — set to `true` on staging to show the
  unconfirmed headline stats and the turnover slot; leave unset/`false` on
  production until the client signs the numbers off. See `.env.example`.
- Unconfirmed stats live in `content/company.ts` (`stats`, `turnover`) with a
  `confirmed` flag each; the homepage stats band, the reviews heading and the
  hero director badge all degrade gracefully when a stat is unconfirmed and the
  flag is off.

## Phase 17 — QA pass (automated checks, 18 Nov 2026)

Run against a production build (`pnpm build && pnpm start`), crawling all
internal links from the homepage (53 routes):

- **Broken links:** none. Every linked page returns 200.
- **Titles / descriptions:** all unique; descriptions ≤160 chars; titles within
  SERP length (≤~60 rendered).
- **JSON-LD:** every `application/ld+json` block parses (Organization, WebSite,
  BreadcrumbList, Service, FAQPage, CreativeWork).
- **Confidential route:** `/projects/design-and-documentation` correctly 404s
  while `content/drawings.ts` is empty, and is excluded from the sitemap.
- `tsc --noEmit` clean; `next build` clean.

Still to do with the client before go-live (manual):
- [ ] Lighthouse ≥ 90 (Performance / A11y / Best Practices / SEO) on staging
      for the homepage and one page per template.
- [ ] End-to-end form test with `RESEND_API_KEY` set — confirm the office and
      the enquirer both receive the email, including an attachment.
- [ ] Review this whole file with the client and switch `NEXT_PUBLIC_SHOW_
      UNCONFIRMED_STATS` on only once the numbers are signed off.
