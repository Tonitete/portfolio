import type { Dictionary } from '../../../dictionaries'

interface Props {
  dict: Dictionary
}

export function ExperienceSection ({ dict }: Props) {
  const { experience } = dict
  const { jobs } = experience

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg mb-16">
        {experience.title}
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-border" />

        <ol className="space-y-8">
          {jobs.map((job) => {
            const isTech = (job.tech ?? []).length > 0
            const isCurrent = job.end === null

            return (
              <li key={job.id} className="relative pl-8 sm:pl-16">
                {/* Timeline dot */}
                <span
                  className={`absolute left-[-4px] sm:left-[12px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    isCurrent
                      ? 'bg-accent border-accent'
                      : 'bg-surface border-border'
                  }`}
                />

                {/* Card */}
                <div
                  className={`rounded-2xl border p-6 transition-colors ${
                    isCurrent
                      ? 'border-accent/30 bg-card/80'
                      : 'border-border bg-card/80'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-fg">
                        {job.role}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          isTech ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                          isCurrent
                            ? 'bg-accent text-white'
                            : 'bg-accent-dim text-muted'
                        }`}
                      >
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                        )}
                        {job.start} — {job.end ?? experience.present}
                      </span>
                      {job.note && (
                        <p className="text-xs text-muted mt-1">{job.note}</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Tech stack */}
                  {isTech && (
                    <div className="flex flex-wrap gap-2">
                      {job.tech!.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-accent bg-accent-dim border border-accent/20 rounded-full px-2.5 py-0.5 cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
