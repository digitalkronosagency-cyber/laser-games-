import Link from 'next/link'
import { cn } from '@/lib/utils'

interface OfferCardProps {
  title: string
  description: string
  price?: string
  features: string[]
  href: string
  highlight?: boolean
  badge?: string
  icon?: string
  className?: string
}

export default function OfferCard({
  title,
  description,
  price,
  features,
  href,
  highlight = false,
  badge,
  icon,
  className,
}: OfferCardProps) {
  return (
    <div className={cn(
      'bg-dark-card rounded-2xl p-6 flex flex-col relative',
      highlight && 'ring-2 ring-primary',
      className
    )}>
      {(badge || highlight) && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {badge || 'Populaire'}
        </span>
      )}
      {icon && <span className="text-4xl mb-4">{icon}</span>}
      <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
      {price && (
        <p className="text-3xl font-bold text-primary mb-3">{price}</p>
      )}
      <p className="text-white/60 text-sm mb-6">{description}</p>
      <ul className="space-y-2 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
            <span className="text-primary mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={cn(
          'text-center py-3 rounded-lg font-semibold text-sm transition-colors',
          highlight
            ? 'bg-primary text-white hover:bg-red-700'
            : 'border border-white/20 text-white hover:border-white/60'
        )}
      >
        Réserver maintenant
      </Link>
    </div>
  )
}
