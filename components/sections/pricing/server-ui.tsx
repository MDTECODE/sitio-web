import { Check, ExternalLink } from "lucide-react"
import { headerNavItems, type PriceItem } from "./data"

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#030817]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="font-black tracking-tight text-white">
          MDTE<span className="text-cyan-300">CODE</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {headerNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.active ? "text-cyan-300" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#catalogo"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Explorar precios
        </a>
      </div>
    </header>
  )
}

export function PriceCard({ item }: { item: PriceItem }) {
  const labelClass =
    item.label === "Precio fijo"
      ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
      : "border-amber-300/30 bg-amber-300/10 text-amber-200"

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#071426] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(8,145,178,.12)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${labelClass}`}
        >
          {item.label}
        </span>
      </div>

      <p className="mt-5 text-2xl font-black text-cyan-200">{item.price}</p>
      <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>

      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        {item.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan-300" />
            {feature}
          </li>
        ))}
      </ul>

      {item.note && (
        <p className="mt-5 rounded-xl border border-amber-300/15 bg-amber-300/5 p-3 text-xs leading-5 text-amber-100/80">
          {item.note}
        </p>
      )}

      <a
        href="#contacto"
        className="mt-auto pt-6 text-sm font-bold text-cyan-200 hover:text-white"
      >
        {item.cta} <ExternalLink className="ml-1 inline size-3" />
      </a>
    </article>
  )
}