import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import Button from '@/components/Button'
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer'
import { TESTIMONIALS, SUCCESS_SCHOOLS, CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Student Success Stories',
  description:
    'Hear from students and families who worked with BayAdmit. Admitted to UC Berkeley, UCLA, USC, NYU, and more.',
  openGraph: {
    title: 'Student Success Stories | BayAdmit',
    description:
      'Hear from students and families who worked with BayAdmit. Admitted to UC Berkeley, UCLA, USC, NYU, and more.',
    url: 'https://bayadmit.com/testimonials',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <AnimateIn>
          <h1 className="font-serif text-5xl sm:text-6xl text-brand-dark leading-[1.05] mb-6">
            Real Students.<br />Real Results.
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-brand-neutral text-lg max-w-lg">
            Hear from the students and families we&apos;ve worked with.
          </p>
        </AnimateIn>
      </section>

      {/* Testimonials Grid */}
      {/* TODO: Replace with real student testimonials */}
      <section className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <TestimonialCard {...t} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Success Schools */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeading title="Our Students Have Been Admitted To" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SUCCESS_SCHOOLS.map((school) => (
              <span
                key={school}
                className="bg-white border border-black/10 text-brand-dark rounded-full px-4 py-1.5 text-sm"
              >
                {school}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-neutral italic">
            *Results vary. School names used for illustrative purposes only.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-tight tracking-tight mb-6">
          Want to be our next success story?
        </h2>
        <Button href={CALENDLY_URL} external variant="primary">
          Book Free Consult
        </Button>
      </section>
    </>
  )
}
