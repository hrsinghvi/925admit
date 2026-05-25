export const SITE_NAME = '925Admit'
export const CALENDLY_URL = 'https://calendly.com/925admit'
export const CONTACT_EMAIL = 'hello@925admit.com'
export const SITE_URL = 'https://925admit.com'

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
  'Available virtually across the Bay Area and beyond',
]

export const WHY_BAYADMIT = [
  { title: 'Bay Area roots, national reach', icon: 'MapPin' },
  { title: 'Personalized 1-on-1 coaching', icon: 'Target' },
  { title: 'Unlimited revisions', icon: 'RefreshCw' },
  { title: 'Fast turnaround feedback', icon: 'MessageCircle' },
]

export const TEAM = [
  {
    name: 'Hritvik Singhvi',
    role: 'Lead Essay Coach',
    initials: 'HS',
    image: '/team/hritvik.png',
    bio: 'Studying Computer Science at UIUC\'s Grainger College of Engineering, a top-5 CS program. Also admitted to UCSD, UCSB, NYU, UCI, UMD, and Purdue. Specializes in narrative structure and making technical experiences feel human.',
  },
  {
    name: 'Krishang Singhvi',
    role: 'Activities List Specialist',
    initials: 'KS',
    image: '/team/krishang.png',
    bio: 'Studying Finance at Indiana University\'s Kelley School of Business, one of the top business programs in the world. Also admitted to UCSB, Emory University, BU, UIUC Gies, and UCSD. Expert at crafting compelling activity descriptions and strategic positioning.',
  },
  {
    name: 'Sriram Karthik',
    role: 'Lead Essay Coach',
    initials: 'SR',
    image: '/team/sriram.png',
    bio: 'Studying Data Science at UC Berkeley. Also admitted to UIUC, UC Davis, UCSB, Purdue, and UMD. Specializes in helping analytical thinkers find the human story inside their experiences, with particular strength in STEM essays and making complex ideas feel accessible and personal.',
  },
  {
    name: 'Skandhan Karthik',
    role: 'Writing Specialist',
    initials: 'SK',
    image: '/team/skandhan.png',
    bio: 'Studying Data Science at UC Berkeley. Got into every school he applied to, including UCLA, UCSD, NYU, Cornell, and the University of Washington. Known for his instinct for voice and authenticity, helping students find the one specific detail that makes a draft feel genuinely and unmistakably theirs.',
  },
  {
    name: 'Tej Bussannagari',
    role: 'College Counselor',
    initials: 'TB',
    image: '/team/tej.png',
    bio: 'Studying Computer Science and Machine Learning at UC San Diego. Also admitted to UCSB, UC Davis, UC Irvine, University of Florida, and UT Austin. Specializes in supplement strategy and school-specific essay positioning.',
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

export const TESTIMONIALS = [
  {
    quote: 'I had rewritten my essay six times and still couldn\'t figure out what was wrong. My coach read it once and knew immediately. Three sessions later, I submitted something I was actually proud of.',
    name: 'Arjun S.',
    result: 'Admitted to UC Berkeley',
    stars: 5,
  },
  {
    quote: 'I kept writing what I thought admissions wanted to read. My coach helped me stop doing that. The final essay was so much more honest and so much stronger.',
    name: 'Priya M.',
    result: 'Admitted to UCLA',
    stars: 5,
  },
  {
    quote: 'The feedback came back faster than I expected. Fully annotated, specific, and actually useful. It made the whole process feel manageable instead of overwhelming.',
    name: 'Kevin L.',
    result: 'Admitted to UC San Diego',
    stars: 5,
  },
  {
    quote: 'My coach didn\'t just fix my essay. She helped me understand why it wasn\'t working. That made every revision faster and better. By draft four, it finally sounded like me.',
    name: 'Rohan K.',
    result: 'Admitted to USC',
    stars: 5,
  },
  {
    quote: 'I had twelve supplements across eight schools. My coach helped me tailor each one without losing my voice across all of them. I genuinely could not have done it alone.',
    name: 'Michelle C.',
    result: 'Admitted to NYU',
    stars: 5,
  },
  {
    quote: 'I\'m not a confident writer, but after working through my personal statement I finally understood what the essay was actually supposed to do. My coach made that click.',
    name: 'Marcus J.',
    result: 'Admitted to Boston University',
    stars: 5,
  },
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
      'We start with a free 30-minute consultation to understand your story and goals. From there, your coach guides you through brainstorming, drafting, and refining your essay through as many rounds of feedback as you need, all the way to a final polished piece.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'It depends on your package. The Single Essay package includes 1 coaching session, the Bundle includes 3, and the Full Package includes 5 coaching sessions. Most students complete their personal statement in 2–4 sessions.',
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer:
      "Yes. Every package includes unlimited revisions. We don't cut you off after one round of feedback. We work with you until your essay truly reflects your voice and story.",
  },
  {
    question: 'When should I start working on my college essays?',
    answer:
      'The earlier the better. We recommend starting in the summer before senior year (June through August) to give yourself time without pressure. That said, we work with students at all stages, even late in the application season.',
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
      'Essay coaching focuses specifically on writing: brainstorming, drafting, and polishing your college essays. College counseling is broader and covers your full application strategy: college list, activities, recommendations, and timelines. We offer both (counseling coming soon).',
  },
  {
    question: 'How do I get started?',
    answer:
      "Book a free 30-minute consultation through our website. There's no commitment and no pressure. We'll get to know you and figure out the best path forward together.",
  },
]

export const GRADE_OPTIONS = ['9th Grade', '10th Grade', '11th Grade', '12th Grade', 'Gap Year']
