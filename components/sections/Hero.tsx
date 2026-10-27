"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const services = [
  "Desarrollo web",
  "Aplicaciones a medida",
  "Automatización",
  "Experiencias digitales",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#050912] text-white"
    >
      {/* Imagen espacial de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      />

      {/* Oscurece la imagen para mejorar la legibilidad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#050912]/55"
      />

      {/* Retícula sutil superpuesta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(90,160,255,.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,160,255,.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pt-44">
        {/* Columna izquierda: mensaje */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
            Soluciones tecnológicas · MDTECODE
          </div>

          <h1 className="max-w-3xl font-[var(--font-sora)] text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem]">
            Transformamos
            <br />
            ideas en{" "}
            <span className="text-sky-400">software.</span>
            <br />
            Creamos lo que sigue.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Diseñamos y desarrollamos soluciones digitales que ayudan
            a las empresas a trabajar mejor, crecer y convertir sus
            ideas en productos reales.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,102,255,0.3)] transition hover:bg-blue-500"
            >
              Hablemos de tu proyecto
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#soluciones"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Explorar soluciones
            </Link>
          </div>
        </div>

        {/* Columna derecha: panel de terminal */}
        <div className="relative z-10 mx-auto w-full max-w-[620px]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-2xl border border-sky-300/25 bg-[#07101d]/90 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Barra de título */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />

                <span className="ml-3 font-mono text-xs text-slate-400">
                  mdtecode — workspace
                </span>
              </div>

              <Terminal size={16} className="text-slate-500" />
            </div>

            {/* Terminal */}
            <div className="space-y-5 p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
              <div>
                <p className="text-sky-400">
                  <span className="text-slate-500">$</span>{" "}
                  mdtecode overview
                </p>

                <p className="text-slate-400">
                  Construyendo soluciones digitales...
                </p>
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-1 border-y border-white/10 py-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="col-span-2 grid grid-cols-[1fr_auto] gap-x-5"
                  >
                    <span className="text-slate-200">{service}</span>
                    <span className="flex items-center gap-2 text-sky-400">
                      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                      Activo
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sky-400">
                  <span className="text-slate-500">$</span>{" "}
                  mdtecode approach
                </p>

                <p className="text-slate-400">
                  idea <span className="text-slate-600">→</span> diseño{" "}
                  <span className="text-slate-600">→</span> desarrollo{" "}
                  <span className="text-slate-600">→</span> producto
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sky-400">
                  <span className="text-slate-500">$</span>{" "}
                  mdtecode ready
                </p>

                <p className="flex items-center gap-2 text-slate-300">
                  Listos para construir el futuro.
                  <span className="inline-block h-4 w-2 animate-pulse bg-sky-400" />
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400/70">
            Ingeniería · Diseño · Tecnología
          </p>
        </div>
      </div>
    </section>
  );
}