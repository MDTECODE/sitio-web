import { ShieldCheck } from "lucide-react"
import { principles } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Principles() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#06101d]/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <SectionHeading
          eyebrow="Uso responsable"
          title="IA útil, con límites claros."
          text="Los modelos pueden producir información incorrecta. Antes de usar una solución en procesos importantes hay que evaluar sus respuestas, límites y rutas de revisión."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {principles.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-5">
              <ShieldCheck className="size-5 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}