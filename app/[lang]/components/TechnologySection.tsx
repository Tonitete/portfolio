import type { Dictionary } from '../../../dictionaries'

interface Props {
  dict: Dictionary
}

const CATEGORY_COLORS: Record<string, string> = {
  languages: 'from-violet-500/10 to-indigo-500/10 border-violet-500/20',
  frontend: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
  backend: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
  devops: 'from-orange-500/10 to-amber-500/10 border-orange-500/20',
  tools: 'from-pink-500/10 to-rose-500/10 border-pink-500/20',
}

const BADGE_COLORS: Record<string, string> = {
  languages: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  frontend: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  backend: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  devops: 'text-orange-300 bg-orange-500/10 border-orange-500/20',
  tools: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
}

export function TechnologySection({ dict }: Props) {
  const { technology } = dict

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg mb-16">
        {technology.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technology.categories.map((category) => {
          const cardColor =
            CATEGORY_COLORS[category.id] ??
            'from-zinc-500/10 to-zinc-600/10 border-zinc-500/20'
          const badgeColor =
            BADGE_COLORS[category.id] ??
            'text-zinc-300 bg-zinc-500/10 border-zinc-500/20'

          return (
            <div
              key={category.id}
              className={`rounded-2xl border bg-gradient-to-br p-6 ${cardColor}`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`text-sm font-medium border rounded-full px-3 py-1 ${badgeColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
