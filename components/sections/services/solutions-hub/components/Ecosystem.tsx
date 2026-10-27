import { Bot, Boxes, Code2, Network, Workflow } from "lucide-react"
import type { EcosystemNode } from "../types"

const nodes: EcosystemNode[] = [
  { label: "Software", position: "left-0 top-3", icon: Code2 },
  { label: "Plataformas", position: "right-0 top-3", icon: Boxes },
  { label: "Automatización", position: "bottom-3 left-0", icon: Workflow },
  { label: "IA", position: "bottom-3 right-0", icon: Bot },
]

export function Ecosystem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] rounded-full border border-cyan-300/10 bg-[radial-gradient(circle,rgba(14,116,255,.16),transparent_55%)] p-10 shadow-[0_0_100px_rgba(14,116,255,.13)]">
      <div className="absolute inset-8 rounded-full border border-dashed border-cyan-300/20" />

      <svg aria-hidden="true" className="absolute inset-0 size-full">
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#38bdf8" strokeOpacity=".35" />
        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#38bdf8" strokeOpacity=".35" />
        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#38bdf8" strokeOpacity=".35" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#38bdf8" strokeOpacity=".35" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/50 bg-[#0b1b30] shadow-[0_0_50px_rgba(34,211,238,.25)]">
        <Network className="size-8 text-cyan-200" />
        <span className="mt-2 text-[10px] font-semibold uppercase tracking-[.22em] text-white">
          ecosistema
        </span>
      </div>

      {nodes.map(({ label, position, icon: IconComponent }) => (
        <div
          key={label}
          className={`absolute ${position} flex items-center gap-2 rounded-2xl border border-white/10 bg-[#071321]/95 px-3 py-2 text-xs text-slate-200 shadow-lg`}
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
            <IconComponent className="size-4" />
          </span>
          {label}
        </div>
      ))}
    </div>
  )
}