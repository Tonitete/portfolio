'use client'

import Image from "next/image";
import portrait from "../../public/img/portrait.jpeg";
import send_icon from "../../public/img/send-icon.png";
import copy_icon from "../../public/img/copy-icon.png";
import github_icon from "../../public/img/github-icon.png";
import csharp_icon from "../../public/img/csharp-icon.png";
import css_icon from "../../public/img/css-icon.png";
import html_icon from "../../public/img/html-icon.png";
import js_icon from "../../public/img/javascript-icon.png";
import python_icon from "../../public/img/python-icon.png";
import react_icon from "../../public/img/react-icon.png";
import ts_icon from "../../public/img/typescript-icon.png";
import git_icon from "../../public/img/git-icon.png";
import sql_icon from "../../public/img/sql-icon.png";
import linux_icon from "../../public/img/linux-icon.png";
import unity_icon from "../../public/img/unity-icon.png";
import proj_example from "../../public/img/proyecto_ejemplo.png";
import image_twitchtovoice from "../../public/img/image-twitchtovoice.png";
import image_fakeapi from "../../public/img/image-fakeapi.png";
import image_fileconverter from "../../public/img/image-fileconverter.png";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSkillProps {
  src: string;
  alt: string;
}

interface SlideItemProps {
  hrefView: string;
  hrefGithub: string;
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
}


export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="">
        <Titulo></Titulo>
        <Proyectos></Proyectos>
        <Contacto></Contacto>
        <Skills></Skills>
        <SoftSkills></SoftSkills>
      </div>
      <footer className="p-4">
        <p className="text-center text-slate-400">Mira este portfolio en <a href="https://github.com/tonitete/portfolio" className="text-slate-300" target="_blank">Github</a></p>
      </footer>
    </main>
  );
}

function Titulo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <div className="border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 md:mt-20 mt-10 shadow-lg mb-4 shadow-slate-950">
        <div className="md:grid-cols-2 flex">
          <div className="md:w-5/6 w-full md:px-20 flex justify-center items-center">
            <p className="text-lg">Hola, me llamo
              <span className="text-2xl font-bold text-green-300"> Antonio Caballero Miró </span>
              y soy desarrollador Fullstack, especializado en backend. Experto en C#, Python y Javascript. Con más de cinco años de experiencia he tenido la oportunidad de trabajar con multitud de frameworks, por suerte tengo una gran facilidad para mantenerme al día con las nuevas tecnologías. Habituado al trabajo en equipo.</p>
          </div>
          <div className="md:w-auto w-1/2 -mr-10 -mt-10">
            <Image
              src={portrait.src}
              alt="Antonio Caballero"
              width={300}
              height={300}
              className={`rounded-full ${isLoaded ? 'scale-100' : 'scale-0'} transition-transform duration-500 object-fill shadow-lg shadow-slate-950`}
              onLoad={() => setIsLoaded(true)}>
            </Image>
          </div>
        </div>
      </div>
    </>
  );
}

function Proyectos() {
  const settings = {
    dots: false,
    className: "",
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
  };

  return (
    <>
      <div className="border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950">
        <h1 className="text-xl font-bold pl-10 pt-3">Proyectos</h1>
        <div className="slider-container mx-10 my-5 grid grid-cols-1 h-full">
          <Slider {...settings}>
            <SlideItem
              hrefView="https://fakeapi.bsite.net/"
              hrefGithub="https://github.com/Tonitete/FakeApi"
              imgSrc={image_fakeapi.src}
              alt="Fake Api">
              <p>Api de productos fake para pruebas fetch y mockups con datos ficticios. Creada con .NET 7 C# y Razor. Tiene una documentación detallada con ejemplos de código en Javascript, C# y Python. </p>
            </SlideItem>
            <SlideItem
              hrefView="https://google.es"
              hrefGithub=""
              imgSrc={proj_example.src}
              alt="Ejemplo 2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod, ut quo tempore explicabo, eum earum non vitae nemo modi veniam numquam laborum iste temporibus eligendi labore beatae quisquam? Modi?
            </SlideItem>
            <SlideItem
              hrefView="https://github.com/Tonitete/TwitchTextToVoice/releases"
              hrefGithub="https://github.com/Tonitete/TwitchTextToVoice"
              imgSrc={image_twitchtovoice.src}
              alt="Twitch text to voice">
                <p>Programa de escritorio que permite convertir el chat de Twitch en voz. Desarrollado en C# para escritorio para lograr ser lo más ligero posible. Publicado a mediados de 2023 para facilitar la accesibilidad de personas con dificultades para seguir el chat, y ampliado para ser una herramienta útil para los streamers.</p>
            </SlideItem>
            <SlideItem
              hrefView="https://github.com/Tonitete/FileConverter/releases"
              hrefGithub="https://github.com/Tonitete/FileConverter"
              imgSrc={image_fileconverter.src}
              alt="File Converter">
              <p>Programa de escritorio portable en C# iddeado para convertir archivos de un formato a otro. Funciona con foto, video, sonidos y pdfs. Multilenguaje. Publicado y en uso desde mediados del 2023 con múltiples comentarios positivos de usuarios.</p>
            </SlideItem>
          </Slider>
        </div>
      </div>
    </>
  );
}

