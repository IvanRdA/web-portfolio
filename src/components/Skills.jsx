'use client'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import data from '@/libs/data.json'
import SkillCard from './SkillCard'

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
      className='h-[90vh] w-[100vw] snap-center m-auto flex flex-row md:flex-col justify-end items-center bg-gradient-to-r from-JSYellow to-darkJSYellow text-black'>
      <div className='h-[100%] w-[70vw] bg-white text-black font-MontserratRegular text-sm flex flex-col justify-center items-center gap-2'>
        <h1 className='font-MontserratBlack text-2xl text-black m-2'>
          {t('SkillsTitle')}
        </h1>
        <search
          role='search'
          className='bg-reactBlue w-[100%] text-center p-4'>
          <h4 className='font-MontserratBlack text-white text-lg'>
            {t('SkillsFilter.SectionTitle')}
          </h4>
          <div>
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
          </div>
          <small className='font-MontserratRegular text-white'>
            {filterType === 'name'
              ? t('SkillsFilter.SmallIsName')
              : t('SkillsFilter.SmallIsType')}
          </small>
        </search>
        <main className='w-[90%] grid grid-flow-row grid-cols-3 gap-1 overflow-scroll align-middle justify-center m-4'>
          {filtered.map((skill, idx) => {
            return (
              <SkillCard
                skill={skill}
                key={idx}
              />
            )
          })}
        </main>
      </div>
    </article>
  )
}
