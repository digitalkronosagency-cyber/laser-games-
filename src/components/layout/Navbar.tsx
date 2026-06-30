'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const nav = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Activités',
    href: '#',
    children: [
      { label: 'Laser Game', href: '/laser-game' },
      { label: 'Lancer de Hache', href: '/lancer-de-hache' },
      { label: 'BlindTest', href: '/blind-test' },
      { label: 'Modes de Jeu', href: '/modes-de-jeu' },
    ],
  },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Offres', href: '#offres', children: [
    { label: 'Anniversaire', href: '/anniversaire' },
    { label: 'Entreprises', href: '/entreprises' },
    { label: 'Événements', href: '/evenements' },
  ]},
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-dark-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="font-display text-2xl text-white tracking-wider hover:text-primary transition-colors">
          LASER GAME<span className="text-primary"> EVOLUTION</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <ul className="bg-dark-secondary border border-white/10 rounded-xl overflow-hidden min-w-[180px] shadow-xl">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors',
                    pathname === item.href ? 'text-primary' : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors">
          Réserver
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-secondary border-t border-white/10">
          <ul className="py-4">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-6 py-3 text-white/80 text-sm font-medium"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg className={cn('w-3 h-3 transition-transform', openDropdown === item.label && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="bg-white/5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block pl-10 pr-6 py-3 text-sm text-white/70 hover:text-white">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="block px-6 py-3 text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-6 pt-3">
              <Link href="/contact" className="block text-center bg-primary text-white py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors">
                Réserver
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
