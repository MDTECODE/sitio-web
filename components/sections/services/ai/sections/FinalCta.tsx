import { ArrowRight } from "lucide-react"
import { ContactCta } from "../components/ContactCta"

export function FinalCta() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-[#06101d]/70">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Siguiente paso
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Transformemos una oportunidad en una solución inteligente.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Cuéntanos qué proceso quieres mejorar, qué información necesitas aprovechar o qué
            experiencia quieres crear con inteligencia artificial.
          </p>
        </div>
        <ContactCta className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101c]">
          Hablemos de tu proyecto <ArrowRight className="size-4" />
        </ContactCta>
      </div>
    </section>
  )
}