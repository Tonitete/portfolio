import type { Dictionary } from '../../../dictionaries'
import { TechIcon } from './TechIcon'

interface Props {
  dict: Dictionary
}

const CATEGORY_COLORS: Record<string, string> = {
  languages: 'from-violet-500/10 to-indigo-500/10 border-violet-500/20',
  frontend: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
  backend: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
  databases: 'from-sky-500/10 to-indigo-500/10 border-sky-500/20',
  devops: 'from-orange-500/10 to-amber-500/10 border-orange-500/20',
  tools: 'from-pink-500/10 to-rose-500/10 border-pink-500/20'
}

export function TechnologySection ({ dict }: Props) {
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

          return (
            <div
              key={category.id}
              className={`rounded-2xl border bg-gradient-to-br p-6 ${cardColor}`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
                {category.label}
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex flex-col items-center gap-2"
                  >
                    <TechIcon name={item} size={30} />
                    <span className="text-[11px] text-muted text-center leading-tight w-full break-words">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
