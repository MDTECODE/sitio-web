import {
  BarChart3, Code2, Database, Gauge, Layers3,
  Network, PlugZap, Settings2, Sparkles, Workflow,
} from "lucide-react"
import type { Capability } from "../types"

export const capabilities: Capability[] = [
  {
    title: "Sistemas de gestión empresarial",
    text: "Centraliza operaciones, personas y datos en una herramienta alineada con tu forma de trabajar.",
    solve: "Procesos dispersos y poca visibilidad operativa.",
    features: "Roles, flujos, catálogos, reportes y trazabilidad.",
    icon: Layers3,
  },
  {
    title: "Plataformas administrativas internas",
    text: "Digitaliza tareas internas sin forzar a tu equipo a adaptarse a procesos genéricos.",
    solve: "Dependencia de hojas de cálculo y tareas repetitivas.",
    features: "Paneles, formularios, permisos y automatizaciones.",
    icon: Settings2,
  },
  {
    title: "Portales de clientes y proveedores",
    text: "Crea espacios seguros para consultar información, compartir documentación y colaborar.",
    solve: "Intercambios manuales por correo y falta de contexto.",
    features: "Accesos, estados, documentos y notificaciones.",
    icon: Network,
  },
  {
    title: "Dashboards e informes",
    text: "Convierte información operativa en vistas comprensibles para tomar decisiones.",
    solve: "Datos repartidos y reportes que requieren demasiado trabajo.",
    features: "Indicadores, filtros, exportaciones y vistas por rol.",
    icon: BarChart3,
  },
  {
    title: "Reservas y gestión de citas",
    text: "Organiza disponibilidad, solicitudes y seguimiento en una experiencia sencilla.",
    solve: "Cruces de agenda y coordinación manual.",
    features: "Calendarios, recordatorios, reglas y estados.",
    icon: Gauge,
  },
  {
    title: "Gestión de operaciones",
    text: "Diseña una plataforma que refleje las etapas reales de tu operación.",
    solve: "Falta de control sobre tareas, incidencias o recursos.",
    features: "Flujos, responsables, alertas y auditoría.",
    icon: Workflow,
  },
  {
    title: "APIs e integraciones",
    text: "Conecta las herramientas que ya utilizas y evita duplicar información.",
    solve: "Sistemas que no comparten datos entre sí.",
    features: "APIs, webhooks, sincronización y validaciones.",
    icon: PlugZap,
  },
  {
    title: "Herramientas de gestión de datos",
    text: "Ordena, valida y consulta información crítica para el negocio.",
    solve: "Información inconsistente o difícil de localizar.",
    features: "Modelos, búsquedas, importación y control de cambios.",
    icon: Database,
  },
  {
    title: "Aplicaciones web personalizadas",
    text: "Construye una experiencia digital con las funciones específicas de tu producto.",
    solve: "Una solución existente limita la propuesta de valor.",
    features: "Experiencias a medida, cuentas, pagos o contenido.",
    icon: Code2,
  },
  {
    title: "Digitalización de procesos",
    text: "Transforma un proceso concreto en una solución medible y mantenible.",
    solve: "Pasos manuales que ralentizan la operación.",
    features: "Formularios, reglas, aprobaciones y seguimiento.",
    icon: Sparkles,
  },
]