import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outlined' | 'white'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-dark text-[#F4F4F0] hover:bg-black transition-colors',
  ghost: 'border border-brand-dark/20 text-brand-dark hover:bg-brand-dark/5 transition-colors',
  outlined: 'border border-primary text-primary hover:bg-primary hover:text-white transition-colors',
  white: 'bg-[#F4F4F0] text-brand-dark hover:bg-white transition-colors',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
  type,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium'
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type ?? 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
