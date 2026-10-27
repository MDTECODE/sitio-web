import { automationTypes } from "../data"

export function AutomationTypes() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl gap-5 px-6 py-24 lg:grid-cols-2 lg:px-8">
      {automationTypes.map(({ title, text, icon: IconComponent, code, tags }) => (
        <article key={title} className="rounded-3xl border border-cyan-300/20 bg-[#071321] p-8">
          <IconComponent className="size-7 text-cyan-300" />
          <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
          <p className="mt-4 leading-7 text-slate-400">{text}</p>

          {code && (
            <pre className="mt-6 whitespace-pre-line rounded-2xl border border-white/10 bg-[#030817] p-4 font-mono text-xs leading-7 text-cyan-200">
              {code}
            </pre>
          )}

          {tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-300/25 px-3 py-2 text-xs text-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  )
}