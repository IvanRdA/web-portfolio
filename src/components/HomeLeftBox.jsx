'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import StackLogosBox from './StackLogosBox'

export default function HomeLeftBox() {
  const { t } = useTranslation()

  return (
    <article
      id='HomePage'
      className='h-[90vh] w-[35vw] snap-center m-4 flex flex-col justify-center items-center animate-appear'>
      <Image
        src='/picture.jpg'
        alt='Ivan Rodriguez picture'
        width='350'
        height='350'
        priority={true}
        className='rounded-full shadow-2xl m-6'
      />
      <h1 className='text-3xl font-MontserratBlack hover:animate-pulse'>
        {t('HomeName')}
      </h1>
      <h2 className='text-2xl font-MontserratItalic mb-4'>
        {t('HomeJobRole')}
      </h2>
      <StackLogosBox />
    </article>
  )
}
