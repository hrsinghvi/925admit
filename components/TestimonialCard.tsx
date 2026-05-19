interface TestimonialCardProps {
  quote: string
  name: string
  result: string
  stars: number
}

export default function TestimonialCard({ quote, name, result, stars }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-black/5 p-6">
      <div className="flex gap-1 mb-3" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-accent text-lg" aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <p className="font-serif text-lg text-brand-dark leading-relaxed mb-4">"{quote}"</p>
      <p className="font-semibold text-brand-dark text-sm">{name}</p>
      <p className="text-accent text-xs mt-1">{result}</p>
    </article>
  )
}
