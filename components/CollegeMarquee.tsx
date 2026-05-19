'use client'

const COLLEGE_LOGOS: { name: string; url: string }[] = [
  { name: 'Harvard', url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg' },
  { name: 'Yale', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Yale_University_logo.svg' },
  { name: 'MIT', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg' },
  { name: 'Stanford', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Stanford_wordmark_%282012%29.svg' },
  { name: 'Princeton', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_text_logo.svg' },
  { name: 'Columbia', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Columbia_University_Logo.png' },
  { name: 'Penn', url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/University_of_Pennsylvania_wordmark.svg' },
  { name: 'Cornell', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_logo.svg' },
  { name: 'Brown', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Brown_University_Logo.svg' },
  { name: 'Dartmouth', url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Dartmouth_College_logo.svg' },
  { name: 'UC Berkeley', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg' },
  { name: 'UCLA', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg' },
  { name: 'UC San Diego', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/UCSD_Seal.svg' },
  { name: 'UC Santa Barbara', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/UCSB_seal.svg' },
  { name: 'UC Irvine', url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/UC_Irvine_seal.svg' },
  { name: 'Michigan', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/University_of_Michigan_logo.svg' },
  { name: 'UIUC', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/University_of_Illinois_seal.svg' },
  { name: 'Georgia Tech', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Georgia_Tech_seal.svg' },
  { name: 'UNC', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/UNC_wordmark_Tar_Heels_blue.svg' },
  { name: 'UT Austin', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/University_of_Texas_at_Austin_seal.svg' },
  { name: 'UW Seattle', url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Washington_Huskies_logo.svg' },
  { name: 'Purdue', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Purdue_University_wordmark.svg' },
  { name: 'Carnegie Mellon', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Carnegie_Mellon_University_seal.svg' },
  { name: 'Duke', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Duke_University_logo.svg' },
  { name: 'USC', url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/University_of_Southern_California_wordmark.svg' },
  { name: 'Boston University', url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Boston_University_wordmark.svg' },
  { name: 'NYU', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Nyu_short_color.svg' },
  { name: 'Notre Dame', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/University_of_Notre_Dame_seal.svg' },
  { name: 'Georgetown', url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Georgetown_University_Logotype.svg' },
  { name: 'Vanderbilt', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vanderbilt_University_logo.svg' },
  { name: 'Cal Poly SLO', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Cal_Poly_seal.svg' },
  { name: 'Rice', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Rice_University_seal.svg' },
]

export default function CollegeMarquee() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        padding: '28px 0 32px',
        overflow: 'hidden',
      }}
    >
      <div className="shell">
        <div className="logos-label" style={{ marginBottom: 24 }}>
          <span className="eyebrow">Our students have been admitted to these schools.</span>
        </div>
      </div>

      {/* Full-width marquee track — outside shell so logos bleed to edges */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            willChange: 'transform',
            animation: 'marquee-smooth 55s linear infinite',
          }}
        >
          {/* First copy */}
          {COLLEGE_LOGOS.map((school) => (
            <span
              key={`a-${school.name}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '0 40px',
              }}
            >
              <img
                src={school.url}
                alt={school.name}
                height={42}
                style={{
                  height: 42,
                  width: 'auto',
                  maxWidth: 150,
                  objectFit: 'contain',
                  opacity: 0.72,
                  filter: 'grayscale(10%) contrast(1.05)',
                  display: 'block',
                }}
                loading="eager"
                onError={(e) => {
                  const el = e.currentTarget.parentElement
                  if (el) el.style.display = 'none'
                }}
              />
            </span>
          ))}
          {/* Exact duplicate for seamless loop */}
          {COLLEGE_LOGOS.map((school) => (
            <span
              key={`b-${school.name}`}
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '0 40px',
              }}
            >
              <img
                src={school.url}
                alt=""
                height={42}
                style={{
                  height: 42,
                  width: 'auto',
                  maxWidth: 150,
                  objectFit: 'contain',
                  opacity: 0.72,
                  filter: 'grayscale(10%) contrast(1.05)',
                  display: 'block',
                }}
                loading="eager"
                onError={(e) => {
                  const el = e.currentTarget.parentElement
                  if (el) el.style.display = 'none'
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
