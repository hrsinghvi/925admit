import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="foot-grid">
          {/* Brand column */}
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark" aria-hidden="true" />
              925Admit
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: '32ch', lineHeight: 1.5, margin: 0 }}>
              Bay Area college essay coaching and admissions counseling. Personal, expert, unlimited revisions.
            </p>
          </div>

          {/* Navigate — left */}
          <div className="foot-col">
            <h5>Navigate</h5>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* Navigate — right */}
          <div className="foot-col">
            <h5>&nbsp;</h5>
            <ul>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="foot-bottom">
          <div>© 2026 925Admit. Serving students in the Bay Area.</div>
        </div>
      </div>
    </footer>
  )
}
