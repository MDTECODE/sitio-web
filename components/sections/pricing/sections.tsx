import { Check } from "lucide-react"
import {
  categories, excludedItems, includedItems, CONTACT_EMAIL,
} from "./data"
import { PriceCard } from "./server-ui"
import { Faq } from "./client-ui"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,.18),transparent_35%),linear-gradient(rgba(40,120,200,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(40,120,200,.035)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="mb-5 text-sm font-semibold text-cyan-300">MDTECODE / PRECIOS</p>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Precios transparentes.{" "}
          <span className="text-cyan-300">Tecnología sin límites.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Encuentra el servicio que necesitas y conoce nuestras tarifas. Soluciones digitales
          diseñadas para ayudarte a crecer, con precios claros y opciones para diferentes
          necesidades.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#catalogo"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Explorar precios
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-300/50"
          >
            Hablar con un asesor
          </a>
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-5 text-slate-500">
          Los precios publicados corresponden a los alcances descritos. Los requisitos especiales
          se revisan antes de confirmar el proyecto.
        </p>
      </div>
    </section>
  )
}

export function CategoryNav() {
  return (
    <nav
      id="catalogo"
      aria-label="Categorías de precios"
      className="sticky top-0 z-10 overflow-x-auto border-b border-white/10 bg-[#030817]/95 backdrop-blur"
    >
      <div className="mx-auto flex min-w-max max-w-7xl gap-2 px-5 py-3">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200"
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export function PriceCatalog() {
  return (
    <>
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-20">
          <div className="mb-7 max-w-2xl">
            <p className="text-sm font-semibold text-cyan-300">
              CATÁLOGO / {category.id.toUpperCase()}
            </p>
            <h2 className="mt-2 text-3xl font-black">{category.name}</h2>
            <p className="mt-3 leading-7 text-slate-400">{category.intro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => (
              <PriceCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export function IncludedExcluded() {
  return (
    <section className="grid gap-5 rounded-2xl border border-white/10 bg-[#071426] p-7 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold">Qué incluye el precio</h2>
        <ul className="mt-5 space-y-3 text-sm text-slate-300">
          {includedItems.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="size-4 text-cyan-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Puede tener un costo adicional</h2>
        <ul className="mt-5 space-y-3 text-sm text-slate-300">
          {excludedItems.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-amber-300">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-blue-950/70 to-[#071426] p-8 text-center md:p-12">
      <h2 className="text-3xl font-black">¿No encuentras el servicio que necesitas?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        Cuéntanos qué quieres desarrollar y te ayudaremos a definir el alcance adecuado para tu
        proyecto.
      </p>
      <div id="contacto" className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
        >
          Solicitar una cotización
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-200"
        >
          Hablar con MDTECODE
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Confirma el canal de contacto y las condiciones comerciales antes de publicar.
      </p>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="border-t border-white/10 bg-[#071426] px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-cyan-300">PREGUNTAS FRECUENTES</p>
        <h2 className="mt-2 text-3xl font-black">Antes de solicitar tu propuesta</h2>
        <Faq />
      </div>
    </section>
  )
}