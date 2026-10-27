import { ArrowRight } from "lucide-react"
import { solutions } from "../data"
import { ContactCta } from "../components/ContactCta"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"

export function Solutions() {
  return (
    <section id="soluciones" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Soluciones"
        title="IA aplicada a problemas reales."
        text="La inteligencia artificial tiene sentido cuando se integra en un proceso concreto, con datos disponibles, límites claros y personas que puedan evaluar sus resultados."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {solutions.map(({ title, text, examples, value, icon: IconComponent }) => (
          <FadeIn key={title} as="article">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#07111f]/80 p-6">
              <IconComponent className="size-7 text-cyan-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-500">
                {examples}
              </p>
              <ContactCta
                value={value}
                className="mt-7 inline-flex items-center gap-2 text-left text-sm font-semibold text-cyan-200 hover:text-white"
              >
                Explorar esta opción <ArrowRight className="size-4" />
              </ContactCta>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}