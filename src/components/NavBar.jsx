'use client'

import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function NavBar() {
  const { t } = useTranslation()
  return (
    <nav className='h-[10vh] w-[100vw] flex justify-end items-center p-8 fixed bg-white text-black'>
      <ul className='flex gap-8 items-center font-MontserratRegular'>
        <li className='hover:scale-110 hover:text-reactBlue transition-all duration-200 ease-in-out'>
          <a
            href='#HomePage'
            rel='nofollow'>
            {t('HomeNav')}
          </a>
        </li>
        <li className='hover:scale-110 hover:text-reactBlue transition-all duration-200 ease-in-out'>
          <a
            href='#AboutPage'
            rel='nofollow'>
            {t('AboutNav')}
          </a>
        </li>
        <li className='hover:scale-110 hover:text-reactBlue transition-all duration-200 ease-in-out'>
          <a
            href='#SkillsPage'
            rel='nofollow'>
            {t('SkillsNav')}
          </a>
        </li>
        <li className='hover:scale-110 hover:text-reactBlue transition-all duration-200 ease-in-out'>
          <a
            href='#ProjectsPage'
            rel='nofollow'>
            {t('ProjectsNav')}
          </a>
        </li>
        <li className='hover:scale-110 hover:text-reactBlue transition-all duration-200 ease-in-out'>
          <a
            href='#ContactPage'
            rel='nofollow'>
            {t('ContactNav')}
          </a>
        </li>
        <LanguageSelector />
      </ul>
    </nav>
  )
}