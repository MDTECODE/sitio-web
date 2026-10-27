"use client"

import { motion } from "framer-motion"
import { ArrowRight, BrainCircuit, Compass, Layers3, Lightbulb, Rocket, ScanSearch, Sparkles, UsersRound } from "lucide-react"

const fade = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.55 } }
const heroFade = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65 } }

const philosophy = [
  ["Pensar antes de construir", "Comprendemos el problema y los objetivos antes de decidir cómo resolverlos.", ScanSearch],
  ["Diseñar para las personas", "Buscamos experiencias claras, intuitivas y útiles para quienes utilizan cada solución.", UsersRound],
  ["Construir para evolucionar", "Desarrollamos soluciones con una estructura que facilite su mantenimiento y crecimiento.", Rocket],
] as const

const methodology = [
  ["Descubrimiento", "Entendemos objetivos, usuarios y necesidades."],
  ["Estrategia", "Definimos alcance, prioridades y solución."],
  ["Diseño", "Estructuramos la experiencia y sus componentes."],
  ["Desarrollo", "Implementamos funcionalidades y realizamos pruebas."],
  ["Lanzamiento", "Preparamos la entrega y el despliegue acordado."],
]

const capabilities = [["Desarrollo web", "/soluciones/desarrollo-web", GlobeIcon], ["Software a la medida", "/soluciones/software-a-medida", Layers3], ["Plataformas SaaS", "/soluciones/plataformas-digitales", BrainCircuit], ["Inteligencia artificial", "/soluciones/inteligencia-artificial", Sparkles], ["Diseño UI/UX", "/proyectos", Compass]] as const

const principles = [["Claridad", "Decisiones comprensibles y objetivos definidos."], ["Utilidad", "Tecnología que responde a una necesidad concreta."], ["Evolución", "Soluciones que pueden adaptarse a nuevas necesidades."]]

const founders = [
  {
    name: "Pedro Aldana",
    role: "Co-fundador · CTO y desarrollo de software",
    initials: "PA",
    bio: "Lidera el desarrollo tecnológico de MDTECODE y la construcción de soluciones de software, desde la definición técnica hasta su implementación.",
  },
  {
    name: "Juan Camilo Zambrano",
    role: "Co-fundador · Dirección comercial y gestión de proyectos",
    initials: "JC",
    bio: "Lidera las relaciones comerciales, conversa con los clientes para entender sus necesidades y participa en el levantamiento y definición de los proyectos.",
  },
]

function GlobeIcon({ className }: { className?: string }) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" /></svg> }

