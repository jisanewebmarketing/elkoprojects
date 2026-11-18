// Terms of Use — DRAFT (spec Phase 15). These terms are a starting draft and
// MUST be reviewed by the client's lawyer before go-live. Tracked in
// docs/CLIENT_TODO.md. They govern use of the website only — they are not the
// building contract terms.
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/seo'
import { contact } from '@/content/company'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms that govern your use of the Elko Projects website, including intellectual property, the status of indicative information, and limitations of liability under NSW law.',
  alternates: { canonical: '/terms-of-use' },
  openGraph: {
    title: 'Terms of Use | Elko Projects',
    description: 'The terms that govern your use of the Elko Projects website.',
    url: '/terms-of-use',
  },
}

const LAST_UPDATED = '18 November 2026'
const crumbs = [{ label: 'Terms of Use', href: '/terms-of-use' }]

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        intro="The terms that govern your use of this website. Please read them before using the site."
        crumbs={crumbs}
      />

      <article className="mx-auto max-w-3xl px-5 pb-24 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        {/* TODO(client): have these Terms of Use reviewed by a lawyer before go-live. */}
        <p className="mt-6 rounded-sm border border-primary/30 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
          <strong>Draft for review.</strong> These terms are an initial draft and should be confirmed by Elko&rsquo;s legal adviser before the site goes live.
        </p>

        <div className="mt-10 flex flex-col gap-10 leading-relaxed">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">1. About these terms</h2>
            <p>
              This website is operated by Elko Projects Pty Ltd (ABN 33 658 065 822), trading as Elko Projects and Elko Building Inspections
              (&ldquo;Elko&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). These Terms of Use govern your access to and use of this
              website. By using the site, you agree to these terms. If you do not agree, please do not use the site.
            </p>
            <p>
              We may update these terms from time to time by posting the revised version on this page. Your continued use of the site after a
              change means you accept the updated terms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">2. Using this website</h2>
            <p>You agree to use this website only for lawful purposes, and not to:</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>use the site in any way that breaches any law or regulation, or infringes the rights of anyone else;</li>
              <li>interfere with, damage or disrupt the site, its servers, or any network connected to it;</li>
              <li>attempt to gain unauthorised access to any part of the site or any system or network;</li>
              <li>copy, scrape, republish or commercially exploit any part of the site without our written permission; or</li>
              <li>submit false, misleading or malicious information through any form on the site.</li>
            </ul>
            <p>We may suspend or restrict access to the site, or to any person, at any time and without notice.</p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">3. Information is general, not advice or a quote</h2>
            <p>
              The content on this website is provided for general information only. It describes the kinds of work we do and is not professional,
              building, engineering or legal advice, and should not be relied on as such.
            </p>
            <p>
              <strong>Indicative information is not a quote.</strong> Any ranges, timeframes, inclusions, case studies or examples shown on this
              site are indicative only. They are not an offer, a quote, or a commitment, and your project may differ. Scope, price and programme
              for your project are confirmed only in a written proposal and contract after a site visit. Nothing on this site forms a contract or
              gives rise to any obligation on us to perform work.
            </p>
            <p>
              While we take care to keep the site accurate and current, we do not warrant that it is complete, accurate or up to date, and we may
              change the content at any time without notice.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">4. Intellectual property</h2>
            <p>
              Unless otherwise stated, all content on this website — including text, images, photographs, graphics, logos, page layout and the
              &ldquo;Elko Projects&rdquo; and &ldquo;Elko Building Inspections&rdquo; names and branding — is owned by or licensed to us and is
              protected by Australian and international intellectual property laws.
            </p>
            <p>
              You may view, download and print pages from the site for your own personal, non-commercial use. You must not otherwise reproduce,
              adapt, distribute or use any content without our prior written consent. Project photography may show third-party property and is
              published with permission; it must not be reused.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">5. Links to other sites</h2>
            <p>
              This website may contain links to third-party websites. We provide those links for convenience only. We do not control, endorse or
              take responsibility for the content, products or services of any linked site, and your use of those sites is at your own risk and
              subject to their terms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">6. Limitation of liability</h2>
            <p>
              Nothing in these terms excludes, restricts or modifies any right or remedy, or any guarantee, warranty or other term or condition,
              that applies to you under the Australian Consumer Law or any other law and cannot lawfully be excluded.
            </p>
            <p>
              Subject to that, to the maximum extent permitted by law, we provide this website &ldquo;as is&rdquo; and exclude all warranties, and
              we are not liable for any loss or damage (including indirect or consequential loss) arising from your use of, or reliance on, this
              website or its content, or from the site being unavailable or containing errors. Where our liability cannot be excluded but can be
              limited, our liability is limited, at our option, to supplying the relevant information again.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">7. Privacy</h2>
            <p>
              Our handling of personal information collected through this website is described in our{' '}
              <a href="/privacy-policy" className="font-semibold text-primary underline-offset-4 hover:underline">
                Privacy Policy
              </a>
              , which forms part of these terms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">8. Governing law</h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. You submit to the non-exclusive jurisdiction of the courts of
              New South Wales and the Commonwealth of Australia.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold">9. Contact us</h2>
            <p>If you have any questions about these terms, please contact us:</p>
            <p className="flex flex-col gap-1">
              <span><strong>Elko Projects Pty Ltd</strong></span>
              <span>Email: <a href={`mailto:${contact.email}`} className="font-semibold text-primary underline-offset-4 hover:underline">{contact.email}</a></span>
              <span>Phone: <a href={contact.phones[0].href} className="font-semibold text-primary underline-offset-4 hover:underline">{contact.phones[0].display}</a></span>
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
