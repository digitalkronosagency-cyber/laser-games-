'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ActivityCard from '@/components/ui/ActivityCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import OfferCard from '@/components/ui/OfferCard'
import OpeningHours from '@/components/sections/OpeningHours'
import { testimonials } from '@/data/testimonials'
import { activities } from '@/data/activities'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>
}

const offers = [
  {
    title: 'Pack Anniversaire',
    description: "Organisez un anniversaire inoubliable avec nos formules all-inclusive.",
    features: ['Salle dédiée', 'Animateur', 'Gâteau offert', 'Invitations personnalisées'],
    href: '/anniversaire',
    icon: '🎂',
    highlight: true,
    badge: 'Populaire',
  },
  {
    title: 'Offre Entreprise',
    description: 'Team building, séminaires et événements corporate sur mesure.',
    features: ['Devis personnalisé', "Groupes jusqu’à 200 pers.", 'Animation spécialisée', 'Espace privatisable'],
    href: '/entreprises',
    icon: '🏢',
  },
  {
    title: 'Événement Spécial',
    description: "EVJF, EVG, anniversaire adulte… nous créons des moments mémorables.",
    features: ['Organisation complète', 'Thèmes personnalisés', 'Photos souvenir', 'Privatisation possible'],
    href: '/evenements',
    icon: '🎉',
  },
]

const whyUs = [
  {
    icon: '🎮',
    title: 'Matériel professionnel',
    desc: 'Pistolets laser dernière génération, haches professionnelles, système son BlindTest haut de gamme.',
  },
  {
    icon: '👨‍🏫',
    title: 'Animateurs passionnés',
    desc: "Notre équipe vous accompagne du briefing jusqu’à la fin de votre session pour une expérience optimale.",
  },
  {
    icon: '🏛️',
    title: 'Espace unique à Tours',
    desc: 'Situé en plein cœur de Tours, notre complexe de 800 m² est le plus grand de la région.',
  },
  {
    icon: '🎉',
    title: 'Toutes occasions',
    desc: "Anniversaire, EVJF, EVG, team building, soirée entre amis… nous avons la formule idéale.",
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const totalPages = Math.ceil(testimonials.length / 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalPages])

  const visibleTestimonials = testimonials.slice(currentTestimonial * 3, currentTestimonial * 3 + 3)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,0,26,0.15)_0%,transparent_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative container-custom text-center z-10 pt-20">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-6">
            🏆 N°1 des loisirs à Tours
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl text-white leading-none mb-6">
            VIVEZ L&apos;AVENTURE<br />
            <span className="text-primary">EN VRAIE VIE</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
            Laser Game, Lancer de Hache et BlindTest &ndash; trois activités uniques pour des souvenirs inoubliables à Tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 active:scale-95 transition-all">
              Réserver maintenant
            </Link>
            <Link href="#activites" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-bg active:scale-95 transition-all">
              Découvrir les activités
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: 10000, suffix: '+', label: 'Joueurs accueillis' },
              { value: 3, suffix: '', label: 'Activités uniques' },
              { value: 4, suffix: '.8★', label: 'Note Google' },
            ].map(({ value, suffix, label }) => (
              <div key={label}>
                <p className="font-display text-4xl text-primary"><AnimatedCounter target={value} suffix={suffix} /></p>
                <p className="text-white/50 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section className="bg-dark-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: "Pas d’expérience requise", desc: 'Accessible à tous dès 6 ans' },
              { icon: '👥', title: 'Groupes bienvenus', desc: 'De 2 à 200 personnes' },
              { icon: '💳', title: 'Réservation facile', desc: 'En ligne ou par téléphone' },
              { icon: '❤️', title: 'Clients satisfaits', desc: '98% de satisfaction' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-white/40 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section id="activites" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nos activités</p>
            <h2 className="font-display text-5xl lg:text-6xl text-white">3 EXPÉRIENCES UNIQUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <ActivityCard
                key={activity.id}
                number={`0${i + 1}`}
                title={activity.name}
                description={activity.shortDescription}
                icon={activity.icon}
                price={activity.startingPrice}
                duration={activity.duration}
                features={activity.features.slice(0, 4)}
                href={activity.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Pourquoi nous choisir</p>
              <h2 className="font-display text-5xl text-white mb-8">L&apos;EXPÉRIENCE QUI FAIT LA DIFFÉRENCE</h2>
              <div className="space-y-6">
                {whyUs.map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-3xl shrink-0">{icon}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-dark-card rounded-2xl flex items-center justify-center">
                <span className="text-9xl">🎯</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary rounded-xl p-4 text-center">
                <p className="font-display text-4xl text-white">+10K</p>
                <p className="text-white/70 text-xs">Joueurs / an</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark-card rounded-xl p-4 text-center border border-white/10">
                <p className="font-display text-4xl text-white">800m²</p>
                <p className="text-white/70 text-xs">D&apos;espace de jeu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Offres spéciales</p>
            <h2 className="font-display text-5xl lg:text-6xl text-white">POUR CHAQUE OCCASION</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Avis clients</p>
            <h2 className="font-display text-5xl text-white">ILS ONT ADORÉ</h2>
            <p className="text-white/50 mt-3">+200 avis vérifiés sur Google &bull; Note 4.8/5</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentTestimonial ? 'bg-primary' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HORAIRES & MAPS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nous trouver</p>
            <h2 className="font-display text-5xl text-white">HORAIRES &amp; ACCES</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <OpeningHours />
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: '320px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.0!2d0.7312!3d47.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIxJzE3LjMiTiAwwrA0Myc1Mi4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laser Game Evolution Tours - Carte"
              />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '📍', label: '2 Rue de la Fuye, 37000 Tours' },
              { icon: '📞', label: '02 47 05 05 05' },
              { icon: '✉️', label: 'tours@lasergame-evolution.fr' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-dark-card rounded-xl p-4 flex items-center justify-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className="text-white/70 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
        <div className="container-custom text-center relative z-10">
          <h2 className="font-display text-5xl lg:text-7xl text-white mb-6">PRÊT(E) À JOUER ?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Réservez en ligne en 2 minutes ou appelez-nous. On vous prépare une session mémorable !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 active:scale-95 transition-all">
              Réserver maintenant
            </Link>
            <a href="tel:0247050505" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 active:scale-95 transition-all">
              📞 02 47 05 05 05
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
