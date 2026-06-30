import type { Metadata } from 'next'
import Link from 'next/link'
import { lancerHacheMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = lancerHacheMetadata

const features = [
  { icon: '🪓', title: 'Haches professionnelles', desc: 'Haches calibrées pour tous niveaux, de l’initiation à l’expért' },
  { icon: '🎯', title: 'Cibles évolutives', desc: 'Cibles en bois massif renouvelées régulièrement pour la précision' },
  { icon: '👨‍🏫', title: 'Coach dédié', desc: 'Un moniteur certifié vous enseigne les techniques de lançer' },
  { icon: '👥', title: '2 à 12 joueurs', desc: 'Parfait pour groupes, EVJF, EVG ou soirées entre amis' },
  { icon: '⏱️', title: '45 à 60 min', desc: 'Session complète avec échauffement et tournoi final' },
  { icon: '🏆', title: 'Tournois internes', desc: 'Comparez vos scores et gagnez des récompenses' },
]

const occasions = [
  { icon: '🎂', label: 'Anniversaire' },
  { icon: '💍', label: 'EVJF / EVG' },
  { icon: '🏢', label: 'Team building' },
  { icon: '👩‍👦', label: 'En famille' },
  { icon: '👫', label: 'En couple' },
  { icon: '🍻', label: 'Soirée amis' },
]

export default function LancerHachePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'Lancer de Hache', url: 'https://tours.lasergame-evolution.fr/lancer-de-hache' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,107,53,0.2)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Lancer de Hache</span>
          </nav>
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">🪓 Activité</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">LANCER DE HACHE</h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Vivez l’expérience viking la plus authentique de Tours. Apprenez à lancer la hache avec nos coachs certifiés et défiez vos amis.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
              Réserver
            </Link>
            <Link href="/tarifs" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-bg transition-colors">
              Voir les tarifs
            </Link>
          </div>
          <div className="mt-10 flex gap-8">
            <div><p className="font-display text-3xl text-accent">à partir de 12€</p><p className="text-white/50 text-sm">/joueur</p></div>
            <div><p className="font-display text-3xl text-white">45–60 min</p><p className="text-white/50 text-sm">/session</p></div>
            <div><p className="font-display text-3xl text-white">12+</p><p className="text-white/50 text-sm">ans</p></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">UNE EXPÉRIENCE VIKING AUTHENTIQUE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-card rounded-xl p-6 hover:ring-1 hover:ring-accent transition-all">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">POUR TOUTES VOS OCCASIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map(({ icon, label }) => (
              <div key={label} className="bg-dark-card rounded-xl p-6 text-center hover:ring-1 hover:ring-accent transition-all">
                <span className="text-4xl block mb-3">{icon}</span>
                <p className="text-white text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: '#FF6B35' }}>
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-6">EN ROUTE POUR L’AVENTURE VIKING !</h2>
          <Link href="/contact" className="inline-flex bg-white text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Réserver ma session
          </Link>
        </div>
      </section>
    </>
  )
}
