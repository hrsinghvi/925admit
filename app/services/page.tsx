import type { Metadata } from 'next'
import { CheckCircle2, MapPin, Target, RefreshCw, MessageCircle } from 'lucide-react'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import AnimateIn from '@/components/AnimateIn'
import { CALENDLY_URL, ESSAY_COACHING_FEATURES, WHY_BAYADMIT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'College Essay Coaching Services',
  description:
    'Expert college essay coaching, college list building, and application strategy — personalized, 1-on-1, with unlimited revisions.',
  openGraph: {
    title: 'College Essay Coaching Services | BayAdmit',
    description:
      'Expert college essay coaching, college list building, and application strategy — personalized, 1-on-1, with unlimited revisions.',
    url: 'https://bayadmit.com/services',
  },
}

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Target,
  RefreshCw,
  MessageCircle,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <AnimateIn>
          <h1 className="font-serif text-5xl sm:text-6xl text-brand-dark leading-[1.05] mb-6">
            Expert Guidance,<br />Every Step of the Way
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-brand-neutral text-lg max-w-xl">
            From your first draft to your final submission, BayAdmit is in your corner.
          </p>
        </AnimateIn>
      </section>

      {/* Essay Coaching — Featured */}
      <section className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-black/5 shadow-sm">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-tight tracking-tight">
              College Essay Coaching
            </h2>
            <p className="mt-4 text-brand-neutral text-lg leading-relaxed">
              Your college essay is the one place admissions officers hear <em>you</em> — not your
              GPA, not your test scores. We help you uncover your story, structure it powerfully,
              and polish it to perfection.
            </p>
            <ul className="mt-6 space-y-3">
              {ESSAY_COACHING_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-primary mt-0.5 shrink-0"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-brand-neutral">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/pricing" variant="primary">
                View Pricing
              </Button>
              <Button href={CALENDLY_URL} external variant="ghost">
                Book a Free Consult
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* College List Building — Coming Soon */}
      <section className="py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-black/5 opacity-70">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="font-serif text-2xl text-brand-dark">College List Building</h2>
              <span className="bg-brand-dark/10 text-brand-dark text-xs font-medium px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-brand-neutral">
              We&apos;ll help you build a balanced, strategic college list tailored to your academics,
              interests, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Application Strategy — Coming Soon */}
      <section className="py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-black/5 opacity-70">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="font-serif text-2xl text-brand-dark">Application Strategy</h2>
              <span className="bg-brand-dark/10 text-brand-dark text-xs font-medium px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-brand-neutral">
              Holistic support for the full application — activities list, letters of rec strategy,
              timeline planning, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Why BayAdmit */}
      <section className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Why BayAdmit" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_BAYADMIT.map(({ title, icon }) => {
              const Icon = iconMap[icon]
              return (
                <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5">
                  <Icon className="mx-auto mb-3 text-primary" size={28} aria-hidden="true" />
                  <p className="font-semibold text-brand-dark text-sm">{title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
