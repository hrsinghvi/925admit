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
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">
              Expert Guidance, Every Step of the Way
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              From your first draft to your final submission, BayAdmit is in your corner.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Essay Coaching — Featured */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-bg rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">
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
                    className="text-accent mt-0.5 shrink-0"
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
      <section className="bg-primary-light py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 opacity-80">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-semibold text-brand-dark">College List Building</h2>
              <span className="text-xs font-medium bg-accent/20 text-accent px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-brand-neutral">
              We'll help you build a balanced, strategic college list tailored to your academics,
              interests, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Application Strategy — Coming Soon */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-bg rounded-2xl p-8 opacity-80">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-semibold text-brand-dark">Application Strategy</h2>
              <span className="text-xs font-medium bg-accent/20 text-accent px-3 py-1 rounded-full">
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
      <section className="bg-primary-light py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Why BayAdmit" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_BAYADMIT.map(({ title, icon }) => {
              const Icon = iconMap[icon]
              return (
                <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
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
