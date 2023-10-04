'use client'

import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <article
      id='ProjectsPage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-nodeGreen to-darkNodeGreen text-black'>
      <h1>{t('ProjectsTitle')}</h1>
    </article>
  )
}
