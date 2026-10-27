import {
  BarChart3, FileText, GitBranch, MessageSquare, Network, Search,
} from "lucide-react"
import type { UseCase } from "../types"

export const useCases: UseCase[] = [
  {
    title: "Atención al cliente",
    problem: "Las consultas pueden llegar por distintos canales y requerir contexto de pedidos, servicios o políticas.",
    solution: "Un asistente puede clasificar, proponer respuestas y consultar fuentes autorizadas.",
    limit: "Debe existir supervisión y una ruta clara para escalar casos complejos.",
    icon: MessageSquare,
  },
  {
    title: "Gestión documental",
    problem: "Los documentos contienen información dispersa, formatos distintos y campos que se revisan manualmente.",
    solution: "La IA puede extraer, resumir y clasificar contenido antes de una validación.",
    limit: "La calidad depende de los documentos, permisos y criterios de evaluación.",
    icon: FileText,
  },
  {
    title: "Ventas y gestión comercial",
    problem: "Los equipos necesitan entender conversaciones, solicitudes y oportunidades sin perder contexto.",
    solution: "Puede ayudar a resumir interacciones y preparar información para el seguimiento.",
    limit: "No debe tomar decisiones comerciales sin reglas y revisión apropiadas.",
    icon: Search,
  },
  {
    title: "Operaciones internas",
    problem: "Procesos con solicitudes, excepciones y estados pueden acumular trabajo repetitivo.",
    solution: "La IA puede interpretar entradas y activar pasos definidos del flujo.",
    limit: "Las excepciones deben tener manejo explícito y trazabilidad.",
    icon: GitBranch,
  },
  {
    title: "Análisis de datos",
    problem: "La información puede estar repartida entre reportes, bases de datos y documentos.",
    solution: "Puede ayudar a explorar, resumir y formular preguntas sobre fuentes autorizadas.",
    limit: "Las respuestas requieren validación contra los datos originales.",
    icon: BarChart3,
  },
  {
    title: "Conocimiento corporativo",
    problem: "Las personas pierden tiempo buscando políticas, procedimientos y decisiones anteriores.",
    solution: "Un buscador o asistente puede orientar hacia información relevante y sus fuentes.",
    limit: "El acceso debe respetar permisos, vigencia y propiedad de cada contenido.",
    icon: Network,
  },
]