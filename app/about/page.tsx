import type { Metadata } from 'next'
import { TEAM, VALUES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About 925 Admit',
  description:
    'Meet the 925 Admit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
  openGraph: {
    title: 'About 925 Admit | Bay Area College Admissions Coaches',
    description:
      'Meet the 925 Admit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
    url: 'https://bayadmit.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>About</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginBottom: 32 }}
        >
          We&apos;re <em className="italic" style={{ color: 'var(--accent)' }}>925 Admit.</em>
        </h1>
        <p className="lede">
          A small, passionate team of writers, educators, and former applicants who believe every
          student has a story worth telling.
        </p>
      </div>

      {/* Section 1 — Our Story */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2>
                Founded in the<br />
                <em className="it">Bay Area.</em>
              </h2>
            </div>
            <p>
              925 Admit was founded with one belief: the college essay shouldn&apos;t be stressful.
              We&apos;ve helped students from Fremont to San Francisco find the words that got them
              noticed. We&apos;re not a factory — we&apos;re a small team that genuinely cares.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-elev)',
            border: '1px solid var(--rule)',
            borderRadius: 16,
            padding: 48,
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28,
              fontStyle: 'italic',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}>
              Every student has a story worth telling.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Team */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">The Team</p>
              <h2>
                The people behind<br />
                your <em className="it">essays.</em>
              </h2>
            </div>
            <div />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {TEAM.map((member) => (
              <div key={member.name} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), #4a9a9e)',
                  color: 'white',
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  fontStyle: 'italic',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {member.initials}
                </div>
                <div>
                  <p
                    className="display"
                    style={{ fontSize: 22, margin: '0 0 4px' }}
                  >
                    {member.name}
                  </p>
                  <p className="eyebrow" style={{ marginBottom: 8 }}>{member.role}</p>
                  <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Values */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Values</p>
              <h2>
                What we <em className="it">believe.</em>
              </h2>
            </div>
            <div />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {VALUES.map(({ title, description }) => (
              <div key={title} style={{
                background: 'var(--paper)',
                border: '1px solid var(--rule)',
                borderRadius: 16,
                padding: 32,
              }}>
                <h3 className="display" style={{ fontSize: 22, margin: '0 0 12px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
