import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, TrendingDown, CheckCircle2, Building2, Landmark, ShoppingBag, Factory } from "lucide-react"

export const metadata: Metadata = {
  title: "Portafolio – NerionTec",
  description: "Casos de éxito reales: proyectos que optimizan procesos y escalan negocios con tecnología e IA.",
}

const cases = [
  {
    featured: true,
    sector: "Gestión Documental",
    client: "Empresa Industrial",
    title: "Sistema de gestión documental con IA",
    problem: "Procesos manuales lentos y documentos sin clasificar",
    solution: "Automatización con IA + clasificación inteligente de documentos con NerionDOC",
    result: "Reducción del 70% en tiempo de búsqueda y clasificación",
    tech: ["Python", "Next.js", "AWS S3", "OpenAI"],
    icon: Factory,
    image: "/images/dashboard-preview.jpg",
    color: "#14B8A6",
  },
  {
    featured: false,
    sector: "Retail",
    client: "Empresa de Retail",
    title: "Chatbot de atención al cliente 24/7",
    problem: "Atención lenta con alto costo operativo de call center",
    solution: "Chatbot inteligente integrado en WhatsApp y sitio web con NerionBot",
    result: "Atención 24/7 sin costo operativo adicional — 85% de consultas resueltas automáticamente",
    tech: ["NerionBot", "WhatsApp API", "NestJS"],
    icon: ShoppingBag,
    color: "#3B82F6",
  },
  {
    featured: false,
    sector: "Sector Público",
    client: "Entidad Gubernamental",
    title: "Sistema digital de gestión de PQRS",
    problem: "Gestión de PQRS desordenada y sin trazabilidad",
    solution: "Sistema digital + IA para clasificación y enrutamiento automático de solicitudes",
    result: "Reducción del 60% en tiempos de respuesta + trazabilidad total",
    tech: ["React", "NestJS", "PostgreSQL", "IA"],
    icon: Landmark,
    color: "#6366F1",
  },
  {
    featured: false,
    sector: "Salud",
    client: "Clínica Privada",
    title: "Plataforma SaaS de gestión de citas",
    problem: "Agendamiento manual con alta tasa de citas perdidas",
    solution: "Plataforma web con recordatorios automáticos y gestión de agenda en tiempo real",
    result: "Reducción del 40% en no-shows y doble de pacientes atendidos",
    tech: ["Next.js", "Stripe", "Twilio", "PostgreSQL"],
    icon: Building2,
    color: "#F97316",
  },
]

const stats = [
  { value: "30+", label: "Proyectos entregados" },
  { value: "95%", label: "Clientes satisfechos" },
  { value: "70%", label: "Reducción promedio de tiempos" },
  { value: "5+", label: "Sectores atendidos" },
]

export default function PortafolioPage() {
  const featured = cases.find((c) => c.featured)!
  const rest = cases.filter((c) => !c.featured)

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            Casos de éxito
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Proyectos que{" "}
            <span className="font-extrabold">generan</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              resultados
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones reales que optimizan procesos y escalan negocios.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-1">
                {s.value}
              </p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured case */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-teal-500/20 bg-white/3 overflow-hidden flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-2/5 h-60 lg:h-auto overflow-hidden">
              <Image
                src="/images/dashboard-preview.jpg"
                alt="Dashboard de gestión documental con IA"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0F1E]/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1E]/80 lg:hidden" />
            </div>
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wide">
                  Caso destacado
                </span>
                <span className="text-slate-500 text-xs">{featured.sector}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white leading-tight">
                {featured.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Problema</p>
                  <p className="text-slate-300">{featured.problem}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Solución</p>
                  <p className="text-slate-300">{featured.solution}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Resultado</p>
                  <p className="text-teal-400 font-medium">{featured.result}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500/40 text-teal-400 text-sm font-medium hover:bg-teal-500/10 transition-all duration-200 w-fit"
              >
                Quiero algo similar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other cases */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                style={{ borderColor: `${c.color}33` }}
                className="rounded-2xl border bg-white/3 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{ background: `${c.color}15`, boxShadow: `0 0 14px ${c.color}33` }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  >
                    <Icon style={{ color: c.color }} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide">{c.sector}</p>
                    <p className="text-white text-sm font-semibold">{c.client}</p>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-white leading-snug">{c.title}</h3>

                <div className="flex flex-col gap-2 text-sm text-slate-400">
                  <p><span className="text-slate-300 font-medium">Problema: </span>{c.problem}</p>
                  <p><span className="text-slate-300 font-medium">Solución: </span>{c.solution}</p>
                </div>

                <div className="flex items-start gap-1.5 text-sm" style={{ color: c.color }}>
                  <TrendingDown className="w-4 h-4 mt-0.5 shrink-0" />
                  <p className="font-medium">{c.result}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {c.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  style={{ borderColor: `${c.color}55`, color: c.color }}
                  className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium hover:bg-white/5 transition-all duration-200 w-fit"
                >
                  Ver caso completo
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            ¿Quieres <span className="font-extrabold">resultados</span> como estos?
          </h2>
          <p className="text-slate-400 mb-8">Cuéntanos tu proyecto y diseñamos la solución ideal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-200"
            >
              Cotiza tu proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
