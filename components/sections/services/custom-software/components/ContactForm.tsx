"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"

type ContactFormProps = {
  onSubmit?: (data: FormData) => Promise<void> | void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
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
        <label className="flex flex-col gap-2 text-xs text-slate-400">
          Nombre
          <input
            required
            name="name"
            className="rounded-xl border border-white/10 bg-[#071321] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs text-slate-400">
          Correo electrónico
          <input
            required
            type="email"
            name="email"
            className="rounded-xl border border-white/10 bg-[#071321] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60"
            placeholder="tu@empresa.com"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs text-slate-400 sm:col-span-2">
          Empresa <span className="text-slate-600">opcional</span>
          <input
            name="company"
            className="rounded-xl border border-white/10 bg-[#071321] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60"
            placeholder="Nombre de la empresa"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs text-slate-400 sm:col-span-2">
          ¿Qué quieres construir o mejorar?
          <textarea
            required
            name="message"
            rows={5}
            className="resize-none rounded-xl border border-white/10 bg-[#071321] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60"
            placeholder="Cuéntanos el problema, proceso o idea..."
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input required type="checkbox" className="mt-1 accent-cyan-300" />
        Acepto que MDTECODE utilice estos datos para responder a mi solicitud. Las condiciones
        definitivas deben revisarse según la política de privacidad aplicable.
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#03101f] transition hover:bg-cyan-200 disabled:opacity-60"
      >
        {submitted ? "Solicitud preparada" : "Preparar mi solicitud"} <ArrowRight className="size-4" />
      </button>

      {submitted && (
        <p role="status" className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-xs leading-5 text-cyan-100">
          La interfaz validó tu solicitud, pero todavía no está conectada a un servicio de envío.
          Conecta este formulario a tu API, correo o CRM antes de publicar.
        </p>
      )}
    </form>
  )
}