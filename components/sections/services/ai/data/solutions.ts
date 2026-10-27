import { BarChart3, Bot, Workflow } from "lucide-react"
import type { Solution } from "../types"

export const solutions: Solution[] = [
  {
    title: "Asistentes inteligentes",
    text: "Permiten consultar información, responder preguntas y apoyar tareas de equipos o clientes.",
    examples: "Asistentes internos, atención al cliente y consultas documentales.",
    value: "Asistente inteligente",
    icon: Bot,
  },
  {
    title: "Análisis de información",
    text: "Ayudan a clasificar, resumir y organizar información para facilitar su comprensión.",
    examples: "Análisis documental, clasificación de datos y generación de informes.",
    value: "Análisis de información",
    icon: BarChart3,
  },
  {
    title: "Automatización con IA",
    text: "Combina modelos con reglas y herramientas compatibles para interpretar información dentro de un proceso.",
    examples: "Documentos, solicitudes y flujos de trabajo inteligentes.",
    value: "Automatización con IA",
    icon: Workflow,
  },
]