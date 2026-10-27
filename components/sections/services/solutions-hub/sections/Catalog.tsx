import { ChevronRight } from "lucide-react"
import { solutions } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Catalog() {
  return (
    <section
      id="catalogo"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="Nuestro ecosistema"
        title="Soluciones para impulsar tu negocio."
        text="Cada empresa tiene desafíos diferentes. Explora nuestras soluciones tecnológicas y descubre cómo podríamos ayudarte a resolverlos."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {solutions.map(({ title, description, examples, cta, href, accent, icon: IconComponent }, i) => (
          <article
            key={title}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${accent} p-7 transition hover:-translate-y-1 hover:border-cyan-300/40`}
          >
            <div className="absolute right-0 top-0 size-40 rounded-full bg-cyan-300/5 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <IconComponent className="size-6" />
                </span>
                <span className="text-xs font-medium text-slate-600">0{i + 1}</span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-slate-400">{description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {example}
                  </span>
                ))}
              </div>

              <a
                href={href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                {cta}
                <ChevronRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}