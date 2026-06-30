import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  date: string
  rating: number
  text: string
  activity?: string
  className?: string
}

export default function TestimonialCard({ name, date, rating, text, activity, className }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className={cn('bg-dark-card rounded-2xl p-6 flex flex-col gap-4', className)}>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn('w-4 h-4', i < rating ? 'text-yellow-400' : 'text-white/20')}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <svg viewBox="0 0 74 24" className="h-5 opacity-40" aria-label="Google">
          <path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-1.44 4.04-5.88 4.04-3.54 0-6.43-2.93-6.43-6.54s2.89-6.54 6.43-6.54c2.01 0 3.36.86 4.13 1.6l2.81-2.71C14.43 0.71 12.04 0 9.24 0 4.14 0 0 4.14 0 9.24s4.14 9.24 9.24 9.24c5.33 0 8.87-3.75 8.87-9.02 0-.61-.07-1.07-.15-1.53H9.24z"/>
        </svg>
      </div>
      <p className="text-white/80 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
          {initials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-white/40 text-xs">{activity ? `${activity} · ` : ''}{date}</p>
        </div>
      </div>
    </div>
  )
}
