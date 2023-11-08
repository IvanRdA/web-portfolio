'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import StackLogosBox from './StackLogosBox'

export default function HomeRightBox() {
  const { t } = useTranslation()

  return (
    <article className='m-4 flex flex-row md:flex-col justify-center items-center w-[35vw] h-[90vh] animate-appear'>
      <h3 className='font-MontserratBlack text-lg p-2 text-beige-300'>
        {t('BriefDescription.Title')}
      </h3>
      <p className='font-MontserratRegular m-4 text-beige-200'>
        {t('BriefDescription.ContentOne')}
      </p>
      <p className='font-MontserratRegular m-4 text-beige-200'>
        {t('BriefDescription.ContentTwo')}
      </p>
      <p className='font-MontserratRegular m-4 text-beige-200'>
        {t('BriefDescription.ContentThree')}
      </p>
      <a
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        download='IVAN RODRIGUEZ RESUME.pdf'>
        <button className='mt-4 bg-beige-200 text-purple-900 p-2 rounded-tr-lg rounded-bl-lg shadow-2xl hover:shadow-lg hover:bg-purple-300 hover:text-beige-200 transition-all duration-200 ease-in-out'>
          {t('DownloadResumeButton')}
        </button>
      </a>
    </article>
  )
}
