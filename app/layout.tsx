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
