import type { Metadata } from 'next'
import Link from 'next/link'
import { tarifsMetadata } from '@/lib/seo'

export const metadata: Metadata = tarifsMetadata

const pricingData = [
  {
    activity: 'Laser Game 🎮',
    color: 'primary',
    prices: [
      { label: '1 partie (20 min)', price: '7€/joueur', note: 'Minimum 4 joueurs' },
      { label: '2 parties', price: '12€/joueur', note: 'Recommandé' },
      { label: '3 parties', price: '16€/joueur', note: 'Le plus populaire' },
      { label: 'Session illimitée 2h', price: '25€/joueur', note: 'Pour les passionnés' },
    ],
  },
  {
    activity: 'Lancer de Hache 🪓',
    color: 'accent',
    prices: [
      { label: 'Session 45 min', price: '12€/joueur', note: 'Initiation incluse' },
      { label: 'Session 60 min', price: '15€/joueur', note: 'Avec tournoi final' },
      { label: 'Session privatise (1h)', price: '120€', note: 'Jusqu’à 8 personnes' },
      { label: 'Formule groupe (1h30)', price: '180€', note: 'Jusqu’à 12 personnes' },
    ],
  },
  {
    activity: 'BlindTest 🎵',
    color: 'purple',
    prices: [
      { label: 'Session 60 min', price: '10€/joueur', note: 'Minimum 4 joueurs' },
      { label: 'Session 90 min', price: '14€/joueur', note: 'Version complète' },
      { label: 'Privatisation (2h)', price: '200€', note: 'Jusqu’à 40 personnes' },
    ],
  },
]

const packs = [
  {
    name: 'Pack Découverte',
    price: '20€',
    per: '/personne',
    description: 'Parfait pour une première visite',
    includes: ['1 partie Laser Game', '30 min Lancer de Hache', 'Boisson offerte'],
    highlight: false,
  },
  {
    name: 'Pack Aventurier',
    price: '35€',
    per: '/personne',
    description: 'Notre formule la plus populaire',
    includes: ['2 parties Laser Game', '45 min Lancer de Hache', 'BlindTest 60 min', 'Snack offert'],
    highlight: true,
    badge: 'Meilleure valeur',
  },
  {
    name: 'Pack Ultime',
    price: '50€',
    per: '/personne',
    description: 'L’expérience complète',
    includes: ['3 parties Laser Game', '60 min Lancer de Hache', 'BlindTest 90 min', 'Repas inclus'],
    highlight: false,
  },
  {
    name: 'Pack Groupe (10+)',
    price: 'Sur devis',
    per: '',
    description: 'Pour vos événements de groupe',
    includes: ['Toutes activités', 'Animateur dédié', 'Salle privée', 'Personnalisation'],
    highlight: false,
  },
]

export default function TarifsPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-dark-secondary pt-20">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">TARIFS</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Des prix transparents pour toutes vos activités. Aucune surprise, juste du fun !</p>
        </div>
      </section>

      {/* By activity */}
      <section className="section-padding">
        <div className="container-custom space-y-12">
          {pricingData.map(({ activity, prices }) => (
            <div key={activity}>
              <h2 className="font-display text-3xl text-white mb-6">{activity}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {prices.map(({ label, price, note }) => (
                  <div key={label} className="bg-dark-card rounded-xl p-6">
                    <p className="text-white/60 text-sm mb-3">{label}</p>
                    <p className="font-display text-3xl text-primary mb-1">{price}</p>
                    <p className="text-white/30 text-xs">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packs */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl text-white">NOS PACKS COMBINAISONS</h2>
            <p className="text-white/50 mt-3">Combinez les activités pour plus d’économies !</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packs.map((pack) => (
              <div key={pack.name} className={`bg-dark-card rounded-2xl p-6 flex flex-col relative ${pack.highlight ? 'ring-2 ring-primary' : ''}`}>
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">{pack.badge}</span>
                )}
                <h3 className="font-display text-2xl text-white mb-2">{pack.name}</h3>
                <div className="mb-4">
                  <span className="font-display text-4xl text-primary">{pack.price}</span>
                  <span className="text-white/40 text-sm">{pack.per}</span>
                </div>
                <p className="text-white/50 text-sm mb-6">{pack.description}</p>
                <ul className="space-y-2 flex-1">
                  {pack.includes.map((item) => (
                    <li key={item} className="text-sm text-white/70 flex gap-2">
                      <span className="text-primary">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-6 text-center py-3 rounded-lg font-semibold text-sm transition-colors ${pack.highlight ? 'bg-primary text-white hover:bg-red-700' : 'border border-white/20 text-white hover:border-white/60'}`}>
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-card">
        <div className="container-custom text-center">
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            ℹ️ Tarifs indicatifs, susceptibles de varier. Groupes de plus de 10 personnes : contactez-nous pour un devis personnalisé.
            Carte bancaire, espèces et chèques vacances acceptés.
          </p>
        </div>
      </section>
    </>
  )
}
