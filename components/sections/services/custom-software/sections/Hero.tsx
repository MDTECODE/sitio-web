import { ArrowRight, Check } from "lucide-react"
import { FadeIn } from "../shared/FadeIn"
import { ProductCanvas } from "../components/ProductCanvas"

const highlights = ["Procesos reales", "Arquitectura pensada", "Evolución posible"]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-32 lg:pt-24 md:mt-7 mt-12"
    >
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Servicios digitales / software a medida
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">
          Software que se adapta a tu negocio.{" "}
          <span className="text-cyan-300">No al revés.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
          Diseñamos y desarrollamos soluciones digitales personalizadas para optimizar procesos,
          conectar información y convertir necesidades reales en herramientas que impulsan tu negocio.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] transition hover:bg-cyan-200"
          >
            Hablemos de tu proyecto <ArrowRight className="size-4" />
          </a>
          <a
            href="#capacidades"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
          >
            Descubrir qué podemos desarrollar
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" /> {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.12}>
        <ProductCanvas />
      </FadeIn>
    </section>
  )
}