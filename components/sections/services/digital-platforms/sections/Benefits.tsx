import { benefits } from "../data"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"

export function Benefits() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="01 / Propósito"
          title="Más que un sitio web, una plataforma para crecer."
          text="Una plataforma digital puede reunir usuarios, procesos, información y funcionalidades en un entorno integrado. Sus resultados dependen del diseño, la implementación y el contexto del proyecto."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, text, icon: IconComponent }) => (
            <FadeIn key={title} as="article">
              <div className="h-full rounded-2xl border border-white/10 bg-[#091426] p-6">
                <IconComponent className="size-6 text-cyan-300" />
                <h3 className="mt-5 font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}