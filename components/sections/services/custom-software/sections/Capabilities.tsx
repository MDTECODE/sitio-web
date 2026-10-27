import { ArrowRight } from "lucide-react"
import { capabilities } from "../data"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"

export function Capabilities() {
  return (
    <section id="capacidades" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="02 / Capacidades"
        title="Construimos la pieza que falta en tu operación"
        text="Estas son áreas posibles de trabajo, no productos cerrados. Cada proyecto se evalúa según sus requisitos, usuarios y contexto."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ title, text, solve, features, icon: IconComponent }) => (
          <FadeIn key={title} as="article">
            <div className="group h-full rounded-2xl border border-white/10 bg-[#071321]/80 p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-[#0a1a2c]">
              <IconComponent className="size-6 text-cyan-300" />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <div className="mt-5 border-t border-white/10 pt-4 text-xs leading-5">
                <p><span className="text-slate-500">Resuelve: </span><span className="text-slate-300">{solve}</span></p>
                <p className="mt-2"><span className="text-slate-500">Puede incluir: </span><span className="text-slate-300">{features}</span></p>
              </div>
              <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300">
                Consultar esta necesidad <ArrowRight className="size-3 transition group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}