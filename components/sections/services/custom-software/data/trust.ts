import { Database, KeyRound, Settings2, ShieldCheck } from "lucide-react"
import type { TrustItem } from "../types"

export const trustItems: TrustItem[] = [
  { icon: ShieldCheck, title: "Protección", text: "Accesos, permisos y medidas apropiadas al contexto." },
  { icon: Database, title: "Continuidad", text: "Copias y operación según las necesidades acordadas." },
  { icon: KeyRound, title: "Propiedad", text: "Derechos, licencias y transferencia definidos por contrato." },
  { icon: Settings2, title: "Evolución", text: "Mantenimiento, soporte y mejoras con condiciones claras." },
]

export const investmentItems = [
  "Desarrollo inicial",
  "Infraestructura o licencias recurrentes",
  "Mantenimiento y soporte",
  "Mejoras futuras",
]