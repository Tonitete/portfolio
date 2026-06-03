import type { Dictionary } from '../../../dictionaries'
import { ContactCard } from './ContactCard'
import { FiCode, FiBookOpen, FiMonitor, FiServer, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

const HOBBY_ICONS: Record<string, IconType> = {
  code: FiCode,
  bookopen: FiBookOpen,
  monitor: FiMonitor,
  server: FiServer,
  trending: FiTrendingUp
}

function HobbiesGrid ({ hobbies }: { hobbies: Array<{ text: string; icon: string }> }) {
  return (
    <div className="flex flex-col gap-2">
      {hobbies.map(({ text, icon }) => {
        const Icon = HOBBY_ICONS[icon] ?? FiCode
        return (
          <div
            key={text}
            className="flex items-start gap-2 p-2 rounded-xl border border-border/60 bg-bg/30 hover:border-accent/40 hover:bg-accent/5 transition-colors cursor-default"
          >
            <Icon size={14} className="shrink-0 text-accent mt-0.5" />
            <span className="text-xs text-fg leading-snug">{text}</span>
          </div>
        )
      })}
    </div>
  )
}

interface Props {
  dict: Dictionary
}

export function HomeSection ({ dict }: Props) {
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
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400 text-shadow-xs/40">
          {home.bio}
        </p>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contact */}
        <ContactCard
          title={home.contactTitle}
          email={home.email}
          copyLabel={home.copyLabel}
          copiedLabel={home.copiedLabel}
          github={home.github}
          location={home.location}
          availability={home.availability}
        />

        {/* Languages */}
        <div className="rounded-2xl border border-border bg-card/80 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            {home.languagesTitle}
          </h2>
          <ul className="space-y-3">
            {home.languages.map((lang) => (
              <li key={lang.name}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-medium text-fg">{lang.name}</span>
                  <span className="text-xs text-muted">{lang.level}</span>
                </div>
                <div className="flex gap-1" aria-label={`${lang.dots} de 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i < lang.dots ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className="rounded-2xl border border-border bg-card/80 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            {home.hobbiesTitle}
          </h2>
          <HobbiesGrid hobbies={home.hobbies} />
        </div>
      </div>
    </section>
  )
}
