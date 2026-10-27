"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { contactAreaOptions, contactFields } from "../data"
import type { ContactField } from "../types"
import { useAreaSelection } from "../context/AreaSelection"

type ContactFormProps = {
  onSubmit?: (data: FormData) => Promise<void> | void
}

const fieldClassName =
  "rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-white outline-none focus:border-cyan-300"

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    if (!form.checkValidity()) {
      setError("Revisa los campos obligatorios antes de continuar.")
      form.reportValidity()
      return
    }

    setError("")
    setIsSubmitting(true)
    try {
      await onSubmit?.(new FormData(form))
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#071321] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {contactFields.map((field) => (
          <FieldRenderer key={field.name} field={field} />
        ))}

        <label className="flex items-start gap-3 text-sm text-slate-400 sm:col-span-2">
          <input required type="checkbox" name="consent" className="mt-1 accent-cyan-300" />
          Acepto que MDTECODE utilice estos datos para evaluar mi solicitud. La política y el
          tratamiento aplicable deben confirmarse antes de conectar un envío real.
        </label>
      </div>

      {error && <p role="alert" className="mt-5 text-sm text-rose-300">{error}</p>}

      {submitted && (
        <p role="status" className="mt-5 text-sm text-emerald-300">
          Solicitud validada en la interfaz. Falta conectar el canal de recepción para enviarla.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101d] hover:bg-cyan-200 disabled:opacity-60"
      >
        {submitted ? "Solicitud preparada" : "Solicitar una evaluación"} <ArrowRight className="size-4" />
      </button>
    </form>
  )
}

function FieldRenderer({ field }: { field: ContactField }) {
  const colSpanClass = field.colSpan === 2 ? "sm:col-span-2" : ""
  const wrapperClass = `grid gap-2 text-sm text-slate-300 ${colSpanClass}`

  if (field.type === "area-select") {
    return <AreaSelectField field={field} wrapperClass={wrapperClass} />
  }

  if (field.type === "textarea") {
    return (
      <label className={wrapperClass}>
        {field.label}
        <textarea
          name={field.name}
          rows={field.rows}
          required={field.required}
          placeholder={field.placeholder}
          className={`${fieldClassName} resize-y`}
        />
      </label>
    )
  }

  return (
    <label className={wrapperClass}>
      {field.label}
      <input
        type={field.type}
        name={field.name}
        required={field.required}
        placeholder={field.placeholder}
        className={fieldClassName}
      />
    </label>
  )
}

function AreaSelectField({
  field,
  wrapperClass,
}: {
  field: Extract<ContactField, { type: "area-select" }>
  wrapperClass: string
}) {
  const { area, setArea } = useAreaSelection()

  return (
    <label className={wrapperClass}>
      {field.label}
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required={field.required}
        name={field.name}
        className={fieldClassName}
      >
        <option value="">Selecciona una opción</option>
        {contactAreaOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}