'use client'

const COLLEGES: { name: string; domain: string }[] = [
  { name: 'Harvard',          domain: 'harvard.edu' },
  { name: 'Yale',             domain: 'yale.edu' },
  { name: 'MIT',              domain: 'mit.edu' },
  { name: 'Stanford',         domain: 'stanford.edu' },
  { name: 'Princeton',        domain: 'princeton.edu' },
  { name: 'Columbia',         domain: 'columbia.edu' },
  { name: 'Penn',             domain: 'upenn.edu' },
  { name: 'Cornell',          domain: 'cornell.edu' },
  { name: 'Brown',            domain: 'brown.edu' },
  { name: 'Dartmouth',        domain: 'dartmouth.edu' },
  { name: 'UC Berkeley',      domain: 'berkeley.edu' },
  { name: 'UCLA',             domain: 'ucla.edu' },
  { name: 'UC San Diego',     domain: 'ucsd.edu' },
  { name: 'UC Santa Barbara', domain: 'ucsb.edu' },
  { name: 'UC Irvine',        domain: 'uci.edu' },
  { name: 'Michigan',         domain: 'umich.edu' },
  { name: 'UIUC',             domain: 'illinois.edu' },
  { name: 'Georgia Tech',     domain: 'gatech.edu' },
  { name: 'UNC',              domain: 'unc.edu' },
  { name: 'UT Austin',        domain: 'utexas.edu' },
  { name: 'UW Seattle',       domain: 'uw.edu' },
  { name: 'Purdue',           domain: 'purdue.edu' },
  { name: 'Carnegie Mellon',  domain: 'cmu.edu' },
  { name: 'Duke',             domain: 'duke.edu' },
  { name: 'USC',              domain: 'usc.edu' },
  { name: 'Boston University',domain: 'bu.edu' },
  { name: 'NYU',              domain: 'nyu.edu' },
  { name: 'Notre Dame',       domain: 'nd.edu' },
  { name: 'Georgetown',       domain: 'georgetown.edu' },
  { name: 'Vanderbilt',       domain: 'vanderbilt.edu' },
  { name: 'Cal Poly SLO',     domain: 'calpoly.edu' },
  { name: 'Rice',             domain: 'rice.edu' },
]

const DOT = (
  <span style={{
    display: 'inline-block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'var(--accent)',
    opacity: 0.4,
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
          gap: 0,
          width: 'max-content',
          willChange: 'transform',
          animation: 'marquee-smooth 65s linear infinite',
        }}>
          {items.map((college, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 40px',
                gap: 10,
              }}>
                <img
                  src={`https://www.google.com/s2/favicons?sz=128&domain=${college.domain}`}
                  alt={college.name}
                  width={28}
                  height={28}
                  style={{
                    width: 28,
                    height: 28,
                    objectFit: 'contain',
                    filter: 'none',
                    flexShrink: 0,
                  }}
                />
                <span style={{
                  fontSize: 15,
                  fontFamily: 'var(--font-sans-var)',
                  fontWeight: 500,
                  color: 'var(--ink-2)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.01em',
                }}>
                  {college.name}
                </span>
              </span>
              {DOT}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
