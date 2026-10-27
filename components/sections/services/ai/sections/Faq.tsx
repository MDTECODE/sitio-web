"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 border-y border-white/10 bg-[#06101d]/70">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas sobre inteligencia artificial."
        />
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#091426]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-cyan-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-5 pb-5 text-sm leading-7 text-slate-400"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}