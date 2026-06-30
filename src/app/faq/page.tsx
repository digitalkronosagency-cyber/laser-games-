import type { Metadata } from 'next'
import Link from 'next/link'
import { faqMetadata } from '@/lib/seo'
import { getFAQSchema } from '@/lib/schema'
import { faqs } from '@/data/faq'
import FAQAccordion from '@/components/sections/FAQAccordion'

export const metadata: Metadata = faqMetadata

export default function FAQPage() {
  const faqSchema = getFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative min-h-[40vh] flex items-center bg-dark-secondary pt-20">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">FAQ</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur nos activités, tarifs et réservations.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section-padding bg-dark-secondary">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl text-white mb-6">VOUS N’AVEZ PAS TROUVÉ VOTRE RÉPONSE ?</h2>
          <p className="text-white/50 mb-8">Notre équipe est disponible pour répondre à toutes vos questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0247050505" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              📞 02 47 05 05 05
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
