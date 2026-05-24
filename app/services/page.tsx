import type { Metadata } from 'next'
import Button from '@/components/Button'
import { CALENDLY_URL } from '@/lib/constants'

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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end' }}>
          <h1 className="display" style={{ fontSize: 'clamp(40px, 5vw, 80px)', margin: 0 }}>
            Everything you need<br />
            to <em className="italic" style={{ color: 'var(--accent)' }}>get in.</em>
          </h1>
          <p className="lede" style={{ margin: 0 }}>
            From your first essay draft to your final college list — 925Admit has you covered with expert, personalized support.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
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

            <div style={{ display: 'flex', gap: 12 }}>
              <Button href="/pricing" variant="ghost">View Pricing</Button>
              <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
            </div>
          </div>

          {/* Row 2 — Activity List + College List side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

            {/* Activity List */}
            <div style={{ ...cardBase }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Activity List</p>
              <h2 className="display" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', marginBottom: 12 }}>
                Make every activity<br /><em className="italic" style={{ color: 'var(--accent)' }}>count.</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 24 }}>
                150 characters per activity. We help you write descriptions that are punchy, specific, and strategically positioned — so your extracurriculars hit as hard as your essays.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['All 10 Common App activities', 'Strategic framing + positioning', 'Tone calibrated to each school', '48-hr feedback turnaround'].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
            </div>

            {/* College List + Majors */}
            <div style={{ ...cardBase }}>
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
              <Button href={CALENDLY_URL} external variant="primary">Book Free Consultation</Button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
