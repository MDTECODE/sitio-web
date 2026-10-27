"use client"

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Code2, PenTool, Rocket, Search, Target, X } from "lucide-react";

type Stage = {
  number: string
  name: string
  description: string
  activities: string[]
  icon: LucideIcon
}

const stages: Stage[] = [
  {
    number: "01",
    name: "Descubrimiento",
    description: "Convertimos el contexto de tu negocio en una dirección clara para construir la solución adecuada.",
    activities: ["Diagnóstico estratégico", "Levantamiento de requerimientos", "Análisis del problema", "Definición de objetivos", "Mapa inicial de solución"],
    icon: Search,
  },
  {
    number: "02",
    name: "Estrategia",
    description: "Aterrizamos la visión en un plan accionable, priorizado y alineado con tus metas.",
    activities: ["Definición del alcance", "Priorización de funcionalidades", "Selección tecnológica", "Arquitectura inicial", "Hoja de ruta del proyecto"],
    icon: Target,
  },
  {
    number: "03",
    name: "Diseño",
    description: "Diseñamos una experiencia intuitiva y una arquitectura preparada para responder a tus necesidades.",
    activities: ["Diseño UI/UX", "Prototipos navegables", "Arquitectura de información", "Sistema visual", "Validación de experiencia"],
    icon: PenTool,
  },
  {
    number: "04",
    name: "Desarrollo",
    description: "Construimos la solución, integramos los sistemas necesarios y validamos su funcionamiento.",
    activities: ["Desarrollo frontend", "Desarrollo backend", "Integración de APIs", "Automatización de procesos", "Pruebas y control de calidad"],
    icon: Code2,
  },
  {
    number: "05",
    name: "Lanzamiento",
    description: "Preparamos la publicación, verificamos los resultados y dejamos la solución lista para evolucionar.",
    activities: ["Despliegue a producción", "Verificación técnica", "Configuración de analítica", "Acompañamiento inicial", "Mejora continua"],
    icon: Rocket,
  },
]

const tickMarks = Array.from({ length: 40 })


