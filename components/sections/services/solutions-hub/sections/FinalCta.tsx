import { ArrowRight } from "lucide-react"
import { CONTACT_EMAIL } from "../constants"

export function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
      <div
        id="contacto"
        className="scroll-mt-8 rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(14,116,255,.2),transparent_55%)] px-6 py-16 shadow-[0_0_80px_rgba(14,116,255,.1)] sm:px-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-300">
          Siguiente paso
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          Tu próximo proyecto puede empezar aquí.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Cuéntanos qué quieres construir, mejorar o automatizar. Exploremos las posibilidades
          tecnológicas para tu negocio.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
        >
          Hablemos de tu proyecto <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}