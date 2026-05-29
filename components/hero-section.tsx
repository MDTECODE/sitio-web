"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroIllustration } from "./hero-illustration";
import { TechStack } from "./tech-stack";
import { ParticlesBackground } from "./particles-bg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.3,
    },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0F1E]"
      aria-label="Hero section"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Particles */}
      <ParticlesBackground />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-600/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-center sm:text-left items-center sm:items-start"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles size={12} />
                Innovación Tecnológica
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold leading-[1.12] tracking-tight text-balance text-white mb-6"
            >
              Construimos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 animate-shimmer">
                software
              </span>{" "}
              y creamos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 animate-shimmer">
                soluciones
              </span>{" "}
              con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-shimmer">
                IA
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-[520px] mb-10 text-pretty"
            >
              Desarrollamos aplicaciones personalizadas, automatizamos procesos
              y construimos plataformas SaaS innovadoras para impulsar tu
              negocio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <motion.a
                href="contacto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 28px rgba(20, 184, 166, 0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 transition-shadow duration-300"
              >
                Cotiza tu proyecto
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="servicios"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm backdrop-blur-sm hover:border-teal-500/40 hover:bg-teal-500/5 transition-all duration-300"
              >
                Descubre cómo trabajamos
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Social proof mini stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 mt-10 text-center sm:text-left"
            >
              {[
                { value: "10+", label: "Proyectos entregados" },
                { value: "98%", label: "Clientes satisfechos" },
                { value: "1+", label: "Años de experiencia" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Illustration */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center lg:justify-end"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Tech stack strip */}
        <div className="border-t border-white/5 mt-12 pt-12">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
