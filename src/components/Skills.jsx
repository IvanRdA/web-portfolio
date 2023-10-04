'use client'

import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()
  return (
    <article
      id='SkillsPage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-JSYellow to-darkJSYellow text-black'>
      <h1>{t('SkillsTitle')}</h1>
    </article>
  )
}
