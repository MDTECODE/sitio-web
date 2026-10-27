import { techStack } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Technology() {
  return (
    <section id="tecnologia" className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="07 / Arquitectura"
          title="La tecnología se elige por el problema, no por la tendencia"
          text="Evaluamos requisitos, seguridad, integración, operación y evolución antes de fijar una arquitectura. No imponemos un stack único a todos los proyectos."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {techStack.map(({ icon: IconComponent, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-[#091426] p-5">
              <IconComponent className="mt-1 size-5 shrink-0 text-cyan-300" />
              <div>
                <h3 className="font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}