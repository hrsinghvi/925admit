# BayAdmit Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete 6-page Next.js marketing website for BayAdmit college essay coaching, from scaffold to production-ready build.

**Architecture:** Next.js 14 App Router with server components for all pages. Interactive components (Nav, FAQAccordion, animation wrappers) are isolated `'use client'` components. All content lives in `lib/constants.ts` — no API calls, no auth.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Inter (next/font/google)

---

## File Map

| File | Responsibility |
|---|---|
| `tailwind.config.js` | Brand color palette extension |
| `lib/constants.ts` | All static site content |
| `components/Button.tsx` | CTA button, variant prop: primary/ghost/outlined/white |
| `components/SectionHeading.tsx` | Reusable h2 + optional subtext |
| `components/Card.tsx` | Generic rounded shadow wrapper |
| `components/AnimateIn.tsx` | `'use client'` fadeInUp wrapper |
| `components/StaggerContainer.tsx` | `'use client'` stagger grid container + item |
| `components/Nav.tsx` | `'use client'` sticky navbar + mobile drawer |
| `components/Footer.tsx` | Dark footer, nav links, social icons |
| `components/TeamCard.tsx` | Gradient avatar + name/role/bio |
| `components/TestimonialCard.tsx` | Quote + name + result + stars |
| `components/PricingCard.tsx` | Pricing tier, highlighted variant |
| `components/FAQAccordion.tsx` | `'use client'` Framer Motion expand/collapse, ARIA |
| `app/layout.tsx` | Inter font, Nav, Footer, global metadata |
| `app/page.tsx` | Home |
| `app/services/page.tsx` | Services |
| `app/about/page.tsx` | About |
| `app/testimonials/page.tsx` | Testimonials |
| `app/pricing/page.tsx` | Pricing + JSON-LD |
| `app/contact/page.tsx` | Contact |
| `public/robots.txt` | Allow all crawlers, sitemap reference |
| `public/sitemap.xml` | Static sitemap for all 6 pages |

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: all Next.js project files in `/Users/hritviksinghvi/Downloads/bayadmit`

- [ ] **Step 1: Init Next.js with TypeScript, Tailwind, App Router**

Run from `/Users/hritviksinghvi/Downloads/bayadmit`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: project files created, `package.json` present with `next`, `react`, `react-dom`.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion lucide-react
```

Expected: both packages appear in `node_modules`.

- [ ] **Step 3: Remove Next.js boilerplate**

```bash
rm -f public/next.svg public/vercel.svg
```

Replace `app/globals.css` with only Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Replace `app/page.tsx` with a blank placeholder (will be written fully in Task 7):

```tsx
export default function HomePage() {
  return <div />
}
```

- [ ] **Step 4: Commit scaffold**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, Framer Motion, Lucide"
```

---

### Task 2: Tailwind Config & Constants

**Files:**
- Modify: `tailwind.config.js`
- Create: `lib/constants.ts`

- [ ] **Step 1: Add brand colors to Tailwind config**

Replace the entire contents of `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#346b6e',
          dark: '#265254',
          light: '#eaf3f3',
        },
        accent: '#4a9a9e',
        brand: {
          dark: '#1a2e2f',
          neutral: '#4a5e5f',
          bg: '#f4f8f8',
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Create lib/constants.ts**

```bash
mkdir -p lib
```

Create `lib/constants.ts`:

```typescript
export const SITE_NAME = 'BayAdmit'
export const CALENDLY_URL = 'https://calendly.com/bayadmit'
export const CONTACT_EMAIL = 'hello@bayadmit.com'
export const SITE_URL = 'https://bayadmit.com'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export const PROOF_SCHOOLS = ['Stanford', 'UC Berkeley', 'UCLA', 'Harvard', 'MIT', 'USC', 'NYU']

