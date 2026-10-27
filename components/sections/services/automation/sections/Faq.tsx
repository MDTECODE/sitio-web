"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas sobre automatización."
          text="Respuestas claras para tomar una decisión con mejor contexto."
        />
        <div className="grid gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-[#091426]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-cyan-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-400"
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