function Contacto() {
  const [showPopover, setShowPopover] = useState(false)

  const copyClipboard = () => {
    navigator.clipboard.writeText("antonio.caballero.miro@gmail.com");
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };
  const sendEmail = () => {
    var recipient = "antonio.caballero.miro@gmail.com";
    var mailTo = "mailto:" + recipient;
    window.location.href = mailTo;
  };
  return (
    <>
      <div className="border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 pb-10 shadow-lg mb-4 shadow-slate-950">
        <h1 className="text-xl font-bold pl-10 pt-3">Contacto</h1>
        <div className="md:flex md:ml-10">
          <div className="flex justify-center items-center md:flex-none">
            <input type="text" readOnly className="rounded-lg bg-slate-800 w-80 text-center text-lg md:ml-5 mt-5 py-2" value={"antonio.caballero.miro@gmail.com"} />
          </div>
          <div className="md:justify-normal md:w-auto justify-center items-center flex">
            <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-center text-lg md:ml-5 mt-5 py-2 px-4 items-center" onClick={sendEmail}>
              <Image height={20} width={20} src={send_icon.src} alt="send"></Image>
            </button>
            <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-center text-lg ml-4 mt-5 py-2 px-4 items-center" onClick={copyClipboard}>
              <Image height={20} width={20} src={copy_icon.src} alt="copy"></Image>
            </button>
            {showPopover && (
              <div className="absolute bg-gray-900 border border-gray-300 rounded p-2 shadow-md">
                Copiado!
              </div>
            )}
            <a className="text-center text-lg ml-4 mt-5 items-center hover:animate-bounce" href="https://github.com/tonitete" target="_blank">
              <Image height={45} width={45} src={github_icon.src} alt="github" className="drop-shadow-md"></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {

  return (
    <>
      <div className="border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950">
        <h1 className="text-xl font-bold pl-10 pt-3">Habilidades</h1>
        <div className="mt-5 mb-10 px-5 grid grid-cols-7 justify-items-center items-center">
          <ImageSkill src={csharp_icon.src} alt="C Sharp"></ImageSkill>
          <ImageSkill src={python_icon.src} alt="Python"></ImageSkill>
          <ImageSkill src={js_icon.src} alt="Javascript"></ImageSkill>
          <ImageSkill src={ts_icon.src} alt="Typescript"></ImageSkill>
          <ImageSkill src={react_icon.src} alt="React"></ImageSkill>
          <ImageSkill src={html_icon.src} alt="HTML5"></ImageSkill>
          <ImageSkill src={css_icon.src} alt="CSS3"></ImageSkill>
        </div>
      </div>
    </>
  );
}

function SoftSkills() {
  return (
    <>
      <div className="border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950">
        <h1 className="text-xl font-bold pl-10 pt-3">Habilidades blandas</h1>
        <div className="mt-5 mb-10 px-5 grid grid-cols-5 justify-items-center items-center">
          <ImageSkill src={git_icon.src} alt="Git"></ImageSkill>
          <ImageSkill src={github_icon.src} alt="Github"></ImageSkill>
          <ImageSkill src={sql_icon.src} alt="SQL"></ImageSkill>
          <ImageSkill src={linux_icon.src} alt="Arquitectura Linux"></ImageSkill>
          <ImageSkill src={unity_icon.src} alt="Unity"></ImageSkill>
        </div>
      </div>
    </>
  );
}

const ImageSkill: React.FC<ImageSkillProps> = ({ src, alt }) => {
  const [popover, setPopover] = useState(false);
  return (
    <div className="relative">
      <Image height={96} width={96} src={src} alt={alt} className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300"
        onMouseEnter={() => setPopover(true)}
        onMouseLeave={() => setPopover(false)} />
      {popover && (
        <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-black text-white text-center p-2 rounded-md whitespace-nowrap">
          {alt}
        </div>
      )}
    </div>
  );
}

const SlideItem: React.FC<SlideItemProps> = ({ hrefView, hrefGithub, imgSrc, alt, children }) => {
  return (
    <div className="grid grid-cols-1 border-2 rounded border-green-600 bg-gray-600 " style={{ minHeight: '35rem', height: '100%' }}>
      <a href={hrefView} target="_blank" className="focus:outline-none">
        <Image src={imgSrc}
          alt={alt}
          width={900}
          height={900}
          className="w-full p-1 max-h-64" />
      </a>
      <h3 className="text-lg font-bold py-2 text-center">{alt}</h3>
      <div className="p-3">{children}</div>
      <div className="grid place items-end">
        <div className="flex justify-end p-3 items-center">
          <a href={hrefView} target="_blank" className="mr-2 px-2 py-1 bg-blue-600 text-black rounded hover:text-blue-600 hover:bg-black hover:scale-105 duration-300">Ver</a>
          <a href={hrefGithub} target="_blank" className="inline-flex items-center gap-1">
            <Image src={github_icon.src} alt="Github" height={30} width={30} className="rounded-md hover:scale-150 duration-300" />
          </a>
        </div>
      </div>
      
    </div>
  );
}