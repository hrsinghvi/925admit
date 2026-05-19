'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="divide-y divide-primary-light">
      {items.map(({ question, answer }) => {
        const isOpen = openQuestion === question
        const panelId = `faq-panel-${question.replace(/\s+/g, '-').toLowerCase()}`
        const buttonId = `faq-button-${question.replace(/\s+/g, '-').toLowerCase()}`

        return (
          <div key={question}>
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenQuestion(isOpen ? null : question)}
              className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            >
              <span className="font-semibold text-brand-dark group-hover:text-primary transition-colors">
                {question}
              </span>
              {isOpen ? (
                <Minus size={18} className="text-primary shrink-0" aria-hidden="true" />
              ) : (
                <Plus size={18} className="text-primary shrink-0" aria-hidden="true" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' as const }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-brand-neutral text-sm leading-relaxed">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
