import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Button from '@/components/Button'
import { CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Counseling & Essay Coaching Pricing',
  description:
    'Hourly counseling packages and essay coaching pricing. Live 1-on-1 sessions, unlimited revisions, transparent pricing.',
  openGraph: {
    title: 'Essay Coaching Pricing & Packages | 925Admit',
    description:
      'Simple, transparent pricing for college essay coaching. All packages include unlimited revisions.',
    url: 'https://925admit.com/pricing',
  },
}


const cardBase: CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid var(--rule)',
  borderRadius: 16,
  padding: '24px 28px',
}

const saveBadge: CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-mono)',
  fontSize: 10,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  padding: '3px 8px',
  borderRadius: 999,
  background: 'rgba(26,26,26,0.08)',
  color: '#1a1a1a',
  border: '1px solid rgba(26,26,26,0.2)',
  marginLeft: 10,
  verticalAlign: 'middle',
}

const featuredBorder: CSSProperties = {
  border: '2px solid #346B6E',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>Pricing</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginBottom: 32 }}
        >
          Simple, transparent<br />
          <em className="italic" style={{ color: 'var(--accent)' }}>pricing.</em>
        </h1>
        <p className="lede">
          Choose what works for you. Every essay includes two rounds of revision.
        </p>
      </div>

      {/* Pricing Sections */}
      <section className="section">
        <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>

          {/* Hourly Counseling */}
          <div>
            <h3 className="display" style={{ fontSize: 24, marginBottom: 6, color: 'var(--ink)' }}>Hourly counseling packages</h3>
            <p style={{ fontSize: 14, marginBottom: 20, color: 'var(--ink-2)' }}>
              Live 1-on-1 sessions — use hours for anything. Valid until graduation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Row 1: Starter + Standard */}
              <div className="grid-2col" style={{ gap: 16 }}>
                <div className="price-card" style={{ ...cardBase }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Starter · 5 hrs</p>
                  <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$550</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>$110/hr</p>
                </div>
                <div className="price-card" style={{ ...cardBase }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Standard · 10 hrs</p>
                  <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$1,000</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>$100/hr</p>
                </div>
              </div>
              {/* Row 2: Growth (full width, featured) */}
              <div className="price-card" style={{ ...cardBase, ...featuredBorder }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>
                  Growth · 20 hrs<span style={saveBadge}>Best Value</span>
                </p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$1,700</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>$85/hr</p>
              </div>
              {/* Row 3: Pro + Elite */}
              <div className="grid-2col" style={{ gap: 16 }}>
                <div className="price-card" style={{ ...cardBase }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Pro · 30 hrs</p>
                  <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$2,400</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>$80/hr</p>
                </div>
                <div className="price-card" style={{ ...cardBase }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Elite · 40 hrs</p>
                  <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$3,000</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>$75/hr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supplemental Essays */}
          <div>
            <h3 className="display" style={{ fontSize: 24, marginBottom: 6, color: 'var(--ink)' }}>Supplemental essays</h3>
            <p style={{ fontSize: 14, marginBottom: 20, color: 'var(--ink-2)' }}>
              Priced by word count — each includes 2 rounds of revision
            </p>
            <div className="price-card" style={{ ...cardBase }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ['0 – 75 words', '$10'],
                    ['76 – 150 words', '$20'],
                    ['151 – 300 words', '$30'],
                    ['301 – 450 words', '$40'],
                    ['451 – 650 words', '$50'],
                    ['651 – 850 words', '$60'],
                  ].map(([range, price], i, arr) => (
                    <tr key={range}>
                      <td style={{
                        padding: '14px 0',
                        fontSize: 15,
                        color: 'var(--ink)',
                        borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
                      }}>
                        {range}
                      </td>
                      <td style={{
                        padding: '14px 0',
                        fontSize: 15,
                        fontWeight: 600,
                        color: 'var(--ink)',
                        textAlign: 'right',
                        borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
                      }}>
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* UC PIQs + Common App */}
          <div>
            <h3 className="display" style={{ fontSize: 24, marginBottom: 6, color: 'var(--ink)' }}>UC Personal Insight Questions (PIQ)</h3>
            <p style={{ fontSize: 14, marginBottom: 20, color: 'var(--ink-2)' }}>
              350 words each — students answer 4 of 8 prompts
            </p>
            <div className="grid-3col" style={{ gap: 16 }}>
              <div className="price-card" style={{ ...cardBase }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Single PIQ essay</p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$40</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>per essay</p>
              </div>
              <div className="price-card" style={{ ...cardBase, ...featuredBorder }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>
                  All 4 PIQ bundle<span style={saveBadge}>Save $20</span>
                </p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$140</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>vs. $160 individually</p>
              </div>
              <div className="price-card" style={{ ...cardBase }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Common App essay</p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$50</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>650 words</p>
              </div>
            </div>
          </div>

          {/* College List & Majors */}
          <div>
            <h3 className="display" style={{ fontSize: 24, marginBottom: 6, color: 'var(--ink)' }}>College list &amp; majors</h3>
            <p style={{ fontSize: 14, marginBottom: 20, color: 'var(--ink-2)' }}>
              Curated school and major recommendations
            </p>
            <div className="grid-2col" style={{ gap: 16 }}>
              <div className="price-card" style={{ ...cardBase }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>College list</p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$20</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>personalized school list</p>
              </div>
              <div className="price-card" style={{ ...cardBase, ...featuredBorder }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>
                  College list + majors<span style={saveBadge}>Save $5</span>
                </p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$35</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>schools &amp; majors to apply to</p>
              </div>
            </div>
          </div>

          {/* Activity Lists */}
          <div>
            <h3 className="display" style={{ fontSize: 24, marginBottom: 6, color: 'var(--ink)' }}>Activity lists</h3>
            <p style={{ fontSize: 14, marginBottom: 20, color: 'var(--ink-2)' }}>
              Crafting descriptions that highlight your involvement
            </p>
            <div className="grid-2col" style={{ gap: 16 }}>
              <div className="price-card" style={{ ...cardBase }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>Common App activity list</p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$35</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>10 activities · 150 chars each</p>
              </div>
              <div className="price-card" style={{ ...cardBase }}>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>UC activity list</p>
                <p className="display" style={{ fontSize: 32, margin: '0 0 4px', color: 'var(--ink)' }}>$80</p>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>20 activities · 350 chars each</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="shell">
          <h2>
            You&apos;ve been putting this{' '}
            <span className="accent" style={{ fontStyle: 'italic' }}>off.</span>
          </h2>
          <p className="lede">That&apos;s fine, everyone does. First meeting is free. Let&apos;s just start.</p>
          <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
        </div>
      </section>
    </>
  )
}
