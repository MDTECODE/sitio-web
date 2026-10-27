import type { ContactField } from "../types"

export const contactFields: ContactField[] = [
  { name: "name", label: "Nombre *", type: "text", required: true },
  { name: "email", label: "Correo electrónico *", type: "email", required: true },
  { name: "company", label: "Empresa", type: "text" },
  {
    name: "type",
    label: "Tipo de plataforma",
    type: "select",
    options: [
      "Portal de clientes",
      "Marketplace",
      "Reservas",
      "Plataforma educativa",
      "Plataforma de servicios",
      "Plataforma interna",
      "Otro",
      "Todavía no lo tengo claro",
    ],
  },
  { name: "description", label: "Descripción del proyecto *", type: "textarea", rows: 5, required: true, colSpan: 2 },
  { name: "budget", label: "Presupuesto aproximado", type: "text" },
  { name: "timeline", label: "Plazo deseado", type: "text" },
  {
    name: "contact",
    label: "Canal de contacto preferido",
    type: "select",
    options: ["Correo electrónico", "Videollamada", "Teléfono", "Por definir"],
    colSpan: 2,
  },
]