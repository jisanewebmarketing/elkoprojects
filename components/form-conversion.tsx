'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

// Fired once when a thank-you page loads, so Google Tag Manager can trigger a
// GA4 (or Ads) conversion on the `form_submission` custom event. `form_type`
// says which form it was: 'contact' | 'building_inspection' | 'consultation'.
export function FormConversion({ formType }: { formType: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_submission', form_type: formType })
  }, [formType])

  return null
}
