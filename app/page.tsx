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
  FAQ_ITEMS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: '925Admit | Bay Area College Essay Coaching',
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
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: 56,
              alignItems: 'flex-start',
            }}
            className="hero-grid-2col"
          >
            {/* Left column */}
            <div>
              {/* Headline */}
              <h1 className="display" style={{ fontSize: 'clamp(56px, 9vw, 128px)', marginBottom: 32 }}>
                You have a<br />
                story worth<br />
                <span className="italic" style={{ color: 'var(--accent)' }}>telling.</span>
              </h1>

              {/* Lede */}
              <RevealOnScroll delay={0.1}>
                <p className="lede">
                  Let&apos;s make sure it gets read. Your essay is the one part of the app that&apos;s actually yours. Most people waste it trying to sound impressive. Let&apos;s write something real instead.
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

            </div>

            {/* Right column — image card */}
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                height: 580,
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
                <span className="eyebrow">Essay Coaching · Sample Feedback</span>
                <h2>
                  This is what actually useful <em className="it">feedback</em> looks like.
                </h2>
              </div>
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
                  Every service a <em className="it">serious</em> applicant needs.
                </h2>
              </div>
              <p>
                Nobody teaches you how to write a college essay. They tell you to &apos;show don&apos;t tell&apos; and &apos;find your voice&apos; and then leave you alone with a blank doc at 11pm. That&apos;s what we fix.
              </p>
            </div>
          </RevealOnScroll>

          <div className="showcase">
            {/* Card 1 — Annotated Feedback */}
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
              <h3>Annotated Feedback</h3>
              <p>Notes on every paragraph. Not &apos;this is great&apos; or &apos;needs work.&apos; Actual feedback: what&apos;s landing, what&apos;s not, and exactly why.</p>
            </div>

            {/* Card 2 — Personal Statement */}
            <div className="show-card">
              <div className="show-tile plum">
                <div className="mini">
                  <div className="mini-list">
                    <div className="mini-list-row">
                      <span>Draft 1 — rough ideas</span>
                      <span className="mini-pill">Done</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Draft 2 — structure</span>
                      <span className="mini-pill">Done</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Draft 3 — voice</span>
                      <span className="mini-pill warn">In review</span>
                    </div>
                    <div className="mini-list-row">
                      <span>Final — polish</span>
                      <span className="mini-pill" style={{ opacity: 0.4 }}>Pending</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Personal Statement</h3>
              <p>You&apos;re going to write a lot of drafts. That&apos;s not a bad sign, that&apos;s just how it works. We stay in it with you until it sounds like you, not like what you thought they wanted to hear.</p>
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
              <h3>Voice Coaching</h3>
              <p>If you&apos;ve ever read your own draft and thought &apos;I would never say this out loud,&apos; that&apos;s the problem. That&apos;s what we fix.</p>
            </div>

            {/* Card 4 — Pre-Submit Review */}
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
              <h3>Pre-Submit Review</h3>
              <p>One last read before you close your laptop and actually let yourself breathe.</p>
            </div>

            {/* Card 5 — Supplement Essays */}
            <div className="show-card">
              <div className="show-tile ink">
                <div className="mini">
                  <div className="mini-brief lead">
                    <span className="verb">Why Us</span>
                    <span>Stanford · 250 words — lead with the specific course, not the ranking.</span>
                  </div>
                  <div className="mini-brief tighten">
                    <span className="verb">Activity</span>
                    <span>Cut the backstory. Start with what you actually did.</span>
                  </div>
                  <div className="mini-brief cut">
                    <span className="verb">Short Q</span>
                    <span>One specific detail lands harder than three general ones.</span>
                  </div>
                </div>
              </div>
              <h3>Supplement Essays</h3>
              <p>&apos;Why do you want to attend X?&apos; is the worst prompt ever written. We&apos;ll help you answer it without copy-pasting from the school&apos;s Wikipedia page.</p>
            </div>

            {/* Card 6 — Brainstorming */}
            <div className="show-card">
              <div className="show-tile clay">
                <div className="mini">
                  <div className="mini-brief lead">
                    <span className="verb">Idea</span>
                    <span>The time you translated for your parents at the doctor&apos;s office.</span>
                  </div>
                  <div className="mini-brief tighten">
                    <span className="verb">Idea</span>
                    <span>Why you stayed late to debug the code no one asked you to fix.</span>
                  </div>
                  <div className="mini-brief cut">
                    <span className="verb">Pick</span>
                    <span>The second one. It&apos;s specific, surprising, and only yours.</span>
                  </div>
                </div>
              </div>
              <h3>Brainstorming</h3>
              <p>Stuck on what to write about? That&apos;s the most common place to get stuck. You have a story worth telling. We&apos;re good at finding it.</p>
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

      {/* ===== WHY US ===== */}
      <section className="section">
        <div className="shell">
          <RevealOnScroll>
            <div className="section-head">
              <div>
                <span className="eyebrow">Why us</span>
                <h2>
                  We&apos;ve been where <em className="it">you are.</em>
                </h2>
              </div>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              Our parents spent thousands of dollars on professional college counselors. The ones who promised better essays, stronger applications, the whole package. And most of the time, they didn&apos;t do anything. They read our drafts and said &quot;looks good.&quot; They didn&apos;t push back. They didn&apos;t tell us when something was cliche, or when we sounded like every other applicant in the pile. They just agreed with whatever we wrote and cashed the check.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              We wrote the same generic essays thousands of kids write every year. And nobody stopped us. Nobody said &quot;this won&apos;t make you stand out.&quot; Nobody steered us toward something real. We had to figure that out ourselves, after the fact, after we&apos;d already wasted months and money on advice that wasn&apos;t worth it.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
              That&apos;s why we started 925Admit. We&apos;re the kids who just went through this. We know what actually works because we lived it last year. And we&apos;re not going to nod along when your essay needs work. We&apos;re going to tell you the truth, help you find the thing that makes you different, and make sure you don&apos;t blend in.
            </p>
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
            You&apos;ve been putting this <span className="accent">off.</span>
          </h2>
          <p className="lede">
            That&apos;s fine, everyone does. Whether you&apos;re a junior just getting started or a senior staring at a blank doc, it doesn&apos;t matter. First meeting is free. Let&apos;s just start.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button href={CALENDLY_URL} external variant="primary">
              Book Free Consultation →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
