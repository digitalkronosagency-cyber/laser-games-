import type { Metadata } from 'next'
import { contactMetadata } from '@/lib/seo'
import OpeningHours from '@/components/sections/OpeningHours'
import BookingForm from '@/components/sections/BookingForm'

export const metadata: Metadata = contactMetadata

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-dark-secondary pt-20">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">CONTACT</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Une question, une réservation ? Notre équipe est là pour vous.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: info + hours + map */}
            <div className="space-y-8">
              {/* Coordinates */}
              <div>
                <h2 className="font-display text-3xl text-white mb-6">NOS COORDONNÉES</h2>
                <ul className="space-y-4">
                  {[
                    { icon: '📍', label: 'Adresse', value: '2 Rue de la Fuye, 37000 Tours', href: 'https://maps.google.com/?q=Laser+Game+Evolution+Tours' },
                    { icon: '📞', label: 'Téléphone', value: '02 47 05 05 05', href: 'tel:0247050505' },
                    { icon: '✉️', label: 'Email', value: 'tours@lasergame-evolution.fr', href: 'mailto:tours@lasergame-evolution.fr' },
                  ].map(({ icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="text-2xl">{icon}</span>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                        <a href={href} className="text-white hover:text-primary transition-colors">{value}</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <OpeningHours />

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.0!2d0.7312!3d47.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIxJzE3LjMiTiAwwrA0Myc1Mi4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Laser Game Evolution Tours"
                />
              </div>
            </div>

            {/* Right: form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
