'use client'

import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <article
      id='AboutPage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-col justify-center items-center bg-gradient-to-r from-carmesi to-darkCarmesi text-white'>
      <h1>{t('AboutTitle')}</h1>
    </article>
  )
}
