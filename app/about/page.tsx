import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer'
import { TEAM, VALUES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About BayAdmit',
  description:
    'Meet the BayAdmit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
  openGraph: {
    title: 'About BayAdmit | Bay Area College Admissions Coaches',
    description:
      'Meet the BayAdmit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story.',
    url: 'https://bayadmit.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">
              We're BayAdmit.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              A small, passionate team of writers, educators, and former applicants who believe
              every student has a story worth telling.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark mb-6">
              Our Story
            </h2>
            <p className="text-brand-neutral text-lg leading-relaxed">
              BayAdmit was founded in the Bay Area with one belief: the college essay shouldn't be
              stressful. We've helped students from Fremont to San Francisco find the words that got
              them noticed. We're not a factory — we're a small team that genuinely cares.
            </p>
          </div>
          <div
            className="rounded-2xl bg-gradient-to-br from-primary to-accent h-64 w-full"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Meet the Team */}
      {/* TODO: Replace with real team photos and bios */}
      <section className="bg-brand-bg py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="The People Behind Your Essays" />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard {...member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary-light py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Believe" />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ title, description }) => (
              <StaggerItem key={title}>
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-semibold text-brand-dark text-lg mb-2">{title}</h3>
                  <p className="text-brand-neutral text-sm">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
