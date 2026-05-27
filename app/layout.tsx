import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const instrument_serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: '925Admit | Bay Area College Essay Coaching & Admissions Counseling',
    template: '%s | 925Admit',
  },
  description:
    "Bay Area's premier college essay coaching service. We help students find their voice, craft compelling narratives, and stand out in the admissions process.",
  openGraph: {
    siteName: '925Admit',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${instrument_serif.variable} ${jetbrains_mono.variable}`}>
      <body>
        <Nav />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  )
}
