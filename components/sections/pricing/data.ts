export type PriceLabel = "Precio fijo" | "Desde" | "Por definir"

export type PriceItem = {
  name: string
  price: string
  label: PriceLabel
  description: string
  features: string[]
  note?: string
  cta: string
}

export type Category = {
  id: string
  name: string
  intro: string
  items: PriceItem[]
}

export type Faq = {
  question: string
  answer: string
}

export type HeaderNavItem = {
  label: string
  href: string
  active?: boolean
}

export const CONTACT_EMAIL = "contacto@mdtecode.com"

export const headerNavItems: HeaderNavItem[] = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Software", href: "/soluciones/software-a-medida" },
  { label: "Precios", href: "/precios", active: true },
  { label: "Contacto", href: "#contacto" },
]

export const categories: Category[] = [
  {
    id: "desarrollo-web",
    name: "Desarrollo web",
    intro: "Sitios y experiencias digitales para presentar, captar clientes o vender online.",
    items: [
      { name: "Landing page", price: "$1.500.000 COP", label: "Precio fijo", description: "Una página de aterrizaje con diseño personalizado para una oferta concreta.", features: ["Adaptación a móviles", "Secciones acordadas", "Formulario de contacto", "SEO técnico básico"], cta: "Solicitar landing page" },
      { name: "Sitio web corporativo", price: "$3.000.000 COP", label: "Precio fijo", description: "Presencia corporativa profesional con hasta cinco páginas o secciones acordadas.", features: ["Diseño personalizado", "Diseño responsive", "Formulario y botones de contacto", "SEO técnico básico"], cta: "Solicitar sitio web" },
      { name: "Sitio web corporativo avanzado", price: "$4.500.000 COP", label: "Precio fijo", description: "Estructura ampliada para empresas que necesitan hasta diez páginas o secciones.", features: ["Contenido ampliado", "Formularios y llamadas a la acción", "Diseño personalizado", "SEO técnico básico"], cta: "Solicitar web avanzada" },
      { name: "Tienda online", price: "$5.000.000 COP", label: "Precio fijo", description: "Catálogo inicial y flujo de compra para empezar a vender online.", features: ["Catálogo inicial acordado", "Carrito de compras", "Una pasarela compatible", "Gestión básica de pedidos"], cta: "Solicitar tienda online" },
      { name: "Aplicación web", price: "$6.000.000 COP", label: "Desde", description: "Interfaz web funcional con flujos y funcionalidades delimitados.", features: ["Integración con backend según alcance", "Pruebas funcionales", "Interfaz responsive"], note: "Precio inicial: las funcionalidades pueden variar significativamente.", cta: "Consultar aplicación web" },
    ],
  },
  {
    id: "software",
    name: "Software a la medida",
    intro: "Sistemas personalizados para digitalizar y administrar la operación de tu empresa.",
    items: [
      { name: "Sistema básico", price: "$3.500.000 COP", label: "Desde", description: "Una solución para gestionar un proceso principal.", features: ["Formularios y operaciones básicas", "Persistencia de datos", "Validaciones"], cta: "Solicitar sistema básico" },
      { name: "Sistema empresarial", price: "$7.000.000 COP", label: "Desde", description: "Varios procesos relacionados en un sistema centralizado.", features: ["Gestión de usuarios", "Roles y permisos básicos", "Panel administrativo", "Reportes iniciales"], cta: "Solicitar sistema empresarial" },
      { name: "Sistema avanzado", price: "$12.000.000 COP", label: "Desde", description: "Flujos complejos, módulos relacionados e integraciones.", features: ["Reportes avanzados", "Integraciones según alcance", "Pruebas funcionales"], cta: "Consultar sistema avanzado" },
      { name: "Módulo adicional", price: "$800.000 COP", label: "Desde", description: "Módulo sencillo para ampliar un sistema existente.", features: ["Alcance definido por módulo", "Integración con el sistema existente"], note: "No aplica a módulos complejos o integraciones que requieran estimación independiente.", cta: "Consultar módulo" },
      { name: "Integración con API", price: "$600.000 COP", label: "Desde", description: "Conexión sencilla entre tu sistema y un servicio externo.", features: ["Integración básica", "Validación de comunicación"], note: "Excluye licencias, tarifas de terceros y consumo de servicios externos.", cta: "Consultar integración" },
    ],
  },
  {
    id: "saas",
    name: "Sistemas SaaS",
    intro: "Plataformas digitales preparadas para atender múltiples clientes mediante suscripción.",
    items: [
      { name: "MVP SaaS", price: "$8.000.000 COP", label: "Desde", description: "Producto mínimo viable para validar una idea de plataforma.", features: ["Registro e inicio de sesión", "Panel principal", "Funcionalidades principales acordadas", "Persistencia de datos"], cta: "Solicitar MVP SaaS" },
      { name: "SaaS empresarial", price: "$15.000.000 COP", label: "Desde", description: "Plataforma con usuarios, roles y funcionalidades de negocio.", features: ["Gestión de usuarios", "Roles y permisos", "Panel administrativo", "Arquitectura preparada para evolucionar"], cta: "Consultar SaaS empresarial" },
      { name: "SaaS avanzado", price: "$25.000.000 COP", label: "Desde", description: "Experiencia avanzada para organizaciones, clientes e integraciones.", features: ["Organizaciones o clientes", "Integraciones", "Funcionalidades avanzadas", "Suscripciones y pagos si están incluidos"], cta: "Consultar SaaS avanzado" },
      { name: "Funcionalidad SaaS adicional", price: "$900.000 COP", label: "Desde", description: "Una funcionalidad adicional para una plataforma existente.", features: ["Alcance sujeto a complejidad", "Integración con la arquitectura actual"], cta: "Consultar funcionalidad" },
      { name: "Mantenimiento de plataforma SaaS", price: "Plan por definir", label: "Por definir", description: "Acompañamiento recurrente para mantener y evolucionar la plataforma.", features: ["Revisión del alcance", "Plan de mantenimiento personalizado"], note: "Hosting, bases de datos, cloud, correo, licencias y terceros pueden generar costos independientes.", cta: "Solicitar plan de mantenimiento" },
    ],
  },
  {
    id: "ia",
    name: "Inteligencia artificial",
    intro: "Funciones inteligentes adaptadas a los procesos y necesidades de tu empresa.",
    items: [
      { name: "Chatbot con IA", price: "$2.500.000 COP", label: "Desde", description: "Asistente conversacional con alcance delimitado para consultas iniciales.", features: ["Modelo compatible", "Flujo inicial de consultas", "Pruebas funcionales"], note: "El consumo de modelos, tokens y APIs puede tener costos adicionales.", cta: "Solicitar chatbot" },
      { name: "Asistente con documentos", price: "$4.500.000 COP", label: "Desde", description: "Consulta de una colección definida de documentos con recuperación de información.", features: ["Interfaz de consulta", "Colección documental definida", "Pruebas iniciales"], cta: "Solicitar asistente documental" },
      { name: "Automatización con IA", price: "$3.500.000 COP", label: "Desde", description: "Automatización de un flujo definido con herramientas compatibles.", features: ["Flujo acordado", "Integración compatible", "Validación de resultados"], cta: "Solicitar automatización" },
      { name: "Análisis inteligente", price: "$4.000.000 COP", label: "Desde", description: "Procesamiento de información para generar resultados o resúmenes.", features: ["Alcance de datos acordado", "Resultados o resúmenes", "Integración cuando corresponda"], cta: "Consultar análisis con IA" },
      { name: "Integración de IA", price: "$1.500.000 COP", label: "Desde", description: "Integración básica de capacidades de IA en una aplicación existente.", features: ["Integración básica", "Revisión de arquitectura y APIs"], note: "El precio depende de la arquitectura y disponibilidad de APIs.", cta: "Integrar IA" },
    ],
  },
  {
    id: "ux",
    name: "Diseño UI/UX",
    intro: "Interfaces y experiencias claras, intuitivas y coherentes para productos digitales.",
    items: [
      { name: "Diseño de landing page", price: "$700.000 COP", label: "Precio fijo", description: "Diseño de una página de aterrizaje con prototipo de alta fidelidad.", features: ["Estructura visual", "Vistas responsive acordadas", "Prototipo de alta fidelidad"], cta: "Solicitar diseño de landing" },
      { name: "Diseño de sitio corporativo", price: "$1.500.000 COP", label: "Desde", description: "Diseño de hasta cinco páginas acordadas con sistema visual consistente.", features: ["Prototipo de alta fidelidad", "Sistema visual consistente"], cta: "Solicitar diseño web" },
      { name: "Diseño de dashboard", price: "$1.800.000 COP", label: "Desde", description: "Interfaz administrativa con componentes de visualización de datos.", features: ["Estados principales", "Componentes de datos", "Flujos administrativos"], cta: "Solicitar diseño de dashboard" },
      { name: "Prototipo interactivo", price: "$1.200.000 COP", label: "Desde", description: "Prototipo navegable para revisar los flujos principales.", features: ["Flujos definidos", "Preparación para revisión"], cta: "Solicitar prototipo" },
      { name: "Sistema de diseño UI", price: "$2.500.000 COP", label: "Desde", description: "Base visual reutilizable para mantener consistencia en el producto.", features: ["Componentes reutilizables", "Tipografía, colores y espaciado", "Documentación básica"], cta: "Solicitar sistema de diseño" },
      { name: "Auditoría UX", price: "$800.000 COP", label: "Desde", description: "Revisión de una interfaz existente con recomendaciones priorizadas.", features: ["Problemas de usabilidad", "Recomendaciones priorizadas"], cta: "Solicitar auditoría UX" },
    ],
  },
  {
    id: "complementarios",
    name: "Servicios complementarios",
    intro: "Acompañamiento puntual para diagnosticar, mantener y hacer evolucionar tus soluciones.",
    items: [
      { name: "Consultoría tecnológica", price: "$250.000 COP", label: "Precio fijo", description: "Sesión de consultoría de 60 minutos.", features: ["Sesión enfocada en tu necesidad", "Recomendaciones accionables"], cta: "Solicitar consultoría" },
      { name: "Diagnóstico tecnológico", price: "$800.000 COP", label: "Desde", description: "Revisión inicial para entender oportunidades y prioridades técnicas.", features: ["Diagnóstico del contexto", "Recomendaciones priorizadas"], cta: "Solicitar diagnóstico" },
      { name: "Bolsa de cinco horas", price: "$500.000 COP", label: "Precio fijo", description: "Horas para tareas acordadas de soporte o evolución.", features: ["Tareas previamente acordadas", "Seguimiento del consumo"], note: "No garantiza resolver cualquier incidencia dentro del tiempo contratado.", cta: "Solicitar bolsa de horas" },
      { name: "Bolsa de diez horas", price: "$900.000 COP", label: "Precio fijo", description: "Mayor capacidad para tareas acordadas de soporte o evolución.", features: ["Tareas previamente acordadas", "Seguimiento del consumo"], note: "Vigencia y disponibilidad deben definirse antes de contratar.", cta: "Solicitar bolsa de horas" },
      { name: "Plan mensual de mantenimiento", price: "Precio por definir", label: "Por definir", description: "Acompañamiento recurrente según necesidades de la solución.", features: ["Alcance por definir", "Disponibilidad por acordar"], cta: "Solicitar plan mensual" },
    ],
  },
]

