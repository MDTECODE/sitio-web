import { Network, RefreshCw, Sparkles } from "lucide-react"
import type { Principle } from "../types"

export const principles: Principle[] = [
  {
    title: "Pensamiento estratégico",
    text: "Comprender el contexto y los objetivos antes de proponer una implementación.",
    icon: Network,
  },
  {
    title: "Desarrollo orientado a necesidades",
    text: "Elegir las herramientas y la arquitectura según los requisitos del proyecto.",
    icon: Sparkles,
  },
  {
    title: "Evolución y mantenimiento",
    text: "Considerar la escalabilidad, la seguridad y las necesidades futuras desde el diseño.",
    icon: RefreshCw,
  },
]