import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Titulo (): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  const portrait = '/portfolio/img/portrait.jpeg'

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
