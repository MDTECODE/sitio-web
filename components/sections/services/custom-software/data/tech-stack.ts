import { Code2, Database, GitBranch, ReceiptText, Rocket, ShieldCheck } from "lucide-react"
import type { TechItem } from "../types"

export const techStack: TechItem[] = [
  { icon: Code2, title: "Frontend", text: "Experiencias claras, responsive y accesibles." },
  { icon: GitBranch, title: "Backend y APIs", text: "Reglas de negocio, servicios e integraciones." },
  { icon: Database, title: "Bases de datos", text: "Modelos de información consistentes y consultables." },
  { icon: Rocket, title: "Infraestructura", text: "Entornos, despliegue y operación según el caso." },
  { icon: ShieldCheck, title: "Seguridad", text: "Accesos, roles, validación y protección de información." },
  { icon: ReceiptText, title: "Observabilidad", text: "Copias, mantenimiento y visibilidad cuando apliquen." },
]