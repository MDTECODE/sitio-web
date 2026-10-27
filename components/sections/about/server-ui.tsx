import { navItems } from "./data"

export function Header() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="font-black tracking-[-.06em] text-white">
          MDTE<span className="text-cyan-300">CODE</span>
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-sm text-slate-300 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.active ? "text-white" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
        >
          Hablemos
        </a>
      </div>
    </header>
  )
}

export function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />
    </svg>
  )
}