import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Users,
  Code2,
  Cpu,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros – MDTEC",
  description:
    "Conoce al equipo detrás de MDTEC: nuestra misión, valores y por qué hacemos lo que hacemos.",
};

const values = [
  {
    icon: Target,
    title: "Orientados a resultados",
    desc: "No entregamos código, entregamos valor medible. Cada proyecto tiene métricas claras de éxito.",
    color: "#14B8A6",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    desc: "Estudiamos las últimas tecnologías para aplicarlas donde realmente tienen impacto en tu negocio.",
    color: "#F97316",
  },
  {
    icon: Heart,
    title: "Compromiso real",
    desc: "Trabajamos como socios tecnológicos, no como proveedores. Tu éxito es nuestro éxito.",
    color: "#6366F1",
  },
  {
    icon: Users,
    title: "Equipo humano",
    desc: "Comunicación directa, sin intermediarios y con personas reales que entienden tu negocio.",
    color: "#3B82F6",
  },
];

const team = [
  {
    name: "Juan Zambrano",
    role: "Fundador & Diseñador UX",
    bio: "Especialista en experiencia de usuario y diseño de productos digitales enfocados en usabilidad, identidad visual y soluciones centradas en el cliente.",
    icon: Code2,
    color: "#14B8A6",
  },
  {
    name: "Pedro Aldana",
    role: "Fundador & Ingeniero de Software",
    bio: "Ingeniero de software enfocado en arquitectura backend, plataformas SaaS, escalabilidad y desarrollo de soluciones tecnológicas modernas.",
    icon: Globe,
    color: "#6366F1",
  },
  {
    name: "Robin Guerrero",
    role: "Desarrollador Frontend",
    bio: "Desarrollador frontend especializado en interfaces modernas, experiencias interactivas y aplicaciones web optimizadas para rendimiento.",
    icon: Cpu,
    color: "#3B82F6",
  },
  {
    name: "Luz Quiñonez",
    role: "Ejecutiva Comercial",
    bio: "Encargada de relaciones comerciales, atención estratégica a clientes y generación de oportunidades de crecimiento para la empresa.",
    icon: Lightbulb,
    color: "#F97316",
  },
  {
    name: "Francisco Bohorquez",
    role: "Ingeniero DevOps",
    bio: "Responsable de infraestructura cloud, automatización de despliegues y optimización de entornos de desarrollo y producción.",
    icon: Target,
    color: "#06B6D4",
  },
];

const milestones = [
  {
    year: "2020",
    event: "Fundación de MDTEC con foco en desarrollo web a medida",
  },
  {
    year: "2021",
    event: "Primer producto SaaS: plataforma de gestión para PYMEs",
  },
  {
    year: "2022",
    event: "Expansión al área de Inteligencia Artificial y automatización",
  },
  { year: "2023", event: "Lanzamiento de MDTECDOC y MDTECBot" },
  { year: "2024", event: "30+ clientes atendidos en 5 sectores distintos" },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Nuestro equipo
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Somos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              MDTECODE
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Un equipo de ingenieros y especialistas en IA apasionados por
            construir tecnología que transforma negocios. Potenciamos tu
            crecimiento con soluciones a medida, sin burocracia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-teal-400" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Nuestra misión
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Democratizar el acceso a tecnología de vanguardia para empresas de
              todos los tamaños. Creemos que cada negocio merece soluciones de
              software inteligentes, accesibles y con impacto real.
            </p>
          </div>
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Nuestra visión
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Ser el socio tecnológico de referencia en Latinoamérica para
              empresas que quieren crecer con IA y software a medida,
              construyendo relaciones de largo plazo basadas en resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              valores
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  style={{ borderColor: `${v.color}33` }}
                  className="rounded-2xl border bg-white/3 p-7 flex gap-5 items-start"
                >
                  <div
                    style={{
                      background: `${v.color}15`,
                      boxShadow: `0 0 14px ${v.color}33`,
                    }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  >
                    <Icon style={{ color: v.color }} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                      {v.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
            El{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              equipo
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {team.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  style={{ borderColor: `${t.color}33` }}
                  className="rounded-2xl border bg-white/3 p-7 flex flex-col items-center text-center gap-4"
                >
                  <div
                    style={{
                      background: `${t.color}15`,
                      boxShadow: `0 0 24px ${t.color}44`,
                    }}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                  >
                    <Icon style={{ color: t.color }} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {t.name}
                    </h3>
                    <p
                      style={{ color: t.color }}
                      className="text-sm font-semibold mt-0.5"
                    >
                      {t.role}
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Trabaja con nosotros
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            ¿Tienes un proyecto en mente? Hablemos y veamos cómo podemos
            ayudarte a hacerlo realidad.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-200"
          >
            Contáctanos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
