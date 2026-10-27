
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Workflow,
  Layers3,
} from "lucide-react";

const featuredCase = {
  title: "Sistema de gestión documental con IA",
  subtitle: "Automatización inteligente para empresas",
  description:
    "Plataforma diseñada para organizar, clasificar y consultar documentos mediante inteligencia artificial y automatización avanzada.",
  features: [
    "Clasificación automática con IA",
    "Búsqueda semántica inteligente",
    "OCR para documentos escaneados",
    "Panel administrativo moderno",
  ],
  image: "/images/dashboard-preview.jpg",
};

const standardCases = [
  {
    title: "Plataforma SaaS empresarial",
    description:
      "Sistema escalable para centralizar operaciones, usuarios y procesos internos en una sola plataforma.",
    features: [
      "Multiusuario y roles",
      "Dashboard analítico",
      "APIs integradas",
      "Arquitectura escalable",
    ],
    category: "SOFTWARE A MEDIDA",
    icon: Layers3,
    number: "02",
  },
  {
    title: "Automatización con IA",
    description:
      "Soluciones inteligentes para automatizar la atención al cliente, los procesos repetitivos y los flujos operativos.",
    features: [
      "Chatbots inteligentes",
      "Automatización de respuestas",
      "Integración con WhatsApp",
      "Reducción de tareas manuales",
    ],
    category: "INTELIGENCIA ARTIFICIAL",
    icon: Workflow,
    number: "03",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

function FeaturedCase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-500/20 bg-[#040D1B]/90 transition-colors duration-300 hover:border-sky-400/50"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-blue-500/20" />

      <div className="relative border-b border-white/[0.06] bg-[#020817]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            <span className="text-xs font-medium tracking-wide text-slate-300">
              CASO DESTACADO
            </span>
          </div>

          <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1 text-[10px] font-medium text-sky-300">
            01 / 03
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={featuredCase.image}
            alt="Vista previa del dashboard de gestión documental"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040D1B] via-transparent to-[#020817]/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040D1B] to-transparent" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-5 sm:p-7">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium text-sky-400">
            <BrainCircuit className="h-4 w-4" />
            {featuredCase.subtitle}
          </div>

          <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            Sistema de gestión documental{" "}
            <span className="text-sky-400">con IA.</span>
          </h3>
        </div>

        <p className="text-sm leading-7 text-slate-400">
          {featuredCase.description}
        </p>

        <div className="h-px w-full bg-gradient-to-r from-sky-500/30 via-white/[0.07] to-transparent" />

        <div className="grid gap-3 sm:grid-cols-2">
          {featuredCase.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <span className="text-sm leading-5 text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
          <span className="text-[11px] font-medium tracking-[0.16em] text-slate-500">
            SOLUCIÓN CON IA
          </span>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-colors group-hover:text-sky-300">
            Caso de estudio
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

type StandardCaseProps = (typeof standardCases)[number];

function StandardCase({
  title,
  description,
  features,
  category,
  icon: Icon,
  number,
}: StandardCaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-500/15 bg-[#040D1B]/80 p-5 transition-colors duration-300 hover:border-sky-400/40 sm:p-6"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.07] blur-3xl transition-colors duration-500 group-hover:bg-blue-500/15" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] text-sky-400 transition-colors duration-300 group-hover:bg-sky-400/[0.14]">
          <Icon className="h-5 w-5" />
        </div>

        <span className="font-mono text-sm text-slate-600">{number}</span>
      </div>

      <div className="relative mt-5">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.17em] text-sky-400">
          {category}
        </p>

        <h3 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

      <div className="my-5 h-px bg-gradient-to-r from-sky-500/25 via-white/[0.06] to-transparent" />

      <ul className="relative flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400/90" />
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[10px] tracking-[0.14em] text-slate-500">
          MDTECODE
        </span>

        <ArrowRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.article>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portafolio"
      aria-labelledby="portfolio-heading"
      className="relative isolate overflow-hidden bg-[#020817] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      {/* Fondo tecnológico */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(14,165,255,0.10),transparent_38%),radial-gradient(ellipse_at_90%_80%,rgba(37,99,235,0.09),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              <span className="text-xs font-semibold tracking-[0.22em] text-sky-400 sm:text-sm">
                PROYECTOS DESTACADOS
              </span>
              <span className="h-px w-10 bg-sky-500/50" />
            </div>

            <h2
              id="portfolio-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Tecnología diseñada para{" "}
              <span className="text-sky-400">escalar negocios.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base lg:pb-1">
            Diseñamos soluciones digitales que automatizan procesos, conectan
            sistemas y ayudan a las empresas a trabajar de forma más inteligente.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid items-stretch gap-5 lg:grid-cols-2"
        >
          <FeaturedCase />

          <div className="grid auto-rows-fr gap-5">
            {standardCases.map((solution) => (
              <StandardCase key={solution.title} {...solution} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.07]">
              <Sparkles className="h-5 w-5 text-sky-400" />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                ¿Tienes una idea por desarrollar?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Convirtámosla en una solución digital.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-[#020817] transition-colors duration-200 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#soluciones"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-sky-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Ver soluciones
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
