'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const portrait = '/portfolio/img/portrait.jpeg'
const sendIcon = '/portfolio/img/send-icon.png'
const copyIcon = '/portfolio/img/copy-icon.png'
const githubIcon = '/portfolio/img/github-icon.png'
const csharpIcon = '/portfolio/img/csharp-icon.png'
const cssIcon = '/portfolio/img/css-icon.png'
const htmlIcon = '/portfolio/img/html-icon.png'
const jsIcon = '/portfolio/img/javascript-icon.png'
const pythonIcon = '/portfolio/img/python-icon.png'
const reactIcon = '/portfolio/img/react-icon.png'
const tsIcon = '/portfolio/img/typescript-icon.png'
const gitIcon = '/portfolio/img/git-icon.png'
const sqlIcon = '/portfolio/img/sql-icon.png'
const linuxIcon = '/portfolio/img/linux-icon.png'
const unityIcon = '/portfolio/img/unity-icon.png'
const imageTwitchtovoice = '/portfolio/img/image-twitchtovoice.png'
const imageFakeapi = '/portfolio/img/image-fakeapi.png'
const imageFileconverter = '/portfolio/img/image-fileconverter.png'

interface ImageSkillProps {
  src: string
  alt: string
}

interface SlideItemProps {
  hrefView: string
  hrefGithub: string
  imgSrc: string
  alt: string
  children: React.ReactNode
}