export const SUCCESS_SCHOOLS = [
  'Stanford',
  'UC Berkeley',
  'UCLA',
  'USC',
  'NYU',
  'Boston University',
  'UC San Diego',
  'Cal Poly SLO',
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book a Free Consult',
    description: 'We learn about you, your goals, and your story.',
    icon: 'Calendar',
  },
  {
    step: 2,
    title: 'Draft Together',
    description: 'Your counselor guides every draft with expert feedback.',
    icon: 'PenLine',
  },
  {
    step: 3,
    title: 'Submit with Confidence',
    description: 'Walk into application season ready.',
    icon: 'CheckCircle2',
  },
]

export const SERVICES_SNAPSHOT = [
  {
    title: 'Essay Coaching',
    description: 'One-on-one guidance from brainstorm to final draft.',
    comingSoon: false,
    icon: 'BookOpen',
  },
  {
    title: 'College List Building',
    description: 'A balanced, strategic list tailored to your goals.',
    comingSoon: true,
    icon: 'ListChecks',
  },
  {
    title: 'Application Strategy',
    description: 'Holistic support for your full application.',
    comingSoon: true,
    icon: 'Target',
  },
]

export const ESSAY_COACHING_FEATURES = [
  'One-on-one sessions with an expert coach',
  'Unlimited revisions on all packages',
  'Common App personal statement + supplemental essays',
  'Feedback within 48 hours',
  'Available virtually across the Bay Area and beyond',
]

export const WHY_BAYADMIT = [
  { title: 'Bay Area roots, national reach', icon: 'MapPin' },
  { title: 'Personalized 1-on-1 coaching', icon: 'Target' },
  { title: 'Unlimited revisions', icon: 'RefreshCw' },
  { title: 'Fast turnaround feedback', icon: 'MessageCircle' },
]

// TODO: Replace with real team photos and bios
export const TEAM = [
  {
    name: 'Alex M.',
    role: 'Lead Essay Coach',
    initials: 'AM',
    bio: 'Former admissions reader turned writing coach. Helped hundreds of students find their voice.',
  },
  {
    name: 'Jordan T.',
    role: 'College Counselor',
    initials: 'JT',
    bio: 'Expertise in building balanced college lists and full application strategy.',
  },
  {
    name: 'Sam K.',
    role: 'Writing Specialist',
    initials: 'SK',
    bio: 'Published writer and editor with a passion for authentic student storytelling.',
  },
]

export const VALUES = [
  {
    title: 'Student First',
    description: "Every decision we make centers the student's voice, not ours.",
  },
  {
    title: 'Radical Honesty',
    description: 'We give real feedback, not just validation.',
  },
  {
    title: 'Bay Area Spirit',
    description: 'Innovative, driven, and grounded in community.',
  },
]

// TODO: Replace with real student testimonials
export const TESTIMONIALS = [
  { quote: '[Student quote placeholder]', name: 'Sarah L.', result: 'Admitted to UC Berkeley', stars: 5 },
  { quote: '[Student quote placeholder]', name: 'James W.', result: 'Admitted to USC', stars: 5 },
  { quote: '[Student quote placeholder]', name: 'Maya P.', result: 'Admitted to NYU', stars: 5 },
  { quote: '[Student quote placeholder]', name: 'Derek C.', result: 'Admitted to UCLA', stars: 5 },
  { quote: '[Student quote placeholder]', name: 'Priya S.', result: 'Admitted to Boston University', stars: 5 },
  { quote: '[Student quote placeholder]', name: 'Ethan R.', result: 'Admitted to UC San Diego', stars: 5 },
]

