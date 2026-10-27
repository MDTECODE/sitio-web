import { flowExamples } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function FlowExamples() {
  return (
    <section id="flujos" className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ejemplos ilustrativos"
          title="Así podría funcionar en tu negocio."
          text="Los flujos dependen de las herramientas y requisitos del cliente. Esta vista muestra la lógica, no una integración operativa real."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {flowExamples.map(({ title, steps }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <span className="rounded-full border border-cyan-300/25 px-2 py-1 text-[10px] text-cyan-200">
                  Ejemplo
                </span>
              </div>
              <ol className="mt-6 grid gap-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 text-[10px] text-cyan-200">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}