export default function Home (): JSX.Element {
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

function Titulo (): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 md:mt-20 mt-10 shadow-lg mb-4 shadow-slate-950'>
        <div className='md:grid-cols-2 flex'>
          <div className='md:w-5/6 w-full md:px-20 flex justify-center items-center'>
            <p className='text-lg'>Hola, me llamo
              <span className='text-2xl font-bold text-green-300'> Antonio Caballero Miró </span>
              y soy desarrollador Fullstack, especializado en backend. Experto en C#, Python y Javascript. Con más de cinco años de experiencia he tenido la oportunidad de trabajar con multitud de frameworks, por suerte tengo una gran facilidad para mantenerme al día con las nuevas tecnologías. Habituado al trabajo en equipo.
            </p>
          </div>
          <div className='md:w-auto w-1/2 -mr-10 -mt-10'>
            <Image
              src={portrait}
              alt='Antonio Caballero'
              width={300}
              height={300}
              className={`rounded-full ${isLoaded ? 'scale-100' : 'scale-0'} transition-transform duration-500 object-fill shadow-lg shadow-slate-950`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function Proyectos (): JSX.Element {
  const settings = {
    dots: false,
    className: '',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Proyectos</h1>
        <div className='slider-container mx-10 my-5 grid grid-cols-1 h-full'>
          <Slider {...settings}>
            <SlideItem
              hrefView='https://fakeapi.bsite.net/'
              hrefGithub='https://github.com/Tonitete/FakeApi'
              imgSrc={imageFakeapi}
              alt='Fake Api'
            >
              <p>Api de productos fake para pruebas fetch y mockups con datos ficticios. Creada con .NET 7 C# y Razor. Tiene una documentación detallada con ejemplos de código en Javascript, C# y Python. </p>
            </SlideItem>
            {/* <SlideItem
              hrefView="https://google.es"
              hrefGithub=""
              imgSrc={proj_example}
              alt="Ejemplo 2">
                <p>Ejemplo de proyecto de sitio web. Creada con React, Typescript y Tailwind CSS. </p>
            </SlideItem> */}
            <SlideItem
              hrefView='https://github.com/Tonitete/TwitchTextToVoice/releases'
              hrefGithub='https://github.com/Tonitete/TwitchTextToVoice'
              imgSrc={imageTwitchtovoice}
              alt='Twitch text to voice'
            >
              <p>Programa de escritorio que permite convertir el chat de Twitch en voz. Desarrollado en C# para escritorio para lograr ser lo más ligero posible. Publicado a mediados de 2023 para facilitar la accesibilidad de personas con dificultades para seguir el chat, y ampliado para ser una herramienta útil para los streamers.</p>
            </SlideItem>
            <SlideItem
              hrefView='https://github.com/Tonitete/FileConverter/releases'
              hrefGithub='https://github.com/Tonitete/FileConverter'
              imgSrc={imageFileconverter}
              alt='File Converter'
            >
              <p>Programa de escritorio portable en C# ideado para convertir archivos de un formato a otro. Funciona con foto, video, sonidos y pdfs. Multilenguaje. Publicado y en uso desde mediados del 2023 con múltiples comentarios positivos de usuarios.</p>
            </SlideItem>
          </Slider>
        </div>
      </div>
    </>
  )
}

function Contacto (): JSX.Element {
  const [showPopover, setShowPopover] = useState(false)

  const copyClipboard = (): void => {
    void navigator.clipboard.writeText('antonio.caballero.miro@gmail.com')
    setShowPopover(true)
    setTimeout(() => setShowPopover(false), 2000)
  }
  const sendEmail = (): void => {
    const recipient = 'antonio.caballero.miro@gmail.com'
    const mailTo = 'mailto:' + recipient
    window.location.href = mailTo
  }
  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 pb-10 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Contacto</h1>
        <div className='md:flex md:ml-10'>
          <div className='flex justify-center items-center md:flex-none'>
            <input type='text' readOnly className='rounded-lg bg-slate-800 w-80 text-center text-lg md:ml-5 mt-5 py-2' value='antonio.caballero.miro@gmail.com' />
          </div>
          <div className='md:justify-normal md:w-auto justify-center items-center flex'>
            <button className='rounded-full bg-blue-500 hover:bg-blue-700 text-center text-lg md:ml-5 mt-5 py-2 px-4 items-center' onClick={sendEmail}>
              <Image height={20} width={20} src={sendIcon} alt='send' />
            </button>
            <button className='rounded-full bg-blue-500 hover:bg-blue-700 text-center text-lg ml-4 mt-5 py-2 px-4 items-center' onClick={copyClipboard}>
              <Image height={20} width={20} src={copyIcon} alt='copy' />
            </button>
            {showPopover && (
              <div className='absolute bg-gray-900 border border-gray-300 rounded p-2 shadow-md'>
                Copiado!
              </div>
            )}
            <a className='text-center text-lg ml-4 mt-5 items-center hover:animate-bounce' href='https://github.com/tonitete' target='_blank' rel='noreferrer'>
              <Image height={45} width={45} src={githubIcon} alt='github' className='drop-shadow-md' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function Skills (): JSX.Element {
  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Habilidades</h1>
        <div className='mt-5 mb-10 px-5 grid grid-cols-7 justify-items-center items-center'>
          <ImageSkill src={csharpIcon} alt='C Sharp' />
          <ImageSkill src={pythonIcon} alt='Python' />
          <ImageSkill src={jsIcon} alt='Javascript' />
          <ImageSkill src={tsIcon} alt='Typescript' />
          <ImageSkill src={reactIcon} alt='React' />
          <ImageSkill src={htmlIcon} alt='HTML5' />
          <ImageSkill src={cssIcon} alt='CSS3' />
        </div>
      </div>
    </>
  )
}

function SoftSkills (): JSX.Element {
  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Habilidades blandas</h1>
        <div className='mt-5 mb-10 px-5 grid grid-cols-5 justify-items-center items-center'>
          <ImageSkill src={gitIcon} alt='Git' />
          <ImageSkill src={githubIcon} alt='Github' />
          <ImageSkill src={sqlIcon} alt='SQL' />
          <ImageSkill src={linuxIcon} alt='Arquitectura Linux' />
          <ImageSkill src={unityIcon} alt='Unity' />
        </div>
      </div>
    </>
  )
}

const ImageSkill: React.FC<ImageSkillProps> = ({ src, alt }) => {
  const [popover, setPopover] = useState(false)
  return (
    <div className='relative'>
      <Image
        height={96} width={96} src={src} alt={alt} className='transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300'
        onMouseEnter={() => setPopover(true)}
        onMouseLeave={() => setPopover(false)}
      />
      {popover && (
        <div className='absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-black text-white text-center p-2 rounded-md whitespace-nowrap'>
          {alt}
        </div>
      )}
    </div>
  )
}

const SlideItem: React.FC<SlideItemProps> = ({ hrefView, hrefGithub, imgSrc, alt, children }) => {
  return (
    <div className='grid grid-cols-1 border-2 rounded border-green-600 bg-gray-600 ' style={{ minHeight: '35rem', height: '100%' }}>
      <a href={hrefView} target='_blank' className='focus:outline-none' rel='noreferrer'>
        <Image
          src={imgSrc}
          alt={alt}
          width={900}
          height={900}
          className='w-full p-1 max-h-64'
        />
      </a>
      <h3 className='text-lg font-bold py-2 text-center'>{alt}</h3>
      <div className='p-3'>{children}</div>
      <div className='grid place items-end'>
        <div className='flex justify-end p-3 items-center'>
          <a href={hrefView} target='_blank' className='mr-2 px-2 py-1 bg-blue-600 text-black rounded hover:text-blue-600 hover:bg-black hover:scale-105 duration-300' rel='noreferrer'>Ver</a>
          <a href={hrefGithub} target='_blank' className='inline-flex items-center gap-1' rel='noreferrer'>
            <Image src={githubIcon} alt='Github' height={30} width={30} className='rounded-md hover:scale-150 duration-300' />
          </a>
        </div>
      </div>

    </div>
  )
}
