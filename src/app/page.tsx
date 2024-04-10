'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Titulo } from './components/Titulo'
import { Proyectos } from './components/Proyectos'
import { Contacto } from './components/Contacto'
import { Skills } from './components/Skills'
import { SoftSkills } from './components/SoftSkills'

export default function Home (): React.JSX.Element {
  return (
    <main className='flex flex-col'>
      <div className=''>
        <Titulo />
        <Proyectos />
        <Contacto />
        <Skills />
        <SoftSkills />
      </div>
      <footer className='p-4'>
        <p className='text-center text-slate-400'>Mira este portfolio en <a href='https://github.com/tonitete/portfolio' className='text-slate-300' target='_blank' rel='noreferrer'>Github</a></p>
      </footer>
    </main>
  )
}
