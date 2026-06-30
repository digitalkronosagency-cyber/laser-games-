import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import { getLocalBusinessSchema } from '@/lib/schema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnnouncementBanner from '@/components/sections/AnnouncementBanner'
import FloatingCTA from '@/components/sections/FloatingCTA'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tours.lasergame-evolution.fr'),
  title: {
    default: 'Laser Game Evolution Tours – Laser Game, Lancer de Hache & BlindTest à Tours (37)',
    template: '%s | Laser Game Evolution Tours',
  },
  description: 'Vivez des expériences uniques au Laser Game Evolution de Tours : Laser Game, Lancer de Hache et BlindTest. Réservation en ligne, tarifs, horaires.',
  keywords: ['laser game Tours', 'lancer de hache Tours', 'blind test Tours', 'loisirs Tours', 'activités Tours'],
  authors: [{ name: 'Laser Game Evolution Tours' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tours.lasergame-evolution.fr',
    siteName: 'Laser Game Evolution Tours',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Laser Game Evolution Tours' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="font-body bg-dark-bg text-white min-h-screen">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
