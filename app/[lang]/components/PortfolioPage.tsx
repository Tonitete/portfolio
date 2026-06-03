'use client'

import { useState, useEffect } from 'react'
import type { Dictionary, Locale } from '../../../dictionaries'
import { Navbar } from './Navbar'

type Section = 'home' | 'experience' | 'technology'
const SECTIONS: Section[] = ['home', 'experience', 'technology']

function getInitialSection(): Section {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash.replace('#', '') as Section
  return SECTIONS.includes(hash) ? hash : 'home'
}

interface Props {
  dict: Dictionary
  lang: Locale
  children: [React.ReactNode, React.ReactNode, React.ReactNode]
}

export function PortfolioPage({ dict, lang, children }: Props) {
  const [activeSection, setActiveSection] = useState<Section>('home')

  useEffect(() => {
    setActiveSection(getInitialSection())
  }, [])

  function changeSection(section: Section) {
    setActiveSection(section)
    window.location.hash = section
  }

  const [homeSection, experienceSection, technologySection] = children

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        dict={dict}
        lang={lang}
        activeSection={activeSection}
        onSectionChange={changeSection}
      />
      <main className="flex-1">
        <div style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
          {homeSection}
        </div>
        <div
          style={{
            display: activeSection === 'experience' ? 'block' : 'none',
          }}
        >
          {experienceSection}
        </div>
        <div
          style={{
            display: activeSection === 'technology' ? 'block' : 'none',
          }}
        >
          {technologySection}
        </div>
      </main>
    </div>
  )
}
