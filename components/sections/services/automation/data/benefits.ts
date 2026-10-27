import { GitBranch, Link2, RefreshCw } from "lucide-react"
import type { Benefit } from "../types"

export const benefits: Benefit[] = [
  {
    title: "Menos trabajo repetitivo",
    text: "Automatiza copias de información, registros, clasificaciones y reportes recurrentes.",
    examples: ["Copiar datos entre herramientas", "Crear registros", "Preparar reportes"],
    icon: RefreshCw,
  },
  {
    title: "Herramientas conectadas",
    text: "Centraliza información para reducir procesos aislados y mantener el contexto donde importa.",
    examples: ["Sincronizar datos", "Actualizar sistemas", "Enviar información"],
    icon: Link2,
  },
  {
    title: "Procesos más consistentes",
    text: "Define eventos, condiciones y validaciones para que el equipo trabaje con mayor claridad.",
    examples: ["Comprobar datos", "Asignar tareas", "Seguir estados"],
    icon: GitBranch,
  },
]