export const PRICING_TIERS: {
  name: string
  price: string
  highlighted: boolean
  badge: string | null
  features: string[]
}[] = [
  {
    name: 'Single Essay',
    price: '$[TBD]',
    highlighted: false,
    badge: null,
    features: [
      '1 essay (any type)',
      'Unlimited revisions',
      '48-hour feedback turnaround',
      '1 coaching session',
    ],
  },
  {
    name: 'Essay Bundle',
    price: '$[TBD]',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to 5 essays',
      'Unlimited revisions on all',
      'Priority 24-hour turnaround',
      '3 coaching sessions',
      'Personal statement + supplementals',
    ],
  },
  {
    name: 'Full Application Package',
    price: '$[TBD]',
    highlighted: false,
    badge: null,
    features: [
      'Unlimited essays',
      'Unlimited revisions',
      'Unlimited coaching sessions',
      'Full Common App support',
      'College list guidance (basic)',
      'Dedicated counselor',
    ],
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How does college essay coaching work?',
    answer:
      'We start with a free 30-minute consultation to understand your story and goals. From there, your coach guides you through brainstorming, drafting, and refining your essay through as many rounds of feedback as you need — all the way to a final polished piece.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'It depends on your package. The Single Essay package includes 1 coaching session, the Bundle includes 3, and the Full Package includes unlimited sessions. Most students complete their personal statement in 2–4 sessions.',
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer:
      "Yes — every package includes unlimited revisions. We don't cut you off after one round of feedback. We work with you until your essay truly reflects your voice and story.",
  },
  {
    question: 'When should I start working on my college essays?',
    answer:
      'The earlier the better. We recommend starting in the summer before senior year (June–August) to give yourself time without pressure. That said, we work with students at all stages — even late in the application season.',
  },
  {
    question: 'Do you work with students outside the Bay Area?',
    answer:
      'Absolutely. All coaching sessions are conducted virtually via video call, so we work with students across California and nationwide.',
  },
  {
    question: 'What colleges do your students get into?',
    answer:
      'Our students have been admitted to highly selective universities including UC Berkeley, UCLA, USC, NYU, Boston University, and others. Results depend on many factors, but our goal is always to put your best story forward.',
  },
  {
    question: "What's the difference between essay coaching and college counseling?",
    answer:
      'Essay coaching focuses specifically on writing — brainstorming, drafting, and polishing your college essays. College counseling is broader and covers your full application strategy: college list, activities, recommendations, and timelines. We offer both (counseling coming soon).',
  },
  {
    question: 'How do I get started?',
    answer:
      "Simple — book a free 30-minute consultation through our website. There's no commitment and no pressure. We'll get to know you and figure out the best path forward together.",
  },
]

export const GRADE_OPTIONS = ['9th', '10th', '11th', '12th', 'Transfer/Other']
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js lib/constants.ts
git commit -m "feat: add brand colors and site constants"
```

---

### Task 3: Primitive Components

**Files:**
- Create: `components/Button.tsx`
- Create: `components/SectionHeading.tsx`
- Create: `components/Card.tsx`
- Create: `components/AnimateIn.tsx`
- Create: `components/StaggerContainer.tsx`

- [ ] **Step 1: Create components/Button.tsx**

```bash
mkdir -p components
```

`components/Button.tsx`:

```tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outlined' | 'white'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  ghost: 'border border-primary text-primary hover:bg-primary-light',
  outlined: 'border border-white text-white hover:bg-white/10',
  white: 'bg-white text-primary hover:bg-primary-light',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200 cursor-pointer'
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Create components/SectionHeading.tsx**

`components/SectionHeading.tsx`:

```tsx
interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-neutral max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Create components/Card.tsx**

`components/Card.tsx`:

```tsx
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-primary-light p-6 ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 4: Create components/AnimateIn.tsx**

`components/AnimateIn.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 5: Create components/StaggerContainer.tsx**

`components/StaggerContainer.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

