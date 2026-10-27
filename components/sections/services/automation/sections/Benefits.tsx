import { Check } from "lucide-react"
import { benefits } from "../data"
import { FadeIn } from "../shared/FadeIn"

export function Benefits() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#07111f]/60">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-20 lg:grid-cols-3 lg:px-8">
        {benefits.map(({ title, text, examples, icon: IconComponent }) => (
          <FadeIn key={title} as="article">
            <div className="h-full rounded-2xl border border-white/10 bg-[#091426]/80 p-6">
              <IconComponent className="size-6 text-cyan-300" />
              <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-500">
                {examples.map((example) => (
                  <li key={example} className="flex items-center gap-2">
                    <Check className="size-3 text-cyan-300" /> {example}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}