'use client'

import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 safe-area-bottom">
      <div className="flex">
        <a
          href="tel:0247050505"
          className="flex-1 bg-dark-secondary border-t border-white/10 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
          </svg>
          Appeler
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-primary flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Réserver
        </Link>
      </div>
    </div>
  )
}
