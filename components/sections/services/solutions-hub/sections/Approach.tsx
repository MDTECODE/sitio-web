import { principles } from "../data"

export function Approach() {
  return (
    <section
      id="enfoque"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-24 lg:px-8"
    >
      <div className="grid gap-12 rounded-3xl border border-white/10 bg-[#071321]/80 p-8 lg:grid-cols-[.8fr_1.2fr] lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-300">
            Nuestro enfoque
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            La solución correcta empieza por entender el problema.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {principles.map(({ icon: IconComponent, title, text }) => (
            <div key={title}>
              <IconComponent className="size-6 text-cyan-300" />
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}