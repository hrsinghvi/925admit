# BayAdmit Website — Design Spec
Date: 2026-05-18

## Overview

Multi-page marketing website for BayAdmit, a Bay Area college essay coaching and admissions counseling business. Pure static marketing site — no auth, no user accounts, no backend (contact form is UI-only placeholder).

Target audience: high school students and parents equally.
Tone: warm mentor + premium service + modern energy.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Font | Inter via `next/font/google` |
| Animations | Framer Motion (subtle) |
| Icons | Lucide React |
| Deployment | Vercel (user-configured) |

---

## Brand & Design System

### Colors (`tailwind.config.js`)

```js
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
  }
}
```

### Typography

- Hero: `text-5xl font-bold tracking-tight text-brand-dark`
- Section headings: `text-3xl font-semibold tracking-tight text-brand-dark`
- Body: `text-base text-brand-neutral` or `text-lg text-brand-neutral`

### Design Language

- Generous whitespace, clean airy layouts
- `rounded-2xl` / `rounded-xl` on cards and buttons
- `shadow-sm` / `shadow-md` on cards
- Gradients: `from-primary to-accent`, `from-primary-light to-white`
- No stock photos — CSS gradients and typography as visual elements
- Mobile-first, fully responsive

---

## Architecture

```
/app
  layout.tsx          ← Inter font, Nav + Footer, global metadata
  page.tsx            ← Home
  services/page.tsx
  about/page.tsx
  testimonials/page.tsx
  pricing/page.tsx
  contact/page.tsx
/components
  Nav.tsx             ← sticky blur navbar, hamburger mobile drawer
  Footer.tsx          ← dark bg, links, social icons
  Button.tsx          ← variant: primary | ghost | outlined | white
  SectionHeading.tsx  ← reusable h2 + optional subtext
  Card.tsx            ← generic rounded shadow wrapper
  TestimonialCard.tsx ← quote, name, result, 5-star rating
  PricingCard.tsx     ← tier, price, features, CTA, highlighted variant
  FAQAccordion.tsx    ← Framer Motion expand/collapse, ARIA roles
  TeamCard.tsx        ← gradient avatar with initials, name, role, bio
/lib
  constants.ts        ← SITE_NAME, EMAIL, CALENDLY_URL, nav links, schools list
/public
  robots.txt
  sitemap.xml
tailwind.config.js
```

---

## Data Flow

All content is static strings — no API calls. Data lives in `lib/constants.ts` and is imported directly into page/component files.

State is local-only:
- `Nav`: mobile menu open/close (`useState`)
- `FAQAccordion`: which item is expanded (`useState`)

No global state management needed.

---

## Pages

### 1. Home (`/`)

Sections in order:
1. **Hero** — headline, subheadline, two CTA buttons, `from-primary-light via-white to-white` gradient bg, decorative teal shape
2. **Social Proof Bar** — `bg-primary-light` strip, school pill badges
3. **How It Works** — 3-step cards on `bg-white`, Lucide icons, teal step numbers
4. **Services Snapshot** — 3 cards on `bg-primary-light`, coming-soon badges on 2 of 3
5. **Testimonials Preview** — 2–3 placeholder cards on `bg-white`
6. **CTA Banner** — full-width `from-primary to-primary-dark`, white text + outlined button

### 2. Services (`/services`)

Sections:
1. **Hero** — `from-primary-light to-white`
2. **Essay Coaching** — featured, checklist with accent checkmarks, two CTAs
3. **College List Building** — coming soon, muted
4. **Application Strategy** — coming soon, muted
5. **Why BayAdmit** — 4 icon+text blocks

### 3. About (`/about`)

Sections:
1. **Hero**
2. **Our Story** — 2-col: text left, teal gradient block right
3. **Meet the Team** — 3 cards with gradient avatar initials (placeholder, TODO)
4. **Values** — 3 cards on `bg-primary-light`

### 4. Testimonials (`/testimonials`)

Sections:
1. **Hero**
2. **Testimonial Grid** — 6 placeholder cards, 2–3 col responsive (all TODO)
3. **Success Schools** — chip list with disclaimer
4. **CTA**

### 5. Pricing (`/pricing`)

