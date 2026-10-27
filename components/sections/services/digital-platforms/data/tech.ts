import { Cloud, Code2, Database, Network, Server, ShieldCheck } from "lucide-react"
import type { TechEntry } from "../types"

export const tech: TechEntry[] = [
  { title: "Frontend", text: "Next.js, React, TypeScript", icon: Code2 },
  { title: "Backend y APIs", text: "Node.js, APIs y servicios integrables", icon: Server },
  { title: "Bases de datos", text: "PostgreSQL y modelos de datos", icon: Database },
  { title: "Infraestructura", text: "Servicios cloud y despliegues web", icon: Cloud },
  { title: "Integraciones", text: "Webhooks, pagos y sistemas existentes", icon: Network },
  { title: "Seguridad", text: "Accesos, permisos y buenas prácticas", icon: ShieldCheck },
]