import type { Metadata } from 'next'
import Button from '@/components/Button'
import { TESTIMONIALS, SUCCESS_SCHOOLS, CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Student Success Stories',
  description:
    'Hear from students and families who worked with BayAdmit. Admitted to UC Berkeley, UCLA, USC, NYU, and more.',
  openGraph: {
    title: 'Student Success Stories | BayAdmit',
    description:
      'Hear from students and families who worked with BayAdmit. Admitted to UC Berkeley, UCLA, USC, NYU, and more.',
    url: 'https://bayadmit.com/testimonials',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>Testimonials</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginBottom: 32 }}
        >
          Real students.<br />
          <em className="italic" style={{ color: 'var(--accent)' }}>Real results.</em>
        </h1>
        <p className="lede">
          Hear from the students and families we&apos;ve worked with.
        </p>
      </div>

      {/* Section 1 — Testimonials Grid */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Stories</p>
              <h2>
                Students who found<br />
                their <em className="it">voice.</em>
              </h2>
            </div>
            <div />
          </div>

          <div className="testimonials">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial">
                <p className="quote">{t.quote}</p>
                <div className="author">
                  <div className="avatar">{t.name[0]}</div>
                  <div>
                    <p className="meta-name">{t.name}</p>
                    <p className="meta-school">{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Schools */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Admitted To</p>
              <h2>
                Schools our students<br />
                <em className="it">got into.</em>
              </h2>
            </div>
            <div />
          </div>

          <div className="logo-row">
            {SUCCESS_SCHOOLS.map((school) => (
              <span key={school} className="logo-item">
                <span className="dot" />
                {school}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginTop: 32 }}>
            *Results vary. School names used for illustrative purposes only.
          </p>
        </div>
      </section>

      {/* Section 3 — CTA Band */}
      <section className="cta-band">
        <div className="shell">
          <h2>
            Want to be our next<br />
            <span className="accent">success story?</span>
          </h2>
          <p className="lede">
            Book a free consultation — no commitment, no pressure.
          </p>
          <Button href={CALENDLY_URL} external variant="primary">Book Free Consult</Button>
        </div>
      </section>
    </>
  )
}
