# Elko Projects: website build spec

**Repo:** github.com/jisanewebmarketing/elkoprojects
**Staging:** https://elkoprojects.ewebmarketing.dev
**Reference sites (structure and UX only, never copy their text):** pipermoss.com.au, engageconstruction.com.au (insights + discovery form), scion.com.au/contact, kongstruction.com.au (project detail page)

Put this file in the repo at `docs/ELKO_BUILD_SPEC.md` and work through it phase by phase.

---

## 0. Ground rules (apply to every phase)

1. **Australian English** throughout (renovation, colour, organise, licence (noun), metres).
2. **No invented facts.** Every figure, project, credential and claim must come from section 1 (Source of truth). If something is missing, render a clearly marked placeholder (`{/* TODO(client): ... */}`) and add it to `docs/CLIENT_TODO.md`. Never invent prices, rates, timeframes, review quotes, project values or statistics.
3. **Reuse the existing design system.** Before building, audit the repo and reuse the existing layout, components, tokens and the service sub-page template (e.g. the one behind `/commercial/office-fit-outs-renovations`). Add no new colours or fonts.
4. **Content lives in data, not JSX.** Create or extend a typed content layer (e.g. `content/services.ts`, `content/projects.ts`, `content/faqs.ts`, `content/company.ts`) and render pages from it, so the client's later copy and photo updates are one-file edits.
5. **Confidentiality:** never commit architectural or structural drawings, or any file containing client names, addresses or consultant title blocks, to the repo. See Phase 12.
6. **Primary CTA everywhere:** "Book a free site visit & quote" → `/book-a-consultation`.
7. **Every page needs:** a unique `<title>` and meta description, canonical, Open Graph, breadcrumb, and JSON-LD (`Service`/`WebPage` + `BreadcrumbList`, plus `FAQPage` where FAQs exist). Update `sitemap.xml` and `robots`.
8. Work on a branch per phase, run `lint` + `build` before each commit, and open a PR per phase.

---

## 1. Source of truth (from client files)

### Company
- Elko Projects Pty Ltd · ABN 33 658 065 822 · founded March 2022 by Elias Nader and Marko Bratkovic · privately owned, director-led · Greater Sydney, NSW
- admin@elkoprojects.com.au · Elias 0423 334 792 · Marko 0430 646 447
- Socials: Instagram @Elko.Projects · facebook.com/ElkoProjectsPtyLtd · linkedin.com/company/elko-projectsptyltd · TikTok @elko.projects
- Sister business: **Elko Building Inspections**. Process: call to book → fee proposal → site visit and consultation → report within 48–72 hours → Elko Projects can carry out identified works. Instagram handle: `TODO(client)`.

### Licences, registration, insurance
- NSW Contractor Licence 385208C
- Building Practitioner, Body Corporate: BUP4254517, General (Unrestricted), under the Design and Building Practitioners Act 2020 (NSW), issued by Building Commission NSW, 9 Sep 2025 – 8 Sep 2030
- Licensed for remedial works, renovations and new builds, including Class 2
- $20 million public liability (QBE) · Home Owner's Warranty approved
- Master Builders Association (full member) · HIA (member and insured)
- Site-specific WHS management plans and SWMS for every project

### Headline numbers (⚠️ client to confirm before go-live; see CLIENT_TODO)
- 22+ years combined experience
- 100+ projects delivered (an older capability statement says 30+)
- 50+ five-star reviews across Google, Facebook and HiPages
- "$5M+ annual turnover": client wants this signalled. Exact wording `TODO(client)`.

### Compliance record
Zero NCAT cases · Zero EPA breaches · No stop work orders · No court cases · No injury-related delays · No cross-project funding (ring-fenced budget per project)

### Values and method
- Mission: "To redefine the standard of construction delivery through director-led accountability, financial transparency, and an unwavering commitment to quality that protects the interests of every client, on every project, without exception."
- Values: Accountability · Integrity · Relationships
- Five Foundations: director-led delivery · financial integrity · complete compliance · controlled project selection · end-to-end management
- Client commitments: weekly client reporting · variations documented, costed and approved before work proceeds (no verbal variations) · early procurement planning · defect walks before completion

