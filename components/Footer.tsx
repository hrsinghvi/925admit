import Link from 'next/link'
import { Heart, Mail, Globe } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL, CONTACT_EMAIL } from '@/lib/constants'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="text-xl font-bold text-white">BayAdmit</p>
            <p className="mt-1 text-sm text-white/60">Your story, your way in.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <Heart size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-white/50 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <Button href={CALENDLY_URL} external variant="outlined">
              Book Free Consult
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>© 2025 BayAdmit. All rights reserved.</p>
          <p>Based in the Bay Area. Serving students nationwide.</p>
        </div>
      </div>
    </footer>
  )
}
