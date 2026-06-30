import type { Metadata } from 'next'
import { anniversaireMetadata } from '@/lib/seo'
import BookingForm from '@/components/sections/BookingForm'

export const metadata: Metadata = anniversaireMetadata

const packages = [
  {
    name: 'Pack Mini',
    age: '6–12 ans',
    price: '18€/enfant',
    minPeople: '8 enfants min.',
    includes: ['2h d’activités', 'Salle anniversaire', 'Menu enfant', 'Gâteau bougie', 'Invitations'],
    highlight: false,
  },
  {
    name: 'Pack Premium',
    age: 'Tous âges',
    price: '28€/pers.',
    minPeople: '10 personnes min.',
    includes: ['3h d’activités', 'Salle privée 2h', 'Buffet complet', 'Gâteau personnalisé', 'Décoration thématique', 'Animateur dédié'],
    highlight: true,
    badge: 'Populaire',
  },
  {
    name: 'Pack Sur Mesure',
    age: 'Tous âges',
    price: 'Sur devis',
    minPeople: 'Dès 15 personnes',
    includes: ['Durée personnalisée', 'Privatisation complète', 'Traiteur au choix', 'Animation personnalisée', 'Décor thématique', 'Photos souvenir'],
    highlight: false,
  },
]

export default function AnniversairePage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(229,0,26,0.15)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">🎂 Offre spéciale</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">ANNIVERSAIRE</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Organisez un anniversaire inoubliable au Laser Game Evolution de Tours. Des formules all-inclusive pour tous les âges.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white">NOS FORMULES ANNIVERSAIRE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-dark-card rounded-2xl p-8 flex flex-col relative ${pkg.highlight ? 'ring-2 ring-primary' : ''}`}>
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">{pkg.badge}</span>
                )}
                <h3 className="font-display text-3xl text-white mb-1">{pkg.name}</h3>
                <p className="text-white/40 text-sm mb-4">{pkg.age} • {pkg.minPeople}</p>
                <p className="font-display text-4xl text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="text-sm text-white/70 flex gap-2">
                      <span className="text-primary shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-12 bg-dark-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🏆', label: 'Animateurs dédiés' },
              { icon: '🎂', label: 'Gâteau inclu' },
              { icon: '📸', label: 'Souvenirs photos' },
              { icon: '🎈', label: 'Décoration offerte' },
            ].map(({ icon, label }) => (
              <div key={label}>
                <span className="text-4xl block mb-2">{icon}</span>
                <p className="text-white/60 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <blockquote className="text-white/70 text-xl italic leading-relaxed mb-6">
            &ldquo;L’anniversaire de ma fille de 10 ans a été un succès total ! Les enfants ont adoré le laser game et le gâteau était délicieux. Merci à toute l’équipe !&rdquo;
          </blockquote>
          <p className="text-white font-semibold">Sophie M. — Maman de Chloé, 10 ans</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-white">RÉSERVER VOTRE ANNIVERSAIRE</h2>
            <p className="text-white/50 mt-3">Nous vous rappelons sous 24h pour finaliser votre réservation.</p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
