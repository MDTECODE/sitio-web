import { ArrowRight, Check } from "lucide-react"
import { AIDashboard } from "../components/AIDashboard"
import { ContactCta } from "../components/ContactCta"
import { FadeIn } from "../shared/FadeIn"
import { heroHighlights } from "../constants"

export function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-32 lg:pt-20 md:mt-4 mt-10">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Inteligencia artificial
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
          Integra inteligencia artificial en tus procesos.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
          Diseñamos e implementamos soluciones de inteligencia artificial adaptadas a las
          necesidades de tu negocio. Desde asistentes inteligentes hasta análisis avanzado de
          información y automatización de procesos.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#soluciones"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101c] hover:bg-cyan-200"
          >
            Explorar soluciones <ArrowRight className="size-4" />
          </a>
          <ContactCta className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300/50">
            Hablemos de tu proyecto
          </ContactCta>
        </div>
        <ul className="mt-9 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" /> {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn>
        <AIDashboard />
      </FadeIn>
    </section>
  )
}