### Areas served
Sutherland Shire · Bayside · Randwick · Waverley · Mosman · Woollahra · Lane Cove · Hunters Hill · Willoughby · Northern Beaches · City of Sydney · Inner West · Canada Bay · Ryde · Ku-ring-gai · The Hills

### Directors
- **Elias Nader**, Co-Founder & Operations Director. B. Construction Management (Construction Economics), M. Project Management (Construction), Western Sydney University. Licensed Builder, Building Practitioner, MBA member. 10+ years across residential, commercial, industrial and government construction, including Sydney Metro and private aged care and retirement living. Leads pre-construction, budgets, proposals and cost control.
- **Marko Bratkovic**, Co-Founder & Construction Director. B. Construction Management. 10+ years across residential, commercial and government construction, including data centres, private aged care and retirement living, and major retail fitouts (Erina Fair, Westfield). Leads live delivery, site operations, trade coordination, QA, defects and handover.
- Headshots: `TODO(client)` (professional photos coming)

### Projects
| Slug | Name | Type | Status | Scope source |
|---|---|---|---|---|
| willoughby-balcony-remediation | Balcony Remediation, Willoughby City Council | Remedial | Complete 2026 | Full text (Remedial PDF) |
| ingleburn-industrial-roof-facade | Industrial Roof & Façade Repairs, Ingleburn | Remedial | Complete 2025 | Full text |
| surry-hills-devonshire-st-roof | Devonshire St Roof Repairs, Surry Hills | Remedial | Complete 2023 | Full text |
| st-ives-renovation | St Ives full home renovation with structural alterations | Residential | Complete | One line, `TODO(client)` scope |
| dural-renovation | Dural high-end full home renovation | Residential | Complete | One line |
| rhodes-office-fitout | Rhodes corporate office fitout | Commercial | Complete | One line |
| the-osborne-lane-cove | The Osborne display suite, Lane Cove (engaged by Scion for Winim) | Display Units | Complete | One line |
| yowie-bay-new-home | Yowie Bay bespoke new home | New build | Live | One line |
| sylvania-duplex | Sylvania luxury duplex | Duplex | Live | One line |
| potts-point-apartment | Potts Point luxury apartment transformation (with Sokkar Group) | Apartment | Live | One line |
| monsignor-john-peoples-units | Monsignor John Peoples Units, Five Dock | Retirement Living | Current | Name only, `TODO(client)` |

Full case-study text for the three remedial projects:
- **Willoughby (2026):** Full balcony remediation comprising demolition of existing tiles, screed and failed membranes back to the structural slab. Concrete cancer and spalling were rectified by breaking out delaminated concrete, treating corroded reinforcement and reinstating with polymer-modified repair mortar. New falls were established before installing a compliant waterproofing membrane system to AS 4654.2, followed by tiling, perimeter sealants and rectification of overflows and drainage outlets.
- **Ingleburn (2025):** Water ingress investigation including flood testing and leak tracing to identify failure points across the roof and building envelope. Roof works comprised replacement of corroded metal roof sheeting, new flashings and cappings, and box gutter and downpipe rectification to restore effective stormwater discharge. Façade works were delivered via rope access and EWP, including removal and replacement of failed sealants to panel joints, window perimeters and penetrations.
- **Surry Hills (2023):** Roof condition inspection and water testing to locate active leak sources. Works included replacement of cracked and broken roof tiles, removal and re-bedding of ridge capping with full repointing in flexible pointing compound, and replacement of deteriorated flashings and valley irons. Gutters and downpipes were renewed, roof penetrations resealed, and the roof surface pressure cleaned and recoated to restore full watertightness and extend service life.

---

## Phase 1: Global shell

- **Mega-menu nav** (desktop + mobile), Piper Moss style, each item with a one-line description:
  Residential · Commercial · Remedial & Strata · Display Units · Retirement Living · Building Inspections · Projects · Tools · About (About Us, Our Process, Safety) · Insights · Contact
