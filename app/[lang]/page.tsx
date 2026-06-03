import { notFound } from 'next/navigation'
import { isLocale, getDictionary } from '../../dictionaries'
import { PortfolioPage } from './components/PortfolioPage'
import { HomeSection } from './components/HomeSection'
import { ExperienceSection } from './components/ExperienceSection'
import { TechnologySection } from './components/TechnologySection'

export default async function Page (props: PageProps<'/[lang]'>) {
  const { lang } = await props.params

  if (!isLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <PortfolioPage dict={dict} lang={lang}>
      <HomeSection dict={dict} />
      <ExperienceSection dict={dict} />
      <TechnologySection dict={dict} />
    </PortfolioPage>
  )
}
