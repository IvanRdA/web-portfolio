'use client'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import data from '@/libs/data.json'

export default function Skills() {
  const { t } = useTranslation()
  const skills = data.skills
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('name')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSelect = (e) => {
    e.preventDefault()
    setFilterType(e.target.value)
  }

  const filtered = skills.filter((skill) => {
    if (search === '') {
      return skills
    }

    if (filterType === 'name') {
      return skill.name.indexOf(search) !== -1
    } else if (filterType === 'type') {
      return skill.type.indexOf(search) !== -1
    }
  })

  return (
    <article
      id='SkillsPage'
      className='h-[100vh] w-[100vw] snap-center m-auto flex flex-row md:flex-col justify-center items-center bg-gradient-to-r from-JSYellow to-darkJSYellow text-black'>
      <h1 className='font-MontserratBlack text-2xl'>{t('SkillsTitle')}</h1>
      <div className='h-[100vh] w-[70vw] bg-white text-black font-MontserratRegular text-sm flex flex-col justify-center items-center'>
        <search
          role='search'
          className='bg-reactBlue w-[100%] text-center p-4'>
          <h4 className='font-MontserratBlack'>
            {t('SkillsFilter.SectionTitle')}
          </h4>
          <select
            defaultValue={'name'}
            onChange={handleSelect}>
            <option value='name'>{t('SkillsFilter.byName')}</option>
            <option value='type'>{t('SkillsFilter.byType')}</option>
          </select>
          <input
            type='text'
            onChange={handleSearch}
            value={search}
          />
        </search>
        <main>
          <ul>
            {filtered.map((skill, idx) => (
              <li key={idx}>
                {skill.name} - at level: {skill.level} from {skill.type} type.
              </li>
            ))}
          </ul>
        </main>
      </div>
    </article>
  )
}
