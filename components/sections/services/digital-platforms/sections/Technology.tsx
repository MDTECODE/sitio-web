import { tech } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Technology() {
  return (
    <section id="tecnologia" className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="05 / Tecnología"
          title="Tecnología moderna para resultados reales."
          text="Seleccionamos tecnologías según requisitos funcionales, complejidad, integraciones y necesidades de evolución. No todas aplican a todos los proyectos."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tech.map(({ icon: IconComponent, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#091426] p-5"
            >
              <IconComponent className="mt-1 size-5 shrink-0 text-cyan-300" />
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}