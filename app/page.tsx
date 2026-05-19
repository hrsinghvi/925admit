import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, PenLine, CheckCircle2, BookOpen, ListChecks, Target } from 'lucide-react'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import AnimateIn from '@/components/AnimateIn'
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer'
import {
  CALENDLY_URL,
  PROOF_SCHOOLS,
  HOW_IT_WORKS,
  SERVICES_SNAPSHOT,
  TESTIMONIALS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'BayAdmit | Bay Area College Essay Coaching & Admissions Counseling',
  description:
    "Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process.",
  openGraph: {
    title: 'BayAdmit | Bay Area College Essay Coaching & Admissions Counseling',
    description:
      "Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process.",
    url: 'https://bayadmit.com',
  },
}

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  PenLine,
  CheckCircle2,
  BookOpen,
  ListChecks,
  Target,
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light via-white to-white py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">
              Your Story Deserves to Get In.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral max-w-2xl mx-auto">
              Bay Area's premier college essay coaching service. We help students find their voice,
              craft compelling narratives, and stand out in the admissions process.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={CALENDLY_URL} external variant="primary">
                Book a Free Consult
              </Button>
              <Button href="/services" variant="ghost">
                See Our Services
              </Button>
            </div>
          </AnimateIn>
          <div
            aria-hidden="true"
            className="mt-16 mx-auto w-48 h-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-30"
          />
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-primary-light py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 text-sm text-brand-neutral">
          <span className="font-medium">Trusted by students applying to</span>
          {PROOF_SCHOOLS.map((school) => (
            <span
              key={school}
              className="bg-white text-primary font-medium px-3 py-1 rounded-full text-xs border border-primary-light"
            >
              {school}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Simple. Personalized. Effective." />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ step, title, description, icon }) => {
              const Icon = iconMap[icon]
              return (
                <StaggerItem key={step}>
                  <div className="bg-brand-bg rounded-2xl shadow-sm p-6 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-light text-primary font-bold text-lg mb-4">
                      {step}
                    </div>
                    <Icon className="mx-auto mb-3 text-accent" size={28} aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
                    <p className="mt-2 text-sm text-brand-neutral">{description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-primary-light py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Help With" />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_SNAPSHOT.map(({ title, description, comingSoon, icon }) => {
              const Icon = iconMap[icon]
              return (
                <StaggerItem key={title}>
                  <div className="bg-white rounded-2xl shadow-sm p-6">
                    <Icon className="mb-3 text-primary" size={28} aria-hidden="true" />
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
                      {comingSoon && (
                        <span className="text-xs font-medium bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-brand-neutral">{description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-primary font-medium hover:underline">
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Students Who Found Their Voice" />
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-2xl shadow-sm border border-primary-light p-6">
                  <div className="flex gap-1 mb-3" aria-label={`${t.stars} stars`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-accent text-lg" aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-brand-neutral text-sm italic mb-4">"{t.quote}"</p>
                  <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                  <p className="text-accent text-xs mt-1">{t.result}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-8 text-center">
            <Link href="/testimonials" className="text-primary font-medium hover:underline">
              Read More Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Ready to write your best essay?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Book a free 30-minute consultation — no commitment, no pressure.
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="outlined">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
