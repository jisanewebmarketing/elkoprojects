// Privacy Policy — content supplied by the client (Elko Projects Privacy Policy
// document) and legally reviewed before go-live (confirmed 18 Nov 2026). A few
// factual "Confirm" items from the source remain, tracked as TODO(client) here
// and in docs/CLIENT_TODO.md (overseas-disclosure countries, advertising tools
// in use, retention period, office address).
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { contact } from '@/content/company'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Elko Projects collects, holds, uses and discloses personal information, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Elko Projects',
    description: 'How Elko Projects handles personal information under the Australian Privacy Principles.',
    url: '/privacy-policy',
  },
}

const LAST_UPDATED = '18 November 2026'
const crumbs = [{ label: 'Privacy Policy', href: '/privacy-policy' }]

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we collect, hold, use and disclose personal information, and how you can access or correct it or make a complaint."
        crumbs={crumbs}
      />

      <article className="mx-auto max-w-3xl px-5 pb-24 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 flex flex-col gap-10 leading-relaxed">
          {/* 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">1. About this policy</h2>
            <p>
              Elko Projects Pty Ltd (ABN 33 658 065 822), trading as Elko Projects and Elko Building Inspections (&ldquo;Elko&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), respects your privacy. This policy explains how we collect, hold, use and
              disclose personal information, and how you can access or correct it or make a complaint.
            </p>
            <p>
              We handle personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. This policy applies
              to our clients, prospective clients, website visitors, subcontractors, suppliers, job applicants and anyone else who deals with us,
              whether online, by phone, by email or on site.
            </p>
            <p>By using our website or engaging our services, you acknowledge that your personal information will be handled as described here.</p>
          </section>

          {/* 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">2. Personal information we collect</h2>
            <p>
              Personal information is information or an opinion about an identified individual, or an individual who is reasonably identifiable.
              The information we collect depends on how you deal with us, and may include:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li><strong>Contact details:</strong> your name, phone number, email address and postal address.</li>
              <li><strong>Property and project details:</strong> the address of the property, its ownership or strata details, plans, photos, scope, budget and timeframes for your project.</li>
              <li><strong>Inspection information:</strong> photos, notes, defect records and reports created during a building inspection, which may show the interior of your property and personal belongings.</li>
              <li><strong>Contract and payment information:</strong> contract documents, variations, invoices, payment records and the details needed for Home Owners Warranty insurance.</li>
              <li><strong>Strata and organisation details:</strong> for owners corporations, village operators, developers and businesses, the names and roles of committee members, managers and other representatives.</li>
              <li><strong>Subcontractor and supplier details:</strong> business names, ABNs, licences, insurances, WHS records and bank details.</li>
              <li><strong>Job applicant details:</strong> your resume, qualifications, licences, references and work history.</li>
              <li><strong>Website and device information:</strong> your IP address, browser, pages visited and how you arrived at our site, collected through cookies and similar tools (see section 6).</li>
              <li><strong>Communications:</strong> records of calls, emails, messages, reviews and enquiry form submissions.</li>
            </ul>
            <p>
              <strong>Sensitive information.</strong> We do not usually collect sensitive information, such as health information. Where it is
              relevant, for example accessibility needs for a renovation or retirement living project, or a site safety incident, we collect it
              only with your consent or where the law requires or allows it.
            </p>
            <p>
              <strong>Dealing with us anonymously.</strong> You can make a general enquiry without identifying yourself. To quote, inspect,
              contract or build, we need to know who you are and where the property is.
            </p>
          </section>

          {/* 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">3. How we collect personal information</h2>
            <p>We collect personal information directly from you wherever we can, including when you:</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>complete the free site visit and quote form, the building inspection quote form or another form on our website;</li>
              <li>call, email or message us, or contact us through social media;</li>
              <li>meet us on site, at a consultation or during an inspection;</li>
              <li>sign a contract, approve a variation or make a payment;</li>
              <li>apply for a job or offer your services as a subcontractor or supplier.</li>
            </ul>
            <p>
              Sometimes we collect personal information from other people, such as your architect, engineer, certifier, real estate agent, strata
              manager, building manager, insurer or loss assessor, or from public sources such as council and licensing registers. We do this
              where it is unreasonable or impractical to collect it from you, for example when an insurer refers a claim to us or a strata manager
              asks us to inspect common property.
            </p>
            <p>If we receive personal information we did not ask for, we will destroy or de-identify it if we could not have lawfully collected it.</p>
          </section>

          {/* 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">4. Why we collect, hold and use personal information</h2>
            <p>We collect, hold and use personal information to:</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>respond to enquiries, arrange site visits and prepare quotes, fee proposals and designs;</li>
              <li>carry out building inspections and prepare inspection and condition reports;</li>
              <li>plan, manage and deliver construction, fit out, remedial and restoration works, including weekly reporting, variations and defect walks;</li>
              <li>obtain approvals, certification and Home Owners Warranty insurance, and work with insurers on claims;</li>
              <li>invoice, process payments and keep financial records;</li>
              <li>engage and manage subcontractors and suppliers, and meet our work health and safety obligations;</li>
              <li>assess job applications;</li>
              <li>improve our website, services and customer experience;</li>
              <li>send you updates, project news or offers where you have agreed, or where the law allows (see section 6);</li>
              <li>meet our legal, licensing, insurance and record-keeping obligations, and establish or defend legal claims.</li>
            </ul>
            <p>
              We use personal information only for the purpose we collected it, a related purpose you would reasonably expect, or another purpose
              you agree to or the law permits.
            </p>
          </section>

          {/* 5 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">5. Who we disclose personal information to</h2>
            <p>We disclose personal information only as needed to deliver our services or as the law requires. Depending on your project, we may disclose it to:</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>architects, engineers, designers, certifiers and other consultants working on your project;</li>
              <li>subcontractors, trades and suppliers who carry out or supply the works;</li>
              <li>councils, NSW Fair Trading and other government bodies, for approvals, licensing and compliance;</li>
              <li>Home Owners Warranty insurers, our own insurers, and insurers or loss assessors handling a claim;</li>
              <li>strata managers, building managers, owners corporations, landlords and centre management, where works affect their property;</li>
              <li>accountants, lawyers, financiers and other professional advisers;</li>
              <li>IT, cloud storage, email, website, analytics and marketing service providers who support our business;</li>
              <li>anyone you authorise, or where disclosure is required or authorised by law, such as a court order.</li>
            </ul>
            <p>We do not sell or rent personal information.</p>
            <p>
              <strong>Inspection reports.</strong> Building inspection reports are prepared for the client who engages us. We will not provide your
              report to anyone else, such as a vendor, agent or neighbour, without your consent unless the law requires it.
            </p>
            <p>
              <strong>Overseas disclosure.</strong> Some of our service providers, such as cloud storage, email and software platforms, may store
              data on servers outside Australia, including in the United States. Where this happens, we take reasonable steps to ensure those
              providers handle personal information consistently with the Australian Privacy Principles.
              {/* TODO(client): list the countries for the service providers Elko actually uses. */}
            </p>
          </section>

          {/* 6 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">6. Cookies, analytics, advertising and direct marketing</h2>
            <p>
              <strong>Cookies.</strong> Our website uses cookies and similar technologies, which are small files stored on your device. Some are
              needed for the site to work. Others help us understand how visitors use the site and measure our advertising. You can block or delete
              cookies in your browser settings, although some parts of the site may not work properly as a result.
            </p>
            <p>
              <strong>Analytics.</strong> We use Google Analytics to understand how visitors find and use our website, such as the pages viewed and
              the enquiry forms completed. This information is generally aggregated and does not identify you directly. You can opt out with the
              Google Analytics opt-out browser add-on.
            </p>
            <p>
              <strong>Advertising.</strong> We may use Google Ads and Meta (Facebook and Instagram) advertising tools, including remarketing, to
              show our ads to people who have visited our website. These providers may use cookies to do this. You can manage ad personalisation
              through Google&rsquo;s ad settings and your Meta ad preferences.
              {/* TODO(client): remove any advertising tools (Google Ads / Meta) that are not actually installed at launch. */}
            </p>
            <p>
              <strong>Reviews and social media.</strong> If you leave us a review on Google, Facebook or HiPages, or interact with our social media
              pages, that platform&rsquo;s privacy policy also applies. With your permission, we may feature reviews and project photos on our website
              and social channels; we will not identify your property address without your consent.
            </p>
            <p>
              <strong>Direct marketing.</strong> We may send you project updates, newsletters or offers where you have agreed to receive them or
              would reasonably expect them as a client. Every marketing email includes an unsubscribe link, in line with the Spam Act 2003 (Cth),
              and you can opt out at any time by contacting us. We do not sell your details to other marketers.
            </p>
          </section>

          {/* 7 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">7. Security, retention, access and correction</h2>
            <p>
              <strong>Keeping information secure.</strong> We hold personal information in secure electronic systems and, where needed, in paper
              files kept at our office. We take reasonable steps to protect it from misuse, interference, loss and unauthorised access, modification
              or disclosure, including password-protected systems, access limited to people who need it, and reputable cloud providers. No system is
              completely secure, so please contact us straight away if you think your information has been compromised.
            </p>
            <p>
              <strong>Data breaches.</strong> If a data breach is likely to cause you serious harm, we will notify you and, where required, the
              Office of the Australian Information Commissioner (OAIC) under the Notifiable Data Breaches scheme.
            </p>
            <p>
              <strong>How long we keep it.</strong> Building records, contracts, inspection reports and financial records are kept for as long as
              needed for warranty, insurance, tax and legal purposes, which for building work is typically at least seven years after completion.
              When we no longer need personal information, we destroy or de-identify it securely.
              {/* TODO(client): confirm Elko's retention period. */}
            </p>
            <p>
              <strong>Accessing your information.</strong> You can ask for access to the personal information we hold about you by contacting us
              (see section 8). We will respond within 30 days. We may need to verify your identity first, and in limited cases the law allows us to
              refuse access; if so, we will explain why in writing. We do not charge for a request, but may charge a reasonable fee for providing
              large volumes of information.
            </p>
            <p>
              <strong>Correcting your information.</strong> If you believe information we hold about you is inaccurate, out of date or incomplete,
              contact us and we will take reasonable steps to correct it. If we disagree, we will tell you why and, on request, note your view with
              the record.
            </p>
          </section>

          {/* 8 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">8. Complaints, changes and contact</h2>
            <p>
              <strong>Making a complaint.</strong> If you have a concern about how we have handled your personal information, please contact us in
              writing with the details. We will acknowledge your complaint within 7 days and aim to resolve it within 30 days. If you are not
              satisfied with our response, you can complain to the Office of the Australian Information Commissioner at{' '}
              <a href="https://www.oaic.gov.au" className="font-medium text-primary underline-offset-4 hover:underline">oaic.gov.au</a> or on 1300 363 992.
            </p>
            <p>
              <strong>Changes to this policy.</strong> We may update this policy from time to time to reflect changes in the law, our services or how
              we handle information. The current version will always be published on this page, with the date it was last updated.
            </p>
            <div className="rounded-md border border-border bg-secondary/40 p-6">
              <p className="font-semibold">Contact us</p>
              <p className="mt-2 text-muted-foreground">
                For any privacy question, access or correction request, or complaint:
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 text-sm">
                <li>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${contact.email}`} className="font-medium text-primary underline-offset-4 hover:underline">{contact.email}</a>
                </li>
                <li>
                  <span className="text-muted-foreground">Phone: </span>
                  <a href="tel:+61423334792" className="font-medium underline-offset-4 hover:underline">0423 334 792</a>
                </li>
                <li><span className="text-muted-foreground">Post: </span>Level 1, Unit D, 19/21 Loyalty Rd, North Rocks NSW 2151</li>
                <li><span className="text-muted-foreground">Hours: </span>Monday to Friday, 7am to 5pm</li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
