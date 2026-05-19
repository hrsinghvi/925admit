export const SITE_NAME = 'BayAdmit'
export const CALENDLY_URL = 'https://calendly.com/bayadmit'
export const CONTACT_EMAIL = 'hello@bayadmit.com'
export const SITE_URL = 'https://bayadmit.com'

export const NAV_LINKS = [
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
  desc: string
  highlighted: boolean
  badge: string | null
  features: string[]
}[] = [
  {
    name: 'Single Essay',
    price: '$[TBD]',
    desc: 'Perfect for students who need help with one key essay.',
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
    desc: 'Our most popular package for serious applicants.',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to 5 essays',
      'Unlimited revisions',
      '48-hour feedback',
      '3 coaching sessions',
      'Priority support',
    ],
  },
  {
    name: 'Full Application Package',
    price: '$[TBD]',
    desc: 'Comprehensive support for your entire application.',
    highlighted: false,
    badge: null,
    features: [
      'Unlimited essays',
      'Everything in Bundle',
      '5 coaching sessions',
      'Application timeline support',
      'School-specific supplement strategy',
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
      'It depends on your package. The Single Essay package includes 1 coaching session, the Bundle includes 3, and the Full Package includes 5 coaching sessions. Most students complete their personal statement in 2–4 sessions.',
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

export const GRADE_OPTIONS = ['9th Grade', '10th Grade', '11th Grade', '12th Grade', 'Gap Year']
