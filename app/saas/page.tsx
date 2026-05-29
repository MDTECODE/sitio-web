import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FileText,
  Eye,
  Bot,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos SaaS – MDTEC",
  description:
    "NerionDOC, NerionVisionAI y NerionBot — soluciones listas para implementar en tu empresa.",
};

const products = [
  {
    tag: "Sistema de operaciones internas",
    name: "Opera",
    highlight: "X",
    tagline: "Plataforma inteligente de coordinación operativa",
    description:
      "Centraliza y automatiza la operación diaria de tu negocio desde un solo lugar. OperaX organiza agendas, equipos, clientes, seguimiento y procesos operativos para ayudarte a trabajar con más control, productividad y eficiencia.",
    icon: FileText,
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.08)",
    border: "rgba(20,184,166,0.30)",
    glow: "rgba(20,184,166,0.20)",
    cta: "Ver Avance",
    ctaVariant: "teal" as const,
    features: [
      "Gestión centralizada de operaciones",
      "Coordinación inteligente de equipos y horarios",
      "Automatización de recordatorios y seguimiento",
      "Control de capacidad y ocupación",
      "Dashboard operativo en tiempo real",
      "Integración y comunicación vía WhatsApp",
    ],
  },
];

const ctaColors = {
  teal: "border-teal-500/50 text-teal-300 hover:bg-teal-500/10",
  blue: "border-blue-500/50 text-blue-300 hover:bg-blue-500/10",
  orange: "border-orange-500/50 text-orange-300 hover:bg-orange-500/10",
};

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
            Productos SaaS
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              productos
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones listas para implementar. Sin meses de desarrollo —
            despliega en días.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {products.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={p.name + p.highlight}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-start`}
              >
                {/* Info */}
                <div className="flex-1 flex flex-col gap-5">
                  <span
                    style={{
                      color: p.color,
                      borderColor: p.border,
                      background: p.bg,
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold w-fit tracking-wide uppercase"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {p.tag}
                  </span>

                  <h2 className="font-serif text-4xl font-bold text-white leading-tight">
                    {p.name}
                    <span style={{ color: p.color }}>{p.highlight}</span>
                  </h2>
                  <p
                    style={{ color: p.color }}
                    className="text-base font-medium -mt-2"
                  >
                    {p.tagline}
                  </p>

                  <p className="text-slate-400 text-base leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle
                          style={{ color: p.color }}
                          className="w-4 h-4 shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 mt-2">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      Solicitar Informacion
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      style={{ borderColor: p.border }}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${ctaColors[p.ctaVariant]}`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      {p.cta}
                    </button>
                  </div>
                </div>

                {/* Visual card */}
                <div className="flex-1 min-h-[280px] flex items-center justify-center">
                  <div
                    style={{
                      borderColor: p.border,
                      boxShadow: `0 0 60px ${p.glow}`,
                    }}
                    className="w-full rounded-2xl border p-10 flex flex-col items-center justify-center gap-6 text-center"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        background: p.bg,
                        boxShadow: `0 0 30px ${p.color}44`,
                      }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    >
                      <Icon style={{ color: p.color }} className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-white">
                        {p.name}
                        <span style={{ color: p.color }}>{p.highlight}</span>
                      </p>
                      <p className="text-slate-500 text-sm mt-1">{p.tagline}</p>
                    </div>
                    <div
                      className="w-full h-px"
                      style={{
                        background: `linear-gradient(to right, transparent, ${p.color}55, transparent)`,
                      }}
                    />
                    <p
                      style={{ color: p.color }}
                      className="text-sm font-semibold tracking-wide"
                    >
                      En desarrollo
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            ¿Quieres una solución a medida?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Si ningún producto se ajusta exactamente a tu necesidad, lo
            construimos desde cero.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-200"
          >
            Cotizar solución
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
