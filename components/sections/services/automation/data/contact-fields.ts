import type { ContactField } from "../types"

export const contactFields: ContactField[] = [
  { name: "name", label: "Nombre", type: "text", required: true },
  { name: "email", label: "Correo electrónico", type: "email", required: true },
  { name: "company", label: "Empresa, opcional", type: "text" },
  { name: "area", label: "Área del proceso", type: "area-select", required: true },
  { name: "description", label: "Describe la tarea actual", type: "textarea", rows: 5, required: true, colSpan: 2 },
  { name: "tools", label: "Herramientas utilizadas, opcional", type: "text" },
  { name: "frequency", label: "Frecuencia aproximada", type: "text", placeholder: "Diaria, semanal..." },
]

export const contactAreaOptions = [
  "Administración",
  "Ventas y CRM",
  "Atención al cliente",
  "Comercio electrónico",
  "Datos e informes",
  "Operaciones internas",
  "Integración de herramientas",
  "Automatización con IA",
  "Otro",
  "Todavía no lo tengo claro",
]