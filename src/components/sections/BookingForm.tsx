'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Prénom et nom requis (min. 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^[0-9+\s\-()]{8,}$/, 'Numéro de téléphone invalide'),
  activity: z.enum(['laser-game', 'lancer-hache', 'blind-test', 'combinaison'], {
    errorMap: () => ({ message: 'Veuillez choisir une activité' }),
  }),
  date: z.string().min(1, 'Date requise'),
  participants: z.string().min(1, 'Nombre de participants requis'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-dark-card rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Demande envoyée !</h3>
        <p className="text-white/60 text-sm">Nous vous répondrons dans les 24h. À bientôt !</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-white/40 hover:text-white transition-colors">Nouvelle demande</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-dark-card rounded-2xl p-8 space-y-5">
      <h3 className="font-display text-2xl text-white mb-6">Réserver une session</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Nom complet *</label>
          <input {...register('name')} placeholder="Jean Dupont" className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors" />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Email *</label>
          <input {...register('email')} type="email" placeholder="jean@exemple.fr" className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Téléphone *</label>
          <input {...register('phone')} type="tel" placeholder="06 12 34 56 78" className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors" />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Activité *</label>
          <select {...register('activity')} className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Choisir une activité</option>
            <option value="laser-game">Laser Game</option>
            <option value="lancer-hache">Lancer de Hache</option>
            <option value="blind-test">BlindTest</option>
            <option value="combinaison">Combinaison</option>
          </select>
          {errors.activity && <p className="text-red-400 text-xs mt-1">{errors.activity.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Date souhaitée *</label>
          <input {...register('date')} type="date" className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors" />
          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-1.5">Nombre de participants *</label>
          <select {...register('participants')} className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Sélectionner</option>
            {['1-5', '6-10', '11-15', '16-20', '20+'].map(v => (
              <option key={v} value={v}>{v} personnes</option>
            ))}
          </select>
          {errors.participants && <p className="text-red-400 text-xs mt-1">{errors.participants.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-1.5">Message (optionnel)</label>
        <textarea {...register('message')} rows={3} placeholder="Occasion spéciale, demande particulière..." className="w-full bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Une erreur est survenue. Veuillez réessayer ou nous appeler.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'loading' && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>

      <p className="text-center text-xs text-white/30">Ou appelez-nous directement : <a href="tel:0247050505" className="text-white/50 hover:text-white transition-colors">02 47 05 05 05</a></p>
    </form>
  )
}
