import { costFactors } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Costs() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Costos y tiempos"
        title="¿Cuánto cuesta automatizar un proceso?"
        text="No hay una tarifa universal responsable. Primero hay que conocer el proceso y evaluar los sistemas involucrados."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {costFactors.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#071321] p-4 text-sm text-slate-300">
            <span className="size-2 rounded-full bg-cyan-300" />
            {item}
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">
        La propuesta puede separar implementación inicial, licencias externas, infraestructura,
        mantenimiento y futuras mejoras. Los costos de terceros dependen de sus propios proveedores.
      </p>
    </section>
  )
}