interface WrapperProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = '' }: WrapperProps) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: WrapperProps) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 6: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add components/
git commit -m "feat: add Button, SectionHeading, Card, AnimateIn, StaggerContainer"
```

---

### Task 4: Nav Component

**Files:**
- Create: `components/Nav.tsx`

- [ ] **Step 1: Create components/Nav.tsx**

`components/Nav.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'
import Button from './Button'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary-light">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary tracking-tight">
          BayAdmit
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-neutral hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={CALENDLY_URL} external variant="primary">
            Book Free Consult
          </Button>
        </div>

        <button
          className="md:hidden text-brand-dark p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-primary-light"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-brand-neutral hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  href={CALENDLY_URL}
                  external
                  variant="primary"
                  className="w-full justify-center"
                >
                  Book Free Consult
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Nav.tsx
git commit -m "feat: add sticky Nav with mobile hamburger drawer"
```

---

### Task 5: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

`components/Footer.tsx`:

```tsx
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { NAV_LINKS, CALENDLY_URL, CONTACT_EMAIL } from '@/lib/constants'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="text-xl font-bold text-white">BayAdmit</p>
            <p className="mt-1 text-sm text-white/60">Your story, your way in.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-white/50 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <Button href={CALENDLY_URL} external variant="outlined">
              Book Free Consult
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>© 2025 BayAdmit. All rights reserved.</p>
          <p>Based in the Bay Area. Serving students nationwide.</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer with nav links, social icons, CTA"
```

---

### Task 6: Root Layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Update app/globals.css**

Replace entire file contents:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 2: Update app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'BayAdmit | Bay Area College Essay Coaching & Admissions Counseling',
    template: '%s | BayAdmit',
  },
  description:
    "Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process.",
  openGraph: {
    siteName: 'BayAdmit',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-brand-neutral antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Open http://localhost:3000. Verify Nav and Footer are visible. Stop with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: add root layout with Inter font, Nav, Footer"
```

---

### Task 7: Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write app/page.tsx**

```tsx
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
```

- [ ] **Step 2: Verify dev server renders Home correctly**

```bash
npm run dev
```

Open http://localhost:3000. Verify: hero with gradient bg + 2 CTAs, school badges strip, 3-step how-it-works, 3 service cards (1 active + 2 coming soon), 3 testimonial preview cards, teal CTA banner. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Home page with all sections"
```

---

### Task 8: Services Page

**Files:**
- Create: `app/services/page.tsx`

- [ ] **Step 1: Create app/services/page.tsx**

```bash
mkdir -p app/services
```

`app/services/page.tsx`:

```tsx
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
```

- [ ] **Step 2: Verify dev server renders /services**

```bash
npm run dev
```

Open http://localhost:3000/services. Verify: hero, featured essay coaching card with checkmark list + 2 CTAs, 2 coming-soon cards, 4-col why-BayAdmit grid. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/services/
git commit -m "feat: add Services page"
```

---

### Task 9: About Page + TeamCard

**Files:**
- Create: `components/TeamCard.tsx`
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create components/TeamCard.tsx**

`components/TeamCard.tsx`:

```tsx
interface TeamCardProps {
  name: string
  role: string
  initials: string
  bio: string
}

export default function TeamCard({ name, role, initials, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-primary-light p-6 text-center">
      <div
        className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg"
        aria-hidden="true"
      >
        {initials}
      </div>
      <h3 className="font-semibold text-brand-dark">{name}</h3>
      <p className="text-sm text-accent mt-1">{role}</p>
      <p className="text-sm text-brand-neutral mt-3">{bio}</p>
    </div>
  )
}
```

- [ ] **Step 2: Create app/about/page.tsx**

```bash
mkdir -p app/about
```

`app/about/page.tsx`:

```tsx
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
```

- [ ] **Step 3: Verify dev server renders /about**

```bash
npm run dev
```

Open http://localhost:3000/about. Verify: hero, 2-col story with teal gradient block, 3 team cards with gradient avatars and initials, 3 values cards. Stop server.

- [ ] **Step 4: Commit**

```bash
git add components/TeamCard.tsx app/about/
git commit -m "feat: add About page and TeamCard component"
```

---

### Task 10: Testimonials Page + TestimonialCard

**Files:**
- Create: `components/TestimonialCard.tsx`
- Create: `app/testimonials/page.tsx`

- [ ] **Step 1: Create components/TestimonialCard.tsx**

`components/TestimonialCard.tsx`:

