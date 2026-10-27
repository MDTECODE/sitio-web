import type { Phase } from "../types"

export const phases: Phase[] = [
  {
    number: "01",
    title: "Descubrimiento y diagnóstico",
    what: "Entendemos el problema, los usuarios y el proceso actual.",
    needs: "Contexto del negocio, prioridades y restricciones.",
    result: "Un mapa claro del problema y una dirección inicial.",
    decision: "Validar que el problema merece ser resuelto y compartir la información disponible.",
  },
  {
    number: "02",
    title: "Propuesta y planificación",
    what: "Convertimos la oportunidad en alcance, prioridades y una arquitectura inicial.",
    needs: "Requisitos, sistemas existentes y objetivos de la primera versión.",
    result: "Una propuesta con entregables, supuestos y próximos pasos.",
    decision: "Aprobar el alcance y las condiciones de trabajo.",
  },
  {
    number: "03",
    title: "Diseño, desarrollo y validación",
    what: "Diseñamos, construimos, integramos y comprobamos la solución por iteraciones.",
    needs: "Feedback, accesos y disponibilidad para validar decisiones.",
    result: "Funcionalidades probadas y alineadas con el alcance acordado.",
    decision: "Revisar avances y aceptar cada entrega relevante.",
  },
  {
    number: "04",
    title: "Lanzamiento y evolución",
    what: "Preparamos producción, documentamos lo acordado y dejamos una base mantenible.",
    needs: "Decisiones de operación, usuarios finales y soporte posterior.",
    result: "Una solución desplegada y un plan para mantenerla o ampliarla.",
    decision: "Definir la continuidad, soporte y siguientes mejoras.",
  },
]