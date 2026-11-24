import type { Metadata } from 'next'
import { ThankYou } from '@/components/thank-you'
import { FormConversion } from '@/components/form-conversion'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your building inspection quote request has been received by Elko Projects.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/building-inspections/thank-you' },
}

export default function InspectionThankYouPage() {
  return (
    <>
      <FormConversion formType="building_inspection" />
      <ThankYou
        eyebrow="Request received"
        title="Thanks — your inspection request is in."
        message="A licensed builder will confirm the price and availability for your inspection within one business day."
      />
    </>
  )
}
