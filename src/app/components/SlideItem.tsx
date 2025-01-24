import React from 'react'
import Image from 'next/image'

interface SlideItemProps {
  hrefView: string
  hrefGithub: string
  imgSrc: string
  alt: string
  children: React.ReactNode
}

export function SlideItem ({ hrefView, hrefGithub, imgSrc, alt, children }: SlideItemProps): JSX.Element {
  const githubIcon = '/portfolio/img/github-icon.png'

  return (
    <div className='grid grid-cols-1 border-2 rounded border-green-600 bg-gray-600 ' style={{ minHeight: '35rem', height: '100%' }}>
      <a
        href={hrefView}
        target='_blank'
        className='focus:outline-none' rel='noreferrer'
      >
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
          <a
            href={hrefView}
            target='_blank'
            className='mr-2 px-2 py-1 bg-blue-600 text-black rounded hover:text-blue-600 hover:bg-black hover:scale-105 duration-300'
            rel='noreferrer'
          >Ver
          </a>
          <a
            href={hrefGithub}
            target='_blank'
            className='inline-flex items-center gap-1'
            rel='noreferrer'
          >
            <Image
              src={githubIcon}
              alt='Github'
              height={30}
              width={30}
              className='rounded-md hover:scale-150 duration-300'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
