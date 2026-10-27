import type { Metadata } from "next"
import { AutomationPage } from "@/components/sections/services/automation"

export const metadata: Metadata = {
  title: "Automatización de Procesos Empresariales | MDTECODE",
  description: "Conecta tus herramientas y automatiza procesos repetitivos con flujos de trabajo adaptados a tu negocio.",
}

export default function AutomatizacionPage() {
  return <AutomationPage />
}
