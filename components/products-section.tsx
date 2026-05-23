"use client"

import { motion } from "framer-motion"
import { FileText, Eye, Bot, ArrowRight } from "lucide-react"

type Variant = "teal" | "blue" | "orange"

interface ProductCardProps {
  icon: React.ReactNode
  title: string
  highlight: string
  description: string
  features: string[]
  cta: string
  variant: Variant
  delay: number
}

const variantConfig: Record<Variant, {
  glow: string
  border: string
  iconBg: string
  iconGlow: string
  bullet: string
  btnBorder: string
  btnText: string
  btnHoverBg: string
  outerGlow: string
}> = {
  teal: {
    glow: "rgba(20,184,166,0.18)",
    border: "rgba(20,184,166,0.5)",
    iconBg: "rgba(20,184,166,0.12)",
    iconGlow: "#14b8a6",
    bullet: "#14b8a6",
    btnBorder: "rgba(20,184,166,0.6)",
    btnText: "#ccfbf1",
    btnHoverBg: "rgba(20,184,166,0.15)",
    outerGlow: "0 0 40px rgba(20,184,166,0.25)",
  },
  blue: {
    glow: "rgba(59,130,246,0.18)",
    border: "rgba(59,130,246,0.5)",
    iconBg: "rgba(59,130,246,0.12)",
    iconGlow: "#3b82f6",
    bullet: "#60a5fa",
    btnBorder: "rgba(59,130,246,0.6)",
    btnText: "#dbeafe",
    btnHoverBg: "rgba(59,130,246,0.15)",
    outerGlow: "0 0 40px rgba(59,130,246,0.25)",
  },
  orange: {
    glow: "rgba(249,115,22,0.18)",
    border: "rgba(249,115,22,0.5)",
    iconBg: "rgba(249,115,22,0.12)",
    iconGlow: "#f97316",
    bullet: "#fb923c",
    btnBorder: "rgba(249,115,22,0.6)",
    btnText: "#ffedd5",
    btnHoverBg: "rgba(249,115,22,0.15)",
    outerGlow: "0 0 40px rgba(249,115,22,0.25)",
  },
}

function ProductCard({ icon, title, highlight, description, features, cta, variant, delay }: ProductCardProps) {
  const cfg = variantConfig[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: cfg.outerGlow }}
      style={{ borderColor: cfg.border }}
      className="group relative flex flex-col rounded-2xl border bg-white/5 backdrop-blur-lg p-8 transition-all duration-300"
    >
      {/* inner gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${cfg.glow} 0%, transparent 70%)` }}
      />

      {/* icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: cfg.iconBg, boxShadow: `0 0 20px ${cfg.iconGlow}44` }}
        className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
      >
        <span style={{ color: cfg.iconGlow }}>{icon}</span>
      </motion.div>

      {/* title */}
      <h3 className="mb-1 font-serif text-2xl font-bold text-white">
        {title}
        <span style={{ color: cfg.iconGlow }}>{highlight}</span>
      </h3>

      {/* divider */}
      <div
        className="my-3 h-px w-full"
        style={{ background: `linear-gradient(to right, ${cfg.border}, transparent)` }}
      />

      {/* description */}
      <p className="mb-5 text-sm leading-relaxed text-white/60">{description}</p>

      {/* features */}
      <ul className="mb-8 flex flex-col gap-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cfg.bullet }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <motion.button
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
        style={{ borderColor: cfg.btnBorder, color: cfg.btnText }}
        className="group/btn relative flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/10"
      >
        {cta}
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </motion.button>
    </motion.div>
  )
}

const products: Omit<ProductCardProps, "delay">[] = [
  {
    icon: <FileText size={28} />,
    title: "Nerion",
    highlight: "DOC",
    description: "Gestión documental con IA",
    features: ["Automatiza clasificación", "Reduce tiempos operativos"],
    cta: "Ver demo",
    variant: "teal",
  },
  {
    icon: <Eye size={28} />,
    title: "NerionVision",
    highlight: "AI",
    description: "Visión por computador",
    features: ["Análisis en tiempo real", "Automatización visual"],
    cta: "Ver más",
    variant: "blue",
  },
  {
    icon: <Bot size={28} />,
    title: "Nerion",
    highlight: "Bot",
    description: "Asistente conversacional",
    features: ["Atención 24/7", "Integración con WhatsApp / Web"],
    cta: "Ver más",
    variant: "orange",
  },
]

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-24">
      {/* background glows */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl text-balance">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              productos
            </span>
          </h2>
          <p className="mt-4 text-base text-white/55">
            Soluciones listas para implementar.
          </p>
        </motion.div>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.title + p.highlight} {...p} delay={i * 0.12} />
          ))}
        </div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <p className="text-lg font-medium text-white/80">
            ¿Quieres una solución a medida?
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.45)" }}
            transition={{ duration: 0.2 }}
            className="group/cta flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300"
          >
            Cotizar solución
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
