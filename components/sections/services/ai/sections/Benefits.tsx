import { benefits } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Benefits() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#06101d]/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Capacidades"
          title="Tecnología que amplía las capacidades de tu equipo."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefits.map(({ icon: IconComponent, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-[#091426] p-5">
              <IconComponent className="mt-1 size-5 shrink-0 text-cyan-300" />
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}