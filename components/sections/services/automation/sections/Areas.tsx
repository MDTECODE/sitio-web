"use client"

import { ArrowRight } from "lucide-react"
import { areas } from "../data"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"
import { useAreaSelection } from "../context/AreaSelection"

export function Areas() {
  const { setArea } = useAreaSelection()

  return (
    <section id="soluciones" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Qué podemos automatizar"
        title="Automatizamos tareas que consumen tiempo."
        text="La oportunidad suele estar en los pasos repetitivos, los datos que se copian y las decisiones que pueden expresarse con reglas claras."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ title, formValue, text, examples, icon: IconComponent }) => (
          <FadeIn key={title} as="article">
            <div className="group h-full rounded-2xl border border-white/10 bg-[#071321]/80 p-6 transition hover:-translate-y-1 hover:border-cyan-300/35">
              <IconComponent className="size-6 text-cyan-300" />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <ul className="mt-5 grid gap-2 text-xs text-slate-500">
                {examples.map((example) => (
                  <li key={example}>/ {example}</li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={() => setArea(formValue)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
              >
                Quiero automatizar este proceso
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}