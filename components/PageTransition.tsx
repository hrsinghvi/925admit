'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setPhase('out')
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        prevPathname.current = pathname
        window.scrollTo(0, 0)
        setPhase('in')
      }, 200)
      return () => clearTimeout(timeout)
    } else {
      setDisplayChildren(children)
    }
  }, [pathname, children])

  return (
    <div
      className={`page-transition ${phase === 'in' ? 'page-enter' : 'page-exit'}`}
    >
      {displayChildren}
    </div>
  )
}
