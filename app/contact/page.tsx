import type { Metadata } from 'next'
import { CALENDLY_URL } from '@/lib/constants'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Contact 925 Admit | Book a Free Consultation',
  description:
    'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact 925 Admit | Book a Free Consultation',
    description:
      'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
    url: 'https://925admit.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>Contact</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginBottom: 32 }}
        >
          Let&apos;s <em className="italic" style={{ color: 'var(--accent)' }}>talk.</em>
        </h1>
        <p className="lede">
          Book a free 30-minute consultation — no commitment, no pressure.
        </p>
      </div>

      {/* Calendly Embed */}
      <section className="section">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>
      </section>
    </>
  )
}
