import { ArrowRight } from "lucide-react"
import { platformTypes } from "../data"
import { FadeIn } from "../shared/FadeIn"
import { SectionHeading } from "../shared/SectionHeading"

export function PlatformTypes() {
  return (
    <section id="tipos" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="02 / Soluciones"
        title="Soluciones digitales para cada necesidad."
        text="Desarrollamos plataformas adaptadas a los objetivos de tu negocio, combinando diseño, tecnología y estrategia."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platformTypes.map(({ title, text, tags, icon: IconComponent }) => (
          <FadeIn key={title} as="article">
            <div className="group h-full rounded-2xl border border-white/10 bg-[#071321]/80 p-6 hover:-translate-y-1 hover:border-cyan-300/35">
              <IconComponent className="size-6 text-cyan-300" />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300"
              >
                Consultar esta necesidad <ArrowRight className="size-3" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}