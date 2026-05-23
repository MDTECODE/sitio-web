"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Send } from "lucide-react"

const reasons = [
  { label: "Desarrollo de Software" },
  { label: "Soluciones con IA" },
  { label: "Producto SaaS" },
  { label: "Consultoría Tech" },
  { label: "Otro" },
]

const guarantees = [
  { icon: Clock, text: "Respondemos en menos de 24 horas hábiles" },
  { icon: CheckCircle, text: "Primera consulta sin compromiso ni costo" },
  { icon: MessageCircle, text: "Atención directa con el equipo técnico" },
]

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [selected, setSelected] = useState<string>("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-orange-500/6 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
            Hablemos
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Cuéntanos tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              proyecto
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ya sea que tengas una idea clara o solo un problema que resolver, estamos listos para escucharte.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-10 flex flex-col items-center text-center gap-5 h-full justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-teal-400" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white">Mensaje enviado</h2>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500/40 text-teal-400 text-sm font-medium hover:bg-teal-500/10 transition-all duration-200"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/8 bg-white/3 p-8 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">
                    Empresa
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-300">
                    ¿En qué te podemos ayudar? *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {reasons.map((r) => (
                      <button
                        key={r.label}
                        type="button"
                        onClick={() => setSelected(r.label)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                          selected === r.label
                            ? "border-teal-500/60 bg-teal-500/10 text-teal-400"
                            : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe tu idea, problema o necesidad. Mientras más detalles, mejor podremos ayudarte..."
                    className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.02] hover:shadow-orange-500/50 transition-all duration-200"
                >
                  Enviar mensaje
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Guarantees */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-7 flex flex-col gap-5">
              <h3 className="font-serif text-lg font-bold text-white">Lo que puedes esperar</h3>
              <div className="flex flex-col gap-4">
                {guarantees.map((g) => {
                  const Icon = g.icon
                  return (
                    <div key={g.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-teal-400" />
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{g.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Direct contact */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-7 flex flex-col gap-4">
              <h3 className="font-serif text-lg font-bold text-white">Contacto directo</h3>
              <a
                href="mailto:hola@neriontec.com"
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                hola@neriontec.com
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                WhatsApp
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Alternative CTA */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-7 flex flex-col gap-3">
              <h3 className="font-serif text-base font-bold text-white">¿Prefieres ver nuestro trabajo?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Revisa nuestros casos de éxito antes de contactarnos.
              </p>
              <Link
                href="/portafolio"
                className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Ver portafolio
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
