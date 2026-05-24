import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, paddingBottom: 32 }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{ fontSize: 15, color: 'var(--ink-2)', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="foot-bottom">
          <div>© 2026 925Admit. Serving students in the Bay Area.</div>
        </div>
      </div>
    </footer>
  )
}
