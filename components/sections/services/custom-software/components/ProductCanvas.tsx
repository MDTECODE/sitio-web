import { ArrowRight, LockKeyhole, Radar } from "lucide-react"

const operationalMap = ["Clientes", "Operaciones", "Información", "Automatización"]
const workflowSteps = ["Entrada", "Reglas", "Resultado"]
const visibilityBars = [30, 52, 40, 70, 58, 82, 68]

export function ProductCanvas() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#071321] p-4 shadow-[0_0_70px_rgba(14,116,255,0.12)] sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,120,200,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(40,120,200,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <span>MDTE / workspace</span>
        <span className="flex items-center gap-2 text-cyan-300">
          <span className="size-1.5 rounded-full bg-cyan-300" /> sistema conectado
        </span>
      </div>

      <div className="relative mt-5 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/85 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Radar className="size-4 text-cyan-300" /> Mapa operativo
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {operationalMap.map((item, i) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-slate-300">
                <span className={`size-2 rounded-full ${i === 1 ? "bg-cyan-300 shadow-[0_0_12px_#22d3ee]" : "bg-blue-400/60"}`} />
                {item}
                <ArrowRight className="ml-auto size-3 text-slate-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/85 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">Flujo de trabajo</span>
              <span className="rounded-full bg-cyan-300/10 px-2 py-1 text-[10px] text-cyan-300">live</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {workflowSteps.map((step, i) => (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div className="flex min-h-16 flex-1 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.06] px-2 text-center text-[10px] text-slate-300">
                    {step}
                  </div>
                  {i < workflowSteps.length - 1 && <ArrowRight className="size-3 shrink-0 text-cyan-300/70" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">visibilidad</div>
              <div className="mt-3 h-12">
                <div className="flex h-full items-end gap-1">
                  {visibilityBars.map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-500/60 to-cyan-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1b2c]/85 p-4">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">acceso</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                <LockKeyhole className="size-4 text-cyan-300" /> por roles
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}