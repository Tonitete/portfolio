'use client'

import { useState } from 'react'
import { FiMail, FiCopy, FiCheck, FiMapPin, FiGithub } from 'react-icons/fi'

interface Props {
  title: string
  email: string
  copyLabel: string
  copiedLabel: string
  github: string
  location: string
  availability: {
    status: string
    labels: { open: string; passive: string; closed: string }
  }
}

const AVAILABILITY_STYLES: Record<string, { dot: string; badge: string }> = {
  open: { dot: 'bg-green-400', badge: 'border-green-500/40  text-green-300  bg-green-500/10' },
  passive: { dot: 'bg-yellow-400', badge: 'border-yellow-500/40 text-yellow-300 bg-yellow-500/10' },
  closed: { dot: 'bg-red-400', badge: 'border-red-500/40    text-red-300    bg-red-500/10' }
}

export function ContactCard ({ title, email, copyLabel, copiedLabel, github, location, availability }: Props) {
  const [copied, setCopied] = useState(false)

  async function copyEmail () {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select text — navigator.clipboard can fail without HTTPS
      const el = document.createElement('textarea')
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const avStyle = AVAILABILITY_STYLES[availability.status] ?? AVAILABILITY_STYLES.closed
  const avLabel = availability.labels[availability.status as keyof typeof availability.labels]

  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6 flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
        {title}
      </h2>

      {/* Info rows */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <FiMail className="shrink-0 text-accent" size={13} />
          <span className="text-sm text-fg truncate">{email}</span>
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <FiMapPin className="shrink-0 text-accent" size={13} />
          <span className="text-sm text-fg">{location}</span>
        </div>
      </div>

      {/* Availability badge */}
      <div className={`inline-flex items-center gap-2 cursor-default self-start px-3 py-1 rounded-full border text-xs font-medium ${avStyle.badge}`}>
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${avStyle.dot}`} />
        {avLabel}
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-3 gap-2 pt-1">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                     bg-accent text-white hover:opacity-90 transition-opacity"
        >
          <FiMail size={12} />
          Email
        </a>

        <button
          onClick={copyEmail}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                     border border-border text-fg hover:border-accent hover:text-accent
                     transition-colors"
        >
          {copied
            ? (
            <>
              <FiCheck size={12} className="text-green-400" />
              <span className="text-green-400">{copiedLabel}</span>
            </>
              )
            : (
            <>
              <FiCopy size={12} />
              {copyLabel}
            </>
              )}
        </button>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                     border border-border text-fg hover:border-accent hover:text-accent
                     transition-colors"
        >
          <FiGithub size={12} />
          GitHub
        </a>
      </div>
    </div>
  )
}
