import { BarChart3, PanelLeft, Search } from "lucide-react"

const navItems = ["Overview", "Usuarios", "Operaciones", "Reportes"]
const metrics = [
  { label: "Usuarios", value: "—" },
  { label: "Actividad", value: "—" },
  { label: "Estado", value: "Activo" },
]
const activityBars = [22, 42, 30, 58, 48, 76, 62, 88, 70, 94]

export function PlatformDashboard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#071321] p-4 shadow-[0_0_70px_rgba(14,116,255,0.14)] sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,120,200,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(40,120,200,0.07)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <span>MDTE / platform workspace</span>
        <span className="flex items-center gap-2 text-cyan-300">
          <span className="size-1.5 rounded-full bg-cyan-300" /> online
        </span>
      </div>

      <div className="relative mt-5 grid gap-4 sm:grid-cols-[0.72fr_1.28fr]">
        <aside className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-3">
          <div className="flex items-center gap-2 px-2 py-2 text-xs font-semibold text-white">
            <PanelLeft className="size-4 text-cyan-300" /> workspace
          </div>
          {navItems.map((item, i) => (
            <div
              key={item}
              className={`mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                i === 0 ? "bg-cyan-300/10 text-cyan-200" : "text-slate-500"
              }`}
            >
              <span className="size-1.5 rounded-full bg-current" />
              {item}
            </div>
          ))}
        </aside>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-[#0b1b2c]/90 p-3">
                <p className="text-[10px] text-slate-500">{label}</p>
                <p className="mt-3 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Evolución de actividad</span>
              <BarChart3 className="size-4 text-cyan-300" />
            </div>
            <div className="mt-5 flex h-24 items-end gap-2">
              {activityBars.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-600/70 to-cyan-300/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Search className="size-4 text-cyan-300" /> Actividad reciente
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Panel ilustrativo para representar módulos, usuarios y flujos de una plataforma digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}