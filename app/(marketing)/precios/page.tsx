import type { Metadata } from 'next'
import ProjectPricing from '@/components/sections/pricing'

export const metadata: Metadata = {
  title: 'Precios transparentes | Servicios digitales | MDTECODE',
  description: 'Consulta tarifas publicadas para desarrollo web, software a la medida, SaaS, inteligencia artificial, diseño UI/UX y servicios complementarios.'
}

export default function PricingPage() {
  return <ProjectPricing />
}
