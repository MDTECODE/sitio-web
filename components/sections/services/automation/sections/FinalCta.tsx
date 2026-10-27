import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCta() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-[#07111f] px-6 py-20 text-center">
      <Sparkles className="mx-auto size-7 text-cyan-300" />
      <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
        Hay procesos que no deberían seguir siendo manuales.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Cuéntanos cómo trabaja tu equipo y evaluemos qué tareas podrían simplificarse, conectarse o
        automatizarse.
      </p>
      <a
        href="#contacto"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101d]"
      >
        Automatiza tus procesos <ArrowRight className="size-4" />
      </a>
    </section>
  )
}