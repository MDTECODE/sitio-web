"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function FloatingCube({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0], rotate: [0, 8, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path
          d="M26 4L48 16V36L26 48L4 36V16L26 4Z"
          fill="url(#cubeGrad)"
          fillOpacity="0.25"
          stroke="url(#cubeStroke)"
          strokeWidth="1.5"
        />
        <path
          d="M26 4L48 16L26 28L4 16L26 4Z"
          fill="url(#cubeFace)"
          fillOpacity="0.4"
        />
        <path d="M26 28V48" stroke="url(#cubeStroke)" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M26 28L4 16" stroke="url(#cubeStroke)" strokeWidth="1.2" strokeOpacity="0.5" />
        <path d="M26 28L48 16" stroke="url(#cubeStroke)" strokeWidth="1.2" strokeOpacity="0.5" />
        <defs>
          <linearGradient id="cubeGrad" x1="4" y1="4" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="cubeStroke" x1="4" y1="4" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="cubeFace" x1="4" y1="4" x2="48" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67E8F9" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(59,130,246,0.07) 0%, rgba(248,250,252,0) 70%)",
        }}
      />

      {/* Floating cubes */}
      <FloatingCube className="absolute left-6 top-8 opacity-80 md:left-14 md:top-10" />
      <FloatingCube className="absolute right-6 top-8 opacity-70 md:right-14 md:top-10 [animation-delay:1.5s]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="font-serif text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl lg:text-6xl text-balance"
        >
          Impulsa{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #1D4ED8, #0891B2)" }}
          >
            tu negocio
          </span>
          <br />
          con nuestra{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0891B2, #06B6D4)" }}
          >
            experiencia
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="mt-5 text-lg leading-relaxed text-slate-500 md:text-xl"
        >
          Cotiza hoy y descubre cómo podemos ayudarte a crecer.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary – orange gradient */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-400/30"
            style={{
              background: "linear-gradient(135deg, #F97316 0%, #F59E0B 100%)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #FB923C 0%, #FBBF24 100%)",
                boxShadow: "0 0 24px rgba(249,115,22,0.5)",
              }}
            />
            <span className="relative">Cotiza tu proyecto</span>
            <ArrowRight
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          {/* Secondary – dark navy */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03, backgroundColor: "#1e3a8a" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 rounded-full bg-[#1e3163] px-8 py-4 text-base font-semibold text-white shadow-md shadow-blue-900/30"
          >
            Escríbenos ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