- **Header CTA:** "Free site visit & quote".
- **Homepage stats band** under the hero: 22+ years combined · 100+ projects · 50+ five-star reviews · Licensed for Class 2. Drive it from `content/company.ts` with a `confirmed: boolean` flag; render unconfirmed stats only when `NEXT_PUBLIC_SHOW_UNCONFIRMED_STATS=true` (on for staging, off for production until the client signs off). Add a turnover slot ("$5M+ annual turnover") behind the same flag.
- **Reusable `<CredentialsStrip/>`:** licence, BP number, $20M PL, HOW, MBA/HIA, WHS/SWMS.
- **Reusable `<CompliancePanel/>`:** the compliance record list.
- **Footer:** add Privacy Policy, Terms of Use, Safety, ABN, licence number, and the socials above.

## Phase 2: Remedial & Strata (8 sub-pages + hub)

Hub `/remedial`: card grid of all 8, then the existing hub content, `<CredentialsStrip/>` and CTA.

Each sub-page: hero (H1 + intro) → "What's included" → recent project(s) → `<CredentialsStrip/>` → FAQs → CTA.

| Slug | H1 | Meta title | Case studies | Included (from source) |
|---|---|---|---|---|
| balcony-works | Balcony remediation | Balcony Remediation Sydney \| Elko Projects | Willoughby | strip to slab, concrete cancer/spalling repair, reinforcement treatment, polymer-modified repair mortar, new falls, membrane to AS 4654.2, tiling, sealants, overflows and outlets |
| roof-works | Roof repairs and leak rectification | Roof Repairs & Leak Rectification Sydney \| Elko Projects | Surry Hills, Ingleburn | inspection + water testing, tile replacement, ridge capping re-bed and repoint, metal sheeting replacement, flashings/cappings/valley irons, box gutters, gutters, downpipes, penetrations, pressure clean and recoat |
| facade-works | Facade repairs and remediation | Facade Repairs & Remediation Sydney \| Elko Projects | Ingleburn | water ingress investigation, flood testing, panel joint/window perimeter/penetration sealants, rope access and EWP, building and heritage restoration, structural and concrete repairs |
| waterproofing | Waterproofing remediation | Waterproofing Remediation Sydney \| Elko Projects | Willoughby | investigation and flood testing, remove failed membranes/screeds, falls, AS 4654.2 membranes, sealants, drainage outlets |
| strata-works | Strata remedial works | Strata Remedial Builder Sydney \| Class 2 \| Elko Projects | Willoughby | Class 2 registration, balconies, roofs, facades, waterproofing, structural/concrete, insurance make-good, strata compliance and access logistics |
| restorations | Restorations and insurance works | Building Restoration & Insurance Works Sydney \| Elko Projects | none | building and heritage restoration, structural/concrete repair, fire/impact/storm damage, insurance make-good and reinstatement, water ingress remediation |
| windows | Window leak repairs and resealing | Window Leak Repairs & Resealing Sydney \| Elko Projects | Ingleburn (window perimeters) | leak tracing, window perimeter sealant replacement, penetration sealing, rope access/EWP |
| compliance-inspections-rectifications | Compliance inspections and rectifications | Building Compliance Inspections & Rectification Sydney \| Elko Projects | none | Elko Building Inspections 4-step process, 48–72 hr report, Elko Projects carries out works; link `/building-inspections` |

FAQs: 2–3 per page, answered only from section 1 facts (Class 2 registration, rope access/EWP, AS 4654.2 meaning, 48–72 hr reports, director involvement, investigate-before-quote approach). Write the meta descriptions to ≤155 chars from the "Included" column.

## Phase 3: Residential

Hub `/residential` + sub-pages. Keep existing URLs and add the missing ones. Weave the client's keywords naturally into copy: *face lift, refurbishment, makeover, extension, restoration*.

