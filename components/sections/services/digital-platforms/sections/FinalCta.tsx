import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_80%_20%,rgba(14,116,255,0.2),transparent_40%),#071321] px-6 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Siguiente paso
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          Tu próxima plataforma empieza con una idea.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Cuéntanos qué necesitas conectar, mejorar o construir. Evaluemos las posibilidades para
          convertir tu idea en una solución digital.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] hover:bg-cyan-200"
        >
          Hablemos de tu proyecto <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}