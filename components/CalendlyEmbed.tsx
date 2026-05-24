'use client'

import { useEffect } from 'react'

export default function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly"]')
    if (existing) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${url}?background_color=FBF8F3&primary_color=346B6E&hide_gdpr_banner=1`}
      style={{ minWidth: 320, height: 750 }}
    />
  )
}
