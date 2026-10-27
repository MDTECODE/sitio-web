"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { categoryOptions, contactFields } from "../data"
import type { ContactField } from "../types"
import { useCategorySelection } from "../context/CategorySelection"

type ContactFormProps = {
  onSubmit?: (data: FormData) => Promise<void> | void
}

const fieldClassName =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0b1b2c] px-4 py-3 text-white outline-none focus:border-cyan-300/60"

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
      className="grid gap-4 rounded-3xl border border-white/10 bg-[#07111f] p-6 sm:grid-cols-2"
    >
      {contactFields.map((field) => (
        <FieldRenderer key={field.name} field={field} />
      ))}

      <label className="flex items-start gap-3 text-xs leading-5 text-slate-400 sm:col-span-2">
        <input required type="checkbox" name="consent" className="mt-1 accent-cyan-300" />
        Acepto que MDTECODE utilice estos datos para responder a mi consulta.
      </label>

      {error && (
        <p role="alert" className="text-sm text-rose-300 sm:col-span-2">
          {error}
        </p>
      )}

      {submitted && (
        <p
          role="status"
          className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm text-emerald-200 sm:col-span-2"
        >
          Solicitud validada en la interfaz. Conecta este formulario a tu canal de recepción para enviarla.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101c] hover:bg-cyan-200 disabled:opacity-60 sm:col-span-2"
      >
        Hablemos de tu proyecto <ArrowRight className="size-4" />
      </button>
    </form>
  )
}

function FieldRenderer({ field }: { field: ContactField }) {
  const wrapperClass = `text-sm text-slate-300 ${field.colSpan === 2 ? "sm:col-span-2" : ""}`

  if (field.type === "category-select") {
    return <CategorySelectField field={field} wrapperClass={wrapperClass} />
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

function CategorySelectField({
  field,
  wrapperClass,
}: {
  field: Extract<ContactField, { type: "category-select" }>
  wrapperClass: string
}) {
  const { category, setCategory } = useCategorySelection()

  return (
    <label className={wrapperClass}>
      {field.label}
      <select
        name={field.name}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={fieldClassName}
      >
        <option value="">Selecciona una opción</option>
        {categoryOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}