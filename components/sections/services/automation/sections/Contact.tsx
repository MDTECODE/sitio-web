import { ContactForm } from "../components/ContactForm"
import { SectionHeading } from "../shared/SectionHeading"

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
    >
      <div>
        <SectionHeading
          eyebrow="Evaluación"
          title="Cuéntanos qué proceso quieres automatizar."
          text="Describe la tarea que consume tiempo, las herramientas que utilizas y el resultado que te gustaría conseguir."
        />
        <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5 text-sm leading-6 text-slate-400">
          El formulario prepara la solicitud en esta interfaz. Para recibirla por correo, API o CRM
          todavía se necesita conectar un servicio de backend.
        </div>
      </div>
      <ContactForm />
    </section>
  )
}