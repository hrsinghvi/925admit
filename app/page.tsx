import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/Button'
import EssayDemo from '@/components/EssayDemo'
import FAQAccordion from '@/components/FAQAccordion'
import CollegeMarquee from '@/components/CollegeMarquee'
import RevealOnScroll from '@/components/RevealOnScroll'
import {
  CALENDLY_URL,
  TESTIMONIALS,
  PRICING_TIERS,
  FAQ_ITEMS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'BayAdmit | Bay Area College Essay Coaching',
  description:
    "Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process.",
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="shell">
          {/* 2-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="hero-grid-2col"
          >
            {/* Left column */}
            <div>
              {/* Headline */}
              <h1 className="display" style={{ fontSize: 'clamp(56px, 9vw, 128px)', marginBottom: 32 }}>
                Your story<br />
                deserves to<br />
                get <span className="italic" style={{ color: 'var(--accent)' }}>in</span>.
              </h1>

              {/* Lede */}
              <RevealOnScroll delay={0.1}>
                <p className="lede">
                  Bay Area&apos;s premier college essay coaching service. We help students find their voice,
                  craft compelling narratives, and stand out in the admissions process.
                </p>
              </RevealOnScroll>

              {/* CTAs */}
              <RevealOnScroll delay={0.2}>
                <div className="hero-ctas">
                  <Button href={CALENDLY_URL} external variant="primary">
                    Book Free Consultation →
                  </Button>
                  <Button href="/testimonials" variant="ghost">
                    See what others say →
                  </Button>
                </div>
              </RevealOnScroll>

              {/* Meta strip */}
              <RevealOnScroll delay={0.3}>
                <div className="hero-meta">
                  <div className="hero-meta-block">
                    <div className="num">500<span className="accent">+</span></div>
                    <div className="label">essays coached</div>
                  </div>
                  <div className="hero-meta-block">
                    <div className="num">1 : 1</div>
                    <div className="label">dedicated counselor, not a chatbot</div>
                  </div>
                  <div className="hero-meta-block">
                    <div className="num">48<span className="accent">hr</span></div>
                    <div className="label">guaranteed feedback turnaround</div>
                  </div>
                  <div className="hero-meta-block">
                    <div className="num">3</div>
                    <div className="label">steps from first draft to final essay</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right column — image card */}
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                height: 500,
                position: 'relative',
                background: 'var(--bg-elev)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1400&auto=format&fit=crop"
                alt="Student studying and writing college essays"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLLEGE MARQUEE ===== */}
      <CollegeMarquee />

      {/* ===== ESSAY DEMO ===== */}
      <section className="section" id="demo">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">Essay Coaching · Live</span>
                <h2>
                  Click any <em className="it">underlined</em> phrase — the coach note moves with you.
                </h2>
              </div>
              <p>
                This is what a BayAdmit coaching session looks like. Real essay excerpt, real feedback
                notes — the kind of close read that gets essays noticed.
              </p>
            </div>
          </RevealOnScroll>
          <EssayDemo />
        </div>
      </section>

      {/* ===== SHOWCASE ===== */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">What we do</span>
                <h2>
                  Every tool a <em className="it">serious</em> applicant needs.
                </h2>
              </div>
              <p>
                From your first draft to your last supplement — BayAdmit coaches the full application.
              </p>
            </div>
          </RevealOnScroll>

          <div className="showcase">
            {/* Card 1 — Annotated Coaching */}
            <div className="show-card">
              <div className="show-tile slate">
                <div className="mini">
                  <div className="mini-essay">
                    <p style={{ margin: '0 0 8px' }}>
                      Growing up between two <span className="hi-y">cultures taught</span> me that
                      identity isn&apos;t fixed — it&apos;s{' '}
                      <span className="hi-g">something you build</span>.
                    </p>
                  </div>
                  <div className="mini-row">
                    <span className="tag-y" />
                    <span style={{ fontSize: 11, color: 'var(--ink-2)' }}>Voice · Rephrase</span>
                    <span className="meta">¶1</span>
                  </div>
                  <div className="mini-row">
                    <span className="tag-g" />
                    <span style={{ fontSize: 11, color: 'var(--ink-2)' }}>Strong image</span>
                    <span className="meta">¶1</span>
                  </div>
                </div>
              </div>
              <h3>Annotated Coaching</h3>
              <p>Line-by-line feedback on every paragraph</p>
            </div>

            {/* Card 2 — Score & Strengths */}
            <div className="show-card">
              <div className="show-tile plum">
                <div className="mini">
                  <div className="mini-score">
                    92 <small>/ 100</small>
                  </div>
                  <div className="mini-hist">
                    <span style={{ height: '30%' }} />
                    <span style={{ height: '45%' }} />
                    <span style={{ height: '60%' }} />
                    <span style={{ height: '50%' }} />
                    <span className="peak" style={{ height: '92%' }} />
                    <span style={{ height: '75%' }} />
                    <span style={{ height: '80%' }} />
                  </div>
                </div>
              </div>
              <h3>Score &amp; Strengths</h3>
              <p>Six dimensions, scored like an admissions reader</p>
            </div>

            {/* Card 3 — Voice Rewrite */}
            <div className="show-card">
              <div className="show-tile sienna">
                <div className="mini">
                  <div className="mini-rewrite">
                    <div className="col">
                      <div className="col-label">Before</div>
                      <p>
                        <span className="strike">I have always been passionate about science.</span>
                      </p>
                    </div>
                    <div className="col fresh">
                      <div className="col-label">After</div>
                      <p>
                        The frog did not survive my first dissection. I went back the next day anyway.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Voice Rewrite</h3>
              <p>When a sentence isn&apos;t you, we show what it could be</p>
            </div>

            {/* Card 4 — Final Checklist */}
            <div className="show-card">
              <div className="show-tile sage">
                <div className="mini">
                  <div className="mini-list">
                    <div className="mini-list-row">
                      <span>Word count</span>
                      <span className="mini-pill">Done</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Hook clarity</span>
                      <span className="mini-pill">Done</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Transition flow</span>
                      <span className="mini-pill warn">Review</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Voice consistency</span>
                      <span className="mini-pill">Done</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Closing line</span>
                      <span className="mini-pill warn">Review</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Final Checklist</h3>
              <p>Nothing slips through before submit day</p>
            </div>

            {/* Card 5 — Strategy Brief */}
            <div className="show-card">
              <div className="show-tile ink">
                <div className="mini">
                  <div className="mini-brief lead">
                    <span className="verb">Lead</span>
                    <span>Open with the moment in the garden, not the thesis statement.</span>
                  </div>
                  <div className="mini-brief tighten">
                    <span className="verb">Tighten</span>
                    <span>Cut ¶3 — restates what ¶2 already shows.</span>
                  </div>
                  <div className="mini-brief cut">
                    <span className="verb">Cut</span>
                    <span>Remove &ldquo;I have always been&rdquo; openers throughout.</span>
                  </div>
                </div>
              </div>
              <h3>Strategy Brief</h3>
              <p>School-specific supplement guidance</p>
            </div>

            {/* Card 6 — Closest Match */}
            <div className="show-card">
              <div className="show-tile clay">
                <div className="mini">
                  <div className="mini-match">
                    <div>
                      <div className="col-head">
                        Your Essay <span className="pct">87%</span>
                      </div>
                      <p>
                        The summer before junior year, I rewrote my personal statement eleven times.
                      </p>
                    </div>
                    <div>
                      <div className="col-head">
                        Admitted Essay
                      </div>
                      <p>
                        My grandmother never planted anything she couldn&apos;t eat. I took notes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Closest Match</h3>
              <p>Essays that worked at your target schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">The process</span>
                <h2>
                  Simple. Personalized. <em className="it">Effective.</em>
                </h2>
              </div>
            </div>
          </RevealOnScroll>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Book a Free Consultation</h4>
              <p>We learn about you, your goals, and your story. No commitment.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Draft Together</h4>
              <p>Your counselor guides every draft with close, specific feedback.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Refine &amp; Polish</h4>
              <p>Unlimited revisions until every sentence sounds like you.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h4>Submit with Confidence</h4>
              <p>Walk into application season ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">Stories</span>
                <h2>
                  Students who found <em className="it">their voice.</em>
                </h2>
              </div>
            </div>
          </RevealOnScroll>
          <div className="testimonials">
            {TESTIMONIALS.slice(0, 3).map((t) => {
              const initial = t.name.charAt(0)
              return (
                <div key={t.name} className="testimonial">
                  <div className="quote">&ldquo;{t.quote}&rdquo;</div>
                  <div className="author">
                    <div className="avatar">{initial}</div>
                    <div>
                      <div className="meta-name">{t.name}</div>
                      <div className="meta-school">{t.result}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">Pricing</span>
                <h2>
                  Simple, transparent <em className="it">pricing.</em>
                </h2>
              </div>
              <p>All packages include unlimited revisions. No hidden fees.</p>
            </div>
          </RevealOnScroll>
          <div className="pricing">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.name} className={`plan${tier.highlighted ? ' featured' : ''}`}>
                <div className="plan-name">
                  <span className="italic">{tier.name}</span>
                  {tier.badge && <span className="badge">{tier.badge}</span>}
                </div>
                <div className="price">
                  {tier.price}
                  <small>/package</small>
                </div>
                <div className="plan-desc">{tier.desc}</div>
                <ul className="feature-list">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button href={CALENDLY_URL} external variant="primary">
                  Book Free Consultation
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">Questions</span>
                <h2>
                  Common <em className="it">questions.</em>
                </h2>
              </div>
            </div>
          </RevealOnScroll>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <div className="shell">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Ready when you are, writer.
          </div>
          <h2>
            Ready to write your <span className="accent">best</span> essay?
          </h2>
          <p className="lede">
            Book a free 30-minute consultation — no commitment, no pressure.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Button href={CALENDLY_URL} external variant="primary">
              Book Free Consultation →
            </Button>
            <Button href="#pricing" variant="ghost">
              See pricing →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
