import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { TEAM } from '@/lib/constants'

type TeamMember = typeof TEAM[number]

function TeamCard({ member, style }: { member: TeamMember; style?: CSSProperties }) {
  return (
    <div style={{
      flex: 1,
      background: 'var(--paper)',
      border: '1px solid var(--rule)',
      borderRadius: 20,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxShadow: '0 1px 6px -2px rgba(21,20,15,0.06)',
      ...style,
    }}>
      <div style={{
        width: 88,
        height: 88,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid var(--rule)',
        flexShrink: 0,
      }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </div>
      <div>
        <p className="display" style={{ fontSize: 22, margin: '0 0 4px' }}>{member.name}</p>
        <p className="eyebrow" style={{ marginBottom: 12 }}>{member.role}</p>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.65 }}>{member.bio}</p>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About 925Admit',
  description:
    'Meet the 925Admit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
  openGraph: {
    title: 'About 925Admit | Bay Area College Admissions Coaches',
    description:
      'Meet the 925Admit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
    url: 'https://925admit.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero + Our Story — combined */}
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 72 }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>About</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 className="display" style={{ fontSize: 'clamp(48px, 6vw, 96px)', margin: 0 }}>
            We&apos;re <em className="italic" style={{ color: 'var(--accent)' }}>925Admit.</em>
          </h1>
          <div>
            <p className="lede" style={{ marginBottom: 0 }}>
              A small, passionate team of writers, educators, and former applicants who believe every
              student has a story worth telling. 925Admit was founded with one belief: the college essay should not be stressful.
              We have helped students from Fremont to San Francisco find the words that got them
              noticed.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
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

          {/* Row 1 — 3 cards */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
            {TEAM.slice(0, 3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          {/* Row 2 — 2 cards spanning full row width */}
          <div style={{ display: 'flex', gap: 24 }}>
            {TEAM.slice(3).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
