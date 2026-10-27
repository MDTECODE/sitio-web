"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "./data"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-7 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#030817]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={faq.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`size-4 shrink-0 transition ${
                  isOpen ? "rotate-180 text-cyan-300" : "text-slate-500"
                }`}
              />
            </button>
            {isOpen && (
              <p
                id={`faq-answer-${index}`}
                className="px-5 pb-5 text-sm leading-6 text-slate-400"
              >
                {faq.answer}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}