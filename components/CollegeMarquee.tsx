'use client'

const COLLEGES = [
  'Harvard', 'Yale', 'MIT', 'Stanford', 'Princeton', 'Columbia', 'Penn', 'Cornell',
  'Brown', 'Dartmouth', 'UC Berkeley', 'UCLA', 'UC San Diego', 'UC Santa Barbara',
  'UC Irvine', 'Michigan', 'UIUC', 'Georgia Tech', 'UNC', 'UT Austin', 'UW Seattle',
  'Purdue', 'Carnegie Mellon', 'Duke', 'USC', 'Boston University', 'NYU',
  'Notre Dame', 'Georgetown', 'Vanderbilt', 'Cal Poly SLO', 'Rice',
]

const DOT = (
  <span style={{
    display: 'inline-block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'var(--accent)',
    opacity: 0.5,
    flexShrink: 0,
    alignSelf: 'center',
  }} />
)

export default function CollegeMarquee() {
  const items = [...COLLEGES, ...COLLEGES]

  return (
    <section style={{
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      padding: '28px 0 32px',
      overflow: 'hidden',
    }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          <span className="eyebrow">Our students have been admitted to these schools.</span>
        </div>
      </div>

      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          width: 'max-content',
          willChange: 'transform',
          animation: 'marquee-smooth 55s linear infinite',
        }}>
          {items.map((name, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, flexShrink: 0 }}>
              <span style={{
                fontSize: 15,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                color: 'var(--ink-2)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
              }}>
                {name}
              </span>
              {DOT}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
