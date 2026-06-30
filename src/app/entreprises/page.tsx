import type { Metadata } from 'next'
import { entreprisesMetadata } from '@/lib/seo'
import BookingForm from '@/components/sections/BookingForm'

export const metadata: Metadata = entreprisesMetadata

const benefits = [
  { icon: '🤝', title: 'Renforce la cohesion', desc: 'Des activités qui brisent les silos et créent des liens durables entre collègues.' },
  { icon: '📊', title: 'Améliore la communication', desc: 'Le laser game en équipe développe la coordination et la stratégie collective.' },
  { icon: '🎉', title: 'Motive vos équipes', desc: 'Une pause ludique qui rechargeurs les batteries et booste la productivité.' },
  { icon: '💼', title: 'Clé en main', desc: 'Nous gérons tout : animation, restauration, logistique. Vous profitez.' },
]

const activities = [
  { name: 'Laser Game Team Building', desc: 'Chefs d’équipe, stratégie, communication… le laser game révèle les vrais leaders.', icon: '🎮' },
  { name: 'Tournoi Lancer de Hache', desc: 'L’activité idéale pour un après-midi détendu et compet itif entre collègues.', icon: '🪓' },
  { name: 'Soirée BlindTest', desc: 'Animé par notre DJ host, un quiz musical épicique pour clore vos événements.', icon: '🎵' },
]

export default function EntreprisesPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(229,0,26,0.1)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">🏢 Offre entreprise</p>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">TEAM BUILDING</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Renforci la cohésion de votre équipe avec nos activités de team building sur mesure. De 10 à 200 personnes.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">POURQUOI CHOISIR LASER GAME EVOLUTION ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-card rounded-xl p-8 flex gap-6">
                <span className="text-4xl shrink-0">{icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white text-center mb-12">NOS ACTIVITÉS CORPORATE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map(({ name, desc, icon }) => (
              <div key={name} className="bg-dark-card rounded-xl p-8 text-center hover:ring-1 hover:ring-primary transition-all">
                <span className="text-5xl block mb-4">{icon}</span>
                <h3 className="text-white font-semibold text-lg mb-3">{name}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-white">DEMANDE DE DEVIS</h2>
            <p className="text-white/50 mt-3">Notre équipe vous recontacte sous 24h avec une proposition personnalisée.</p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
