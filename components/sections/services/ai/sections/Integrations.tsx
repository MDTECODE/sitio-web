import { Database, LockKeyhole, PlugZap } from "lucide-react"
import { integrations } from "../data"
import { ContactCta } from "../components/ContactCta"
import { SectionHeading } from "../shared/SectionHeading"

export function Integrations() {
  return (
    <section id="integraciones" className="relative z-10 border-y border-white/10 bg-[#06101d]/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Integraciones"
            title="La IA debe encajar en tu ecosistema digital."
            text="Una solución puede conectarse con APIs, bases de datos, aplicaciones empresariales y repositorios de información, siempre después de revisar permisos y dependencias."
          />
          <ContactCta
            value="Integración con sistemas"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
          >
            Consultar una integración <PlugZap className="size-4" />
          </ContactCta>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#091426] p-4"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Database className="size-4" />
              </span>
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
          <div className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm text-cyan-100">
            <LockKeyhole className="size-5" />
            Identificar fuentes → revisar permisos → definir accesos → conectar → probar
          </div>
        </div>
      </div>
    </section>
  )
}