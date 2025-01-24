import { ImageSkill } from './ImageSkill'

export function Skills (): JSX.Element {
  const csharpIcon = '/portfolio/img/csharp-icon.png'
  const cssIcon = '/portfolio/img/css-icon.png'
  const htmlIcon = '/portfolio/img/html-icon.png'
  const jsIcon = '/portfolio/img/javascript-icon.png'
  const pythonIcon = '/portfolio/img/python-icon.png'
  const reactIcon = '/portfolio/img/react-icon.png'
  const tsIcon = '/portfolio/img/typescript-icon.png'
  const netIcon = '/portfolio/img/dotnet-icon.png'

  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Habilidades</h1>
        <div className='mt-5 mb-10 px-5 grid grid-cols-7 justify-items-center items-center'>
          <ImageSkill src={csharpIcon} alt='C Sharp' />
          <ImageSkill src={netIcon} alt='.NET' />
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
