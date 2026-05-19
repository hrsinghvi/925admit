import type { Metadata } from 'next'
import Button from '@/components/Button'
import { CALENDLY_URL, CONTACT_EMAIL, GRADE_OPTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact BayAdmit | Book a Free Consultation',
  description:
    'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact BayAdmit | Book a Free Consultation',
    description:
      'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
    url: 'https://bayadmit.com/contact',
  },
}

const inputStyle = {
  width: '100%',
  border: '1px solid var(--rule)',
  borderRadius: 10,
  padding: '12px 16px',
  fontSize: 15,
  background: 'var(--paper)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-sans-var)',
  outline: 'none',
} as const

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
          Book a free consultation or send us a message — we&apos;d love to hear from you.
        </p>
      </div>

      {/* Section 1 — Contact Layout */}
      <section className="section">
        <div className="shell">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48 }}>

            {/* Left col — Form */}
            <div>
              <h2 className="display" style={{ fontSize: 32, marginBottom: 32 }}>
                Send a message.
              </h2>
              <form action="#">
                {/* Full Name */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    htmlFor="name"
                    style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    style={inputStyle}
                  />
                </div>

                {/* Email Address */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    htmlFor="email"
                    style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    style={inputStyle}
                  />
                </div>

                {/* Phone (optional) */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    htmlFor="phone"
                    style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}
                  >
                    Phone Number <span style={{ color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    style={inputStyle}
                  />
                </div>

                {/* Grade (optional) */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    htmlFor="grade"
                    style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}
                  >
                    Current Grade <span style={{ color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    defaultValue=""
                    style={{ ...inputStyle, appearance: 'auto' }}
                  >
                    <option value="" disabled>Select your grade</option>
                    {GRADE_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  Send Message
                </Button>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12, textAlign: 'center' }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>

            {/* Right col — Info */}
            <div>
              {/* Booking card */}
              <div style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                borderRadius: 18,
                padding: 40,
                marginBottom: 32,
              }}>
                <p className="eyebrow" style={{ color: 'var(--muted-2)', marginBottom: 12 }}>
                  Free Consultation
                </p>
                <h2 className="display" style={{ fontSize: 28, color: 'var(--bg)', marginBottom: 16 }}>
                  Book a free 30-min call
                </h2>
                <p style={{ color: 'var(--muted-2)', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  Schedule a free 30-minute call to discuss your goals, timeline, and how we can
                  help.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                >
                  Schedule on Calendly
                </a>
              </div>

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--accent)', flexShrink: 0, marginTop: 7,
                  }} />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{ fontSize: 14, color: 'var(--ink-2)' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--accent)', flexShrink: 0, marginTop: 7,
                  }} />
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                    Bay Area, California · Serving students nationwide
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--accent)', flexShrink: 0, marginTop: 7,
                  }} />
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                    We typically respond within 24 hours
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
