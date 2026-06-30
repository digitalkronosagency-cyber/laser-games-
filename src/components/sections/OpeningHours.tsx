'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

type Period = 'regular' | 'vacances' | 'ete'

const schedule: Record<Period, { label: string; days: { day: string; hours: string }[] }> = {
  regular: {
    label: 'Hors vacances',
    days: [
      { day: 'Lundi', hours: 'Fermé' },
      { day: 'Mardi', hours: 'Fermé' },
      { day: 'Mercredi', hours: '14h00 – 22h00' },
      { day: 'Jeudi', hours: 'Fermé' },
      { day: 'Vendredi', hours: '14h00 – 22h00' },
      { day: 'Samedi', hours: '10h00 – 23h00' },
      { day: 'Dimanche', hours: '10h00 – 22h00' },
    ],
  },
  vacances: {
    label: 'Vacances scolaires',
    days: [
      { day: 'Lundi', hours: '14h00 – 22h00' },
      { day: 'Mardi', hours: '14h00 – 22h00' },
      { day: 'Mercredi', hours: '10h00 – 22h00' },
      { day: 'Jeudi', hours: '14h00 – 22h00' },
      { day: 'Vendredi', hours: '14h00 – 22h00' },
      { day: 'Samedi', hours: '10h00 – 23h00' },
      { day: 'Dimanche', hours: '10h00 – 22h00' },
    ],
  },
  ete: {
    label: 'Juillet – Août',
    days: [
      { day: 'Lundi', hours: '14h00 – 23h00' },
      { day: 'Mardi', hours: '14h00 – 23h00' },
      { day: 'Mercredi', hours: '10h00 – 23h00' },
      { day: 'Jeudi', hours: '14h00 – 23h00' },
      { day: 'Vendredi', hours: '14h00 – 23h00' },
      { day: 'Samedi', hours: '10h00 – 23h00' },
      { day: 'Dimanche', hours: '10h00 – 23h00' },
    ],
  },
}

const periods: Period[] = ['regular', 'vacances', 'ete']
const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

export default function OpeningHours() {
  const [active, setActive] = useState<Period>('regular')
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  useEffect(() => {
    const now = new Date()
    const day = dayNames[now.getDay()]
    const hour = now.getHours() + now.getMinutes() / 60
    const todaySchedule = schedule.regular.days.find(d => d.day === day)
    if (!todaySchedule || todaySchedule.hours === 'Fermé') {
      setIsOpen(false)
    } else {
      const [open, close] = todaySchedule.hours.split(' – ').map(t => {
        const [h, m] = t.replace('h', ':').split(':').map(Number)
        return h + (m || 0) / 60
      })
      setIsOpen(hour >= open && hour < close)
    }
  }, [])

  return (
    <div className="bg-dark-card rounded-2xl overflow-hidden">
      <div className="flex">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setActive(p)}
            className={cn(
              'flex-1 py-3 text-xs font-semibold transition-colors border-b-2',
              active === p
                ? 'border-primary text-primary'
                : 'border-transparent text-white/40 hover:text-white/70'
            )}
          >
            {schedule[p].label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {isOpen !== null && (
          <div className={cn('flex items-center gap-2 text-sm font-semibold mb-4', isOpen ? 'text-green-400' : 'text-red-400')}>
            <span className={cn('w-2 h-2 rounded-full', isOpen ? 'bg-green-400' : 'bg-red-400')} />
            {isOpen ? 'Ouvert maintenant' : 'Fermé actuellement'}
          </div>
        )}
        <ul className="space-y-2">
          {schedule[active].days.map(({ day, hours }) => (
            <li key={day} className="flex justify-between items-center text-sm">
              <span className="text-white/60">{day}</span>
              <span className={hours === 'Fermé' ? 'text-white/30' : 'text-white font-medium'}>{hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
