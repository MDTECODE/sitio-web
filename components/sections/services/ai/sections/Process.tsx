import { processSteps } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Process() {
  return (
    <section id="proceso" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Proceso" title="De una idea a una solución de IA." />
      <div className="relative mt-12 grid gap-4 md:grid-cols-4 md:gap-0">
        {processSteps.map((step, i) => (
          <div
            key={step.number}
            className="relative border-l border-cyan-300/30 pl-5 md:border-l-0 md:border-t md:px-5 md:pt-7"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
              {step.number}
            </span>
            <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
            {i < processSteps.length - 1 && (
              <span className="absolute left-[-4px] top-0 size-2 rounded-full bg-cyan-300 md:left-0 md:top-[-4px]" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}