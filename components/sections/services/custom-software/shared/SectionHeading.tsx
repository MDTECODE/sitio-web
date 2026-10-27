type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
}

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-400">{text}</p>}
    </div>
  )
}