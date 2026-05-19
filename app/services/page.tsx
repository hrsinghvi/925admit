import type { Metadata } from 'next'
import Button from '@/components/Button'
import { CALENDLY_URL, ESSAY_COACHING_FEATURES, WHY_BAYADMIT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'College Essay Coaching Services',
  description:
    'Expert college essay coaching, college list building, and application strategy — personalized, 1-on-1, with unlimited revisions.',
  openGraph: {
    title: 'College Essay Coaching Services | BayAdmit',
    description:
      'Expert college essay coaching, college list building, and application strategy — personalized, 1-on-1, with unlimited revisions.',
    url: 'https://bayadmit.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>Services</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginBottom: 32 }}
        >
          Expert guidance,<br />
          every step of the<br />
          <em className="italic" style={{ color: 'var(--accent)' }}>way.</em>
        </h1>
        <p className="lede">
          From your first draft to your final submission, BayAdmit is in your corner.
        </p>
      </div>

      {/* Section 1 — Essay Coaching */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Essay Coaching</p>
              <h2>
                The essay is<br />
                the one place<br />
                they hear <em className="it">you.</em>
              </h2>
            </div>
            <p>
              Your college essay is the one place admissions officers hear you — not your GPA, not
              your test scores. We help you uncover your story, structure it powerfully, and polish
              it to perfection.
            </p>
          </div>

          <ul style={{ listStyle: 'none', margin: '0 0 40px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ESSAY_COACHING_FEATURES.map((feature) => (
              <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: 'var(--accent)', fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 16, color: 'var(--ink-2)' }}>{feature}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button href="/pricing" variant="ghost">View Pricing</Button>
            <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Section 2 — College List Building */}
      <section className="section">
        <div className="shell">
          <p className="eyebrow" style={{ marginBottom: 16 }}>Coming Soon</p>
          <h2
            className="display"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginBottom: 24 }}
          >
            College List<br />
            <em className="italic" style={{ color: 'var(--accent)' }}>Building</em>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: '48ch', marginBottom: 24 }}>
            We&apos;ll help you build a balanced, strategic college list tailored to your academics,
            interests, and goals.
          </p>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 999,
            background: 'var(--bg-elev)',
            color: 'var(--muted)',
            border: '1px solid var(--rule)',
          }}>
            Coming Soon
          </span>
        </div>
      </section>

      {/* Section 3 — Application Strategy */}
      <section className="section">
        <div className="shell">
          <p className="eyebrow" style={{ marginBottom: 16 }}>Coming Soon</p>
          <h2
            className="display"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginBottom: 24 }}
          >
            Application<br />
            <em className="italic" style={{ color: 'var(--accent)' }}>Strategy</em>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: '48ch', marginBottom: 24 }}>
            Holistic support for the full application — activities list, letters of rec strategy,
            timeline planning, and more.
          </p>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 999,
            background: 'var(--bg-elev)',
            color: 'var(--muted)',
            border: '1px solid var(--rule)',
          }}>
            Coming Soon
          </span>
        </div>
      </section>

      {/* Section 4 — Why BayAdmit */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Why BayAdmit</p>
              <h2>
                What makes us<br />
                <em className="it">different.</em>
              </h2>
            </div>
            <div />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {WHY_BAYADMIT.map(({ title }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 17, color: 'var(--ink-2)' }}>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
