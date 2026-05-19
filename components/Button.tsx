import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost' | 'outlined' | 'white'
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function Button({ children, href, variant = 'primary', external, className = '', type = 'button', onClick }: ButtonProps) {
  const cls = `btn ${variant === 'ghost' || variant === 'outlined' ? 'btn-ghost' : 'btn-primary'} ${className}`

  if (href && external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  }
  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
