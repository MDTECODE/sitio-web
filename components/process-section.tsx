"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb,
  Settings2,
  Code2,
  Rocket,
  ArrowRight,
  X,
} from "lucide-react";

type Variant = "orange" | "teal" | "blue" | "orange-strong";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: Variant;
  caseTitle: string;
  caseDescription: string;
  caseItems: string[];
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Descubrimos",
    description: "Tu idea o necesidad",
    icon: <Lightbulb className="w-7 h-7" />,
    variant: "orange",
    caseTitle: "Diagnóstico estratégico",
    caseDescription:
      "Analizamos el negocio, el problema real, los objetivos y las oportunidades para definir una solución clara antes de construir.",
    caseItems: [
      "Levantamiento de requerimientos",
      "Análisis del problema",
      "Definición de objetivos",
      "Mapa inicial de solución",
    ],
  },
  {
    number: 2,
    title: "Diseñamos",
    description: "La solución perfecta",
    icon: <Settings2 className="w-7 h-7" />,
    variant: "teal",
    caseTitle: "Diseño de solución",
    caseDescription:
      "Convertimos la idea en una experiencia clara, funcional y escalable mediante arquitectura, flujos y diseño de interfaz.",
    caseItems: [
      "Wireframes",
      "Arquitectura inicial",
      "Flujos de usuario",
      "Diseño UI/UX",
    ],
  },
  {
    number: 3,
    title: "Desarrollamos",
    description: "Con tecnología top",
    icon: <Code2 className="w-7 h-7" />,
    variant: "blue",
    caseTitle: "Desarrollo del producto",
    caseDescription:
      "Construimos el sistema usando tecnologías modernas, buenas prácticas y una base preparada para crecer.",
    caseItems: [
      "Frontend moderno",
      "Backend escalable",
      "APIs limpias",
      "Buenas prácticas de desarrollo",
    ],
  },
  {
    number: 4,
    title: "Implementamos",
    description: "Y escalamos contigo",
    icon: <Rocket className="w-7 h-7" />,
    variant: "orange-strong",
    caseTitle: "Implementación y crecimiento",
    caseDescription:
      "Llevamos la solución a producción, configuramos despliegues, monitoreo y acompañamos la evolución del producto.",
    caseItems: [
      "Deploy en producción",
      "Optimización",
      "Monitoreo",
      "Escalamiento continuo",
    ],
  },
];

const VARIANT_STYLES: Record<
  Variant,
  {
    icon: string;
    glow: string;
    border: string;
    hoverBorder: string;
    glowBg: string;
    connector: string;
  }
> = {
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
};

function CaseModal({
  step,
  onClose,
}: {
  step: Step | null;
  onClose: () => void;
}) {
  if (!step) return null;

  const styles = VARIANT_STYLES[step.variant];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative w-full max-w-lg rounded-2xl border ${styles.border} bg-[#0B1220] p-7 text-white shadow-2xl`}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/50 hover:text-white transition"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full border ${styles.border} ${styles.glowBg} ${styles.icon}`}
          >
            {step.icon}
          </div>

          <p className="text-sm text-white/40 mb-1">Caso {step.number}</p>

          <h3 className="text-2xl font-bold mb-3 font-serif">
            {step.caseTitle}
          </h3>

          <p className="text-white/60 leading-relaxed mb-6">
            {step.caseDescription}
          </p>

          <div className="space-y-3">
            {step.caseItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
              >
                <span className={`h-2 w-2 rounded-full ${styles.glowBg}`} />
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className={`mt-7 w-full rounded-full border ${styles.border} px-5 py-3 text-sm font-medium ${styles.icon} hover:bg-white/5 transition cursor-pointer`}
          >
            Entendido
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProcessStep({
  step,
  index,
  onOpen,
}: {
  step: Step;
  index: number;
  onOpen: (step: Step) => void;
}) {
  const styles = VARIANT_STYLES[step.variant];

  return (
    <motion.div
      className="group relative flex flex-col items-center flex-1 min-w-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <motion.div
        className={`relative z-10 mb-5 flex items-center justify-center w-16 h-16 rounded-full border ${styles.border} ${styles.glowBg} ${styles.icon} transition-all duration-300 group-hover:scale-110 group-hover:${styles.glow}`}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {step.icon}
        <span
          className={`absolute inset-0 rounded-full ${styles.glowBg} blur-md opacity-60`}
        />
      </motion.div>

      <motion.div
        className={`w-full rounded-2xl border ${styles.border} ${styles.hoverBorder} bg-white/5 backdrop-blur-lg p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:${styles.glow}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <p className="text-sm font-medium text-white/40 mb-1 tracking-widest uppercase">
          {step.number}.
        </p>

        <h3 className="text-xl font-bold text-white mb-2 font-serif">
          {step.title}
        </h3>

        <p className="text-white/55 text-sm leading-relaxed mb-5">
          {step.description}
        </p>

        <button
          onClick={() => onOpen(step)}
          className={`group/btn flex items-center gap-1.5 px-5 py-2 rounded-full border ${styles.border} ${styles.hoverBorder} text-sm font-medium ${styles.icon} transition-all duration-300 hover:bg-white/5 cursor-pointer`}
        >
          Ver caso
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </motion.div>
    </motion.div>
  );
}

function ConnectorArrow({ index }: { index: number }) {
  const colors = ["text-orange-400", "text-teal-400", "text-blue-400"];
  const glowColors = [
    "drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]",
    "drop-shadow-[0_0_6px_rgba(45,212,191,0.8)]",
    "drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]",
  ];

  return (
    <motion.div
      className={`hidden lg:flex items-center justify-center w-10 shrink-0 ${colors[index]} ${glowColors[index]}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
    >
      <svg
        width="36"
        height="20"
        viewBox="0 0 36 20"
        fill="none"
        className="w-9 h-5"
      >
        <motion.path
          d="M2 10 L14 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M2 10 L14 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M16 10 L28 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.path
          d="M16 10 L28 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </svg>
    </motion.div>
  );
}

export function ProcessSection() {
  const ref = useRef(null);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        ref={ref}
        className="relative bg-[#0B1220] py-24 px-4 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[60px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
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

          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
            {STEPS.map((step, i) => (
              <div key={step.number} className="contents">
                <ProcessStep step={step} index={i} onOpen={setSelectedStep} />
                {i < STEPS.length - 1 && <ConnectorArrow index={i} />}
              </div>
            ))}
          </div>

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

      <CaseModal step={selectedStep} onClose={() => setSelectedStep(null)} />
    </>
  );
}
