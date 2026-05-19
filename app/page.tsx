import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import Button from '@/components/Button'
import AnimateIn from '@/components/AnimateIn'
import SchoolMarquee from '@/components/SchoolMarquee'
import { CALENDLY_URL, TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'BayAdmit | Bay Area College Essay Coaching',
  description:
    "Bay Area's premier college essay coaching. Expert 1-on-1 guidance, unlimited revisions, 48-hour turnaround.",
}

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-10">
        {/* Pill badge row */}
        <AnimateIn>
          <div className="inline-flex items-center gap-0 rounded-full bg-black/5 text-sm mb-10 overflow-hidden">
            <span className="px-4 py-1.5 text-brand-neutral">Bay Area College Essay Coaching</span>
            <a
              href="/testimonials"
              className="flex items-center gap-1 bg-brand-dark text-[#F4F4F0] px-3 py-1.5 font-medium"
            >
              Read stories <ChevronRight size={14} />
            </a>
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn delay={0.1}>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl text-brand-dark leading-[1.0] tracking-tight max-w-4xl mb-6">
            Your Story<br />
            Deserves to<br />
            Get In.
          </h1>
        </AnimateIn>

        {/* Sub-headline */}
        <AnimateIn delay={0.2}>
          <p className="text-brand-neutral text-lg max-w-lg mb-10 leading-relaxed">
            Bay Area&apos;s premier college essay coaching. Expert 1-on-1 guidance, unlimited
            revisions, results in 48 hours.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn delay={0.3}>
          <div className="flex items-center gap-8">
            <Button href={CALENDLY_URL} external variant="primary">
              Book Consultation
            </Button>
            <Link
              href="/testimonials"
              className="text-brand-neutral hover:text-brand-dark text-sm flex items-center gap-1.5 transition-colors"
            >
              See what others say about BayAdmit <span aria-hidden>→</span>
            </Link>
          </div>
        </AnimateIn>
      </div>

      {/* SECTION 2: Hero Image Card */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-16">
        <div
          className="relative rounded-2xl overflow-hidden bg-[#4A6B60]"
          style={{ height: '520px' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="College counseling session — student and mentor collaborating"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle overlay to blend with bg */}
          <div className="absolute inset-0 bg-[#4A6B60]/20" />
        </div>
      </div>

      {/* SECTION 3: School Marquee */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 text-center">
          <p className="font-serif text-3xl sm:text-4xl text-brand-dark">
            Our students have been admitted to these schools.
          </p>
        </div>
        <SchoolMarquee />
      </section>

      {/* SECTION 4: Feature section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Header — left aligned */}
        <div className="mb-16">
          <p className="text-sm font-medium text-brand-neutral/60 uppercase tracking-widest mb-4">
            What we do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-dark max-w-xl leading-tight">
            We coach the essays<br />that get you in.
          </h2>
          <p className="mt-4 text-brand-neutral max-w-lg">
            Expert feedback on every paragraph. Your voice, your story — polished to perfection.
          </p>
        </div>

        {/* 2×3 feature card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 — Annotated coaching */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#4A6B60] p-8 h-52 flex flex-col justify-between">
              <div className="bg-white/90 rounded-xl p-4 text-xs text-brand-dark/80 space-y-2">
                <div className="font-medium text-brand-dark">Personal Statement Draft</div>
                <div className="text-brand-neutral/70 leading-relaxed">
                  Growing up between two cultures taught me...
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[10px]">
                    Strong hook ✓
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-[10px]">
                    Voice clear ✓
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Annotated coaching</h3>
              <p className="text-sm text-brand-neutral">
                Line-by-line feedback. What&apos;s working, what to fix.
              </p>
            </div>
          </div>

          {/* Card 2 — Fast feedback */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#6B6080] p-8 h-52 flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="text-7xl font-serif font-bold text-white/90">48</div>
                <div className="text-white/70 text-sm mt-1">hour turnaround</div>
                <div className="mt-3 text-white/50 text-xs">Guaranteed on every package</div>
              </div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Fast feedback</h3>
              <p className="text-sm text-brand-neutral">
                Detailed review returned within 48 hours, every time.
              </p>
            </div>
          </div>

          {/* Card 3 — Unlimited revisions */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#7D6B5A] p-8 h-52 flex flex-col justify-center">
              <div className="space-y-3">
                {(['Original draft', 'After session 1', 'After session 2', 'Final essay'] as const).map(
                  (label, i) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-white' : 'bg-white/40'}`}
                      />
                      <span
                        className={`text-sm ${i === 3 ? 'text-white font-medium' : 'text-white/60'}`}
                      >
                        {label}
                      </span>
                      {i === 3 && (
                        <span className="ml-auto text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                          Best ✓
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Unlimited revisions</h3>
              <p className="text-sm text-brand-neutral">
                We work until it&apos;s perfect. No round limits, ever.
              </p>
            </div>
          </div>

          {/* Card 4 — Full application coverage */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#5A6B7D] p-8 h-52 flex flex-col justify-center">
              <div className="space-y-2">
                {[
                  'Common App Personal Statement',
                  'UC Personal Insight Questions',
                  'Why School? Essays',
                  'Roommate Essays',
                  'Short Answers',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={14} className="text-white/60 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Full application coverage</h3>
              <p className="text-sm text-brand-neutral">
                Personal statement, supplements, and every short answer.
              </p>
            </div>
          </div>

          {/* Card 5 — Real results */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#7A8C7A] p-8 h-52 flex flex-col justify-between">
              <div className="bg-white/90 rounded-xl p-4">
                <div className="text-[11px] text-brand-neutral mb-2 font-medium">
                  Student result
                </div>
                <div className="text-lg font-serif font-medium text-brand-dark">Admitted ✓</div>
                <div className="text-sm text-brand-neutral">UC Berkeley · Class of 2028</div>
                <div className="mt-2 text-[11px] text-brand-neutral/70 italic">
                  &ldquo;BayAdmit helped me find words I didn&apos;t know I had.&rdquo;
                </div>
              </div>
              <div className="text-white/60 text-xs">— Sarah L., Fremont CA</div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Real results</h3>
              <p className="text-sm text-brand-neutral">
                Students admitted to top schools across the country.
              </p>
            </div>
          </div>

          {/* Card 6 — Bay Area roots */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#6B7A55] p-8 h-52 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <div className="text-white font-serif text-xl">Submit with confidence.</div>
                <div className="text-white/60 text-sm mt-2">Bay Area → Nationwide</div>
              </div>
            </div>
            <div className="p-6 bg-white border border-black/5">
              <h3 className="font-semibold text-brand-dark mb-1">Bay Area roots, national reach</h3>
              <p className="text-sm text-brand-neutral">
                Based in the Bay Area, serving students everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Testimonials Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="font-serif text-4xl text-brand-dark mb-12 text-center">
            What students say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-[#F4F4F0] rounded-2xl p-6">
                <div className="text-accent text-lg mb-3">{'★'.repeat(t.stars)}</div>
                <blockquote className="font-serif text-lg text-brand-dark leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-sm font-medium text-brand-dark">{t.name}</div>
                  <div className="text-xs text-brand-neutral">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="text-sm text-brand-neutral hover:text-brand-dark flex items-center gap-1.5 justify-center transition-colors"
            >
              Read more stories →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl sm:text-6xl text-brand-dark mb-6">
            Ready to write<br />your best essay?
          </h2>
          <p className="text-brand-neutral mb-10 text-lg">
            Book a free 30-minute consultation — no commitment, no pressure.
          </p>
          <div className="flex items-center justify-center gap-8">
            <Button href={CALENDLY_URL} external variant="primary">
              Book Consultation
            </Button>
            <Link
              href="/pricing"
              className="text-brand-neutral hover:text-brand-dark text-sm flex items-center gap-1.5 transition-colors"
            >
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
