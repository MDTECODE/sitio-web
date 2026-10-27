"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { contactFields } from "../data"
import type { ContactField } from "../types"

type ContactFormProps = {
  onSubmit?: (data: FormData) => Promise<void> | void
}

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
      const formData = new FormData(form)
      await onSubmit?.(formData)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#091426] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {contactFields.map((field) => (
          <FieldRenderer key={field.name} field={field} />
        ))}

        <label className="flex gap-3 text-sm leading-6 text-slate-400 sm:col-span-2">
          <input required type="checkbox" name="consent" className="mt-1 accent-cyan-300" />
          Acepto que MDTECODE use estos datos para responder a mi solicitud. La integración de
          privacidad y el envío real deben conectarse antes de producción.
        </label>
      </div>

      {error && <p role="alert" className="mt-5 text-sm text-rose-300">{error}</p>}

      {submitted && (
        <p
          role="status"
          className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm text-cyan-200"
        >
          La interfaz validó tu solicitud. El envío real está pendiente de conectar a un canal de recepción.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] hover:bg-cyan-200 disabled:opacity-60"
      >
        Preparar mi solicitud <ArrowRight className="size-4" />
      </button>
    </form>
  )
}

const fieldClassName =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#071321] px-4 py-3 text-white outline-none focus:border-cyan-300"

function FieldRenderer({ field }: { field: ContactField }) {
  const wrapperClass = `text-sm text-slate-300 ${field.colSpan === 2 ? "sm:col-span-2" : ""}`

  if (field.type === "select") {
    return (
      <label className={wrapperClass}>
        {field.label}
        <select
          name={field.name}
          required={field.required}
          className={fieldClassName}
        >
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    )
  }

  if (field.type === "textarea") {
    return (
      <label className={wrapperClass}>
        {field.label}
        <textarea
          name={field.name}
          rows={field.rows}
          required={field.required}
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
        className={fieldClassName}
      />
    </label>
  )
}