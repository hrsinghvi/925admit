'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="shell nav-inner">
        {/* Logo */}
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="925 Admit" width={40} height={40} style={{ objectFit: 'contain' }} priority />
          925 Admit
        </Link>

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
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
      {open && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: 68,
          background: 'var(--bg)',
          zIndex: 40,
          padding: '24px var(--gutter)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          fontSize: 22,
          fontFamily: 'var(--font-display)',
        }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--ink)',
                borderBottom: '1px solid var(--rule)',
                paddingBottom: 16,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: 'fit-content' }}
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