export default function About() {
  return <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100"><div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_78%_6%,rgba(14,116,255,0.2),transparent_30%),radial-gradient(circle_at_8%_45%,rgba(6,182,212,0.08),transparent_28%)]" />
    <header className="relative z-10 border-b border-white/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"><a href="/" className="font-black tracking-[-.06em] text-white">MDTE<span className="text-cyan-300">CODE</span></a><nav aria-label="Navegación principal" className="hidden items-center gap-7 text-sm text-slate-300 md:flex"><a href="/soluciones">Soluciones</a><a href="/proyectos">Proyectos</a><a href="/precios">Precios</a><a className="text-white" href="/nosotros">Nosotros</a></nav><a href="#contacto" className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">Hablemos</a></div></header>
    <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-24"><motion.div {...heroFade}><p className="text-xs font-bold uppercase tracking-[.28em] text-cyan-300">Nosotros · MDTECODE</p><h1 className="mt-5 max-w-3xl text-5xl font-black leading-[.98] tracking-[-.06em] text-white sm:text-7xl">Creamos tecnología con intención.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">En MDTECODE transformamos ideas y desafíos empresariales en soluciones digitales diseñadas para resolver problemas reales y abrir nuevas posibilidades.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#vision" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950">Conoce nuestra visión <ArrowRight className="size-4" /></a><a href="#contacto" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">Hablemos de tu proyecto</a></div></motion.div><motion.div {...heroFade} className="relative mx-auto aspect-square w-full max-w-[480px]"><div className="absolute inset-10 rotate-45 rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[.04] shadow-[0_0_90px_rgba(34,211,238,.12)]" /><div className="absolute inset-20 rounded-full border border-blue-400/30 bg-blue-500/[.08]" /><div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-cyan-200/50 bg-[#071426] shadow-[0_0_70px_rgba(34,211,238,.28)]"><img src="/mdtecode-symbol.png" alt="Símbolo original de MDTECODE" className="h-24 w-24 object-contain sm:h-28 sm:w-28" /></div><div className="absolute left-3 top-1/2 size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(34,211,238,.35)]" /><div className="absolute right-6 top-16 size-2 rounded-full bg-blue-300 shadow-[0_0_18px_6px_rgba(96,165,250,.35)]" /><div className="absolute bottom-12 right-10 size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(34,211,238,.3)]" /></motion.div></section>
    <section id="vision" className="relative z-10 border-y border-white/10 bg-[#071426]/60 px-6 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><motion.div {...fade}><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Quiénes somos</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Tecnología que responde a necesidades reales.</h2></motion.div><motion.div {...fade} className="max-w-2xl space-y-5 text-lg leading-8 text-slate-300"><p>MDTECODE es una marca enfocada en el desarrollo de soluciones digitales, software personalizado y experiencias tecnológicas.</p><p>Buscamos comprender las necesidades de cada proyecto para diseñar soluciones funcionales, claras y preparadas para evolucionar.</p></motion.div></div></section>
    <section id="fundadores" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#020617] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgba(8,145,178,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-cyan-300">Las personas detrás de MDTECODE</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">El equipo que impulsa nuestras ideas</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Dos perspectivas, una misma visión: construir tecnología útil para resolver retos reales.</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16">
          {founders.map((founder, i) => (
            <motion.article
              {...fade}
              transition={{ duration: .6, delay: i * .1 }}
              key={founder.initials}
              className="group relative isolate min-h-[490px] overflow-hidden rounded-[1.75rem] border border-white/[.16] bg-[#050b1b] shadow-[0_18px_70px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_80px_rgba(8,145,178,.12)] sm:min-h-[540px]"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.15)_0%,rgba(3,8,23,.08)_45%,#020617_100%)]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[72%] overflow-hidden">
                <div className="absolute left-1/2 top-[34%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[65px] transition duration-700 group-hover:bg-cyan-400/30" />
                <div className="absolute left-1/2 top-[38%] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[55px]" />
                <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(148,163,184,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.18)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <div className="absolute left-[18%] right-[18%] top-[24%] h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
                <div className="absolute bottom-[8%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-xl border border-white/15 bg-slate-950/50 p-1.5 backdrop-blur">
                  <img src="/mdtecode-symbol.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
                </span>
                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-300 backdrop-blur">
                  0{i + 1} / Fundador
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 h-[62%] bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-7 pt-28 text-center sm:px-8 sm:pb-9">
                <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-cyan-200/30 bg-slate-950/70 text-2xl font-black tracking-[-.06em] text-white shadow-[0_0_45px_rgba(34,211,238,.16)] backdrop-blur transition duration-500 group-hover:scale-105 group-hover:border-cyan-200/60">
                  {founder.initials}<span className="text-cyan-300">.</span>
                </div>
                <h3 className="text-2xl font-bold tracking-[-.03em] text-white sm:text-3xl">{founder.name}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-cyan-100/90">{founder.role}</p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{founder.bio}</p>
                <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[.24em] text-slate-500">MDTECODE · Tecnología con intención</p>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/[.04]" />
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-slate-500">Diseño preparado para incorporar una fotografía real de cada fundador cuando esté disponible.</p>
      </div>
    </section>
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><motion.div {...fade}><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Filosofía de trabajo</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Cómo entendemos la tecnología.</h2></motion.div><div className="mt-10 grid gap-4 md:grid-cols-3">{philosophy.map(([title, text, Icon], i) => <motion.article {...fade} transition={{ duration: .55, delay: i * .08 }} key={`${title}-${i}`} className="rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/35"><Icon className="size-7 text-cyan-300" /><h3 className="mt-8 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></motion.article>)}</div></section>
    <section className="relative z-10 border-y border-white/10 bg-[#071426]/55 px-6 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><motion.div {...fade}><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Metodología</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">De una necesidad a una solución.</h2></motion.div><div className="mt-12 grid gap-3 md:grid-cols-5">{methodology.map(([title, text], i) => <motion.div {...fade} transition={{ duration: .5, delay: i * .06 }} key={`${title}-${i}`} className="relative border-l border-cyan-300/35 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6"><span className="absolute -left-[5px] top-0 size-2 rounded-full bg-cyan-300 md:left-0 md:top-[-5px]" /><p className="text-sm font-bold text-cyan-200">0{i + 1}</p><h3 className="mt-3 font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></motion.div>)}</div></div></section>
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8"><motion.div {...fade}><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Capacidades</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Áreas para convertir ideas en producto.</h2></motion.div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(([title, href, Icon], i) => <a key={`${title}-${i}`} href={href} className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:border-cyan-300/35 hover:bg-cyan-300/[.06]"><Icon className="size-6 text-cyan-300" /><span className="mt-7 block font-semibold text-white">{title}</span><ArrowRight className="mt-4 size-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" /></a>)}</div></section>
    <section className="relative z-10 border-t border-white/10 bg-[#071426]/55 px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><motion.div {...fade}><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Principios</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white">Lo esencial, bien pensado.</h2></motion.div><div className="mt-9 grid gap-3 md:grid-cols-3">{principles.map(([title, text], i) => <div key={`${title}-${i}`} className="rounded-2xl border border-white/10 p-6"><Lightbulb className="size-5 text-cyan-300" /><h3 className="mt-5 font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div></section>
    <section id="contacto" className="relative z-10 border-t border-white/10 px-6 py-20 text-center lg:px-8 lg:py-28"><p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Siguiente paso</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">Las buenas ideas merecen una gran ejecución.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">Cuéntanos qué quieres construir. Exploremos juntos el camino tecnológico adecuado para tu proyecto.</p><a href="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950">Hablemos de tu proyecto <ArrowRight className="size-4" /></a></section>
  </main>
}
