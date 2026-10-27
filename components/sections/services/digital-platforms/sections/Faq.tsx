"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="06 / Preguntas" title="Resolvemos tus dudas." />
      <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#071321]/80">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div key={faq.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-6"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`size-4 shrink-0 text-cyan-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id={`faq-${i}`}
                hidden={!isOpen}
                className="px-5 pb-5 text-sm leading-7 text-slate-400 sm:px-6"
              >
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}