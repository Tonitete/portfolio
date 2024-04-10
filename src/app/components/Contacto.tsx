import { useState } from 'react'
import Image from 'next/image'

export function Contacto (): JSX.Element {
  const sendIcon = '/portfolio/img/send-icon.png'
  const copyIcon = '/portfolio/img/copy-icon.png'
  const githubIcon = '/portfolio/img/github-icon.png'

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
