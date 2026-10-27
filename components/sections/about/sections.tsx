import { ArrowRight, Lightbulb } from "lucide-react"
import {
  capabilities, founders, methodology, philosophy, principles,
  type Founder,
} from "./data"
import { GlobeIcon } from "./server-ui"
import { FadeIn } from "./client-ui"

// ---------- Hero ----------

export function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-48">
      <FadeIn trigger="mount">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-cyan-300">
          Nosotros · MDTECODE
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[.98] tracking-[-.06em] text-white sm:text-7xl">
          Creamos tecnología con intención.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          En MDTECODE transformamos ideas y desafíos empresariales en soluciones digitales
          diseñadas para resolver problemas reales y abrir nuevas posibilidades.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#vision"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Conoce nuestra visión <ArrowRight className="size-4" />
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </FadeIn>

      <FadeIn trigger="mount" className="relative mx-auto aspect-square w-full max-w-[480px]">
        <div className="absolute inset-10 rotate-45 rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[.04] shadow-[0_0_90px_rgba(34,211,238,.12)]" />
        <div className="absolute inset-20 rounded-full border border-blue-400/30 bg-blue-500/[.08]" />
        <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-cyan-200/50 bg-[#071426] shadow-[0_0_70px_rgba(34,211,238,.28)]">
          <img
            src="/mdtecode-symbol.png"
            alt="Símbolo original de MDTECODE"
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
        </div>
        <div className="absolute left-3 top-1/2 size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(34,211,238,.35)]" />
        <div className="absolute right-6 top-16 size-2 rounded-full bg-blue-300 shadow-[0_0_18px_6px_rgba(96,165,250,.35)]" />
        <div className="absolute bottom-12 right-10 size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(34,211,238,.3)]" />
      </FadeIn>
    </section>
  )
}

// ---------- Vision ----------

export function Vision() {
  return (
    <section
      id="vision"
      className="relative z-10 border-y border-white/10 bg-[#071426]/60 px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
            Quiénes somos
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Tecnología que responde a necesidades reales.
          </h2>
        </FadeIn>
        <FadeIn className="max-w-2xl space-y-5 text-lg leading-8 text-slate-300">
          <p>
            MDTECODE es una marca enfocada en el desarrollo de soluciones digitales, software
            personalizado y experiencias tecnológicas.
          </p>
          <p>
            Buscamos comprender las necesidades de cada proyecto para diseñar soluciones
            funcionales, claras y preparadas para evolucionar.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ---------- Founders ----------

export function Founders() {
  return (
    <section
      id="fundadores"
      className="relative z-10 overflow-hidden border-y border-white/10 bg-[#020617] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgba(8,145,178,0.12),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-cyan-300">
            Las personas detrás de MDTECODE
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">
            El equipo que impulsa nuestras ideas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Dos perspectivas, una misma visión: construir tecnología útil para resolver retos
            reales.
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16">
          {founders.map((founder, i) => (
            <FadeIn key={founder.initials} delay={i * 0.1}>
              <FounderCard founder={founder} index={i} />
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Diseño preparado para incorporar una fotografía real de cada fundador cuando esté
          disponible.
        </p>
      </div>
    </section>
  )
}

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  return (
    <article className="group relative isolate min-h-[490px] overflow-hidden rounded-[1.75rem] border border-white/[.16] bg-[#050b1b] shadow-[0_18px_70px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_80px_rgba(8,145,178,.12)] sm:min-h-[540px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.15)_0%,rgba(3,8,23,.08)_45%,#020617_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[72%] overflow-hidden">
        <div className="absolute left-1/2 top-[34%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[65px] transition duration-700 group-hover:bg-cyan-400/30" />
        <div className="absolute left-1/2 top-[38%] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[55px]" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(148,163,184,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.18)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="absolute left-[18%] right-[18%] top-[24%] h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
        <div className="absolute bottom-[8%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <span className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-xl border border-white/15 bg-slate-950/50 p-1.5 backdrop-blur">
          <img
            src="/mdtecode-symbol.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </span>
        <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-300 backdrop-blur">
          0{index + 1} / Fundador
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-[62%] bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-7 pt-28 text-center sm:px-8 sm:pb-9">
        <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-cyan-200/30 bg-slate-950/70 text-2xl font-black tracking-[-.06em] text-white shadow-[0_0_45px_rgba(34,211,238,.16)] backdrop-blur transition duration-500 group-hover:scale-105 group-hover:border-cyan-200/60">
          {founder.initials}
          <span className="text-cyan-300">.</span>
        </div>
        <h3 className="text-2xl font-bold tracking-[-.03em] text-white sm:text-3xl">
          {founder.name}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-cyan-100/90">{founder.role}</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          {founder.bio}
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[.24em] text-slate-500">
          MDTECODE · Tecnología con intención
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/[.04]"
      />
    </article>
  )
}

// ---------- Philosophy ----------

export function Philosophy() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
          Filosofía de trabajo
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Cómo entendemos la tecnología.
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {philosophy.map(({ title, text, icon: IconComponent }, i) => (
          <FadeIn key={title} delay={i * 0.08}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/35">
              <IconComponent className="size-7 text-cyan-300" />
              <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// ---------- Methodology ----------

export function Methodology() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#071426]/55 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
            Metodología
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            De una necesidad a una solución.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {methodology.map(({ title, text }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="relative border-l border-cyan-300/35 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6">
                <span className="absolute -left-[5px] top-0 size-2 rounded-full bg-cyan-300 md:left-0 md:top-[-5px]" />
                <p className="text-sm font-bold text-cyan-200">0{i + 1}</p>
                <h3 className="mt-3 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Capabilities ----------

const capabilityIcons = [GlobeIcon, ...capabilities.slice(1).map((c) => c.icon)]

export function Capabilities() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
          Capacidades
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Áreas para convertir ideas en producto.
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ title, href }, i) => {
          const IconComponent = capabilityIcons[i]
          return (
            <a
              key={title}
              href={href}
              className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:border-cyan-300/35 hover:bg-cyan-300/[.06]"
            >
              <IconComponent className="size-6 text-cyan-300" />
              <span className="mt-7 block font-semibold text-white">{title}</span>
              <ArrowRight className="mt-4 size-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
            </a>
          )
        })}
      </div>
    </section>
  )
}

// ---------- Principles ----------

export function Principles() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-[#071426]/55 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
            Principios
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
            Lo esencial, bien pensado.
          </h2>
        </FadeIn>

        <div className="mt-9 grid gap-3 md:grid-cols-3">
          {principles.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6">
              <Lightbulb className="size-5 text-cyan-300" />
              <h3 className="mt-5 font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Contact CTA ----------

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="relative z-10 border-t border-white/10 px-6 py-20 text-center lg:px-8 lg:py-28"
    >
      <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">
        Siguiente paso
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
        Las buenas ideas merecen una gran ejecución.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
        Cuéntanos qué quieres construir. Exploremos juntos el camino tecnológico adecuado para tu
        proyecto.
      </p>
      <a
        href="/contacto"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950"
      >
        Hablemos de tu proyecto <ArrowRight className="size-4" />
      </a>
    </section>
  )
}