import { implementationSteps } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Implementation() {
  return (
    <section id="como-funciona" className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Cómo implementamos"
          title="De una tarea manual a un flujo inteligente."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {implementationSteps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-white/10 bg-[#091426] p-6">
              <span className="text-3xl font-semibold text-cyan-300">{step.number}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">
                {step.result}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          El tiempo depende de la complejidad, número de sistemas, disponibilidad de APIs y
          validaciones necesarias.
        </p>
      </div>
    </section>
  )
}