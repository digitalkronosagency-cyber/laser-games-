'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  filterByCategory?: string
}

export default function FAQAccordion({ faqs, filterByCategory }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = filterByCategory
    ? faqs.filter(f => f.category === filterByCategory)
    : faqs

  return (
    <div className="space-y-3">
      {filtered.map((faq, i) => (
        <div key={i} className="bg-dark-card rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-white font-medium pr-4">{faq.question}</span>
            <svg
              className={cn('w-5 h-5 text-primary shrink-0 transition-transform duration-200', openIndex === i && 'rotate-180')}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={cn('overflow-hidden transition-all duration-300', openIndex === i ? 'max-h-96' : 'max-h-0')}
          >
            <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
