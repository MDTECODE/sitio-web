"use client"

import { useMemo, useState } from "react"
import { Mail } from "lucide-react"
import { defaultScopeValues, scopeFields } from "../data"
import { CONTACT_EMAIL } from "../constants"
import type { ScopeValues } from "../types"
import { SectionHeading } from "../shared/SectionHeading"

function buildSummary(values: ScopeValues): string {
  return [
    `Solución: ${values.solution}.`,
    `Complejidad: ${values.complexity}.`,
    values.modules + ".",
    values.integrations + ".",
    `Diseño personalizado: ${values.design}.`,
    `Mantenimiento: ${values.maintenance}.`,
  ].join(" ")
}

export function ScopeBuilder() {
  const [values, setValues] = useState<ScopeValues>(defaultScopeValues)
  const summary = useMemo(() => buildSummary(values), [values])

  const handleChange = (key: keyof ScopeValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Evaluación de software a medida",
  )}&body=${encodeURIComponent(summary)}`

  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="10 / Orientación"
            title="Prepara una conversación más útil"
            text="Selecciona algunos factores para generar un resumen de alcance. No es una cotización ni una oferta comercial."
          />

          <div className="rounded-3xl border border-white/10 bg-[#091426] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {scopeFields.map((field) => (
                <label key={field.key} className="flex flex-col gap-2 text-xs text-slate-400">
                  {field.label}
                  <select
                    value={values[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="rounded-xl border border-white/10 bg-[#071321] px-3 py-3 text-sm text-slate-200 outline-none focus:border-cyan-300/60"
                  >
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-5">
              <p className="text-xs uppercase tracking-widest text-cyan-300">Resumen orientativo</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{summary}</p>
            </div>

            <a
              href={mailtoHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] transition hover:bg-cyan-200"
            >
              Llevar resumen al contacto <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}