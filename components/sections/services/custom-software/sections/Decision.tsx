import { COMPARISON_HIGHLIGHT_COLUMN, comparisonColumns, comparisonRows } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Decision() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          eyebrow="04 / Decisión"
          title="¿Software a medida o una solución existente?"
          text="La recomendación correcta no siempre es construir. Primero hay que entender qué necesita realmente tu operación."
        />

        <div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] bg-[#0a1a2c] text-xs font-semibold text-white">
              {comparisonColumns.map((col, i) => (
                <div
                  key={col}
                  className={`p-4 ${i === COMPARISON_HIGHLIGHT_COLUMN ? "border-l border-cyan-300/20 text-cyan-200" : i > 0 ? "border-l border-white/10" : ""}`}
                >
                  {col}
                </div>
              ))}
            </div>
            {comparisonRows.map((row) => (
              <div key={row[0]} className="grid grid-cols-[1.1fr_1fr_1fr_1fr] border-t border-white/10 text-xs text-slate-400">
                <div className="p-4 font-medium text-slate-200">{row[0]}</div>
                {row.slice(1).map((cell, i) => (
                  <div
                    key={cell}
                    className={`border-l border-white/10 p-4 ${i === COMPARISON_HIGHLIGHT_COLUMN - 1 ? "bg-cyan-300/[0.04] text-slate-200" : ""}`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 text-base leading-7 text-slate-300">
            Si una herramienta existente resuelve tus necesidades de forma eficiente, puede ser la
            mejor opción. Si tus procesos requieren funcionalidades específicas o integraciones
            complejas, vale la pena evaluar una solución personalizada.
          </p>
        </div>
      </div>
    </section>
  )
}