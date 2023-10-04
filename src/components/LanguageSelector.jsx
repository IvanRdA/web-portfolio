'use client'

import { useState } from 'react'
import i18n from '@/i18n/index'
import EnglishFlag from './EnglishFlag'
import SpanishFlag from './SpanishFlag'
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils'

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('lang')
  )

  const handleLanguage = (e) => {
    e.preventDefault()
    const newLanguage = currentLanguage === 'eng' ? 'spa' : 'eng'
    i18n.changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
    localStorage.setItem('lang', newLanguage)
  }

  return (
    <div
      onClick={handleLanguage}
      value={currentLanguage}
      className='flex items-center justify-center'>
      {currentLanguage === 'eng' ? <EnglishFlag /> : <SpanishFlag />}
    </div>
  )
}