| Slug | H1 | Data available |
|---|---|---|
| complete-apartment-renovations | Complete apartment renovations | Strata apartment transformations with strata compliance and access logistics managed; Potts Point (live, with Sokkar Group) |
| complete-house-renovations (or existing) | Complete house renovations | Full home renovations, kitchens, bathrooms, structural alterations; St Ives, Dural |
| alterations-additions | House alterations & additions | Major and minor extensions, structural alterations, full home additions, seamless integration with existing structures |
| terrace-renovations-extensions | Terrace renovations, alterations & extensions | Covers terraces and city terrace villas. **No project data, so service copy only** |
| townhouse-renovations | Townhouse renovations | **No project data, so service copy only** |
| custom-home-new-builds (existing) | Custom home new builds | Bespoke homes, design and construct via in-house consultant network; Yowie Bay (live) |
| duplexes | Duplex construction | Dual occupancy, design and construct; Sylvania (live) |
| granny-flats (existing) | Granny flats | Secondary dwellings to add value and function |

Every residential page: what's included → relevant projects → "How we protect you" (ring-fenced budget, documented variations, weekly reporting, defect walks) → `<CredentialsStrip/>` → FAQs → CTA.

## Phase 4: Commercial

Verify the existing 5 pages (office, hospitality, medical, refurbishments, shop fitouts). Add Rhodes office fitout as the project on the office page. Add the capability-statement copy point about detailed programming, early procurement of long-lead items and strategic sequencing to protect operating timeframes.

## Phase 5: Display Units (new)

`/display-units`: display suite fit outs for units and houses for developers. Project: The Osborne, Lane Cove (engaged by Scion for Winim). Include a CTA aimed at developers.

## Phase 6: Retirement Living

`/retirement-living`: Renovations & alterations · Refurbishments · Compliance work · Inspection. Support it with the directors' background in private aged care and retirement living. Add Monsignor John Peoples Units, Five Dock as a "Current project" card, with scope `TODO(client)`.

## Phase 7: Building Inspections

`/building-inspections`: six inspection types as cards (pre-construction, post-construction, pre-lease, post-lease, pre-purchase, post-purchase), the 4-step process, the 48–72 hr report, "We can fix what we find", and the Instagram link (`TODO(client)` handle). Pricing: none until the client supplies it.

## Phase 8: Our Process

`/our-process`, using the client's stage names, with descriptions from the capability statement:
1. **Consultation:** determine scope, requirements and expectations; qualify the project.
2. **Design:** work with architects, structural engineers and consultants to a design that's achievable within budget; identify design errors and buildability issues early.
3. **Construct:** meticulous site and project management, weekly client reporting, documented variations, early procurement.
4. **Handover:** defect walks with a director, handover documentation, client satisfaction.

Also update the homepage process section to these four labels.

## Phase 9: Safety (new)

