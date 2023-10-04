import Image from 'next/image'

export default function EnglishFlag() {
  return (
    <Image
      src='/flags/eng.svg'
      alt='English flag'
      title='English'
      width='40'
      height='40'
      className='hover:scale-110 transition-all duration-200 ease-in-out h-[10vh] cursor-pointer'
    />
  )
}
