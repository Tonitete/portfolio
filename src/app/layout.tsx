import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Antonio Caballero',
  description: ''
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='es'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={inter.className + ' antialiased text-slate-200 bg-gradient-to-b from-slate-900 to-slate-700'}>{children}</body>
    </html>
  )
}
