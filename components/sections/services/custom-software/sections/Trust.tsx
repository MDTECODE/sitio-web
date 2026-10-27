import { ArrowRight, Check } from "lucide-react"
import { investmentItems, trustItems } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Trust() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="08 / Confianza"
            title="Seguridad, propiedad y mantenimiento"
            text="Son decisiones que deben estar claras antes de comenzar, no después del lanzamiento."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustItems.map(({ icon: IconComponent, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#071321] p-5">
                <IconComponent className="size-5 text-cyan-300" />
                <h3 className="mt-4 font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Las responsabilidades, derechos de propiedad intelectual, licencias, soporte y
            condiciones de transferencia deben definirse expresamente en la propuesta o contrato.
          </p>
        </div>

        <InvestmentCard />
      </div>
    </section>
  )
}

function InvestmentCard() {
  return (
    <div className="rounded-3xl border border-cyan-300/20 bg-[#071321] p-7 sm:p-9">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">09 / Inversión</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">
        ¿Cuánto cuesta desarrollar software a medida?
      </h2>
      <p className="mt-5 leading-7 text-slate-400">
        La inversión depende de funcionalidades, usuarios, interfaz, integraciones, seguridad,
        migración, infraestructura, documentación, pruebas y soporte.
      </p>
      <ul className="mt-8 flex flex-col gap-3">
        {investmentItems.map((item) => (
          <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
            <Check className="size-4 text-cyan-300" /> {item}
          </li>
        ))}
      </ul>
      <a href="#contacto" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
        Solicitar una estimación <ArrowRight className="size-4" />
      </a>
    </div>
  )
}