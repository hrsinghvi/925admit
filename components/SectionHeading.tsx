interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-tight tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-neutral max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
