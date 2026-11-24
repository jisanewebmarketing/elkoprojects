import type { Metadata } from 'next'
import { ThankYou } from '@/components/thank-you'
import { FormConversion } from '@/components/form-conversion'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your site visit and quote request has been received by Elko Projects.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/book-a-consultation/thank-you' },
}

export default function ConsultationThankYouPage() {
  return (
    <>
      <FormConversion formType="consultation" />
      <ThankYou
        eyebrow="Request received"
        title="Your request is in."
        message="Thanks — a director will be in touch within one business day to arrange your free site visit and quote."
      />
    </>
  )
}
