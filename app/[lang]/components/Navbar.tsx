'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary, Locale } from '../../../dictionaries'
import { locales } from '../../../dictionaries'

type Section = 'home' | 'experience' | 'technology'

interface Props {
  dict: Dictionary
  lang: Locale
  activeSection: Section
  onSectionChange: (section: Section) => void
}

const SECTION_KEYS: Section[] = ['home', 'experience', 'technology']

export function Navbar ({ dict, lang, activeSection, onSectionChange }: Props) {
  // const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect(() => {
  //   setIsDark(!document.documentElement.classList.contains('light'))
  // }, [])

  // function toggleTheme () {
  //   const html = document.documentElement
  //   if (html.classList.contains('light')) {
  //     html.classList.remove('light')
  //     localStorage.setItem('theme', 'dark')
  //     setIsDark(true)
  //   } else {
  //     html.classList.add('light')
  //     localStorage.setItem('theme', 'light')
  //     setIsDark(false)
  //   }
  // }

  function langHref (l: Locale) {
    return `/${l}#${activeSection}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(10,10,10,0.85)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <button
          className="text-sm font-semibold tracking-tight text-fg hover:text-accent transition-colors"
        >
          <Image
            src={'/portfolio/icon.svg'}
            alt="Logo"
            width={32}
            height={32}
            onClick={() => onSectionChange('home')}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {SECTION_KEYS.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {dict.nav[section]}
            </button>
          ))}
        </div>

        {/* Right side: lang + theme */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1 border border-border rounded-full px-2 py-1">
            {locales.map((l) => (
              <Link
                key={l}
                href={langHref(l)}
                className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
                  l === lang
                    ? 'bg-accent text-white'
                    : 'text-muted hover:text-fg'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          {/* <button */}
          {/*   onClick={toggleTheme} */}
          {/*   aria-label={dict.nav.toggleTheme} */}
          {/*   className="p-2 rounded-full border border-border text-muted hover:text-fg hover:border-accent transition-colors" */}
          {/* > */}
          {/*   {isDark */}
          {/*     ? ( */}
          {/*     <SunIcon /> */}
          {/*       ) */}
          {/*     : ( */}
          {/*     <MoonIcon /> */}
          {/*       )} */}
          {/* </button> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden p-2 rounded-full border border-border text-muted hover:text-fg transition-colors"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-card px-4 pb-4 pt-2 space-y-1">
          {SECTION_KEYS.map((section) => (
            <button
              key={section}
              onClick={() => {
                onSectionChange(section)
                setMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg hover:bg-accent-dim'
              }`}
            >
              {dict.nav[section]}
            </button>
          ))}
          <div className="flex items-center gap-1 pt-2 border-t border-border">
            {locales.map((l) => (
              <Link
                key={l}
                href={langHref(l)}
                className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                  l === lang
                    ? 'bg-accent text-white border-accent'
                    : 'border-border text-muted hover:text-fg'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

// function SunIcon () {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="4" />
//       <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//     </svg>
//   )
// }
//
// function MoonIcon () {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//     </svg>
//   )
// }

function MenuIcon () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
