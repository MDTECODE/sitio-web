import type { ScopeField, ScopeValues } from "../types"

export const defaultScopeValues: ScopeValues = {
  solution: "Plataforma interna",
  complexity: "Intermedia",
  modules: "3–5 módulos",
  integrations: "Algunas integraciones",
  design: "Sí",
  maintenance: "Por definir",
}

export const scopeFields: ScopeField[] = [
  { key: "solution", label: "Tipo de solución", options: ["Plataforma interna", "Portal de clientes", "Dashboard", "Producto digital"] },
  { key: "complexity", label: "Complejidad estimada", options: ["Inicial", "Intermedia", "Alta"] },
  { key: "modules", label: "Módulos aproximados", options: ["1–2 módulos", "3–5 módulos", "6+ módulos"] },
  { key: "integrations", label: "Integraciones", options: ["Ninguna por ahora", "Algunas integraciones", "Integraciones críticas"] },
  { key: "design", label: "Diseño personalizado", options: ["Sí", "Por definir"] },
  { key: "maintenance", label: "Mantenimiento posterior", options: ["Sí", "No lo sé todavía", "Por definir"] },
]