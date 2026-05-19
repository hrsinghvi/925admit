import type { Metadata } from 'next'
import { Calendar, Mail, MapPin, MessageCircle } from 'lucide-react'
import Button from '@/components/Button'
import AnimateIn from '@/components/AnimateIn'
import { CALENDLY_URL, CONTACT_EMAIL, GRADE_OPTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact BayAdmit | Book a Free Consultation',
  description:
    'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">Let&apos;s Talk</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              Book a free consultation or send us a message — we&apos;d love to hear from you.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column — Contact Form */}
          <AnimateIn>
            <div>
              <h2 className="text-2xl font-semibold text-brand-dark mb-6">Send Us a Message</h2>
              <form action="#">
                {/* Full Name */}
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-dark mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-dark mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                {/* Phone Number (optional) */}
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-brand-dark mb-1"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                {/* Current Grade */}
                <div className="mb-5">
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-brand-dark mb-1"
                  >
                    Current Grade
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    defaultValue=""
                    className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                  >
                    <option value="" disabled>
                      Select your grade
                    </option>
                    {GRADE_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-dark mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                  />
                </div>

                {/* TODO: wire up form submission */}
                <Button type="submit" variant="primary" className="w-full justify-center">
                  Send Message
                </Button>
                <p className="mt-3 text-sm text-brand-neutral text-center">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </AnimateIn>

          {/* Right column — Contact Info */}
          <AnimateIn delay={0.1}>
            <div>
              {/* Booking card */}
              <div className="bg-primary text-white rounded-2xl p-8 mb-8">
                <Calendar size={24} className="text-white/80 mb-4" aria-hidden="true" />
                <h2 className="text-xl font-semibold mb-3">Book a Free Consult</h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Schedule a free 30-minute call to discuss your goals, timeline, and how we can
                  help.
                </p>
                <Button href={CALENDLY_URL} external variant="white">
                  Schedule on Calendly
                </Button>
              </div>

              {/* Info items */}
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:text-primary-dark text-sm transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-neutral text-sm">
                    Bay Area, California · Serving students nationwide
                  </span>
                </div>

                {/* Response time */}
                <div className="flex items-start gap-3">
                  <MessageCircle
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-brand-neutral text-sm">
                    We typically respond within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
