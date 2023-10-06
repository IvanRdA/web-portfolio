'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import StackLogosBox from './StackLogosBox'

export default function HomeRightBox() {
  const { t } = useTranslation()

  return (
    <article className='m-4 flex flex-row md:flex-col justify-center items-center w-[50vw] h-[100vh]'>
      <h3 className='font-MontserratBlack text-lg p-2'>
        {t('BriefDescription.Title')}
      </h3>
      <p className='font-MontserratRegular m-4'>
        {t('BriefDescription.ContentOne')}
      </p>
      <p className='font-MontserratRegular m-4'>
        {t('BriefDescription.ContentTwo')}
      </p>
      <p className='font-MontserratRegular m-4'>
        {t('BriefDescription.ContentThree')}
      </p>
      <button className='mt-4 bg-JSYellow text-black p-2 rounded-tr-lg rounded bl-lg shadow-2xl hover:shadow-lg hover:bg-white hover:text-reactBlue transition-all duration-200 ease-in-out'>
        {t('DownloadResumeButton')}
      </button>
    </article>
  )
}
