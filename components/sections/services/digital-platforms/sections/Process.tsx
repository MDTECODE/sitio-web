import { processSteps } from "../data"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"

export function Process() {
  return (
    <section id="proceso" className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="03 / Proceso"
          title="De la estrategia al lanzamiento."
          text="Los plazos dependen de funcionalidades, integraciones, complejidad y alcance. No inventamos duraciones estándar."
        />
        <div className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} as="article" delay={i * 0.08}>
              <div className="relative lg:pt-8">
                <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 to-transparent lg:block" />
                <div className="relative flex gap-4 lg:flex-col">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 bg-[#061326] text-xs font-semibold text-cyan-200">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                    <p className="mt-4 text-xs text-cyan-200">
                      Actividades: <span className="text-slate-500">{step.activities}</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}