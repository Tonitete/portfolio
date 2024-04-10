import Slider from 'react-slick'
import { SlideItem } from './SlideItem'

export function Proyectos (): JSX.Element {
  const imageTwitchtovoice = '/portfolio/img/image-twitchtovoice.png'
  const imageFakeapi = '/portfolio/img/image-fakeapi.png'
  const imageFileconverter = '/portfolio/img/image-fileconverter.png'

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
