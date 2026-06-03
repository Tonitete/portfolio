import type { Dictionary } from '../../../dictionaries'

interface Props {
  dict: Dictionary
}

export function HomeSection({ dict }: Props) {
  const { home } = dict

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
      {/* Hero */}
      <div className="mb-16">
        <p className="text-muted text-sm font-medium tracking-widest uppercase mb-3">
          {home.greeting}
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-3">
          {home.name}
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-xl sm:text-2xl font-semibold text-accent">
            {home.title}
          </span>
          <span className="text-muted">·</span>
          <span className="text-lg text-muted">{home.subtitle}</span>
        </div>
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
          {home.bio}
        </p>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contact */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            {home.contactTitle}
          </h2>
          <a
            href={`mailto:${home.email}`}
            className="text-sm text-fg hover:text-accent transition-colors break-all"
          >
            {home.email}
          </a>
        </div>

        {/* Languages */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            {home.languagesTitle}
          </h2>
          <ul className="space-y-2">
            {home.languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span className="text-sm text-fg">{lang.name}</span>
                <span className="text-xs text-muted bg-accent-dim px-2 py-0.5 rounded-full">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            {home.hobbiesTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {home.hobbies.map((hobby) => (
              <span
                key={hobby}
                className="text-xs text-fg border border-border rounded-full px-3 py-1"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
