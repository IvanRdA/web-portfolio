'use client'

import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <article
      id='ContactPage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-purple-900 to-purple-950 text-beige-200'>
      <h1>{t('ContactTitle')}</h1>
    </article>
  )
}
