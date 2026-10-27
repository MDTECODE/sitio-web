import { deliverables } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Deliverables() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="05 / Alcance"
          title="Qué puede incluir un proyecto"
          text="El alcance y los entregables finales se definen en la propuesta de cada proyecto. No todos los presupuestos incluyen todos los elementos."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ title, text }, i) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-6">
              <span className="text-3xl font-semibold text-cyan-300/70">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}