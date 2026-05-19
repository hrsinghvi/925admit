import { CheckCircle2 } from 'lucide-react'
import Button from './Button'
import { CALENDLY_URL } from '@/lib/constants'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  highlighted: boolean
  badge: string | null
}

export default function PricingCard({ name, price, features, highlighted, badge }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        highlighted
          ? 'bg-primary text-white shadow-lg scale-105'
          : 'bg-white border border-primary-light'
      }`}
    >
      {badge && (
        <span className="self-start mb-4 text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h3 className={`text-xl font-semibold ${highlighted ? 'text-white' : 'text-brand-dark'}`}>
        {name}
      </h3>
      <p
        className={`text-3xl font-bold mt-2 mb-6 ${highlighted ? 'text-white' : 'text-brand-dark'}`}
      >
        {price}
      </p>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <CheckCircle2
              size={16}
              className={`mt-0.5 shrink-0 ${highlighted ? 'text-white/80' : 'text-accent'}`}
              aria-hidden="true"
            />
            <span className={highlighted ? 'text-white/90' : 'text-brand-neutral'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={CALENDLY_URL}
        external
        variant={highlighted ? 'white' : 'ghost'}
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </div>
  )
}
