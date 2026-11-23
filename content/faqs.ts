// Elko Projects — client-approved FAQ sets, keyed by page path.
// Source: the client's "Elko Projects – FAQs" document. Answers are the client's
// own copy, lightly tidied for publication. Each set is rendered as an accordion
// above the final CTA and marked up with FAQPage JSON-LD (see lib/seo.ts).
//
// Keys are page paths without the leading slash (e.g. 'residential',
// 'residential/complete-house-renovations').

export type Faq = { q: string; a: string }

export const faqsByKey: Record<string, Faq[]> = {
  // ---------------------------------------------------------------- hubs
  residential: [
    {
      q: 'What residential building work does Elko Projects do in Sydney?',
      a: 'We deliver complete house and apartment renovations, alterations and additions, terrace and townhouse renovations, custom new homes, duplexes and granny flats across Greater Sydney. New homes, duplexes and granny flats can be delivered as a single design-and-construct package through our network of architects, engineers and consultants.',
    },
    {
      q: 'Will the directors actually be involved in my home renovation?',
      a: 'Yes. Directors Elias Nader and Marko Bratkovic are personally involved in every project, from the first site visit and quote through to the final defect walk. Elias leads operations, programming and client communication, while Marko leads site delivery, trade coordination, quality assurance and handover.',
    },
    {
      q: 'How do you stop my renovation going over budget?',
      a: 'Every project runs on its own ring-fenced budget, with no cross-funding between jobs. Every scope change is documented, costed and approved by you in writing before work proceeds, so there are no verbal variations or surprise invoices. You also receive a written progress update every week.',
    },
    {
      q: 'Are you licensed and insured for residential building work in NSW?',
      a: 'Yes. Elko Projects holds NSW Contractor Licence 385208C and Building Practitioner registration BUP4254517 (General, Unrestricted). We carry $20 million public liability cover with QBE, are approved for Home Owners Warranty insurance, and are members of Master Builders and HIA. Every site runs under internal methodologies for construction, safety and operations.',
    },
    {
      q: 'How do I get a quote for my renovation or new home?',
      a: 'Book a free site visit and quote online or call Elias on 0423 334 792. We come to your property, talk through scope, budget and timeline, and tell you honestly whether we are the right fit. Nothing proceeds until the design, budget and programme have been reviewed and signed off by you and Elko.',
    },
  ],
  commercial: [
    {
      q: 'What types of commercial fit outs does Elko Projects deliver?',
      a: 'We deliver office fit outs and renovations, hospitality fit outs for restaurants, cafés and bars, medical centre fit outs, retail shop fit outs and general commercial refurbishments across Greater Sydney. Recent work includes a corporate office fit out with glazed suites in Rhodes.',
    },
    {
      q: 'Can you guarantee my business opens on the planned date?',
      a: 'We build programme certainty from the start. Works are programmed in detail before we start on site, long-lead items are identified and procured early, and trades are sequenced so materials and access never hold up your opening date. Weekly written reports keep you across progress against the programme.',
    },
    {
      q: 'Can you work around our trading hours to minimise disruption?',
      a: 'Yes. For refurbishments in operating premises, we sequence trades strategically, often after hours and around trading, to protect your operating timeframes. We agree access, noise and staging with you and your building management before work begins.',
    },
    {
      q: 'Do you handle the compliance requirements for medical and hospitality fit outs?',
      a: 'Yes. Medical and hospitality spaces carry specific compliance detail, and we coordinate it through our consultant network of engineers, designers and certifiers. Every site runs under a site-specific WHS management plan and SWMS, and we hold $20 million public liability cover with QBE.',
    },
    {
      q: 'How does the commercial quoting process work?',
      a: 'Book a free site visit and both directors will review the tenancy, scope, budget and programme with you. We then follow a stage-gate process: analyse and qualify, design and budget, review and approve, then build and hand over. Nothing starts on site without your written sign-off.',
    },
  ],
  remedial: [
    {
      q: 'Is Elko Projects licensed to carry out remedial work on Class 2 strata buildings?',
      a: 'Yes. Elko Projects is registered for Class 2 building work in NSW under Building Practitioner registration BUP4254517 (General, Unrestricted) and NSW Contractor Licence 385208C. That covers remedial and rectification work on apartment buildings and strata common property, including balconies, facades, roofs and waterproofing.',
    },
    {
      q: 'What waterproofing standard do you work to for balconies?',
      a: 'All of our balcony waterproofing and remediation work complies with the NCC and AS 4654.2, the Australian Standard for external above-ground waterproofing membranes. On a typical remediation we strip the balcony back to the structural slab, repair the substrate, re-establish correct falls, install a new compliant membrane with correct upturns, terminations and drainage detailing, and reinstate finishes once the membrane is inspected.',
    },
    {
      q: 'Will our strata committee or insurer accept your documentation?',
      a: 'That is what our documentation is built for. We provide structured scopes, quotes, progress reports and completion records that a strata committee, building manager or insurer can review and approve. Every variation is documented and approved before work proceeds, so the committee always has a clear audit trail.',
    },
    {
      q: 'Can you find and fix a roof, window or facade leak?',
      a: 'Yes. We trace the source of the leak first rather than patching symptoms, then rectify it. That can mean replacing, re-pointing and recoating tiled or metal roofs, resealing window perimeters and penetrations, or repairing facade concrete and sealants to restore the building envelope.',
    },
    {
      q: 'Do you handle insurance and restoration works after damage?',
      a: 'Yes. We carry out insurance make-good, structural and heritage restoration works after storm, water or other damage. We document the scope and costs so they can be submitted to your insurer, and both directors oversee the works through to a final defect walk.',
    },
  ],
  'display-units': [
    {
      q: 'Do you build display suites for apartment and house developers in Sydney?',
      a: 'Yes. We fit out developer display suites for both apartment and house developments across Greater Sydney. Recent work includes The Osborne display suite in Lane Cove, engaged by Scion for Winim. Each suite is built to the finish a sales campaign depends on, because buyers judge the whole development by it.',
    },
    {
      q: 'Can you deliver a display suite in time for our sales launch?',
      a: 'Yes. We programme display suite works in detail around your launch date, procure long-lead joinery, stone and fixtures early, and sequence trades to protect the programme. Weekly written reports keep your sales and marketing teams across progress, because we know how important it is to open display units on time.',
    },
    {
      q: 'Can a display suite be built inside a sales office, retail tenancy or the building itself?',
      a: 'Yes. Display suites can be fitted out within a dedicated sales centre, a leased retail or commercial tenancy, or a completed unit within the development. We assess access, services and approvals for the chosen space at the site visit, and accommodate your preferred location accordingly.',
    },
    {
      q: 'Will the display suite match the finishes buyers will actually receive?',
      a: 'That is the whole point of the engagement. We work from your architect’s and interior designer’s specification so joinery, finishes and fixtures reflect the product being sold. Every substitution or variation is documented and approved by you before it proceeds, protecting you from misrepresentation risk in the sales process.',
    },
    {
      q: 'Who manages the display suite build day to day?',
      a: 'Both directors. Elias Nader leads operations, programming and client communication, and Marko Bratkovic manages site delivery, trade coordination, quality and handover. You deal directly with the people accountable for the finish, rather than a rotating site supervisor.',
    },
  ],
  'building-inspections': [
    {
      q: 'What is the difference between a builder-led inspection and a standard building inspection?',
      a: 'Elko Building Inspections are carried out by licensed, qualified builders who build and rectify properties every week. That means we do not just identify defects; we understand what each one will cost to fix. Every issue in our report is ranked by priority, so you know what needs attention first.',
    },
    {
      q: 'How quickly will I receive my inspection report?',
      a: 'Most reports are delivered within 48 to 72 hours of the inspection. Each report lists the defects found, ranks them by priority and explains what they mean in practical terms, so you can make decisions on a purchase, lease or construction contract quickly.',
    },
    {
      q: 'What types of building inspections do you offer in Sydney?',
      a: 'We provide visual, non-invasive condition inspections across Greater Sydney, including dilapidation reports, pre and post construction inspections, pre-renovation condition reports, handover inspections, pre and post lease inspections, and pre and post purchase inspections. Each report records the property’s condition at a point in time, supported by detailed photographs.',
    },
    {
      q: 'Why would I need a pre-construction inspection before building or renovating?',
      a: 'A pre-construction inspection records the condition of your property, and often neighbouring properties, before works start. If cracking or damage is later alleged, you have dated evidence of what existed beforehand. A post-construction inspection then confirms the quality of finished work before final payment and handover.',
    },
    {
      q: 'How much does a building inspection cost?',
      a: 'Price depends on the property type, size, location and inspection type, and starts from $600 + GST. Submit the address and inspection type through our online form and a licensed builder will confirm the price and availability.',
    },
  ],

  // ------------------------------------------------- residential sub-pages
  'residential/complete-apartment-renovations': [
    {
      q: 'Do I need strata approval to renovate my apartment in NSW?',
      a: 'Usually, yes. Under the NSW Strata Schemes Management Act, cosmetic work generally needs no approval, minor renovations such as kitchens and some flooring need a general resolution, and major work such as structural or waterproofing changes needs a special resolution. We can prepare the documentation your owners corporation needs and manage the approval process with you within some of our packages.',
    },
    {
      q: 'How do you protect common areas and neighbours during an apartment renovation?',
      a: 'We book lifts and loading docks with building management, protect lifts, corridors and lobbies, and keep noisy work within permitted hours under the by-laws. Works are staged to minimise disruption, and waste is removed through agreed access routes, so neighbours and building managers are kept informed throughout.',
    },
    {
      q: 'Can you renovate a bathroom in an apartment without affecting the unit below?',
      a: 'Yes. Bathroom work in a strata building is treated as a waterproofing-critical task. We strip back carefully, install a compliant membrane, test before tiling, and protect the slab and neighbouring units throughout. Getting waterproofing right the first time is what prevents leaks, disputes and costly rectification later.',
    },
    {
      q: 'What does a complete apartment renovation include?',
      a: 'Our scope ranges from a cosmetic refresh to a complete apartment transformation: engineer-designed structural changes such as wall removal and new beams, kitchens, bathrooms and laundries, flooring, painting and rendering, windows and sliding doors, wardrobes, joinery and lighting. We also manage strata approvals and building access from start to finish. Recent projects include luxury apartment transformations in Potts Point and Randwick.',
    },
    {
      q: 'Can I live in my apartment while it is being renovated?',
      a: 'For a cosmetic refresh, often yes. For a full renovation involving the kitchen and bathroom, most owners move out, as the apartment will be without water, cooking facilities and clean living space for periods. We confirm this at the site visit and plan staging to shorten any time away.',
    },
  ],
  'residential/complete-house-renovations': [
    {
      q: 'Can you remove a load-bearing wall in my house?',
      a: 'Yes. Removing a load-bearing wall is common in a full house renovation to open up living areas. A structural engineer designs the new beam and supports, we install them under temporary propping, and approvals are obtained where required. It is one of the structural alterations we deliver regularly, working closely with our structural engineer.',
    },
    {
      q: 'Do I need council approval for a house renovation in Sydney?',
      a: 'It depends on the scope. Internal, non-structural work often needs no approval, while structural changes, extensions or work in a heritage area usually need a DA or a Complying Development Certificate. We assess your scope at the site visit and, on design-and-construct projects, manage the approvals for you.',
    },
    {
      q: 'Can you renovate my house in stages?',
      a: 'Yes. Many clients stage a renovation, starting with the kitchen and bathrooms, then extensions or finishes later. We plan the stages so early work does not have to be undone, and each stage runs on its own documented scope, budget and programme with weekly written updates.',
    },
    {
      q: 'What finish standard can I expect from a full home renovation?',
      a: 'We deliver renovations to the standard you would expect of a new build, including premium kitchens, bathrooms, joinery, flooring and lighting packages. Both directors walk the defects with you before completion. Recent examples include full home renovations in St Ives and Dural.',
    },
    {
      q: 'Is my deposit kept separate from other projects?',
      a: 'Yes. Every Elko project runs on its own ring-fenced budget, with no cross-funding between jobs, so your deposit and progress payments are only ever spent on your home. Every variation is documented, costed and approved by you before work proceeds.',
    },
  ],
  'residential/alterations-additions': [
    {
      q: 'Is it better to extend my home or knock down and rebuild?',
      a: 'It depends on the condition of the existing house, your block, planning controls and budget. Extending usually makes sense when the structure is sound and you want to keep its character; a rebuild can suit when major structural or layout problems exist. We assess both options honestly at the site visit.',
    },
    {
      q: 'Can you add a first-floor addition to my single-storey house?',
      a: 'Often, yes. A first-floor addition depends on whether the existing structure and footings can carry the load, plus height and setback controls. A structural engineer assesses the house, and we coordinate the design and approvals so the new level integrates with the existing home.',
    },
    {
      q: 'How do you make an extension look like it was always part of the house?',
      a: 'We match or deliberately complement the existing materials, roof lines, ceiling heights, floor levels and joinery so the transition is seamless. The aim is an addition that reads as part of the original home, inside and out, rather than an obvious bolt-on.',
    },
    {
      q: 'Can we stay in the house during an extension?',
      a: 'Often, yes, for ground-floor rear extensions where the existing house can be sealed off. When work affects kitchens, bathrooms, the roof or services, moving out for part of the build is usually safer and faster. We plan the staging with you at the outset.',
    },
    {
      q: 'Do you manage council approvals for alterations and additions?',
      a: 'Yes. On design-and-construct projects we coordinate the architect, engineer and certifier and manage the DA, CC or CDC approvals for you. That keeps design, approvals and construction with one accountable team.',
    },
  ],
  'residential/terrace-renovations-extensions': [
    {
      q: 'Can I renovate a terrace in a heritage conservation area?',
      a: 'Yes, but most external changes need council approval through a DA, and councils expect period detail to be retained. Many Sydney terraces sit in heritage conservation areas. We coordinate heritage-aware designers and consultants, and restore original features while modernising the interior and rear of the home.',
    },
    {
      q: 'How do you bring more natural light into a narrow terrace?',
      a: 'Common solutions include skylights, light wells, a glazed rear extension, raked ceilings and opening up internal walls to create a continuous living space. Planning light and flow is central to every terrace project we deliver, as most terraces are dark through the middle.',
    },
    {
      q: 'Can you add a rear or attic extension to my terrace?',
      a: 'Yes. Rear extensions and attic conversions are the most common ways to add space within a terrace’s tight footprint. Each depends on the structure, planning controls and the impact on neighbours. We assess feasibility on site and coordinate the engineering and approvals.',
    },
    {
      q: 'How do you manage building work on a terrace with shared party walls?',
      a: 'Shared walls need care. We record the condition of neighbouring properties before work starts, manage vibration and structural support carefully, and keep neighbours informed of the programme. A pre-construction dilapidation inspection protects both you and your neighbours if questions arise later.',
    },
    {
      q: 'Can you restore original period features in my terrace?',
      a: 'Yes. We restore period detail such as cornices, ceiling roses, fireplaces, timber floors, joinery and facade elements, and pair that sympathetic restoration with a modern kitchen, bathrooms and a practical extension at the rear.',
    },
  ],
  'residential/townhouse-renovations': [
    {
      q: 'Do I need body corporate or strata approval to renovate my townhouse?',
      a: 'If your townhouse is strata titled, yes for most work beyond cosmetic changes, and community-titled schemes have similar rules. Kitchens, bathrooms, flooring and anything affecting common property or waterproofing usually need approval. We can prepare the documentation and manage access arrangements with the body corporate for you within our packages.',
    },
    {
      q: 'What does a townhouse renovation typically include?',
      a: 'Most townhouse renovations cover kitchens and bathrooms, new flooring and finishes, modernised layouts and improved storage. Because townhouses are often multi-level, we also plan stair access, materials handling and staging between floors so the work runs efficiently.',
    },
    {
      q: 'Can you renovate one level of my townhouse at a time?',
      a: 'Yes. Staging by level lets you keep using part of the home while we work on another, with dust and access separation between them. Kitchen and main bathroom work is usually the most disruptive stage, so we programme it to be as short as possible.',
    },
    {
      q: 'Can I change the layout of my townhouse?',
      a: 'Often, yes. Non-structural internal walls can usually be moved, while structural walls, wet-area relocations and work affecting shared walls or common property need engineering input and appropriate approvals. We assess what is achievable at the site visit and advise you.',
    },
    {
      q: 'How do you keep neighbours onside during a townhouse renovation?',
      a: 'We agree work hours, access routes and parking with the body corporate in advance, protect shared driveways and paths, and keep the site clean every day. Clear communication with neighbours, including notice-board updates, avoids complaints and keeps the programme on track.',
    },
  ],
  'residential/custom-home-new-builds': [
    {
      q: 'What is a design-and-construct custom home?',
      a: 'Design and construct means one team manages your new home from concept to completion. Elko coordinates the architect, engineers and consultants through our network, manages the DA or CC approvals, and builds the home, so you have a single accountable contact instead of managing designers and builders separately.',
    },
    {
      q: 'Do you do knockdown rebuilds?',
      a: 'Yes. Knockdown rebuilds are part of our custom home service. We assess the site, manage demolition and approvals, and deliver a new home designed for your block, often in an established suburb where you want to stay but the existing house no longer works.',
    },
    {
      q: 'Can I bring my own architect’s plans to Elko?',
      a: 'Yes. If you already have plans or an architect, we can price and build to that design, reviewing it for buildability, cost and programme before construction. Alternatively, we can manage the full design through our consultant network.',
    },
    {
      q: 'How do you keep a custom home build on budget?',
      a: 'We develop the design within a realistic, documented budget from the start, review it for buildability before approval, and run your project on a ring-fenced budget with no cross-funding. Every variation is costed and approved by you in writing before work proceeds.',
    },
    {
      q: 'Is Home Owners Warranty insurance included on new homes?',
      a: 'Yes. Elko Projects holds eligibility for Home Building Compensation (HBC) insurance, formerly Home Owners Warranty, through icare NSW. It is required in NSW for residential building work over $20,000 including GST, and we provide your certificate before work begins. Some projects, including certain multi-storey apartment buildings, are exempt, and we confirm whether cover applies when we quote.',
    },
  ],
  'residential/duplexes': [
    {
      q: 'Can I build a duplex on my block in Sydney?',
      a: 'It depends on your zoning, lot size, frontage and council controls. Under NSW planning rules, dual occupancy can be approved on lots from around 400–450 m² with a minimum 12 m frontage, but many councils set higher minimums. Approval may be through a development application or as complying development under the Low Rise Housing Diversity Code. We start with a feasibility and site assessment to confirm what your block allows.',
    },
    {
      q: 'What is the difference between a DA and a CDC for a duplex?',
      a: 'A Development Application is assessed by council against local controls and can take longer, but allows more design flexibility. A Complying Development Certificate is a faster approval pathway for designs that meet set state standards. We advise which pathway suits your site and manage either for you.',
    },
    {
      q: 'Can I live in one side of the duplex and sell or rent the other?',
      a: 'Yes. Many owners build a duplex to live in one dwelling and sell or lease the other, or to house extended family. Whether you can subdivide onto separate titles depends on your council and approval pathway, which we confirm during the feasibility stage.',
    },
    {
      q: 'Do you design and build the duplex as one package?',
      a: 'Yes. We manage the design, approvals and construction as one design-and-construct package, so your development runs to a clear scope and budget with one accountable team. Recent work includes a luxury duplex in Sylvania in the Sutherland Shire.',
    },
    {
      q: 'Are both dwellings finished to the same standard?',
      a: 'Yes. Both dwellings receive the same premium finishes and quality checks, and both directors walk the defects on each dwelling before handover. Consistent quality matters whether you are living in, selling or leasing either side.',
    },
  ],
  'residential/granny-flats': [
    {
      q: 'How big can a granny flat be in NSW?',
      a: 'Under NSW planning rules, a secondary dwelling can generally have a floor area of up to 60 square metres. Some areas allow more; parts of Western Sydney near the new airport now permit up to 85 square metres, and some councils allow larger granny flats through a development application or in rural zones. We confirm the maximum size and best layout for your block during the site assessment.',
    },
    {
      q: 'Can I build a granny flat without a DA?',
      a: 'Often, yes. Many granny flats in NSW can be approved as complying development through a CDC, which is faster than a DA, provided the lot meets minimum size, width and setback requirements. Where a CDC does not suit, we manage the DA. We confirm the pathway early.',
    },
    {
      q: 'Can I rent out my granny flat?',
      a: 'In most cases, yes. A secondary dwelling can be rented out as a separate residence, giving you rental income while the main house stays in your hands. It usually cannot be subdivided onto its own title. Check tax and insurance implications with your adviser.',
    },
    {
      q: 'Is your granny flat price fixed?',
      a: 'We provide fixed-scope, documented pricing for each granny flat, covering design, approvals, construction, services, connections and landscaping as one package. Any change you request is documented, costed and approved by you before work proceeds, so there are no surprise extras.',
    },
    {
      q: 'Will my block suit a granny flat?',
      a: 'Most standard residential blocks can fit a granny flat, but access, slope, easements, trees, sewer lines and setbacks all affect placement and cost. Our site assessment checks each of these and presents design options to suit your block.',
    },
  ],

  // -------------------------------------------------- commercial sub-pages
  'commercial/office-fit-outs-renovations': [
    {
      q: 'What is included in an office fit out?',
      a: 'Our office fit outs turn empty tenancies and outdated spaces into modern workplaces. Scope typically includes glazed partitions and office suites, meeting rooms and boardrooms, reception areas, custom joinery, kitchens and breakout spaces, ceilings, lighting, flooring and finishes. We coordinate electrical, data and mechanical services and manage landlord and building approvals. Recent work includes a corporate office fit out with glazed suites in Rhodes.',
    },
    {
      q: 'Can you fit out our office after hours so the business keeps running?',
      a: 'Yes. We regularly deliver office works after hours and on weekends, programmed around your operations and the building manager’s requirements. Noisy work and deliveries are timed to avoid disruption, and work areas are left clean and safe for your team each morning.',
    },
    {
      q: 'What is a make-good and do you handle it?',
      a: 'A make-good returns a leased tenancy to the condition your lease requires at the end of the term, often by removing your fit out. We deliver make-good works to the lease and landlord requirements, either at lease end or before a new fit out begins.',
    },
    {
      q: 'Do you coordinate building management and landlord approvals?',
      a: 'Yes. Most commercial buildings require landlord approval of fit out drawings, insurances and work methods before works start. We coordinate consultants, certifiers and building management, submit the documentation, and hand over a complete set of compliance records at completion.',
    },
    {
      q: 'How do you make sure our new office opens on time?',
      a: 'We programme the works in detail before starting on site, identify and order long-lead items such as glazing and joinery early, and sequence trades to protect your move-in date. You receive a written progress report every week against the programme.',
    },
  ],
  'commercial/hospitality-fit-out-renovations': [
    {
      q: 'What approvals do I need for a restaurant or café fit out in Sydney?',
      a: 'Most hospitality fit outs need council approval for the use and works, a construction certificate, and compliance with the food premises standards councils inspect against. Exhaust, fire and accessibility requirements also apply. We coordinate the consultants and certifiers and hand over complete compliance documentation for your opening.',
    },
    {
      q: 'Can you renovate my venue while we keep trading?',
      a: 'Yes. We stage hospitality works around trading, completing disruptive work after close or in sections, so the venue can keep serving where it is safe to do so. Each stage is programmed with you to protect revenue and the guest experience.',
    },
    {
      q: 'Do you build commercial kitchens and bars?',
      a: 'Yes. We fit out commercial kitchens and bars, including joinery, services, finishes and coordination of exhaust, plumbing and electrical requirements, plus front-of-house joinery and seating areas. Equipment suppliers are coordinated so kitchens are ready for commissioning on time.',
    },
    {
      q: 'How do you make sure my venue opens on the date I planned?',
      a: 'We programme every trade and milestone before starting, order long-lead items such as equipment, stone and custom joinery early, and sequence trades strategically. Inspections and certification are planned into the programme so the final sign-offs do not delay opening night.',
    },
    {
      q: 'What finishes work best for a hospitality venue?',
      a: 'Hospitality finishes must look good and survive heavy use and cleaning. We advise on durable, cleanable surfaces for kitchens and wet areas, hard-wearing flooring, and joinery that holds up to daily service, while delivering the look your designer intended.',
    },
  ],
  'commercial/medical-centre-fit-out-renovations': [
    {
      q: 'What makes a medical centre fit out different from an office fit out?',
      a: 'Medical fit outs carry extra compliance detail: infection-control finishes, clinical hand basins, accessibility requirements, acoustic privacy for consult rooms, and more complex plumbing, electrical and mechanical services. We coordinate and document each of these properly so the practice is ready for accreditation and patients.',
    },
    {
      q: 'Do you build consult and treatment rooms?',
      a: 'Yes. We fit out consult and treatment rooms, procedure rooms, reception and waiting areas, and staff amenities. Each room is planned with your clinicians for workflow, storage, services and privacy, so the layout works on the first day of practice.',
    },
    {
      q: 'How do you handle accessibility in a medical fit out?',
      a: 'Accessibility is designed in from the start, covering entries, door widths, circulation, accessible toilets and reception counters to the relevant standards. We also deliver accessibility upgrades to existing practices, documented for your certifier and building owner.',
    },
    {
      q: 'Can you renovate our practice while we continue seeing patients?',
      a: 'Often, yes. We stage works and programme noisy or dusty tasks after hours, with dust control and clear separation from clinical areas. Each stage is agreed with you so patient care continues safely while the renovation progresses.',
    },
    {
      q: 'What infection-control finishes do you use?',
      a: 'We use smooth, durable, cleanable surfaces that suit clinical use, such as seamless vinyl flooring with coved skirtings, washable wall finishes and sealed joinery in clinical areas. Final specifications are confirmed with your practice and designer against your accreditation requirements.',
    },
  ],
  'commercial/refurbishments': [
    {
      q: 'What is the difference between a refurbishment and a full fit out?',
      a: 'A refurbishment refreshes an existing space, typically finishes, lighting, ceilings and amenities, without major changes to layout or services. A full fit out builds a tenancy from a base-building shell or reconfigures it completely. Refurbishments are usually faster, less disruptive and lower cost.',
    },
    {
      q: 'Can you refurbish our premises without closing the business?',
      a: 'Yes. We deliver refurbishments in staged programmes around your operating hours, often working after hours or in sections, so the business keeps running. Each stage is planned with you to keep customers, staff and building users safe.',
    },
    {
      q: 'Do you refurbish bathrooms and amenities in commercial buildings?',
      a: 'Yes. Amenities refurbishments are a core part of this service, including bathrooms, kitchenettes and end-of-trip facilities, upgraded for appearance, durability and accessibility. We stage amenity works so facilities stay available to building users throughout.',
    },
    {
      q: 'Can lighting and ceiling upgrades reduce our running costs?',
      a: 'Often, yes. Replacing outdated fittings with LED lighting and modern controls usually lowers energy use and maintenance costs while improving light quality. We coordinate lighting and ceiling works with your electrical consultant so upgrades suit the space and its use.',
    },
    {
      q: 'How long does a commercial refurbishment take?',
      a: 'It depends on scope, size and access hours. A finishes refresh can be quick, while an amenities or multi-floor refurbishment takes longer. We provide a detailed programme with your quote and report against it weekly; most commercial refurbishments complete within a staged five-week period.',
    },
  ],
  'commercial/shop-fit-outs': [
    {
      q: 'Do you do shop fit outs in shopping centres?',
      a: 'Yes. Shopping centre fit outs come with strict design criteria, approval steps, insurances and after-hours work rules set by centre management. Our directors bring direct experience of major retail fit outs, including Erina Fair and Westfield centres, and we manage centre requirements for you.',
    },
    {
      q: 'Can you deliver a shop fit out on a fast-track programme?',
      a: 'Yes. Retail rent often starts on a fixed date, so we deliver shop fit outs on fast-track programmes. Works are programmed in detail, long-lead items such as shopfronts and display joinery are ordered early, and trades are sequenced to hit your trading date.',
    },
    {
      q: 'What does a retail shop fit out include?',
      a: 'A shop fit out typically includes the shopfront and signage zones, display joinery and shelving, counters, lighting, flooring, ceilings and finishes, plus coordination of electrical and data services. Every element is built to a finish that presents your products well and sells.',
    },
    {
      q: 'Do you build display suites for developers too?',
      a: 'Yes. Developer display suites sit alongside our retail fit out work, as both depend on a finish that sells. Recent work includes The Osborne display suite in Lane Cove. See our Display Units page for more detail.',
    },
    {
      q: 'Do you coordinate landlord and centre management approvals?',
      a: 'Yes. We prepare and submit the drawings, work method statements, insurances and programme that landlords and centre management require, coordinate consultants and certifiers, and hand over complete documentation at completion.',
    },
  ],

  // --------------------------------------------------- remedial sub-pages
  'remedial/balcony-works': [
    {
      q: 'What are the signs my balcony needs remediation?',
      a: 'Common warning signs include water leaking into the unit or ceiling below, drummy or cracked tiles, white efflorescence staining, ponding water, rust stains, and cracked or spalling concrete on the underside of the slab. Any of these suggests the waterproofing has failed and should be investigated before damage spreads.',
    },
    {
      q: 'What is concrete cancer and how do you repair it?',
      a: 'Concrete cancer is when water reaches the steel reinforcement inside concrete, causing it to rust, expand and crack the surrounding concrete. We break out the delaminated concrete, treat the corroded reinforcement, and reinstate the section with polymer-modified repair mortar before waterproofing.',
    },
    {
      q: 'Why do you strip balconies back to the slab?',
      a: 'A failed membrane cannot be repaired properly from the surface. Stripping tiles, screed and old membranes back to the structural slab lets us repair concrete defects, re-establish correct falls to the drains and install a new membrane to AS 4654.2, so the repair lasts.',
    },
    {
      q: 'Do you investigate why the balcony failed before quoting?',
      a: 'Yes. We establish the cause of failure first, so the scope fixes the real problem rather than the symptom. Recent work includes a full balcony remediation in Willoughby, completed in 2026, covering demolition, concrete cancer repair, new falls, membrane, tiling and drainage outlets.',
    },
    {
      q: 'Who pays for balcony remediation in a strata building?',
      a: 'In NSW strata schemes, balcony waterproofing and slabs are usually common property, so the owners corporation is generally responsible, though by-laws can shift responsibility. We prepare scopes and documentation the committee, strata manager or insurer can rely on. Confirm responsibility with your strata manager.',
    },
  ],
  'remedial/roof-works': [
    {
      q: 'How do you find where my roof is leaking?',
      a: 'We start with a roof condition inspection and water testing to locate the active leak source before quoting. Water often travels along battens or sheeting before it appears inside, so the stain on your ceiling is rarely directly below the fault. Finding the source first avoids paying for the wrong repair.',
    },
    {
      q: 'Do you repair both tiled and metal roofs?',
      a: 'Yes. On tiled roofs we replace cracked tiles, re-bed and repoint ridge capping and renew valley irons. On metal roofs we replace corroded sheeting, flashings and cappings and rectify box gutters. Recent work includes roof repairs in Surry Hills and an industrial roof in Ingleburn.',
    },
    {
      q: 'What is ridge capping re-bedding and repointing?',
      a: 'Ridge capping is the row of curved tiles along a tiled roof’s peaks and hips. Over time the mortar bedding cracks and lets water in. We remove the capping, re-bed it, and fully repoint it with flexible pointing compound that moves with the roof rather than cracking.',
    },
    {
      q: 'Should I repair or replace my roof?',
      a: 'Most leaking roofs can be repaired if the tiles or sheeting are generally sound. Replacement becomes the better option when metal sheeting is widely corroded or tiles are failing across the roof. Our inspection gives you an honest recommendation with costs for each option.',
    },
    {
      q: 'Does roof recoating actually extend a roof’s life?',
      a: 'Yes, when the roof is structurally sound. After repairs, pressure cleaning and recoating protects the surface, improves water shedding and extends service life. Recoating is not a substitute for fixing failed flashings, ridge capping or broken tiles, so we always complete repairs first.',
    },
  ],
  'remedial/facade-works': [
    {
      q: 'How do you find where water is getting through our facade?',
      a: 'We carry out a water ingress investigation using flood testing and leak tracing to identify the exact failure points in the building envelope. Testing sections of the facade in turn confirms the source, so the repair scope targets the actual failure rather than resealing everything.',
    },
    {
      q: 'How long do facade sealants last?',
      a: 'Facade sealants to panel joints, window perimeters and penetrations degrade with UV exposure and building movement, and typically need replacing several times over a building’s life. Cracked, shrunken or detached sealant is a common cause of leaks. We remove failed sealant completely and install new sealant correctly, with a warranty on the sealant lifespan.',
    },
    {
      q: 'How do you access high-rise facades?',
      a: 'We use rope access and elevated work platforms (EWP), chosen to suit the building height, site and scope. Rope access avoids the cost and disruption of full scaffolding on many buildings. Every job runs under a site-specific WHS management plan and SWMS, with a director on site to manage the process.',
    },
    {
      q: 'Do you restore heritage facades?',
      a: 'Yes. We deliver building and heritage facade restoration alongside structural and concrete repair, using methods and materials that respect the original fabric. Heritage work is coordinated with the relevant consultants and approvals where the building is listed or in a conservation area.',
    },
    {
      q: 'Can you repair concrete and structural defects on a facade?',
      a: 'Yes. We repair spalling and cracked concrete, treat corroded reinforcement and carry out structural facade repairs to engineer specifications. Recent work includes industrial roof and facade repairs in Ingleburn, delivered by rope access and EWP in 2025.',
    },
  ],
  'remedial/waterproofing': [
    {
      q: 'What is flood testing and why do you do it before quoting?',
      a: 'Flood testing means holding water on a balcony, podium or wet area for a set period to see whether and where it leaks. It confirms the real point of failure before we scope the works, so you pay to fix the actual problem rather than an assumed one.',
    },
    {
      q: 'Can failed waterproofing be fixed without removing the tiles?',
      a: 'Surface-applied sealers can sometimes slow a minor leak, but they rarely fix a failed membrane long term. A lasting repair usually means removing tiles, screed and the failed membrane, re-establishing falls and installing a new system to AS 4654.2. We advise honestly after investigation.',
    },
    {
      q: 'What areas do you waterproof?',
      a: 'We remediate waterproofing on balconies, podiums, planter boxes, rooftop areas and wet areas such as bathrooms and laundries, across strata, commercial and residential buildings. Each area receives a membrane system suited to its exposure, substrate and traffic.',
    },
    {
      q: 'Why are falls so important in waterproofing?',
      a: 'Falls are the gentle slopes that carry water to drains. Without correct falls, water ponds on the membrane, finds weak points and eventually leaks. We re-establish falls before waterproofing and rectify drainage outlets, so water leaves the surface quickly every time it rains.',
    },
    {
      q: 'Is your waterproofing work compliant with Australian Standards?',
      a: 'Yes. External above-ground waterproofing is installed to AS 4654.2, and perimeter and penetration sealants and drainage outlets are completed as part of the system. We document the work for your strata committee, building manager or insurer.',
    },
  ],
  'remedial/strata-works': [
    {
      q: 'Why does a strata building need a Class 2 registered builder?',
      a: 'Under the NSW Design and Building Practitioners Act 2020, building work on Class 2 apartment buildings, including many remedial works, must be carried out by a registered building practitioner. Elko holds registration BUP4254517 (General, Unrestricted), so your owners corporation is engaging a builder registered for this work.',
    },
    {
      q: 'What strata remedial works do you carry out?',
      a: 'We deliver balcony, roof, facade and waterproofing rectification, structural and concrete repair, and insurance make-good on common property. Each project includes the strata compliance documentation your committee and strata manager need. Recent work includes a full balcony remediation in Willoughby.',
    },
    {
      q: 'How do you manage residents during strata remedial works?',
      a: 'We stage works, communicate schedules to residents in advance, and coordinate access with the committee and strata manager. Work areas are secured and cleaned daily, and access to units, lifts and car parks is planned so disruption to residents stays minimal.',
    },
    {
      q: 'What documentation do you provide to the strata committee?',
      a: 'We provide a clear scope of works, itemised quote, programme, weekly progress reports, documented variations and completion records. Everything is prepared so the committee can approve, track and report on the works to owners, and so insurers can process any claim.',
    },
    {
      q: 'Can you help the committee understand what needs fixing first?',
      a: 'Yes. We investigate the cause of each defect before quoting and can prioritise the scope by urgency, so the committee can plan works and levies sensibly. Inspection reports through Elko Building Inspections are delivered within 48 to 72 hours.',
    },
  ],
  'remedial/restorations': [
    {
      q: 'Do you work directly with insurers on claims?',
      a: 'Yes. We prepare detailed scopes, costings and documentation for insurance reinstatement and make-good, in a format insurers and loss assessors can review. Clear documentation helps your claim move faster and reduces disputes over what is covered.',
    },
    {
      q: 'What types of damage do you repair?',
      a: 'We reinstate buildings after fire, storm and vehicle or other impact damage, and remediate water ingress. Works range from structural and concrete repair through to finishes, so the property is returned to its pre-damage condition or better.',
    },
    {
      q: 'Can I choose my own builder for an insurance repair?',
      a: 'Often, yes. Many policies let you nominate your own builder or obtain your own quote, though terms vary between insurers and policies. Check your policy wording or ask your insurer, and we can provide a documented quote for the reinstatement works.',
    },
    {
      q: 'Do you restore heritage buildings?',
      a: 'Yes. We carry out building and heritage restoration, combining traditional repair methods with structural and concrete repair where required. Heritage works are coordinated with the appropriate consultants and approvals so the building’s character is protected.',
    },
    {
      q: 'Are the directors involved in restoration and insurance projects?',
      a: 'Yes. Both directors are personally involved in every project, from the first site visit and scope through to final handover and defect walk. You deal directly with the people accountable for the quality of the reinstatement.',
    },
  ],
  'remedial/windows': [
    {
      q: 'Why is my window leaking?',
      a: 'The most common causes are failed perimeter sealant between the window frame and the wall, poorly sealed penetrations nearby, blocked frame drainage holes, or defects in flashings above the window. Water can also enter elsewhere in the facade and appear at the window. We trace the leak before deciding on the repair.',
    },
    {
      q: 'How do you trace a window leak?',
      a: 'We inspect the window and surrounding facade and use targeted water testing to reproduce the leak, working from the bottom up so each joint is tested in isolation. Once the source is confirmed, we reseal the right joints rather than guessing.',
    },
    {
      q: 'Do I need to replace the window or can it be resealed?',
      a: 'Most window leaks are fixed by replacing failed perimeter sealant and resealing penetrations, which costs far less than replacing the window. Replacement is only needed when the frame itself has failed. Our leak tracing tells you which applies.',
    },
    {
      q: 'Can you reseal windows on upper floors of an apartment building?',
      a: 'Yes. We reach upper-level windows by rope access and elevated work platforms (EWP), avoiding the cost of scaffolding on many buildings. Every job runs under a site-specific WHS management plan and SWMS.',
    },
    {
      q: 'Who is responsible for leaking windows in a strata building?',
      a: 'In many NSW strata schemes, windows and their seals form part of common property, making repairs the owners corporation’s responsibility, though this depends on your strata plan and by-laws. Confirm with your strata manager; we document the works for the committee.',
    },
  ],
  'remedial/compliance-inspections-rectifications': [
    {
      q: 'How does the compliance inspection process work?',
      a: 'Elko Building Inspections follows four steps: you call to book, we send a fee proposal, we carry out the site visit and consultation, and we deliver the report. The report identifies defects and sets out a documented rectification scope you can act on.',
    },
    {
      q: 'How quickly will I receive the compliance inspection report?',
      a: 'Most reports are delivered within 48 to 72 hours of the inspection. That turnaround helps strata committees, owners and property managers make decisions and obtain approvals quickly, particularly where defects are causing ongoing damage.',
    },
    {
      q: 'Can the same company that inspects also fix the defects?',
      a: 'Yes. Elko Building Inspections identifies the defects, and our sister business Elko Projects can carry out the rectification works. Because the scope is written by builders, it translates directly into a priced, buildable repair with no gap between report and repair.',
    },
    {
      q: 'What kinds of defects do compliance inspections pick up?',
      a: 'Inspections commonly identify waterproofing failures, water ingress, concrete cancer, cracking, failed sealants, roof and drainage defects, and non-compliant or incomplete building work. Each defect is documented with photos, its likely cause and a recommended rectification.',
    },
    {
      q: 'Who uses compliance inspections?',
      a: 'Strata committees and managers, building owners, property managers and village operators use them to understand defects, plan rectification budgets, support insurance claims and meet compliance obligations. Homeowners also use them before and after building work.',
    },
  ],
}

export function getFaqs(key: string): Faq[] {
  return faqsByKey[key] ?? []
}
