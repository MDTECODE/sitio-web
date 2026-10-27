import {
  BarChart3, CircleDollarSign, Layers3, Network, Smartphone, Workflow,
} from "lucide-react"
import type { Benefit } from "../types"

export const benefits: Benefit[] = [
  { title: "Mayor alcance", text: "Ofrece servicios y funcionalidades a usuarios desde distintos lugares y dispositivos.", icon: Network },
  { title: "Automatización", text: "Reduce tareas manuales mediante flujos de trabajo definidos para tu operación.", icon: Workflow },
  { title: "Mejor experiencia", text: "Facilita interacciones claras, intuitivas y consistentes.", icon: Smartphone },
  { title: "Datos en tiempo real", text: "Puede mostrar información actualizada cuando la arquitectura lo permite.", icon: BarChart3 },
  { title: "Escalabilidad", text: "Planifica nuevas funcionalidades y usuarios según la evolución del negocio.", icon: Layers3 },
  { title: "Nuevas oportunidades", text: "Habilita nuevos servicios, canales digitales o modelos de negocio.", icon: CircleDollarSign },
]