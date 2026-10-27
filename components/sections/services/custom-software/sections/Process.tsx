import { phases } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Process() {
  return (
    <section id="proceso" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="06 / Proceso"
        title="De una necesidad difusa a una solución que puede evolucionar"
        text="No hay una duración estándar: el proceso depende del alcance, las integraciones, la complejidad y la disponibilidad de las personas involucradas."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-4">
        {phases.map((phase) => (
          <article key={phase.number} className="relative rounded-2xl border border-white/10 bg-[#071321] p-6">
            <span className="text-xs font-semibold tracking-widest text-cyan-300">{phase.number}</span>
            <h3 className="mt-5 text-lg font-semibold text-white">{phase.title}</h3>
            <dl className="mt-6 flex flex-col gap-4 text-xs leading-5">
              <PhaseRow label="Qué sucede" value={phase.what} />
              <PhaseRow label="Necesitamos" value={phase.needs} />
              <PhaseRow label="Resultado" value={phase.result} />
              <PhaseRow label="Tu decisión" value={phase.decision} accent />
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

function PhaseRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className={`font-medium ${accent ? "text-cyan-200" : "text-slate-300"}`}>{label}:</dt>
      <dd className={accent ? "text-slate-400" : "text-slate-500"}>{value}</dd>
    </div>
  )
}