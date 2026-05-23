import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL, CALENDLY_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="foot-grid">
          {/* Brand column */}
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark" aria-hidden="true" />
              925 Admit
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: '32ch', lineHeight: 1.5, margin: 0 }}>
              Bay Area college essay coaching and admissions counseling. Personal, expert, unlimited revisions.
            </p>
          </div>

          {/* Navigate */}
          <div className="foot-col">
            <h5>Navigate</h5>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">Essay Coaching</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/testimonials">Student Stories</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="foot-col">
            <h5>Connect</h5>
            <ul>
              <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a consult</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="foot-wordmark" aria-hidden="true">
          925 <span className="it">Admit</span>
        </div>

        <div className="foot-bottom">
          <div>© 2026 925 Admit. Serving students in the Bay Area.</div>
        </div>
      </div>
    </footer>
  )
}
