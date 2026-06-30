import Link from 'next/link'

const activities = [
  { label: 'Laser Game', href: '/laser-game' },
  { label: 'Lancer de Hache', href: '/lancer-de-hache' },
  { label: 'BlindTest', href: '/blind-test' },
  { label: 'Modes de Jeu', href: '/modes-de-jeu' },
]

const offers = [
  { label: 'Anniversaire', href: '/anniversaire' },
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Tarifs', href: '/tarifs' },
]

const info = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <Link href="/" className="font-display text-xl text-white tracking-wider block mb-4">
              LASER GAME<span className="text-primary"> EVOLUTION</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Le complexe de loisirs n°1 à Tours. Laser Game, Lancer de Hache et BlindTest pour des moments inoubliables.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/lasergameevolutiontours', label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: 'https://www.instagram.com/lasergame_evolution_tours', label: 'Instagram', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos activités</h3>
            <ul className="space-y-2">
              {activities.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Offres spéciales</h3>
            <ul className="space-y-2">
              {offers.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Informations</h3>
            <ul className="space-y-2">
              {info.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact & Horaires</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2 Rue de la Fuye, 37000 Tours</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                <a href="tel:0247050505" className="hover:text-white transition-colors">02 47 05 05 05</a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:tours@lasergame-evolution.fr" className="hover:text-white transition-colors">tours@lasergame-evolution.fr</a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl text-sm">
              <p className="text-white font-medium mb-2">Horaires habituels</p>
              <p className="text-white/50">Mer–Ven : 14h–22h</p>
              <p className="text-white/50">Sam–Dim : 10h–23h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Laser Game Evolution Tours. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/cgu" className="hover:text-white transition-colors">CGU</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
