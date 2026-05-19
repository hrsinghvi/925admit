import Link from 'next/link'
import { Camera, Globe, X } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#ECEAE4]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <p className="font-serif font-medium text-lg text-brand-dark">BayAdmit</p>
            <p className="mt-1 text-sm text-brand-neutral">Your story, your way in.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-brand-neutral/50 hover:text-brand-neutral transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-brand-neutral/50 hover:text-brand-neutral transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-brand-neutral/50 hover:text-brand-neutral transition-colors">
                <X size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigate */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-neutral mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-neutral hover:text-brand-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Get in Touch */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-neutral mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-brand-neutral hover:text-brand-dark transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                Book Free Consult
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-brand-neutral/50">
          <p>© 2025 BayAdmit. All rights reserved.</p>
          <p>Bay Area, serving students nationwide.</p>
        </div>
      </div>
    </footer>
  )
}
