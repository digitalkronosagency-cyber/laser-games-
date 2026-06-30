import type { Metadata } from 'next'
import { evenementsMetadata } from '@/lib/seo'

export const metadata: Metadata = evenementsMetadata

const events = [
  {
    date: 'Juillet 2026',
    title: 'Horaires estivaux',
    description: 'Tous les jours de 10h à 23h du 1er juillet au 31 août 2026. Profitez de l’été pour vivre des aventures mémorables !',
    type: 'Horaires',
    badge: '🌞 Été',
  },
  {
    date: 'Vacances scolaires',
    title: 'Ouverture étendue',
    description: 'Pendant toutes les vacances scolaires de la zone B, nous ouvrons du lundi au dimanche de 14h à 22h.',
    type: 'Horaires',
    badge: '🎓 Vacances',
  },
  {
    date: '2026',
    title: 'Nouvelles activités',
    description: 'Une quatrième activité surprise arrive en 2026 ! Restez connectés sur nos réseaux sociaux pour être les premiers informés.',
    type: 'Actualité',
    badge: '🚀 Coming Soon',
  },
]

export default function EvenementsPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-dark-secondary pt-20">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">ÉVÉNEMENTS</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Restez informés de nos dernières actualités, changements d’horaires et événements spéciaux.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {events.map(({ date, title, description, badge }) => (
              <div key={title} className="bg-dark-card rounded-2xl p-8 hover:ring-1 hover:ring-primary transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-primary text-sm font-semibold">{date}</span>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
                </div>
                <h2 className="font-display text-3xl text-white mb-4">{title}</h2>
                <p className="text-white/60 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social follow */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl text-white mb-6">SUIVEZ-NOUS SUR LES RÉSEAUX</h2>
          <p className="text-white/50 mb-8">Ne ratez aucune actualité, promotion ou événement spécial.</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/lasergameevolutiontours" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              👍 Suivre sur Facebook
            </a>
            <a href="https://www.instagram.com/lasergame_evolution_tours" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              📸 Suivre sur Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
