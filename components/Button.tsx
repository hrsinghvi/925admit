import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outlined' | 'white'

interface ButtonProps {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
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
  type = 'button',
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
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
