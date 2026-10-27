import { painPoints } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function PainPoints() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="01 / Diagnóstico"
          title="Cuando las herramientas existentes dejan de ser suficientes"
          text="No todos los negocios necesitan software a medida. La decisión depende del proceso, el presupuesto y el valor que pueda aportar una solución específica."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {painPoints.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-5">
              <div className="mb-4 size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
              <h3 className="font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}