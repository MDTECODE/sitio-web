import { ContactForm } from "../components/ContactForm"
import { SectionHeading } from "../shared/SectionHeading"

export function Contact() {
  return (
    <section id="contacto" className="relative z-10 border-t border-white/10 bg-[#07111f]/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="07 / Iniciar proyecto"
            title="Hablemos de tu plataforma."
            text="Cuéntanos tu idea, las necesidades de tu negocio y qué te gustaría conseguir. Podemos evaluar contigo las posibilidades del proyecto."
          />
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-5 text-sm leading-7 text-slate-300">
            <p className="font-semibold text-white">Formulario preparado para integración</p>
            <p className="mt-2">
              La interfaz valida los datos en el navegador. Para enviar solicitudes reales falta
              conectar una API, correo o CRM de MDTECODE.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}