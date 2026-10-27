import { Code2, Sparkles } from "lucide-react"
import type { AutomationType } from "../types"

export const automationTypes: AutomationType[] = [
  {
    title: "Automatización basada en reglas",
    text: "Funciona con condiciones, eventos y acciones previamente definidos. Es adecuada para flujos predecibles, simples de observar y controlar.",
    icon: Code2,
    code: "SI llega un formulario válido\nENTONCES crear registro\nY notificar al responsable",
  },
  {
    title: "Automatización asistida por IA",
    text: "Puede clasificar mensajes, extraer datos, resumir solicitudes o preparar borradores para revisión humana. No es necesaria para todos los procesos.",
    icon: Sparkles,
    tags: ["Clasificar", "Extraer", "Resumir", "Revisar"],
  },
]