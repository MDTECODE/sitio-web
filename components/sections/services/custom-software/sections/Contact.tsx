import { Blocks, Mail, PenTool } from "lucide-react"
import { ContactForm } from "../components/ContactForm"
import { SectionHeading } from "../shared/SectionHeading"

const contactHints = [
  { icon: Mail, text: "Describe tu contexto con tus palabras" },
  { icon: PenTool, text: "No necesitas requisitos técnicos cerrados" },
  { icon: Blocks, text: "Evaluaremos si construir es la mejor opción" },
]

export function Contact() {
  return (
    <section id="contacto" className="relative z-10 border-t border-white/10 bg-[#07111f]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="12 / Hablemos"
            title="Tu negocio es único. Tu software también puede serlo"
            text="Cuéntanos qué necesitas mejorar, qué proceso quieres digitalizar o qué idea quieres convertir en un producto digital."
          />
          <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-400">
            {contactHints.map(({ icon: IconComponent, text }) => (
              <li key={text} className="flex items-center gap-3">
                <IconComponent className="size-4 text-cyan-300" /> {text}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}