`/safety`: site-specific WHS management plans and SWMS on every project · compliance record panel · licences and insurance · "safety managed proactively" (Marko's site approach). Leave a slot for downloadable policy documents from the client's Dropbox: `TODO(client)`. Do not upload until the client confirms which documents can be public.

## Phase 10: Insights (Engage-style)

`/insights` hub with category filter (Residential, Commercial, Remedial & Strata, New Builds, Inspections) and article/FAQ cards. Seed with **5 FAQs per category** in `content/faqs.ts`. Answers come only from section 1 facts or general process explanations, and each is flagged `reviewed: false` until the directors approve it. Generate `FAQPage` schema per category.

## Phase 11: Projects

- `/projects` grid with filter by category.
- `/projects/[slug]` detail template (Kongstruction style): hero gallery · facts (location, category, year, status, scope tags) · overview · **scope of works per photo** (array of `{ image, caption, scope }`, which the client will write) · outcome · optional client quote · related projects · CTA.
- Populate the three remedial projects in full. Others get facts only plus a "Full case study coming soon" state.

## Phase 12: Drawings showcase (confidential)

- **Do not commit original drawings.** All names, addresses, consultants, logos, title blocks, QR codes and stamps must be blacked out (not blurred alone) and **flattened** to an image (PNG/WebP) before anything goes in `/public`.
- Each redacted image is signed off by the client before it's committed. Track sign-off in `docs/CLIENT_TODO.md`.
- Build `/projects/design-and-documentation` (or a section on project pages) as a lightbox gallery of the approved images only.

## Phase 13: Discovery form

Rebuild `/book-a-consultation` as a multi-step form (Engage-style), fields:
1. Name*, email*, phone*, preferred contact method
2. Project address / suburb*, property type (house, terrace, townhouse, apartment, duplex, commercial, strata building, retirement living)
3. Service category* + sub-service (driven by `content/services.ts`)
4. Scope description*, file upload (plans/photos, max size limit, PDF/JPG/PNG)
5. Budget range, target start date, design status (no plans / concept / DA approved / CDC approved / construction drawings)
6. Owner / strata committee / developer / tenant
7. How did you hear about us
8. Privacy consent checkbox* (link to policy)

Server action → email to admin@elkoprojects.com.au (use the email provider already in the repo, otherwise Resend with `RESEND_API_KEY` env var) + a confirmation email to the user. Add honeypot + rate limiting. The "Free site visit & quote" banner sits at the top of the form. Remove or keep the existing cost estimator per Phase 14.

## Phase 14: Tools menu

Piper Moss-style "Tools" dropdown. **Only build tools that don't need pricing data:**
- **Strata levy share calculator:** the user enters total levy and unit entitlement → their share (pure arithmetic).
- **Home warranty period checker:** NSW statutory warranties under the Home Building Act 1989: 6 years for major defects, 2 years for other defects, from completion. Add a "general information, not legal advice" note.
- **Inspection type finder:** a quiz that routes to the right inspection type.
- **Renovation / granny flat cost estimators:** **blocked** until the client supplies rate ranges. Audit the existing estimator on `/book-a-consultation`. If its rates aren't client-supplied, hide it behind a feature flag and log it in `CLIENT_TODO.md`.

## Phase 15: Legal

- `/privacy-policy`: draft against the Australian Privacy Principles (Privacy Act 1988 (Cth)). Note that a business with more than $3M annual turnover is not covered by the small business exemption. Cover: what's collected (form fields, uploads, cookies/analytics, ad pixels if used), why, storage and security, disclosure (email provider, hosting, analytics), overseas disclosure, access and correction, complaints (contact admin@elkoprojects.com.au, then OAIC), and date of policy.
- `/terms-of-use`: website use, no reliance on tool outputs/estimates, IP, liability limits, NSW governing law.
- Add a banner comment at the top of both: "Draft, client to have legal review before go-live."

## Phase 16: About Us

Update `/about-us` with the ready-to-paste copy from the client's profile (Two directors. One standard.), mission, values, "How we protect you", compliance panel, licences, areas served and director profiles with headshot slots. Do not publish the vision statement (still internal).

## Phase 17: QA and launch checks

- Lighthouse ≥ 90 on Performance, Accessibility, Best Practices and SEO for home and one page per template
- No broken links (crawl staging), every page in the sitemap, unique titles/descriptions, valid JSON-LD
- Forms tested end-to-end, including uploads and emails received
- `docs/CLIENT_TODO.md` reviewed with the client before switching production stats on

---

## CLIENT_TODO.md (seed this file)

- [ ] Confirm years of experience (22+ combined vs 21+), project count (100+ vs 30+), and "$5M+ annual turnover" wording
- [ ] Remove or confirm "Class 2B" wording anywhere on the current site (registration is General (Unrestricted))
- [ ] Headshots, team shots, branded shirt photos, project photos and videos
- [ ] Scope of works per chosen photo for each project
- [ ] Monsignor John Peoples Units (Five Dock): scope and photos
- [ ] Elko Building Inspections Instagram handle and any pricing to show
- [ ] Safety documents approved for public download
- [ ] Redacted drawings, each image signed off
- [ ] Rate ranges if cost estimators are wanted
- [ ] Legal review of the Privacy Policy and Terms of Use
- [ ] Director approval of all Insights FAQs
