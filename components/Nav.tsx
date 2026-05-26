'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

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
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
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
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="mobile-drawer-link"
            style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: 'fit-content', transitionDelay: open ? `${NAV_LINKS.length * 40}ms` : '0ms', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(8px)', transition: 'opacity 300ms, transform 300ms' }}
        >
          Book Free Consultation
        </a>
      </div>
    </nav>
  )
}