Sections:
1. **Hero**
2. **Pricing Cards** — 3-tier: Single Essay / Essay Bundle (featured, `scale-105`) / Full Package
3. **Coming Soon** — college counseling packages teaser
4. **FAQ Accordion** — 8 items, Framer Motion, ARIA, `+`/`−` icons
5. **FAQ JSON-LD** — `FAQPage` schema injected via inline `<script type="application/ld+json">` in the page component (not `generateMetadata`, which doesn't support JSON-LD)

### 6. Contact (`/contact`)

Sections:
1. **Hero**
2. **Two-column layout**:
   - Left: form (Name, Email, Phone optional, Grade dropdown, Message) — UI only, TODO backend
   - Right: Calendly CTA, email, location, response time

---

## Navigation

- Logo: "BayAdmit" bold Inter, `text-primary`
- Links: Home · Services · About · Testimonials · Pricing · Contact
- CTA: "Book Free Consult" → `https://calendly.com/bayadmit`
- Sticky: `backdrop-blur-md bg-white/80 border-b border-primary-light`
- Mobile: hamburger → smooth slide-down drawer (Framer Motion)

---

## Footer

- Logo + tagline "Your story, your way in."
- Nav links
- "Book Free Consult" CTA
- Social icons: Instagram, LinkedIn, Twitter/X (links to `#`)
- `© 2025 BayAdmit. All rights reserved.`
- `bg-brand-dark text-white`

---

## SEO & Technical

### Metadata (per page)

| Page | Title | Description |
|---|---|---|
| Home | BayAdmit \| Bay Area College Essay Coaching & Admissions Counseling | Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process. |
| Services | College Essay Coaching Services \| BayAdmit | Expert college essay coaching, college list building, and application strategy — personalized, 1-on-1, with unlimited revisions. |
| Pricing | Essay Coaching Pricing & Packages \| BayAdmit | Simple, transparent pricing for college essay coaching. All packages include unlimited revisions. Choose the plan that fits your needs. |
| About | About BayAdmit \| Bay Area College Admissions Coaches | Meet the BayAdmit team — a small group of writers, educators, and former applicants passionate about helping every student tell their story. |
| Testimonials | Student Success Stories \| BayAdmit | Hear from students and families who worked with BayAdmit. Admitted to UC Berkeley, UCLA, USC, NYU, and more. |
| Contact | Contact BayAdmit \| Book a Free Consultation | Have questions? Book a free 30-minute consultation or send us a message. We typically respond within 24 hours. |

Each page exports a `metadata` object with `title`, `description`, and Open Graph tags.

### Structured Data

`/pricing` page includes `FAQPage` JSON-LD injected via an inline `<script type="application/ld+json">` element rendered directly in the page component — `generateMetadata` does not support arbitrary JSON-LD.

### Static files

- `/public/robots.txt` — allow all, sitemap reference
- `/public/sitemap.xml` — all 6 page URLs

### Semantic HTML

`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` used throughout. All decorative elements have `aria-hidden` or descriptive `alt`.

### Target

Lighthouse 90+ on Performance, Accessibility, SEO.

---

## Animations (Framer Motion)

- Hero text: `fadeInUp` on mount
- Card grids: staggered `fadeInUp` children
- FAQ accordion: `AnimatePresence` + height/opacity transition
- Nav mobile drawer: slide-down with `AnimatePresence`
- All transitions: `duration: 0.3–0.5s`, `ease: easeOut` — no flashy effects

---

## Constants (`lib/constants.ts`)

```ts
SITE_NAME = 'BayAdmit'
CALENDLY_URL = 'https://calendly.com/bayadmit'
CONTACT_EMAIL = 'hello@bayadmit.com'
NAV_LINKS = [Home, Services, About, Testimonials, Pricing, Contact]
SCHOOLS = [Stanford, UC Berkeley, UCLA, Harvard, MIT, USC, NYU, ...]
TEAM = [{ name, role, initials, bio }]  // placeholder, TODO
TESTIMONIALS = [{ quote, name, result, stars }]  // placeholder, TODO
FAQ_ITEMS = [{ question, answer }]  // 8 items
PRICING_TIERS = [{ name, price, features, highlighted }]
```

---

## Constraints

- No auth, login, signup, or user accounts anywhere
- No stock photos
- Pricing displayed as `$[TBD]` throughout
- All testimonials, team bios: clearly marked `// TODO` in code
- Calendly URL and contact email are placeholders
- Contact form is UI-only — backend wiring is a TODO
- Vercel deployment configured by user separately