```tsx
interface TestimonialCardProps {
  quote: string
  name: string
  result: string
  stars: number
}

export default function TestimonialCard({ quote, name, result, stars }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-primary-light p-6">
      <div className="flex gap-1 mb-3" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-accent text-lg" aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <p className="text-brand-neutral text-sm italic mb-4">"{quote}"</p>
      <p className="font-semibold text-brand-dark text-sm">{name}</p>
      <p className="text-accent text-xs mt-1">{result}</p>
    </article>
  )
}
```

- [ ] **Step 2: Create app/testimonials/page.tsx**

```bash
mkdir -p app/testimonials
```

`app/testimonials/page.tsx`:

```tsx
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
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">
              Real Students. Real Results.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              Hear from the students and families we've worked with.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials Grid */}
      {/* TODO: Replace with real student testimonials */}
      <section className="bg-white py-20 px-4 sm:px-6">
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
      <section className="bg-primary-light py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeading title="Our Students Have Been Admitted To" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SUCCESS_SCHOOLS.map((school) => (
              <span
                key={school}
                className="bg-primary-light text-primary-dark font-medium px-4 py-1 rounded-full text-sm border border-primary/20"
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
      <section className="bg-white py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold text-brand-dark mb-6">
          Want to be our next success story?
        </h2>
        <Button href={CALENDLY_URL} external variant="primary">
          Book Free Consult
        </Button>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Verify dev server renders /testimonials**

```bash
npm run dev
```

Open http://localhost:3000/testimonials. Verify: hero, 6-card grid, school chips with disclaimer, CTA button. Stop server.

- [ ] **Step 4: Commit**

```bash
git add components/TestimonialCard.tsx app/testimonials/
git commit -m "feat: add Testimonials page and TestimonialCard component"
```

---

### Task 11: Pricing Page + PricingCard + FAQAccordion

**Files:**
- Create: `components/PricingCard.tsx`
- Create: `components/FAQAccordion.tsx`
- Create: `app/pricing/page.tsx`

- [ ] **Step 1: Create components/PricingCard.tsx**

`components/PricingCard.tsx`:

```tsx
import { CheckCircle2 } from 'lucide-react'
import Button from './Button'
import { CALENDLY_URL } from '@/lib/constants'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  highlighted: boolean
  badge: string | null
}

export default function PricingCard({ name, price, features, highlighted, badge }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        highlighted
          ? 'bg-primary text-white shadow-lg scale-105'
          : 'bg-white border border-primary-light'
      }`}
    >
      {badge && (
        <span className="self-start mb-4 text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h3 className={`text-xl font-semibold ${highlighted ? 'text-white' : 'text-brand-dark'}`}>
        {name}
      </h3>
      <p
        className={`text-3xl font-bold mt-2 mb-6 ${highlighted ? 'text-white' : 'text-brand-dark'}`}
      >
        {price}
      </p>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <CheckCircle2
              size={16}
              className={`mt-0.5 shrink-0 ${highlighted ? 'text-white/80' : 'text-accent'}`}
              aria-hidden="true"
            />
            <span className={highlighted ? 'text-white/90' : 'text-brand-neutral'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={CALENDLY_URL}
        external
        variant={highlighted ? 'white' : 'ghost'}
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </div>
  )
}
```

- [ ] **Step 2: Create components/FAQAccordion.tsx**

