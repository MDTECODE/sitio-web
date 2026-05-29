"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const featuredCase = {
  title: "Sistema de gestión documental con IA",
  subtitle: "Automatización inteligente para empresas",
  description:
    "Plataforma diseñada para organizar, clasificar y consultar documentos mediante Inteligencia Artificial y automatización avanzada.",
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
      "Sistema escalable diseñado para centralizar operaciones, usuarios y procesos internos en una sola plataforma.",
    features: [
      "Multiusuario y roles",
      "Dashboard analítico",
      "APIs integradas",
      "Arquitectura escalable",
    ],
  },
  {
    title: "Automatización con IA",
    description:
      "Soluciones inteligentes para automatizar atención al cliente, procesos repetitivos y flujos operativos.",
    features: [
      "Chatbots inteligentes",
      "Automatización de respuestas",
      "Integración con WhatsApp",
      "Reducción de tareas manuales",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function FeaturedCase() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden flex flex-col"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={featuredCase.image}
          alt={featuredCase.title}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <p className="text-sm font-medium text-teal-600 mb-2">
            {featuredCase.subtitle}
          </p>

          <h3 className="text-xl font-bold text-slate-800 leading-snug">
            Sistema de gestión documental con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              IA
            </span>
          </h3>
        </div>

        <div className="h-px bg-slate-100" />

        <p className="text-sm text-slate-600 leading-relaxed">
          {featuredCase.description}
        </p>

        <div className="flex flex-col gap-3">
          {featuredCase.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-teal-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* <div className="mt-auto pt-2">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:border-teal-500 hover:text-teal-600 transition-all duration-200 group">
            Explorar solución
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}

function StandardCase({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md flex flex-col p-6 gap-5"
    >
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-bold text-slate-800 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

        <div className="h-px bg-slate-100" />

        <div className="flex flex-col gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-teal-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 
      <div className="pt-2">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:border-teal-500 hover:text-teal-600 transition-all duration-200 group">
          Explorar solución
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div> */}
    </motion.div>
  );
}

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-slate-600 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
            Soluciones digitales
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 text-balance leading-tight">
            Tecnología diseñada para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              escalar negocios
            </span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl text-balance leading-relaxed">
            Diseñamos soluciones modernas que automatizan procesos, mejoran la
            operación y preparan tu empresa para crecer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeaturedCase />

          {standardCases.map((solution) => (
            <StandardCase key={solution.title} {...solution} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-slate-700 text-lg">
            ¿Tienes una <span className="font-bold text-slate-900">idea</span> o
            proceso por mejorar?
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-sm shadow-md hover:shadow-orange-300/60 hover:shadow-lg transition-all duration-200 hover:scale-105">
              Cotiza tu proyecto
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-slate-400 hover:text-slate-900 transition-all duration-200">
              Ver soluciones
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
