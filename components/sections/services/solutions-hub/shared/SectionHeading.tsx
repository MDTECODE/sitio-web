type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
}

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{text}</p>}
    </div>
  )
}