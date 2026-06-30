import type { Metadata } from 'next'
import Link from 'next/link'
import { laserGameMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = laserGameMetadata

const features = [
  { icon: '🎮', title: 'Matériel de pointe', desc: 'Pistolets laser derniers génération avec rétro-action haptique' },
  { icon: '🏛️', title: 'Arène immersive', desc: 'Labyrinthe de 500 m² avec effets lumière et brouillard' },
  { icon: '👥', title: '2 à 24 joueurs', desc: 'Parties individuelles ou en équipes jusqu’à 24 personnes' },
  { icon: '📊', title: 'Statistiques live', desc: 'Tableau de scores en temps réel sur écran géant' },
  { icon: '⏱️', title: '20 min de jeu', desc: 'Session intense de 20 minutes par partie' },
  { icon: '🏆', title: '6 modes de jeu', desc: 'Chacun pour soi, équipes, domination et bien plus' },
]

const steps = [
  { step: '01', title: 'Accueil & briefing', desc: 'Notre animateur vous explique les règles et équipe votre gilet en 10 minutes.' },
  { step: '02', title: 'La partie', desc: '20 minutes de jeu intense dans notre arène immersive.' },
  { step: '03', title: 'Tableau des scores', desc: 'Retrouvez vos performances sur notre écran géant et revivez vos meilleurs moments.' },
]

export default function LaserGamePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'Laser Game', url: 'https://tours.lasergame-evolution.fr/laser-game' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(229,0,26,0.2)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Laser Game</span>
          </nav>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">🎮 Activité</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">LASER GAME</h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Affrontez vos adversaires dans notre arène de 500 m² avec les pistolets laser les plus modernes du marché.
            Une expérience intense, accessible à tous dès 6 ans.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors">
              Réserver
            </Link>
            <Link href="/tarifs" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-bg transition-colors">
              Voir les tarifs
            </Link>
          </div>
          <div className="mt-10 flex gap-8">
            <div><p className="font-display text-3xl text-primary">à partir de 7€</p><p className="text-white/50 text-sm">/joueur</p></div>
            <div><p className="font-display text-3xl text-white">20 min</p><p className="text-white/50 text-sm">/partie</p></div>
            <div><p className="font-display text-3xl text-white">6+</p><p className="text-white/50 text-sm">ans</p></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">POURQUOI CHOISIR NOTRE LASER GAME ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-card rounded-xl p-6 hover:ring-1 hover:ring-primary transition-all">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-4xl text-white text-center mb-12">COMMENT ÇA SE PASSE ?</h2>
          <div className="space-y-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start">
                <span className="font-display text-5xl text-primary shrink-0 leading-none">{step}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl text-white mb-6">6 MODES DE JEU DISPONIBLES</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Du classique deathmatch en solo aux parties en équipe — chaque visite est une nouvelle expérience.</p>
          <Link href="/modes-de-jeu" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
            Découvrir tous les modes
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-6">PRÊT À JOUER ?</h2>
          <p className="text-white/80 mb-8">Réservez votre session Laser Game maintenant.</p>
          <Link href="/contact" className="inline-flex bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Réserver ma session
          </Link>
        </div>
      </section>
    </>
  )
}
