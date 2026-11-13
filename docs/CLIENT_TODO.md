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
- [ ] **Rate ranges** if the renovation / granny-flat cost estimators are wanted
      (Phase 14). Until supplied, any estimator stays behind a feature flag.

## Legal

- [ ] Legal review of the **Privacy Policy** and **Terms of Use** before go-live
      (both carry a "Draft — client to have legal review before go-live" banner).

## Approvals

- [ ] Director approval of all **Insights FAQs** (Phase 10, each flagged
      `reviewed: false` until approved).

---

## Build / environment notes (for developers)

- `NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS` — set to `true` on staging to show the
  unconfirmed headline stats and the turnover slot; leave unset/`false` on
  production until the client signs the numbers off. See `.env.example`.
- Unconfirmed stats live in `content/company.ts` (`stats`, `turnover`) with a
  `confirmed` flag each; the homepage stats band, the reviews heading and the
  hero director badge all degrade gracefully when a stat is unconfirmed and the
  flag is off.
