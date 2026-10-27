import {
  CalendarDays, GraduationCap, Layers3, ShoppingBag, Users, Workflow,
} from "lucide-react"
import type { PlatformType } from "../types"

export const platformTypes: PlatformType[] = [
  {
    title: "Portales de clientes",
    text: "Espacios personalizados para consultar información, gestionar solicitudes y acceder a servicios.",
    tags: ["Usuarios", "Documentos", "Solicitudes"],
    icon: Users,
  },
  {
    title: "Marketplaces",
    text: "Conecta compradores y vendedores con perfiles, catálogos, búsquedas, pedidos y pagos cuando corresponda.",
    tags: ["Perfiles", "Catálogo", "Pedidos"],
    icon: ShoppingBag,
  },
  {
    title: "Plataformas de reservas",
    text: "Gestiona disponibilidad, calendarios, confirmaciones y pagos según las reglas de tu operación.",
    tags: ["Agenda", "Disponibilidad", "Confirmaciones"],
    icon: CalendarDays,
  },
  {
    title: "Plataformas educativas",
    text: "Entornos de aprendizaje con contenidos, usuarios, evaluaciones y seguimiento del progreso.",
    tags: ["Cursos", "Evaluaciones", "Progreso"],
    icon: GraduationCap,
  },
  {
    title: "Plataformas de servicios",
    text: "Organiza solicitudes, proveedores, estados y comunicación en una experiencia coordinada.",
    tags: ["Solicitudes", "Proveedores", "Seguimiento"],
    icon: Workflow,
  },
  {
    title: "Plataformas internas",
    text: "Centraliza operaciones, procesos, recursos e información para equipos y organizaciones.",
    tags: ["Roles", "Procesos", "Reportes"],
    icon: Layers3,
  },
]