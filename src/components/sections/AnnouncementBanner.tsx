'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const BANNER_KEY = 'lg-banner-dismissed-v1'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem(BANNER_KEY)) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-50 bg-primary text-white text-sm py-2 px-4 text-center">
      <span className="font-semibold">🎉 Ouverture 2026 !</span>{' '}
      Nouvelles horaires estivales dès juillet &mdash;{' '}
      <Link href="/evenements" className="underline hover:no-underline font-medium">En savoir plus</Link>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Fermer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
