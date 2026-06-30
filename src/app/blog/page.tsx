import type { Metadata } from 'next'
import Link from 'next/link'
import { blogMetadata } from '@/lib/seo'

export const metadata: Metadata = blogMetadata

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,0,26,0.1)_0%,transparent_70%)]" />
        <div className="container-custom text-center relative z-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-6">📝 Blog</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">BIENTÔT</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">
            Notre blog arrive très bientôt avec des conseils, stratégies de jeu, événements et coulisses de Laser Game Evolution Tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Retour à l’accueil
            </Link>
            <Link href="/evenements" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-colors">
              Voir les événements
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
