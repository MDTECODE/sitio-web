import { COMPARISON_HIGHLIGHT_COLUMN, comparisonColumns, comparisonRows } from "../data"
import { SectionHeading } from "../shared/SectionHeading"

export function Comparison() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="04 / Decisión"
        title="Plataforma digital vs. otras alternativas."
        text="La solución adecuada depende de lo que necesita hacer el usuario y de la complejidad del producto."
      />
      <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-[#0a1a2c] text-white">
            <tr>
              {comparisonColumns.map((col, i) => (
                <th
                  key={col}
                  className={`p-4 ${i === COMPARISON_HIGHLIGHT_COLUMN ? "text-cyan-200" : ""}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row[0]} className="border-t border-white/10 text-slate-400">
                <th className="p-4 font-medium text-slate-200">{row[0]}</th>
                {row.slice(1).map((cell, i) => (
                  <td
                    key={`${cell}-${i}`}
                    className={`p-4 align-top ${
                      i === COMPARISON_HIGHLIGHT_COLUMN - 1 ? "bg-cyan-300/[0.04] text-slate-200" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}