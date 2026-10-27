import {
  BrainCircuit, FileText, Sparkles, UserRoundCheck,
} from "lucide-react"
import type { AiBenefit } from "../types"

export const benefits: AiBenefit[] = [
  {
    title: "Procesamiento de información",
    text: "Clasifica, resume y extrae información para que el equipo pueda trabajar con contexto.",
    icon: FileText,
  },
  {
    title: "Asistencia al equipo",
    text: "Facilita consultas y tareas repetitivas sin reemplazar el criterio de quienes toman decisiones.",
    icon: UserRoundCheck,
  },
  {
    title: "Experiencias más útiles",
    text: "Crea interacciones adaptadas al contexto, el lenguaje y las necesidades de cada usuario.",
    icon: Sparkles,
  },
  {
    title: "Apoyo a decisiones",
    text: "Organiza información y ayuda a detectar patrones para facilitar el análisis humano.",
    icon: BrainCircuit,
  },
]