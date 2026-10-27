export function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-10 mx-auto max-w-7xl px-6 pt-6 text-xs text-slate-500 lg:px-8"
    >
      <a href="/" className="hover:text-cyan-200">Inicio</a>
      <span className="mx-2">→</span>
      <span className="text-slate-300">Soluciones</span>
    </nav>
  )
}