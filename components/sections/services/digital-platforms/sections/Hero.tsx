import { ArrowRight, Check } from "lucide-react"
import { PlatformDashboard } from "../components/PlatformDashboard"
import { FadeIn } from "../shared/FadeIn"
import { heroHighlights } from "../constants"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-32 lg:pt-24"
    >
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Servicios digitales
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">
          Plataformas digitales que conectan personas, procesos y oportunidades.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
          Diseñamos y desarrollamos plataformas web modernas, seguras y escalables que impulsan el
          crecimiento de tu negocio. Desde portales de clientes hasta marketplaces y plataformas de
          servicios.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] hover:bg-cyan-200"
          >
            Hablemos de tu proyecto <ArrowRight className="size-4" />
          </a>
          <a
            href="#tipos"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-300/50"
          >
            Conocer nuestras soluciones
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" /> {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.1}>
        <PlatformDashboard />
      </FadeIn>
    </section>
  )
}