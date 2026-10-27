import type { Faq } from "../types"

export const faqs: Faq[] = [
  { question: "¿Qué es la automatización de procesos?", answer: "Es el diseño de eventos, condiciones y acciones para que una tarea se ejecute con menos intervención manual. El flujo se define alrededor de tus herramientas, reglas y excepciones reales." },
  { question: "¿Qué tareas puede automatizar una empresa?", answer: "Registros, notificaciones, validaciones, asignaciones, sincronizaciones, reportes y otras tareas repetitivas. La viabilidad depende de los sistemas, permisos, APIs y datos disponibles." },
  { question: "¿Necesito cambiar las herramientas que ya utilizo?", answer: "No necesariamente. Primero evaluamos qué capacidades tienen tus sistemas actuales y qué formas de conexión existen. Cambiar de herramienta solo se considera si aporta valor al objetivo." },
  { question: "¿Se pueden conectar sistemas diferentes?", answer: "A menudo sí, mediante APIs, webhooks, conectores o intercambios de datos. Antes de confirmarlo hay que revisar permisos, límites, formatos y políticas de cada sistema." },
  { question: "¿Qué ocurre si una aplicación no tiene API?", answer: "Se analizan alternativas y limitaciones. Algunas automatizaciones pueden apoyarse en exportaciones, formularios o procesos intermedios, pero no se debe asumir que todo puede automatizarse." },
  { question: "¿Cuánto cuesta implementar una automatización?", answer: "Depende de la complejidad del flujo, sistemas, reglas, volumen, seguridad, pruebas, infraestructura, licencias y mantenimiento. Se evalúa el proceso antes de definir una propuesta." },
  { question: "¿Cuánto tiempo tarda el desarrollo?", answer: "El tiempo depende de la complejidad, número de sistemas, disponibilidad de APIs y validaciones necesarias. No sería responsable prometer un plazo estándar sin conocer el alcance." },
  { question: "¿La automatización elimina todos los errores?", answer: "No. Un diseño con validaciones y manejo de excepciones puede reducir determinados errores manuales, pero todo flujo necesita observación, pruebas y mantenimiento." },
  { question: "¿Se puede utilizar inteligencia artificial?", answer: "Sí, cuando interpretar mensajes, extraer datos, resumir o categorizar aporta valor. La IA requiere evaluar calidad, privacidad, costos, riesgos y supervisión humana." },
  { question: "¿Puedo empezar con un único proceso?", answer: "Sí. Comenzar por un proceso concreto puede ayudar a entender el valor, las dependencias y las condiciones de mantenimiento antes de ampliar el alcance." },
]