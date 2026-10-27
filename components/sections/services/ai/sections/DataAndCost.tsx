import { ArrowRight, KeyRound, LockKeyhole } from "lucide-react"
import { ContactCta } from "../components/ContactCta"

export function DataAndCost() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-cyan-300/20 bg-[#071321] p-7">
          <LockKeyhole className="size-7 text-cyan-300" />
          <h2 className="mt-5 text-2xl font-semibold text-white">
            Tus datos requieren un tratamiento responsable.
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            La arquitectura debe considerar control de acceso, permisos, credenciales, minimización
            de datos, proveedores, información empresarial, eventos, errores y riesgos. Los
            requisitos dependen del proyecto, la arquitectura y los datos tratados.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-7">
          <KeyRound className="size-7 text-cyan-300" />
          <h2 className="mt-5 text-2xl font-semibold text-white">
            ¿Cuánto cuesta implementar inteligencia artificial?
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Influyen complejidad, datos, backend, frontend, integraciones, modelo, consumo de APIs,
            infraestructura, seguridad, pruebas, mantenimiento y mejoras. Hay que distinguir
            desarrollo inicial, uso, terceros, infraestructura y soporte.
          </p>
          <ContactCta className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
            Solicitar una evaluación <ArrowRight className="size-4" />
          </ContactCta>
        </article>
      </div>
    </section>
  )
}