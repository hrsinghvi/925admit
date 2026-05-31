import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'College Essay Coaching Services',
  description:
    'Expert college essay coaching, activity list help, and college list building — personalized, 1-on-1, with unlimited revisions.',
  openGraph: {
    title: 'College Essay Coaching Services | 925Admit',
    description:
      'Expert college essay coaching, activity list help, and college list building — personalized, 1-on-1, with unlimited revisions.',
    url: 'https://925admit.com/services',
  },
}


const cardBase: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid var(--rule)',
  borderRadius: 20,
  padding: 32,
  boxShadow: '0 1px 6px -2px rgba(21,20,15,0.06)',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 56 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>Services</p>
        <div className="services-hero-grid">
          <h1 className="display" style={{ fontSize: 'clamp(40px, 5vw, 80px)', margin: 0 }}>
            Everything you need<br />
            to <em className="italic" style={{ color: 'var(--accent)' }}>get in.</em>
          </h1>
          <p className="lede" style={{ margin: 0 }}>
            Nobody teaches you how to write a college essay. They tell you to &apos;show don&apos;t tell&apos; and &apos;find your voice&apos; and then leave you alone with a blank doc at 11pm. That&apos;s what we fix.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Row 0 — Hourly Counseling (full width) */}
          <div style={{ ...cardBase }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Live 1-on-1 Sessions</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginBottom: 12 }}>
              Buy hours. Use them for<br /><em className="italic" style={{ color: 'var(--accent)' }}>anything.</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-2)', maxWidth: '60ch', marginBottom: 24, lineHeight: 1.65 }}>
              Class selection, SAT/AP prep, essay ideation, live essay grading, college list building, Common App &amp; UC strategy, filling out applications on call — or any written service done live. Hours are valid until you graduate. No extra fees on top of the package.
            </p>

            <div className="grid-5col" style={{ gap: 16, marginBottom: 32 }}>
              {[
                { title: 'Starter', hours: '5 hrs', price: '$550', rate: '$110/hr' },
                { title: 'Standard', hours: '10 hrs', price: '$1,000', rate: '$100/hr' },
                { title: 'Growth', hours: '20 hrs', price: '$1,700', rate: '$85/hr', featured: true },
                { title: 'Pro', hours: '30 hrs', price: '$2,400', rate: '$80/hr' },
                { title: 'Elite', hours: '40 hrs', price: '$3,000', rate: '$75/hr' },
              ].map((pkg) => (
                <div key={pkg.title} style={{
                  background: 'var(--bg)',
                  border: pkg.featured ? '2px solid #346B6E' : '1px solid var(--rule)',
                  borderRadius: 14,
                  padding: 24,
                }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 4 }}>
                    {pkg.title} · {pkg.hours}
                    {pkg.featured && <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: 999,
                      background: '#346B6E',
                      color: '#fff',
                      marginLeft: 10,
                      verticalAlign: 'middle',
                    }}>Best Deal</span>}
                  </p>
                  <p className="display" style={{ fontSize: 28, margin: '0 0 4px', color: 'var(--ink)' }}>{pkg.price}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0 }}>{pkg.rate}</p>
                  {pkg.featured && <p style={{ fontSize: 12, color: '#346B6E', fontWeight: 600, margin: '8px 0 0' }}>Most popular</p>}
                </div>
              ))}
            </div>

            <Button href="/pricing#counseling" variant="dark">View Pricing</Button>
          </div>

          {/* Row 1 — Essay Grading (full width) */}
          <div style={{ ...cardBase }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Essay Grading</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginBottom: 12 }}>
              The essay is the one place<br />they hear <em className="italic" style={{ color: 'var(--accent)' }}>you.</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-2)', maxWidth: '60ch', marginBottom: 32, lineHeight: 1.65 }}>
              Detailed feedback, unlimited revisions, and expert coaching — from brainstorm to final draft. One-on-one sessions with a coach who actually reads your essay.
            </p>

            {/* 3 essay sub-cards */}
            <div className="grid-3col" style={{ gap: 16, marginBottom: 32 }}>
              {[
                {
                  title: 'Common App Essay',
                  desc: 'Your personal statement is the heart of your application. We help you find the story only you can tell and make every word count.',
                },
                {
                  title: 'Supplemental Essays',
                  desc: 'Why this school? Why this major? We help you nail every prompt with tailored, school-specific answers that don\'t feel generic.',
                },
                {
                  title: 'UC PIQs',
                  desc: 'The Personal Insight Questions require a different approach. We help you choose the right prompts and answer them with depth and authenticity.',
                },
              ].map((service) => (
                <div key={service.title} style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--rule)',
                  borderRadius: 14,
                  padding: 24,
                }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{service.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{service.desc}</p>
                </div>
              ))}
            </div>

            <Button href="/pricing#essays" variant="dark">View Pricing</Button>
          </div>

          {/* Row 2 — Activity List + College List side by side */}
          <div className="grid-2col" style={{ gap: 24 }}>

            {/* Activity List */}
            <div style={{ ...cardBase, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Activity List</p>
              <h2 className="display" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', marginBottom: 12 }}>
                Make every activity<br /><em className="italic" style={{ color: 'var(--accent)' }}>count.</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 24 }}>
                150 characters per activity. We help you write descriptions that are punchy, specific, and strategically positioned — so your extracurriculars hit as hard as your essays.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['All 10 Common App activities', 'Strategic framing + positioning', 'Tone calibrated to each school'].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button href="/pricing#activities" variant="dark">View Pricing</Button>
            </div>

            {/* College List + Majors */}
            <div style={{ ...cardBase, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>College List + Majors</p>
              <h2 className="display" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', marginBottom: 12 }}>
                Find the right<br /><em className="italic" style={{ color: 'var(--accent)' }}>fit.</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 24 }}>
                A balanced, strategic college list tailored to your GPA, test scores, interests, and goals — plus major exploration to make sure you apply to the right programs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Reach, match, and safety balance', 'Major fit analysis', 'School-specific context', 'Ongoing list refinement'].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button href="/pricing#college-list" variant="dark">View Pricing</Button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
