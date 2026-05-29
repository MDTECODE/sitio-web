import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Code2,
  Cpu,
  Cloud,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios – MDTEC",
  description:
    "Construimos productos digitales enfocados en resultados: desde la idea hasta una aplicación funcional que puedas lanzar en semanas, no meses.",
};

const services = [
  {
    icon: Code2,
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.10)",
    border: "rgba(59,130,246,0.25)",
    title: "Desarrollo de Software a Medida",
    subtitle: "Creamos soluciones digitales adaptadas a tu negocio",
    description:
      "Desarrollamos aplicaciones web, sistemas empresariales y soluciones personalizadas que optimizan procesos, mejoran la productividad y ayudan a escalar tu empresa.",
    features: [
      "Web Apps",
      "Sistemas Empresariales (ERP, CRM)",
      "APIs e integraciones a medida",
      "Automatización de procesos",
      "Dashboards y paneles administrativos",
    ],
  },
  {
    icon: Cpu,
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.10)",
    border: "rgba(20,184,166,0.25)",
    title: "Soluciones con IA",
    subtitle: "Automatiza. Aprende. Escala.",
    description:
      "Implementamos soluciones con inteligencia artificial que automatizan procesos, mejoran la atención al cliente y optimizan la operación de tu negocio.",
    features: [
      "Chatbots para atención al cliente (WhatsApp / Web)",
      "Automatización de procesos repetitivos",
      "Respuestas automáticas y gestión de leads",
      "Integraciones con APIs y herramientas",
      "Análisis básico de datos y reportes",
    ],
  },
  {
    icon: Cloud,
    color: "#6366F1",
    bg: "rgba(99,102,241,0.10)",
    border: "rgba(99,102,241,0.25)",
    title: "Desarrollo de Sistemas SaaS",
    subtitle: "Convierte tu idea en una plataforma rentable",
    description:
      "Diseñamos y desarrollamos plataformas SaaS listas para escalar, con pagos, usuarios y dashboards desde el primer día.",
    features: [
      "Sistemas con usuarios y roles",
      "Suscripciones y pagos (Stripe)",
      "Dashboards y paneles de control",
      "Arquitectura escalable",
      "Integraciones con APIs",
    ],
  },
  {
    icon: Lightbulb,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    title: "Marketing Digital & Growth",
    subtitle: "Atrae clientes y automatiza tus ventas",
    description:
      "Implementamos estrategias digitales que te ayudan a conseguir clientes y optimizar tu embudo de ventas.",
    features: [
      "Landing pages optimizadas",
      "Integración con WhatsApp",
      "Automatización de leads",
      "Analítica y métricas",
      "Integración con CRM",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Entrega rápida",
    desc: "Metodología ágil con entregables en ciclos de 2 semanas.",
  },
  {
    icon: Shield,
    title: "Calidad garantizada",
    desc: "Testing automatizado y revisiones de código en cada sprint.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    desc: "Arquitecturas diseñadas para crecer contigo desde el día uno.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
            Soluciones Integrales
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Servicios
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Transformamos tu negocio con{" "}
            <strong className="text-white">software</strong> a la medida,
            inteligencia artificial y{" "}
            <strong className="text-white">productos SaaS</strong> escalables.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                style={{
                  borderColor: s.border,
                  background: `linear-gradient(135deg, ${s.bg} 0%, rgba(255,255,255,0.02) 100%)`,
                }}
                className="group rounded-2xl border backdrop-blur-lg p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      background: s.bg,
                      boxShadow: `0 0 20px ${s.color}33`,
                    }}
                    className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  >
                    <Icon style={{ color: s.color }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white">
                      {s.title}
                    </h2>
                    <p
                      style={{ color: s.color }}
                      className="text-sm font-medium mt-0.5"
                    >
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  className="h-px"
                  style={{
                    background: `linear-gradient(to right, ${s.border}, transparent)`,
                  }}
                />

                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle
                        style={{ color: s.color }}
                        className="w-4 h-4 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  style={{ borderColor: s.border, color: s.color }}
                  className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold hover:bg-white/5 transition-all duration-200 w-fit"
                >
                  Solicitar servicio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-10">
            ¿Por qué elegir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              MDTEC?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Listo para empezar?
          </h2>
          <p className="text-slate-400 mb-8">
            Cuéntanos tu proyecto y te damos una propuesta en 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200"
          >
            Cotiza tu proyecto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