export const faqs: Faq[] = [
  { question: "¿Los precios publicados son definitivos?", answer: "Los precios fijos corresponden al alcance descrito. Los precios “Desde” son referencias iniciales y requieren revisar requisitos antes de confirmar una propuesta." },
  { question: "¿Qué diferencia hay entre un precio fijo y un precio desde?", answer: "Precio fijo significa que el paquete tiene un alcance delimitado. “Desde” indica que la complejidad, pantallas, integraciones o datos pueden modificar la propuesta." },
  { question: "¿Qué sucede si necesito funcionalidades adicionales?", answer: "Las funcionalidades fuera del alcance se revisan y se agregan a una propuesta independiente antes de desarrollarlas." },
  { question: "¿El hosting y el dominio están incluidos?", answer: "No se asumen incluidos. Dominio, hosting, cloud, licencias, APIs y terceros pueden generar costos adicionales según el servicio." },
  { question: "¿Hay costos mensuales?", answer: "Pueden existir costos recurrentes de infraestructura, consumo de APIs, modelos de IA, mantenimiento o licencias. Se informan por separado cuando aplican." },
  { question: "¿Puedo contratar únicamente diseño UI/UX?", answer: "Sí. La categoría de Diseño UI/UX puede contratarse de forma independiente." },
  { question: "¿Cómo solicito una cotización?", answer: "Elige el servicio que te interesa y usa su botón para iniciar el contacto con el contexto del paquete. El alcance se revisa antes de confirmar." },
  { question: "¿Qué formas de pago acepta MDTECODE?", answer: "Las condiciones y formas de pago se confirman directamente con MDTECODE antes de iniciar el proyecto." },
]

export const includedItems = [
  "Alcance expresamente descrito",
  "Diseño y desarrollo acordados",
  "Pruebas previstas",
  "Entregables especificados",
  "Entrega o despliegue cuando esté incluido",
]

export const excludedItems = [
  "Dominio y hosting",
  "Licencias y servicios cloud",
  "Consumo de APIs o modelos de IA",
  "Funcionalidades fuera del alcance",
  "Migraciones complejas y mantenimiento recurrente",
]