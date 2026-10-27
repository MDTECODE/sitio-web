import { CircleAlert } from "lucide-react"
import { ContactForm } from "../components/ContactForm"
import { SectionHeading } from "../shared/SectionHeading"

export function Contact() {
  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos qué te gustaría resolver con IA."
            text="Describe el reto de tu negocio, las tareas que quieres mejorar o la información que necesitas aprovechar. Evaluemos qué solución puede tener sentido para tu caso."
          />
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#07111f] p-5 text-sm leading-7 text-slate-400">
            <CircleAlert className="mb-3 size-5 text-cyan-300" />
            Este formulario valida la información en la interfaz. Para recibir solicitudes de forma
            real todavía debe conectarse a un correo, API o CRM.
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}