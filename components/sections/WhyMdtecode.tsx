
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Handshake,
  Layers3,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Soluciones a medida",
    description:
      "Creamos software adaptado a las necesidades, los objetivos y los procesos reales de tu negocio.",
    icon: Blocks,
    tags: ["Desarrollo personalizado", "Enfoque estratégico"],
  },
  {
    number: "02",
    title: "Automatización inteligente",
    description:
      "Optimizamos tareas repetitivas mediante automatizaciones e inteligencia artificial para simplificar las operaciones.",
    icon: Zap,
    tags: ["Inteligencia artificial", "Procesos eficientes"],
  },
  {
    number: "03",
    title: "Preparados para escalar",
    description:
      "Diseñamos soluciones mantenibles y escalables que pueden evolucionar junto con tu empresa.",
    icon: TrendingUp,
    tags: ["Arquitectura moderna", "Evolución continua"],
  },
  {
    number: "04",
    title: "Acompañamiento cercano",
    description:
      "Trabajamos contigo durante el proyecto, con comunicación clara, objetivos definidos y decisiones compartidas.",
    icon: Handshake,
    tags: ["Comunicación directa", "Trabajo colaborativo"],
  },
];

export function WhyMdtecode() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="diferenciadores"
      className="relative isolate overflow-hidden bg-[#030817] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="absolute -left-40 top-20 size-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            <Sparkles className="size-4" />
            El diferencial MDTECODE
          </div>

          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Tecnología con propósito.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Resultados que impulsan.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            No se trata solo de desarrollar tecnología. Se trata de encontrar
            mejores formas de trabajar, resolver problemas y convertir ideas
            en soluciones digitales.
          </p>
        </motion.div>

        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -5 }
                }
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#080F1E]/90 p-6 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-[#0A1425] sm:p-8"
              >
                {/* Resplandor superior */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/80"
                />

                {/* Número y estado decorativo */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm tracking-widest text-slate-600 transition-colors group-hover:text-cyan-400">
                    / {benefit.number}
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                    Enfoque
                  </span>
                </div>

                {/* Icono */}
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.10)]">
                  <Icon
                    aria-hidden="true"
                    className="size-6 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-white sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-xl flex-1 text-sm leading-7 text-slate-400 sm:text-base">
                  {benefit.description}
                </p>

                {/* Etiquetas */}
                <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-800/80 pt-5">
                  {benefit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400 transition-colors group-hover:border-slate-700 group-hover:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Llamada a la acción */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0B192B] via-[#081323] to-[#07101F] p-7 sm:mt-16 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 size-64 rounded-full bg-cyan-400/[0.08] blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium text-cyan-300">
                Tu próximo paso empieza aquí
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                ¿Tienes un reto tecnológico?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Hablemos de tu idea y exploremos cómo convertirla en una
                solución digital para tu negocio.
              </p>
            </div>

            <a
              href="#contacto"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#03101F] shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081323]"
            >
              Hablemos de tu proyecto
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
