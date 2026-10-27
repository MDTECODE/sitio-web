import {
  ArrowRight, Check, Clock3, Database, Globe2, Inbox, Mail,
  ShieldCheck, Workflow,
} from "lucide-react"

const sidebarItems = ["Inicio", "Automatizaciones", "Conexiones", "Historial", "Reportes", "Configuración"]
const flowSteps = ["Pedido recibido", "Información validada", "Registro actualizado", "Notificación preparada"]
const flowNodes = [
  { icon: Inbox, label: "Pedido" },
  { icon: ShieldCheck, label: "Validar" },
  { icon: Database, label: "CRM" },
  { icon: Mail, label: "Avisar" },
]
const connections = ["E-commerce", "CRM", "Correo", "Mensajería", "Datos", "Gestión"]

export function AutomationDashboard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#071321] p-4 shadow-[0_0_80px_rgba(14,116,255,0.15)] sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,120,200,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(40,120,200,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.18em] text-slate-500">
        <span>MDTE / workflow workspace</span>
        <span className="flex items-center gap-2 text-cyan-300">
          <span className="size-1.5 rounded-full bg-cyan-300" /> flujo ilustrativo
        </span>
      </div>

      <div className="relative mt-5 grid gap-4 lg:grid-cols-[0.55fr_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-3">
          <div className="flex items-center gap-2 px-2 py-2 text-xs font-semibold text-white">
            <Workflow className="size-4 text-cyan-300" /> Automatizaciones
          </div>
          {sidebarItems.map((item, i) => (
            <div
              key={item}
              className={`mt-1.5 flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                i === 1 ? "bg-cyan-300/10 text-cyan-200" : "text-slate-500"
              }`}
            >
              <span className="size-1.5 rounded-full bg-current" />
              {item}
            </div>
          ))}
        </aside>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">Flujo de pedidos</p>
                <p className="mt-1 text-sm font-semibold text-white">Nuevo pedido → equipo</p>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-[10px] text-emerald-200">
                Ejemplo
              </span>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <svg aria-hidden="true" className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-2 w-[80%] sm:block">
                <line x1="0" y1="4" x2="100%" y2="4" stroke="#22d3ee" strokeDasharray="4 6" strokeWidth="1.5" />
                <circle cx="35%" cy="4" r="2" fill="#67e8f9" />
                <circle cx="72%" cy="4" r="2" fill="#67e8f9" />
              </svg>
              {flowNodes.map(({ icon: IconComponent, label }, i) => (
                <div key={label} className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-[#10243a] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                    <IconComponent className="size-5" />
                  </span>
                  <span className="text-[10px] text-slate-400">{label}</span>
                  {i < flowNodes.length - 1 && (
                    <ArrowRight aria-hidden="true" className="absolute -right-4 top-4 hidden size-3 text-cyan-300/60 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock3 className="size-4 text-cyan-300" /> Ejecución
              </div>
              {flowSteps.map((step, i) => (
                <div key={step} className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <Check className="size-3 text-cyan-300" /> {step}
                  <span className="ml-auto text-[10px] text-slate-600">{i + 1}/4</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/90 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Globe2 className="size-4 text-cyan-300" /> Conexiones
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                {connections.map((item) => (
                  <span key={item} className="rounded-lg border border-white/10 px-2 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}