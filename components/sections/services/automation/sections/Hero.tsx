import { ArrowRight, Link2, Sparkles, Zap } from "lucide-react"
import { AutomationDashboard } from "../components/AutomationDashboard"
import { FadeIn } from "../shared/FadeIn"
import { heroHighlights } from "../constants"

const highlightIcons = { zap: Zap, link: Link2, sparkles: Sparkles }

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-32 lg:pt-20 lg:mt-7 mt-10"
    >
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Automatización inteligente
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
          Menos tareas manuales. Más tiempo para avanzar.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
          Conectamos tus herramientas, automatizamos procesos repetitivos y diseñamos flujos de
          trabajo que se adaptan a tu negocio. Tecnología para que tu equipo se enfoque en lo que
          realmente importa.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101d] hover:bg-cyan-200"
          >
            Automatiza tus procesos <ArrowRight className="size-4" />
          </a>
          <a
            href="#soluciones"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-slate-200 hover:border-cyan-300/50"
          >
            Explorar soluciones
          </a>
        </div>
        <ul className="mt-10 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
          {heroHighlights.map(({ text, icon }) => {
            const IconComponent = highlightIcons[icon]
            return (
              <li key={text} className="flex items-center gap-2">
                <IconComponent className="size-4 text-cyan-300" /> {text}
              </li>
            )
          })}
        </ul>
      </FadeIn>

      <FadeIn>
        <AutomationDashboard />
      </FadeIn>
    </section>
  )
}