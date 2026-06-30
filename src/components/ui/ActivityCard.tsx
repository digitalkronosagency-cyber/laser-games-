import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ActivityCardProps {
  number: string
  title: string
  description: string
  icon: string
  price: string
  duration: string
  features: string[]
  href: string
  bookingHref?: string
  className?: string
}

export default function ActivityCard({
  number,
  title,
  description,
  icon,
  price,
  duration,
  features,
  href,
  bookingHref = '/contact',
  className,
}: ActivityCardProps) {
  return (
    <div className={cn('bg-dark-card rounded-2xl overflow-hidden group hover:ring-2 hover:ring-primary transition-all duration-300', className)}>
      <div className="relative bg-dark-secondary p-8 flex items-center justify-center h-48">
        <span className="text-7xl">{icon}</span>
        <span className="absolute top-4 left-4 text-xs font-bold text-white/40 font-display tracking-widest">{number}</span>
        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          À partir de {price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm mb-4">{description}</p>
        <p className="text-accent text-sm font-semibold mb-4">⏱ {duration}</p>
        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-white/70">
              <span className="text-primary">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link href={href} className="flex-1 text-center py-2 border border-white/20 text-white text-sm rounded-lg hover:border-white/60 transition-colors">
            En savoir plus
          </Link>
          <Link href={bookingHref} className="flex-1 text-center py-2 bg-primary text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
            Réserver
          </Link>
        </div>
      </div>
    </div>
  )
}
