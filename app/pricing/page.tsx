import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import SectionHeading from '@/components/SectionHeading'
import PricingCard from '@/components/PricingCard'
import FAQAccordion from '@/components/FAQAccordion'
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer'
import { PRICING_TIERS, FAQ_ITEMS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Essay Coaching Pricing & Packages',
  description:
    'Simple, transparent pricing for college essay coaching. All packages include unlimited revisions. Choose the plan that fits your needs.',
  openGraph: {
    title: 'Essay Coaching Pricing & Packages | BayAdmit',
    description:
      'Simple, transparent pricing for college essay coaching. All packages include unlimited revisions.',
    url: 'https://bayadmit.com/pricing',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">
              Simple, Transparent Pricing
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              Choose what works for you. All essay packages include unlimited revisions.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {PRICING_TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <PricingCard {...tier} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-primary-light py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-brand-dark mb-2">
              College Counseling Packages — Coming Soon
            </h2>
            <p className="text-brand-neutral text-sm">
              Full-service admissions counseling covering college list, activities, recommendations,
              and more. Join our waitlist to be notified when it launches.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
