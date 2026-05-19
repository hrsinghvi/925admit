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
      <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-neutral max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
