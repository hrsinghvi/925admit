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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  },
}

interface WrapperProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = '' }: WrapperProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
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
