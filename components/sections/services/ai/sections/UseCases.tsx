import { useCases } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function UseCases() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Casos de uso" title="¿Dónde puede aportar valor la IA?" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map(({ title, problem, solution, limit, icon: IconComponent }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#07111f]/80 p-5">
            <IconComponent className="size-6 text-cyan-300" />
            <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>

            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">Problema</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">{problem}</p>

            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">Posible solución</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">{solution}</p>

            <p className="mt-4 rounded-xl bg-amber-300/5 p-3 text-xs leading-5 text-amber-100/75">
              Límite: {limit}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}