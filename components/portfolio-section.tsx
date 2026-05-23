"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, TrendingDown, CheckCircle2 } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredCase = {
  title: "Sistema de gestión documental con IA",
  problem: "Procesos manuales lentos",
  solution: "Automatización con IA + clasificación inteligente",
  image: "/images/dashboard-preview.jpg",
}

const standardCases = [
  {
    client: "Empresa de Retail",
    problem: "Atención lenta al cliente",
    solution: "Chatbot + automatización de respuestas",
    result: "Atención 24/7 sin costo operativo adicional",
  },
  {
    client: "Entidad Gubernamental",
    problem: "Gestión de PQRS desordenada",
    solution: "Sistema digital + IA para clasificación",
    result: "Reducción de tiempos + trazabilidad total",
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeaturedCase() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden flex flex-col"
    >
      {/* Dashboard screenshot */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src="/images/dashboard-preview.jpg"
          alt="Vista previa del sistema de gestión documental con IA"
          fill
          className="object-cover object-top"
        />
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-bold text-slate-800 leading-snug">
          Sistema de gestión documental con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            IA
          </span>
        </h3>

        <div className="h-px bg-slate-100" />

        <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
          <p>
            <span className="font-semibold text-slate-800">Problema:</span>{" "}
            {featuredCase.problem}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Solución:</span>{" "}
            {featuredCase.solution}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:border-teal-500 hover:text-teal-600 transition-all duration-200 group">
            Ver caso
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function StandardCase({
  client,
  problem,
  solution,
  result,
}: {
  client: string
  problem: string
  solution: string
  result: string
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md flex flex-col p-6 gap-4"
    >
      <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed flex-1">
        <p>
          <span className="font-semibold text-slate-800">Cliente:</span>{" "}
          {client}
        </p>
        <div className="h-px bg-slate-100" />
        <p>
          <span className="font-semibold text-slate-800">Problema:</span>{" "}
          {problem}
        </p>
        <div className="h-px bg-slate-100" />
        <p>
          <span className="font-semibold text-slate-800">Solución:</span>{" "}
          {solution}
        </p>
        <div className="h-px bg-slate-100" />
        {/* Result — highlighted */}
        <div className="flex items-start gap-2 text-teal-700">
          <TrendingDown className="w-4 h-4 mt-0.5 shrink-0 text-teal-500" />
          <p>
            <span className="font-semibold">Resultado:</span>{" "}
            <span className="font-medium">{result}</span>
          </p>
        </div>
      </div>

      <div className="pt-2">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:border-teal-500 hover:text-teal-600 transition-all duration-200 group">
          Ver caso
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function PortfolioSection() {
  return (
    <section
      className="relative py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(59,130,246,0.05) 0%, #F8FAFC 20%, #F8FAFC 80%, rgba(16,185,129,0.05) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-slate-600 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
            Casos de éxito
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 text-balance leading-tight">
            Proyectos que{" "}
            <span className="font-extrabold">generan</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              resultados
            </span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl text-balance leading-relaxed">
            Soluciones reales que optimizan procesos y escalan negocios.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeaturedCase />
          {standardCases.map((c, i) => (
            <StandardCase key={i} {...c} />
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-slate-700 text-lg">
            ¿Quieres{" "}
            <span className="font-bold text-slate-900">resultados</span>{" "}
            como estos?
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-sm shadow-md hover:shadow-orange-300/60 hover:shadow-lg transition-all duration-200 hover:scale-105">
              Cotiza tu proyecto
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-slate-400 hover:text-slate-900 transition-all duration-200">
              Ver más proyectos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
