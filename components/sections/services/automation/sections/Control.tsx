import { CircleAlert } from "lucide-react"
import { controlItems } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Control() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Control y continuidad"
          title="Automatizar también significa controlar."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {controlItems.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#091426] p-5">
              <CircleAlert className="size-5 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}