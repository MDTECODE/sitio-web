import type { ContactField } from "../types"

export const contactFields: ContactField[] = [
  { name: "name", label: "Nombre *", type: "text", required: true },
  { name: "email", label: "Correo electrónico *", type: "email", required: true },
  { name: "company", label: "Empresa", type: "text" },
  { name: "category", label: "Tipo de solución", type: "category-select" },
  { name: "need", label: "Descripción de la necesidad *", type: "textarea", rows: 4, required: true, colSpan: 2 },
  { name: "systems", label: "Sistemas actuales", type: "textarea", rows: 3, colSpan: 2 },
  { name: "budget", label: "Presupuesto aproximado", type: "text" },
  { name: "timeline", label: "Plazo deseado", type: "text" },
]

export const categoryOptions = [
  "Asistente inteligente",
  "Análisis de información",
  "Gestión documental",
  "Automatización con IA",
  "Integración con sistemas",
  "Conocimiento corporativo",
  "Otro",
  "Todavía no lo tengo claro",
]