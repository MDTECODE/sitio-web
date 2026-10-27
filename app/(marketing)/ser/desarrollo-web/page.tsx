import type { Metadata } from "next"
import { WebDevelopmentPage } from "@/components/sections/ser/web-development"

export const metadata: Metadata = {
  title: "Desarrollo Web Profesional para Empresas | MDTECODE",
  description: "Creamos páginas web, landing pages, tiendas online y aplicaciones web modernas, adaptables y preparadas para impulsar tu negocio.",
}

export default function WebDevelopmentRoute() {
  return <WebDevelopmentPage />
}
