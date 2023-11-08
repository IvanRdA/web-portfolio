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
  const [level, setLevel] = useState(1)

  const handleSearch = (e) => {
    e.preventDefault()
    const query = e.target.value
    setSearch(query.toLowerCase())
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
      const skillName = skill.name
      const tagName = skill.tags || ''

      return (
        skillName.toLowerCase().indexOf(search) !== -1 ||
        tagName.toLowerCase() === search
      )
    } else if (filterType === 'type') {
      return skill.type.indexOf(search) !== -1
    } else if (filterType === 'level') {
      const parsedLevel = parseInt(search)

      return skill.level === parsedLevel
    }
  })

  return (
    <article
      id='SkillsPage'
      className='h-[90vh] w-[100vw] snap-center m-auto flex flex-row md:flex-col justify-end items-center bg-gradient-to-r from-purple-900 to-purple-950 text-beige-200'>
      <div className='h-[100%] w-[70vw] bg-beige-200 text-purple-950 font-MontserratRegular text-sm flex flex-col justify-center items-center gap-2'>
        <h1 className='font-MontserratBlack text-2xl text-purple-950 m-2'>
          {t('SkillsTitle')}
        </h1>
        <search
          role='search'
          className='bg-purple-950 w-[100%] text-center p-4'>
          <h4 className='font-MontserratBlack text-beige-200 text-lg'>
            {t('SkillsFilter.SectionTitle')}
          </h4>
          <div>
            <select
              defaultValue={'name'}
              onChange={handleSelect}>
              <option value='name'>{t('SkillsFilter.byName')}</option>
              <option value='type'>{t('SkillsFilter.byType')}</option>
              <option value='level'>{t('SkillsFilter.byLevel')}</option>
            </select>
            <input
              type='text'
              onChange={handleSearch}
              value={search}
            />
          </div>
          <small className='font-MontserratRegular text-beige-200'>
            {filterType === 'name'
              ? t('SkillsFilter.SmallIsName')
              : filterType === 'type'
              ? t('SkillsFilter.SmallIsType')
              : t('SkillsFilter.SmallIsLevel')}
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
