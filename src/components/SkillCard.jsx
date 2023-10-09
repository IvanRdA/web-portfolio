'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

function colorByLevel(level) {
  if (level <= 3) {
    return 'text-darkCarmesi'
  } else if (level === 4 || level === 5) {
    return 'text-JSYellow'
  } else if (level > 5 && level < 7) {
    return 'text-darkJSYellow'
  } else if (level >= 7 && level < 9) {
    return 'text-nodeGreen'
  } else {
    return 'text-darkNodeGreen'
  }
}

export default function SkillCard(props) {
  const { skill } = props

  return (
    <article className='bg-gradient-to-r from-reactBlue to-darkReactBlue rounded-tr-lg rounded-bl-lg p-4 m-2 flex flex-col justify-center text-center h-fit'>
      <Image
        src={skill.logo}
        width={20}
        height={20}
        alt={`${skill.name} logo`}
        title={skill.name}
        className='m-auto'
      />
      <h4 className='font-MontserratBlack text-JSYellow text-xl'>
        {skill.name}
      </h4>
      <h6 className='font-MontserratItalic text-white text-sm mb-2'>
        #{skill.type}
      </h6>
      <h6 className='font-MontserratRegular text-darkNodeGreen bg-white w-fit m-auto px-1'>
        <span className={colorByLevel(skill.level)}>{skill.level}</span> / 10
      </h6>
    </article>
  )
}
