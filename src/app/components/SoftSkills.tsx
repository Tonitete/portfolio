import { ImageSkill } from './ImageSkill'

export function SoftSkills (): JSX.Element {
  const githubIcon = '/portfolio/img/github-icon.png'
  const gitIcon = '/portfolio/img/git-icon.png'
  const sqlIcon = '/portfolio/img/sql-icon.png'
  const linuxIcon = '/portfolio/img/linux-icon.png'
  const unityIcon = '/portfolio/img/unity-icon.png'
  const cybersecurityIcon = '/portfolio/img/cybersecurity-icon.png'

  return (
    <>
      <div className='border-2 rounded-xl border-gray-500 p-2 md:mx-20 mx-5 mt-1 shadow-lg mb-4 shadow-slate-950'>
        <h1 className='text-xl font-bold pl-10 pt-3'>Habilidades blandas</h1>
        <div className='mt-5 mb-10 px-5 grid grid-cols-6 justify-items-center items-center'>
          <ImageSkill src={gitIcon} alt='Git' />
          <ImageSkill src={githubIcon} alt='Github' />
          <ImageSkill src={sqlIcon} alt='SQL' />
          <ImageSkill src={linuxIcon} alt='Arquitectura Linux' /> {/* Arch btw */}
          <ImageSkill src={cybersecurityIcon} alt='Cybersecurity' />
          <ImageSkill src={unityIcon} alt='Unity' />
        </div>
      </div>
    </>
  )
}
