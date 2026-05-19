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
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <AnimateIn>
          <h1 className="font-serif text-5xl sm:text-6xl text-brand-dark leading-[1.05] mb-6">
            We&apos;re BayAdmit.
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-brand-neutral text-lg max-w-xl">
            A small, passionate team of writers, educators, and former applicants who believe
            every student has a story worth telling.
          </p>
        </AnimateIn>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-tight tracking-tight mb-6">
              Our Story
            </h2>
            <p className="text-brand-neutral text-lg leading-relaxed">
              BayAdmit was founded in the Bay Area with one belief: the college essay shouldn&apos;t be
              stressful. We&apos;ve helped students from Fremont to San Francisco find the words that got
              them noticed. We&apos;re not a factory — we&apos;re a small team that genuinely cares.
            </p>
          </div>
          <div className="bg-[#4A6B60] rounded-2xl p-10 text-white flex items-center">
            <blockquote className="font-serif text-2xl leading-relaxed">
              &ldquo;Every student has a story worth telling. We help them find it.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {/* TODO: Replace with real team photos and bios */}
      <section className="py-20 px-6 sm:px-8">
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
      <section className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Believe" />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ title, description }) => (
              <StaggerItem key={title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                  <h3 className="font-serif text-xl text-brand-dark mb-2">{title}</h3>
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
