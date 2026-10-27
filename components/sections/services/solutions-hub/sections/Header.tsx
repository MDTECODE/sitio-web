import { navItems } from "../constants"

export function Header() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#inicio" className="text-sm font-bold tracking-[.2em] text-white">
          MDTE<span className="text-cyan-300">CODE</span>
        </a>
        <nav className="hidden items-center gap-7 text-xs text-slate-400 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.cta
                  ? "rounded-full border border-cyan-300/40 px-4 py-2 text-cyan-200 hover:bg-cyan-300/10"
                  : "hover:text-white"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-cyan-300/40 px-3 py-2 text-xs text-cyan-200 md:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  )
}