'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, PenLine, ListChecks, Briefcase } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

const SERVICES_DROPDOWN = [
  { label: 'All Services', desc: 'Everything we offer.', href: '/services', icon: Briefcase, comingSoon: false },
  { label: 'Essay Review', desc: 'Get feedback on your college essay.', href: '/services/essay-review', icon: PenLine, comingSoon: true },
  { label: 'Activities List Review', desc: 'Get feedback on your activities list.', href: '/services/activities-list', icon: ListChecks, comingSoon: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }, [pathname, router])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="shell nav-inner">
        {/* Logo */}
        <a href="/" className="brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Image src="/logo.png" alt="925Admit" width={40} height={40} style={{ objectFit: 'contain' }} priority />
          Admit
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_LINKS.map(link => {
            if (link.label === 'Services') {
              return (
                <div key={link.href} className="nav-dropdown-wrap">
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner">
                      {SERVICES_DROPDOWN.map(item => {
                        const Icon = item.icon
                        if (item.comingSoon) {
                          return (
                            <div key={item.href} className="nav-dropdown-item" style={{ opacity: 0.5, cursor: 'default' }}>
                              <Icon size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                              <div>
                                <span className="nav-dropdown-title">
                                  {item.label}
                                  <span style={{
                                    fontSize: 9,
                                    fontFamily: 'var(--font-mono)',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    padding: '2px 6px',
                                    borderRadius: 999,
                                    background: 'var(--rule)',
                                    color: 'var(--ink-2)',
                                    marginLeft: 8,
                                    verticalAlign: 'middle',
                                    fontWeight: 500,
                                  }}>Coming Soon</span>
                                </span>
                                <span className="nav-dropdown-desc">{item.desc}</span>
                              </div>
                            </div>
                          )
                        }
                        return (
                          <Link key={item.href} href={item.href} className="nav-dropdown-item">
                            <Icon size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                            <div>
                              <span className="nav-dropdown-title">{item.label}</span>
                              <span className="nav-dropdown-desc">{item.desc}</span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA + Mobile hamburger */}
        <div className="nav-actions">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta-desktop">
            Book Free Consultation
          </a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' mobile-drawer-open' : ''}`}>
        {NAV_LINKS.map((link, i) => {
          if (link.label === 'Services') {
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="mobile-drawer-link"
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 16, marginTop: 8 }}>
                  {SERVICES_DROPDOWN.filter(s => s.href !== '/services').map(item => (
                    <span
                      key={item.href}
                      style={{
                        fontSize: 16,
                        color: 'var(--ink-2)',
                        opacity: open ? (item.comingSoon ? 0.5 : 1) : 0,
                        transform: open ? 'none' : 'translateY(8px)',
                        transition: 'opacity 300ms, transform 300ms',
                        transitionDelay: open ? `${(i + 1) * 40}ms` : '0ms',
                        cursor: item.comingSoon ? 'default' : 'pointer',
                      }}
                      onClick={() => { if (!item.comingSoon) { setOpen(false); window.location.href = item.href } }}
                    >
                      {item.label}
                      {item.comingSoon && (
                        <span style={{
                          fontSize: 9,
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          padding: '2px 6px',
                          borderRadius: 999,
                          background: 'var(--rule)',
                          color: 'var(--ink-2)',
                          marginLeft: 8,
                          verticalAlign: 'middle',
                        }}>Coming Soon</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mobile-drawer-link"
              style={{ transitionDelay: open ? `${(i + 2) * 40}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          )
        })}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: 'fit-content', transitionDelay: open ? `${(NAV_LINKS.length + 2) * 40}ms` : '0ms', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(8px)', transition: 'opacity 300ms, transform 300ms' }}
        >
          Book Free Consultation
        </a>
      </div>
    </nav>
  )
}
