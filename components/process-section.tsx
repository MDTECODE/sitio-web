"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Settings2, Code2, Rocket, ArrowRight } from "lucide-react"

type Variant = "orange" | "teal" | "blue" | "orange-strong"

interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  variant: Variant
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Descubrimos",
    description: "Tu idea o necesidad",
    icon: <Lightbulb className="w-7 h-7" />,
    variant: "orange",
  },
  {
    number: 2,
    title: "Diseñamos",
    description: "La solución perfecta",
    icon: <Settings2 className="w-7 h-7" />,
    variant: "teal",
  },
  {
    number: 3,
    title: "Desarrollamos",
    description: "Con tecnología top",
    icon: <Code2 className="w-7 h-7" />,
    variant: "blue",
  },
  {
    number: 4,
    title: "Implementamos",
    description: "Y escalamos contigo",
    icon: <Rocket className="w-7 h-7" />,
    variant: "orange-strong",
  },
]

const VARIANT_STYLES: Record<Variant, {
  icon: string
  glow: string
  border: string
  hoverBorder: string
  glowBg: string
  connector: string
}> = {
  orange: {
    icon: "text-orange-400",
    glow: "shadow-[0_0_24px_rgba(251,146,60,0.35)]",
    border: "border-orange-500/30",
    hoverBorder: "group-hover:border-orange-400/70",
    glowBg: "bg-orange-500/10",
    connector: "from-orange-400 to-teal-400",
  },
  teal: {
    icon: "text-teal-400",
    glow: "shadow-[0_0_24px_rgba(45,212,191,0.35)]",
    border: "border-teal-500/30",
    hoverBorder: "group-hover:border-teal-400/70",
    glowBg: "bg-teal-500/10",
    connector: "from-teal-400 to-blue-400",
  },
  blue: {
    icon: "text-blue-400",
    glow: "shadow-[0_0_24px_rgba(96,165,250,0.35)]",
    border: "border-blue-500/30",
    hoverBorder: "group-hover:border-blue-400/70",
    glowBg: "bg-blue-500/10",
    connector: "from-blue-400 to-orange-400",
  },
  "orange-strong": {
    icon: "text-orange-300",
    glow: "shadow-[0_0_32px_rgba(251,146,60,0.45)]",
    border: "border-orange-400/40",
    hoverBorder: "group-hover:border-orange-300/80",
    glowBg: "bg-orange-400/10",
    connector: "",
  },
}

function ProcessStep({ step, index }: { step: Step; index: number }) {
  const styles = VARIANT_STYLES[step.variant]

  return (
    <motion.div
      className="group relative flex flex-col items-center flex-1 min-w-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Icon circle */}
      <motion.div
        className={`relative z-10 mb-5 flex items-center justify-center w-16 h-16 rounded-full border ${styles.border} ${styles.glowBg} ${styles.icon} transition-all duration-300 group-hover:scale-110 group-hover:${styles.glow}`}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {step.icon}
        {/* inner glow ring */}
        <span className={`absolute inset-0 rounded-full ${styles.glowBg} blur-md opacity-60`} />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`w-full rounded-2xl border ${styles.border} ${styles.hoverBorder} bg-white/5 backdrop-blur-lg p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:${styles.glow}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <p className="text-sm font-medium text-white/40 mb-1 tracking-widest uppercase">
          {step.number}.
        </p>
        <h3 className="text-xl font-bold text-white mb-2 font-serif">{step.title}</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">{step.description}</p>

        {/* CTA */}
        <button
          className={`group/btn flex items-center gap-1.5 px-5 py-2 rounded-full border ${styles.border} ${styles.hoverBorder} text-sm font-medium ${styles.icon} transition-all duration-300 hover:bg-white/5`}
        >
          Ver caso
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </motion.div>
    </motion.div>
  )
}

function ConnectorArrow({ index, color }: { index: number; color: string }) {
  const colors = ["text-orange-400", "text-teal-400", "text-blue-400"]
  const glowColors = [
    "drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]",
    "drop-shadow-[0_0_6px_rgba(45,212,191,0.8)]",
    "drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]",
  ]

  return (
    <motion.div
      className={`hidden lg:flex items-center justify-center w-10 shrink-0 ${colors[index]} ${glowColors[index]}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
    >
      {/* double chevron */}
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="w-9 h-5">
        <motion.path
          d="M2 10 L14 2"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M2 10 L14 18"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M16 10 L28 2"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M16 10 L28 18"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </motion.div>
  )
}

export function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative bg-[#0B1220] py-24 px-4 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif text-balance">
            Cómo{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              trabajamos
            </span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            Del concepto a la implementación, escalamos contigo.
          </p>
        </motion.div>

        {/* Steps — desktop: row, mobile: column, tablet: 2x2 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents">
              <ProcessStep step={step} index={i} />
              {i < STEPS.length - 1 && (
                <ConnectorArrow index={i} color="" />
              )}
            </div>
          ))}
        </div>

        {/* Animated connecting line — desktop only */}
        <div className="hidden lg:block relative mt-6 h-0.5 max-w-4xl mx-auto overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400 via-teal-400 via-blue-400 to-orange-400 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  )
}
