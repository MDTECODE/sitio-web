import { ArrowRight, Check } from "lucide-react"
import { Ecosystem } from "../components/Ecosystem"
import { ScrollToCatalogButton } from "../components/ScrollToCatalogButton"
import { heroHighlights } from "../constants"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-28 pt-14 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pt-20"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-300">
          Soluciones tecnológicas
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-.06em] text-white sm:text-7xl">
          Tecnología diseñada para resolver desafíos reales.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
          Creamos soluciones digitales que ayudan a las empresas a optimizar sus procesos,
          desarrollar nuevas capacidades y convertir sus ideas en herramientas tecnológicas útiles.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ScrollToCatalogButton className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,.25)] hover:bg-blue-400">
            Explorar soluciones <ArrowRight className="size-4" />
          </ScrollToCatalogButton>
          <a
            href="#contacto"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-300/50"
          >
            Hablemos de tu proyecto
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <Ecosystem />
    </section>
  )
}