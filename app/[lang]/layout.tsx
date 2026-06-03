import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { locales, defaultLocale, isLocale } from '../../dictionaries'
import { notFound } from 'next/navigation'
import { StarField } from './components/StarField'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Antonio Caballero Miró — Fullstack Developer',
  description:
    'Portfolio of Antonio Caballero Miró, Fullstack Developer specialized in backend.'
}

export function generateStaticParams () {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout (props: LayoutProps<'/[lang]'>) {
  const { lang } = await props.params

  if (!isLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script: apply theme before first paint, default to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){try{var t=localStorage.getItem(\'theme\');if(t===\'light\'){document.documentElement.classList.add(\'light\')}else{/* dark is default: no class needed */}}catch(e){}})()'
          }}
        />
      </head>
      <body className="min-h-screen bg-surface text-fg">
        <StarField />
        <div className="relative z-10">{props.children}</div>
      </body>
    </html>
  )
}