function StageModal({
  stage,
  onClose,
  reduceMotion,
}: {
  stage: Stage | null;
  onClose: () => void;
  reduceMotion: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!stage || !mounted) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab") {
        const dialog = document.getElementById("process-modal");
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const focusTimer = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [stage, mounted, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {stage && (
        <motion.div
          key="process-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#010611]/85 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.section
            id="process-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="process-modal-title"
            aria-describedby="process-modal-description"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
              scale: reduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : 10,
              scale: reduceMotion ? 1 : 0.98,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
            className="relative my-auto max-h-[calc(100vh-2rem)] max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-cyan-300/25 bg-[#080F1D] p-6 shadow-[0_0_60px_rgba(14,165,255,0.2)] sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
            />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar información de la fase"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-slate-500/30 text-slate-400 transition hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-5 sm:top-5"
            >
              <X aria-hidden="true" className="size-5" />
            </button>

            <div className="flex items-center gap-4 pr-10">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-[#0b1b31] text-cyan-300 shadow-[0_0_24px_rgba(14,165,255,0.18)]">
                {(() => {
                  const ModalIcon = stage.icon;
                  return <ModalIcon aria-hidden="true" className="size-6" />;
                })()}
              </span>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-400">
                  Fase {stage.number}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  {stage.name}
                </p>
              </div>
            </div>

            <h2
              id="process-modal-title"
              className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {stage.name}
            </h2>

            <p
              id="process-modal-description"
              className="mt-3 max-w-lg text-sm leading-7 text-slate-300 sm:text-base"
            >
              {stage.description}
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              {stage.activities.map((activity) => (
                <div
                  key={activity}
                  className="flex items-center gap-3 rounded-xl border border-slate-500/20 bg-[#111d2e] px-4 py-3.5 text-sm text-slate-200"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  />
                  <span>{activity}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full rounded-xl border border-cyan-300/50 bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#03101f] shadow-[0_0_22px_rgba(34,211,238,0.18)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Entendido
            </button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}


export function Process() {
  const shouldReduceMotion = useReducedMotion()
  const [activeStage, setActiveStage] = useState<Stage | null>(null)
  const reveal = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" as const },
  }

  return (
    <section id="proceso" className="relative isolate overflow-hidden bg-[#020817] py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(30,105,180,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,105,180,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 size-[32rem] rounded-full bg-blue-600/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-64 -left-48 size-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...reveal} className="relative mx-auto flex size-64 items-center justify-center rounded-full border border-slate-500/60 bg-[#020817]/70 shadow-[0_0_40px_rgba(14,165,255,0.12)] sm:size-72">
          <div aria-hidden="true" className="absolute flex size-64 items-center justify-center sm:size-72">
            {tickMarks.map((_, index) => <span key={index} className="absolute h-1.5 w-px origin-[0_128px] bg-slate-300/80 sm:origin-[0_144px]" style={{ transform: `rotate(${index * 9}deg) translateY(-128px)` }} />)}
            <span className="absolute right-8 top-10 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
          </div>
          <div className="relative text-center"><h1 className="text-4xl font-semibold tracking-tight">Proceso</h1><div className="mx-auto mt-5 h-px w-10 bg-cyan-400 shadow-[0_0_12px_#0ea5ff]" /></div>
        </motion.div>

        <div className="relative mt-20 lg:mt-28">
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[7.2rem] hidden h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-300 shadow-[0_0_14px_rgba(14,165,255,0.8)] lg:block" />
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <motion.article key={stage.number} {...reveal} transition={{ ...reveal.transition, delay: shouldReduceMotion ? 0 : index * 0.1 }} className="group relative flex flex-col items-center text-center lg:min-w-0">
                  <button type="button" onClick={() => setActiveStage(stage)} aria-label={`Ver detalles de ${stage.name}`} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-full border border-blue-400/60 bg-[#040d1b]/90 px-4 py-2.5 text-left shadow-[0_0_24px_rgba(14,165,255,0.08)] transition duration-300 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(14,165,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/70 bg-blue-950/80 text-cyan-300 shadow-[0_0_12px_rgba(14,165,255,0.55)]"><Icon aria-hidden="true" className="size-5" /></span>
                    <span className="whitespace-nowrap text-sm font-semibold text-slate-100">{stage.name}</span>
                  </button>
                  <button type="button" onClick={() => setActiveStage(stage)} aria-label={`Abrir ${stage.name}`} className="flex size-16 cursor-pointer items-center justify-center rounded-full border border-blue-400/70 bg-[#051226] shadow-[0_0_25px_rgba(14,165,255,0.42)] transition duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_32px_rgba(14,165,255,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"><span className="size-5 rounded-full bg-white shadow-[0_0_18px_#fff,0_0_30px_#38bdf8]" /></button>
                  <div aria-hidden="true" className="h-16 w-px bg-gradient-to-b from-slate-300/80 to-blue-400/50" />
                  <span className="mt-4 text-xs font-medium tracking-[0.3em] text-cyan-400/80">{stage.number}</span>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400 lg:sr-only">{stage.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-blue-300/10 pt-10 sm:mt-24 sm:grid-cols-2 sm:gap-0 sm:pt-12">
          <motion.div {...reveal} className="sm:pr-12"><div className="flex items-center gap-4 text-cyan-400"><span className="text-lg font-medium">01</span><span className="h-px w-12 bg-cyan-400" /></div><h2 className="mt-4 text-xl font-semibold tracking-tight">Estrategia y planificación</h2><p className="mt-4 max-w-md leading-7 text-slate-400">Analizamos tus necesidades, entendemos tu negocio y definimos la arquitectura y la hoja de ruta del proyecto.</p></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: shouldReduceMotion ? 0 : 0.12 }} className="border-slate-400/30 sm:border-l sm:pl-12"><div className="flex items-center gap-4 text-cyan-400"><span className="text-lg font-medium">02</span><span className="h-px w-12 bg-cyan-400" /></div><h2 className="mt-4 text-xl font-semibold tracking-tight">Diseño y desarrollo</h2><p className="mt-4 max-w-md leading-7 text-slate-400">Diseñamos la experiencia, construimos la solución, integramos los sistemas necesarios y validamos su funcionamiento para lograr un lanzamiento exitoso.</p></motion.div>
        </div>
      </div>
      {activeStage && <StageModal stage={activeStage} onClose={() => setActiveStage(null)} reduceMotion={Boolean(shouldReduceMotion)} />}
    </section>
  )
}
