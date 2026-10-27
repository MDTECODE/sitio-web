export type Project = {
  id: string
  number: string
  category: string
  title: string
  description: string
  kind: 'clinical' | 'corporate' | 'automation'
  href?: string
  proposedStack?: string[]
  scope: string
}

export const portfolioHref: string | undefined = undefined

export const projects: Project[] = [
  {
    id: 'gestion-clinica',
    number: '01',
    category: 'Software a medida',
    title: 'Plataforma de gestión clínica',
    description: 'Sistema integral para la administración de clínicas y consultorios, con gestión de pacientes, citas, facturación y reportes en tiempo real.',
    kind: 'clinical',
    proposedStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    scope: 'Concepto de una plataforma que centraliza la operación de una clínica. La interfaz y todos sus datos son ilustrativos; no corresponde a un producto entregado ni a un cliente real.',
  },
  {
    id: 'sitio-corporativo',
    number: '02',
    category: 'Desarrollo web',
    title: 'Sitio web corporativo',
    description: 'Sitio web moderno y optimizado, diseñado para presentar los servicios de una empresa y generar nuevas oportunidades de negocio.',
    kind: 'corporate',
    scope: 'Exploración visual de un sitio corporativo con presentación de servicios y llamadas a la acción. La marca del mockup es ficticia y no existe una web pública asociada.',
  },
  {
    id: 'automatizacion',
    number: '03',
    category: 'Automatización',
    title: 'Automatización de procesos',
    description: 'Implementación de flujos automatizados para optimizar tareas repetitivas, integrar múltiples herramientas y reducir tiempos.',
    kind: 'automation',
    scope: 'Concepto de un flujo que recibe una solicitud, procesa sus datos y distribuye una notificación y un registro. Las ejecuciones y estados mostrados son datos de demostración, no resultados reales.',
  },
]
