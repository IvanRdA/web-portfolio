import Image from 'next/image'

export default function SpanishFlag() {
  return (
    <Image
      src='/flags/spa.png'
      alt='Spanish flag'
      title='Spanish'
      width='40'
      height='40'
      className='hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'
    />
  )
}
