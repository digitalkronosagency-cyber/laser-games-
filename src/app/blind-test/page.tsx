import type { Metadata } from 'next'
import Link from 'next/link'
import { blindTestMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = blindTestMetadata

const features = [
  { icon: '🎵', title: '+6000 titres', desc: 'Une bibliothèque musicale gigantesque couvrant toutes les époques' },
  { icon: '🎧', title: '60+ playlists', desc: 'Années 80/90/2000, Pops FR, Rock, Rap, Dessins animés, Films...' },
  { icon: '🎚️', title: 'Son haute fidélité', desc: 'Système audio professionnel Bose pour une immersion totale' },
  { icon: '👥', title: '4 à 40 joueurs', desc: 'En équipes de 2 à 8 personnes pour plus de fun' },
  { icon: '⏱️', title: '60 à 90 min', desc: 'Session animée par notre DJ host professionnel' },
  { icon: '🏆', title: '5 niveaux', desc: 'Du débutant absolu au connaisseur pour s’adapter à tous' },
]

export default function BlindTestPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://tours.lasergame-evolution.fr' },
    { name: 'BlindTest', url: 'https://tours.lasergame-evolution.fr/blind-test' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(139,92,246,0.2)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">BlindTest</span>
          </nav>
          <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">🎵 Activité</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">BLIND TEST</h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Testez votre culture musicale avec notre Blind Test interactif animé par un DJ host professionnel. +6000 titres, 60+ playlists.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors">
              Réserver
            </Link>
            <Link href="/tarifs" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-bg transition-colors">
              Voir les tarifs
            </Link>
          </div>
          <div className="mt-10 flex gap-8">
            {[
              { value: '6000+', label: 'Titres musicaux' },
              { value: '60+', label: 'Playlists' },
              { value: '5', label: 'Niveaux de difficulté' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl text-purple-400">{value}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">LE BLIND TEST LE PLUS COMPLET DE TOURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-card rounded-xl p-6 hover:ring-1 hover:ring-purple-500 transition-all">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl text-white mb-8">DES THÈMES POUR TOUS LES GOÛTS</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Années 80', 'Années 90', 'Années 2000', 'Pop Française', 'Rock', 'Rap', 'R&B', 'Dessins Animés', 'Films & Séries', 'Hits du Moment', 'Disco', 'Chanson Française', 'Jeux Vidéo', 'Classiques', 'Hard Rock'].map(theme => (
              <span key={theme} className="bg-dark-card border border-purple-500/30 text-white/70 px-4 py-2 rounded-full text-sm hover:border-purple-500 hover:text-white transition-colors">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-purple-900">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-6">QUE LA MUSIQUE COMMENCE !</h2>
          <Link href="/contact" className="inline-flex bg-white text-purple-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Réserver mon BlindTest
          </Link>
        </div>
      </section>
    </>
  )
}