`components/FAQAccordion.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-primary-light">
      {FAQ_ITEMS.map(({ question, answer }, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`

        return (
          <div key={i}>
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            >
              <span className="font-semibold text-brand-dark group-hover:text-primary transition-colors">
                {question}
              </span>
              {isOpen ? (
                <Minus size={18} className="text-primary shrink-0" aria-hidden="true" />
              ) : (
                <Plus size={18} className="text-primary shrink-0" aria-hidden="true" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-brand-neutral text-sm leading-relaxed">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
```

- [ ] **Step 3: Create app/pricing/page.tsx**

```bash
mkdir -p app/pricing
```

`app/pricing/page.tsx`:

```tsx
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
```

- [ ] **Step 4: Verify dev server renders /pricing**

```bash
npm run dev
```

Open http://localhost:3000/pricing. Verify: hero, 3 pricing cards (middle card elevated with `scale-105` and teal bg), coming-soon box, FAQ accordion (click items to expand/collapse). Stop server.

- [ ] **Step 5: Commit**

```bash
git add components/PricingCard.tsx components/FAQAccordion.tsx app/pricing/
git commit -m "feat: add Pricing page, PricingCard, FAQAccordion with JSON-LD"
```

---

### Task 12: Contact Page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create app/contact/page.tsx**

```bash
mkdir -p app/contact
```

`app/contact/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import Button from '@/components/Button'
import { CALENDLY_URL, CONTACT_EMAIL, GRADE_OPTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact BayAdmit',
  description:
    'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact BayAdmit | Book a Free Consultation',
    description:
      'Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours.',
    url: 'https://bayadmit.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-5xl font-bold tracking-tight text-brand-dark">Let's Talk</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-neutral">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Two-column */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Form */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">Send Us a Message</h2>
            {/* TODO: Wire up to form backend (e.g. Formspree, Resend, or EmailJS) */}
            <form className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
                  Phone{' '}
                  <span className="text-brand-neutral font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-brand-dark mb-1">
                  Student Grade
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                >
                  <option value="">Select grade</option>
                  {GRADE_OPTIONS.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-primary-light rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about yourself and what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right — Info & Booking */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Book a Free Consult</h2>
              <Button
                href={CALENDLY_URL}
                external
                variant="primary"
                className="w-full justify-center text-base py-4"
              >
                Book Free 30-Min Consultation
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-brand-dark">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-brand-neutral hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-brand-dark">Location</p>
                  <p className="text-sm text-brand-neutral">
                    Bay Area, CA · Virtual sessions available nationwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-brand-dark">Response Time</p>
                  <p className="text-sm text-brand-neutral">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify dev server renders /contact**

```bash
npm run dev
```

Open http://localhost:3000/contact. Verify: hero, 2-col layout — form with all fields (name, email, phone, grade dropdown, message, submit) on left; Calendly button + email + location + response time on right. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/contact/
git commit -m "feat: add Contact page with form UI and booking info"
```

---

### Task 13: SEO Static Assets

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

- [ ] **Step 1: Create public/robots.txt**

`public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://bayadmit.com/sitemap.xml
```

- [ ] **Step 2: Create public/sitemap.xml**

`public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bayadmit.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bayadmit.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bayadmit.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://bayadmit.com/testimonials</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://bayadmit.com/pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://bayadmit.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt public/sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml"
```

---

### Task 14: Final Build Verification + Push

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected output includes:
- `✓ Compiled successfully`
- All 6 routes listed: `/`, `/services`, `/about`, `/testimonials`, `/pricing`, `/contact`
- No TypeScript errors, no missing module errors

- [ ] **Step 2: Fix any build errors**

Common issues and fixes:

| Error | Fix |
|---|---|
| `ReactNode` type error | Ensure `import { ReactNode } from 'react'` is present |
| `motion` not found | Check `'use client'` is at top of file |
| Unknown Tailwind class | Verify color name matches `tailwind.config.js` exactly |
| Module not found `@/lib/constants` | Verify `tsconfig.json` has `"paths": {"@/*": ["./*"]}` |

- [ ] **Step 3: Spot-check production build locally**

```bash
npm run start
```

Open http://localhost:3000. Check:
- Nav sticks on scroll
- Mobile hamburger opens/closes drawer
- /pricing FAQ accordion expands/collapses
- All nav links route correctly
- CTA buttons link to Calendly URL

Stop with Ctrl+C.

- [ ] **Step 4: Push all commits to GitHub**

```bash
git push origin main
```

Expected: all commits pushed to https://github.com/hrsinghvi/bayadmit.
