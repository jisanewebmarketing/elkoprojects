import type { Metadata } from 'next'
import { ThankYou } from '@/components/thank-you'
import { FormConversion } from '@/components/form-conversion'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your enquiry has been received by Elko Projects.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/contact-us/thank-you' },
}

export default function ContactThankYouPage() {
  return (
    <>
      <FormConversion formType="contact" />
      <ThankYou
        eyebrow="Enquiry received"
      title="Thanks — we've got your enquiry."
        message="Your message has gone straight to Elias and Marko. One of the directors will be in touch within one business day."
      />
    </>
  )
}
