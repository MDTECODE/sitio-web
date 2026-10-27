import {
  Bot, Database, FileText, Layers3, MessageSquare, ShoppingCart,
} from "lucide-react"
import type { Area } from "../types"

export const areas: Area[] = [
  {
    title: "Procesos administrativos",
    formValue: "Administración",
    text: "Registros, documentos, formularios y organización de información.",
    examples: ["Crear registros", "Validar formularios", "Ordenar documentos"],
    icon: FileText,
  },
  {
    title: "Ventas y gestión comercial",
    formValue: "Ventas y CRM",
    text: "Prospectos, oportunidades, asignaciones y seguimientos con reglas acordadas.",
    examples: ["Registrar prospectos", "Asignar solicitudes", "Actualizar oportunidades"],
    icon: Bot,
  },
  {
    title: "Atención al cliente",
    formValue: "Atención al cliente",
    text: "Clasificación de solicitudes, alertas, asignación de casos y actualización de datos.",
    examples: ["Clasificar casos", "Notificar responsables", "Actualizar estados"],
    icon: MessageSquare,
  },
  {
    title: "Datos y reportes",
    formValue: "Datos e informes",
    text: "Recopila, transforma y organiza datos para reportes o sistemas posteriores.",
    examples: ["Recopilar fuentes", "Transformar datos", "Generar reportes"],
    icon: Database,
  },
  {
    title: "Operaciones internas",
    formValue: "Operaciones internas",
    text: "Aprobaciones, tareas, estados y coordinación entre equipos.",
    examples: ["Aprobar solicitudes", "Asignar tareas", "Cambiar estados"],
    icon: Layers3,
  },
  {
    title: "Comercio electrónico",
    formValue: "Comercio electrónico",
    text: "Pedidos, inventario y notificaciones cuando los sistemas lo permiten.",
    examples: ["Recibir pedidos", "Actualizar inventario", "Avisar al equipo"],
    icon: ShoppingCart,
  },
]