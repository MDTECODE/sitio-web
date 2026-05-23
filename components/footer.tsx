"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portafolio", href: "/portafolio" },
];

const serviceLinks = [
  { label: "Desarrollo de Software", href: "/servicios" },
  { label: "Inteligencia Artificial", href: "/servicios" },
  { label: "Automatización", href: "/servicios" },
  { label: "Consultoría IT", href: "/servicios" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos y Condiciones", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

// Pre-computed stable values — no Math.random() to avoid hydration mismatch
const STARS: { top: string; left: string; opacity: number }[] = [
  { top: "20.1%", left: "15.4%", opacity: 0.41 },
  { top: "78.3%", left: "44.5%", opacity: 0.31 },
  { top: "23.2%", left: "84.7%", opacity: 0.49 },
  { top: "69.2%", left: "57.0%", opacity: 0.4 },
  { top: "87.2%", left: "44.2%", opacity: 0.33 },
  { top: "55.9%", left: "85.3%", opacity: 0.38 },
  { top: "50.1%", left: "14.9%", opacity: 0.16 },
  { top: "73.6%", left: "43.9%", opacity: 0.48 },
  { top: "60.9%", left: "28.2%", opacity: 0.46 },
  { top: "41.1%", left: "23.1%", opacity: 0.18 },
  { top: "38.3%", left: "16.3%", opacity: 0.24 },
  { top: "27.9%", left: "23.4%", opacity: 0.15 },
  { top: "99.2%", left: "38.7%", opacity: 0.37 },
  { top: "53.3%", left: "42.1%", opacity: 0.47 },
  { top: "30.8%", left: "67.6%", opacity: 0.15 },
  { top: "78.1%", left: "37.1%", opacity: 0.45 },
  { top: "72.7%", left: "98.5%", opacity: 0.47 },
  { top: "35.2%", left: "48.6%", opacity: 0.41 },
  { top: "50.7%", left: "88.5%", opacity: 0.2 },
  { top: "58.5%", left: "85.5%", opacity: 0.39 },
  { top: "62.5%", left: "63.5%", opacity: 0.15 },
  { top: "16.0%", left: "46.5%", opacity: 0.17 },
  { top: "14.0%", left: "43.6%", opacity: 0.17 },
  { top: "30.0%", left: "17.5%", opacity: 0.16 },
  { top: "48.1%", left: "12.2%", opacity: 0.33 },
  { top: "70.7%", left: "56.3%", opacity: 0.2 },
  { top: "29.0%", left: "7.1%", opacity: 0.21 },
  { top: "15.4%", left: "77.3%", opacity: 0.12 },
  { top: "40.0%", left: "97.8%", opacity: 0.2 },
  { top: "0.9%", left: "3.9%", opacity: 0.31 },
];

function NerionTecLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const textSize = size === "sm" ? "text-xl" : "text-2xl";
  return (
    <div className="flex items-center gap-2">
      <span className={`font-serif font-bold ${textSize} text-white`}>
        Nerion<span className="text-[#22d3ee]">Tec</span>
      </span>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative text-white/60 hover:text-[#22d3ee] transition-colors duration-300 text-sm w-fit"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#22d3ee] group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo electrónico..."
          className="flex-1 bg-transparent text-white/80 placeholder:text-white/30 text-sm outline-none min-w-0"
        />
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 16px rgba(249,115,22,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 text-white"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[#22d3ee] text-xs mt-2 pl-4"
          >
            Gracias, te contactaremos pronto.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0B1220] overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        {/* Stable star particles */}
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{ top: star.top, left: star.left, opacity: star.opacity }}
          />
        ))}
      </div>

      {/* Floating cube decoration */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 opacity-70"
      >
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <polygon
            points="20,4 36,13 36,27 20,36 4,27 4,13"
            fill="#0e7490"
            opacity="0.8"
          />
          <polygon
            points="20,4 36,13 20,22 4,13"
            fill="#22d3ee"
            opacity="0.9"
          />
          <polygon points="20,22 36,13 36,27 20,36" fill="#0891b2" />
          <polygon
            points="20,22 4,13 4,27 20,36"
            fill="#f97316"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Main footer body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Brand centered header */}
        <div className="flex flex-col items-center text-center mb-14">
          <NerionTecLogo size="md" />
          <p className="text-white/50 text-sm mt-3 max-w-sm leading-relaxed">
            Potenciamos tu negocio con tecnología de vanguardia.
          </p>
        </div>

        {/* 4-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Col 1: Brand — mobile only */}
          <motion.div
            variants={colVariants}
            className="lg:hidden flex flex-col gap-3"
          >
            <NerionTecLogo size="sm" />
            <p className="text-white/50 text-sm leading-relaxed">
              Potenciamos tu negocio con tecnología de vanguardia.
            </p>
          </motion.div>

          {/* Col 2: Navegación */}
          <motion.div variants={colVariants} className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Navegación
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </motion.div>

          {/* Col 3: Servicios */}
          <motion.div variants={colVariants} className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Servicios
            </h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </motion.div>

          {/* Col 4: Síguenos */}
          <motion.div
            variants={colVariants}
            className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 14px rgba(34,211,238,0.4)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#22d3ee] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <NewsletterInput />
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10" />

      {/* Bottom bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: mini logo */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <NerionTecLogo size="sm" />
            <p className="text-white/35 text-xs">
              Potenciamos tu negocio con tecnología de vanguardia.
            </p>
          </div>

          {/* Center: copyright + legal */}
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-white/40 text-xs">
              © 2024 NerionTec. Todos los derechos reservados
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {legalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/35 hover:text-[#22d3ee] text-xs transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: back to top */}
          <AnimatePresence>
            {showTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 18px rgba(34,211,238,0.45)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                aria-label="Volver arriba"
                className="w-10 h-10 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee]"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
