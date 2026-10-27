"use client"

import { ArrowRight, Globe2 } from "lucide-react"
import { integrationTargets } from "../data"
import { SectionHeading } from "../shared/SectionHeading"
import { useAreaSelection } from "../context/AreaSelection"

export function Integrations() {
  const { setArea } = useAreaSelection()

  return (
    <section
      id="integraciones"
      className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
    >
      <div>
        <SectionHeading
          eyebrow="Integraciones"
          title="Tus herramientas pueden trabajar juntas."
          text="Evaluamos cómo conectar tus aplicaciones mediante APIs, webhooks, conectores o intercambio de datos, según las capacidades de cada sistema."
        />
        <a
          href="#contacto"
          onClick={() => setArea("Integración de herramientas")}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 px-5 py-3 text-sm text-cyan-200 hover:bg-cyan-300/10"
        >
          Consultar una integración <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {integrationTargets.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-[#071321] p-5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
              <Globe2 className="size-5" />
            </div>
            <p className="mt-4 text-sm text-slate-300">{item}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">Viabilidad a evaluar</p>
          </div>
        ))}
      </div>
    </section>
  )
}