import { contexts } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Contexts() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="03 / Contextos"
          title="Una solución puede empezar en distintos puntos"
          text="No limitamos la conversación a un sector. Partimos de la necesidad concreta que quieres resolver."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {contexts.map(({ title, text }, i) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-5">
              <span className="text-xs font-semibold text-cyan-300">0{i + 1}</span>
              <h3 className="mt-7 font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}