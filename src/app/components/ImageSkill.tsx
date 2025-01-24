import { useState } from 'react'
import Image from 'next/image'

interface ImageSkillProps {
  src: string
  alt: string
}

export function ImageSkill ({ src, alt }: ImageSkillProps): JSX.Element {
  const [popover, setPopover] = useState(false)
  return (
    <div className='relative'>
      <Image
        height={96}
        width={96}
        src={src}
        alt={alt}
        className='transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300'
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
