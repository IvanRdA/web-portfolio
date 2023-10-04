'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import StackLogosBox from './StackLogosBox'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <article
      id='HomePage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-col justify-center items-center bg-gradient-to-r from-reactBlue to-darkReactBlue text-JSYellow'>
      <Image
        src='/picture.jpg'
        alt='Ivan Rodriguez picture'
        width='400'
        height='400'
        priority={true}
        className='rounded-full shadow-2xl m-6 animate-appear'
      />
      <h1 className='text-3xl font-MontserratBlack hover:animate-bounce'>
        {t('HomeName')}
      </h1>
      <h2 className='text-2xl font-MontserratItalic mb-4'>
        {t('HomeJobRole')}
      </h2>
      <StackLogosBox />
      <a
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        download='IVAN RODRIGUEZ RESUME.pdf'>
        <button className='mt-4 bg-JSYellow text-black p-2 rounded-tr-lg rounded bl-lg shadow-2xl hover:shadow-lg hover:bg-white hover:text-reactBlue transition-all duration-200 ease-in-out'>
          {t('DownloadResumeButton')}
        </button>
      </a>
    </article>
  )
}
