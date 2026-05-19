import type { Metadata } from 'next'
import Button from '@/components/Button'
import FAQAccordion from '@/components/FAQAccordion'
import { PRICING_TIERS, FAQ_ITEMS, CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Essay Coaching Pricing & Packages',
  description:
    'Simple, transparent pricing for college essay coaching. All packages include unlimited revisions. Choose the plan that fits your needs.',
  openGraph: {
    title: 'Essay Coaching Pricing & Packages | BayAdmit',
    description:
      'Simple, transparent pricing for college essay coaching. All packages include unlimited revisions.',
    url: 'https://bayadmit.com/pricing',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          Choose what works for you. All essay packages include unlimited revisions.
        </p>
      </div>

      {/* Section 1 — Pricing Grid */}
      <section className="section">
        <div className="shell">
          <div className="pricing">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.name} className={`plan${tier.highlighted ? ' featured' : ''}`}>
                <div className="plan-name italic">
                  {tier.name}
                  {tier.badge && <span className="badge">{tier.badge}</span>}
                </div>
                <div className="price">
                  {tier.price}
                  <small> / package</small>
                </div>
                <p className="plan-desc">{tier.desc}</p>
                <ul className="feature-list">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button href={CALENDLY_URL} external variant="primary">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — FAQ */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Questions</p>
              <h2>
                Common <em className="it">questions.</em>
              </h2>
            </div>
            <div />
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Section 3 — CTA Band */}
      <section className="cta-band">
        <div className="shell">
          <h2>
            Ready to write your{' '}
            <span className="accent" style={{ fontStyle: 'italic' }}>best</span>{' '}
            essay?
          </h2>
          <p className="lede">Book a free 30-minute consultation.</p>
          <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
        </div>
      </section>
    </>
  )
}
