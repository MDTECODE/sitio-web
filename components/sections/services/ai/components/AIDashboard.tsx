import {
  Activity, BarChart3, Bot, BrainCircuit, FileText, Workflow,
} from "lucide-react"

const ecosystemNodes = [
  { name: "Docs", status: "19%", position: "left-0 top-4", icon: FileText },
  { name: "Asistente", status: "Activo", position: "right-0 top-4", icon: Bot },
  { name: "Datos", status: "Listo", position: "bottom-3 left-0", icon: BarChart3 },
  { name: "Flujos", status: "4", position: "bottom-3 right-0", icon: Workflow },
]

const activityItems = [
  { label: "Consulta preparada", status: "Listo", variant: "emerald" },
  { label: "Fuente autorizada", status: "Listo", variant: "emerald" },
  { label: "Flujo en revisión", status: "Revisión", variant: "amber" },
] as const

const variantClasses = {
  emerald: "bg-emerald-300/10 text-emerald-200",
  amber: "bg-amber-300/10 text-amber-200",
} as const

export function AIDashboard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#071321] p-4 shadow-[0_0_90px_rgba(14,116,255,0.16)] sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,120,200,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(40,120,200,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.18em] text-slate-500">
        <span>MDTE / AI workspace</span>
        <span className="flex items-center gap-2 text-cyan-300">
          <span className="size-1.5 rounded-full bg-cyan-300" /> entorno ilustrativo
        </span>
      </div>

      <div className="relative mt-5 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-white">Ecosistema de IA</p>
            <Activity className="size-4 text-cyan-300" />
          </div>
          <div className="relative mt-5 grid min-h-[270px] place-items-center">
            <svg aria-hidden="true" className="absolute inset-0 size-full">
              <line x1="50%" y1="50%" x2="19%" y2="20%" stroke="#38bdf8" strokeOpacity=".38" />
              <line x1="50%" y1="50%" x2="81%" y2="20%" stroke="#38bdf8" strokeOpacity=".38" />
              <line x1="50%" y1="50%" x2="18%" y2="80%" stroke="#38bdf8" strokeOpacity=".38" />
              <line x1="50%" y1="50%" x2="82%" y2="80%" stroke="#38bdf8" strokeOpacity=".38" />
            </svg>

            <div className="relative flex size-28 flex-col items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-300/10 text-center shadow-[0_0_45px_rgba(34,211,238,0.24)]">
              <BrainCircuit className="size-7 text-cyan-200" />
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white">
                IA core
              </span>
            </div>

            {ecosystemNodes.map(({ name, status, position, icon: IconComponent }) => (
              <div
                key={name}
                className={`absolute ${position} flex w-[42%] items-center gap-2 rounded-xl border border-white/10 bg-[#10243a] p-2`}
              >
                <IconComponent className="size-4 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-[10px] text-slate-400">{name}</p>
                  <p className="text-xs font-semibold text-white">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">
              Procesamiento de documentos
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <FileText className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-white">Contrato_entrada.pdf</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-cyan-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Activity className="size-4 text-cyan-300" /> Actividad reciente
            </div>
            {activityItems.map(({ label, status, variant }) => (
              <div key={label} className="mt-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">{label}</span>
                <span className={`rounded-full px-2 py-1 text-[10px] ${variantClasses[variant]}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}