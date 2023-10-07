import Image from 'next/image'

export default function StackLogosBox() {
  return (
    <div
      id='logos-box'
      className='flex flex-row gap-4 bg-[#ffd60a] p-3 rounded-tr-lg rounded-bl-lg'>
      <Image
        src='/logos/mongodb.png'
        alt='MongoDB logo'
        title='MongoDB'
        width='20'
        height='20'
        className='rounded-full hover:scale-125 transition-all duration-200 ease-in-out'
      />
      <Image
        src='/logos/express.png'
        alt='ExpressJS logo'
        title='ExpressJS'
        width='20'
        height='20'
        className='rounded-full hover:scale-125 transition-all duration-200 ease-in-out'
      />
      <Image
        src='/logos/react.png'
        alt='React logo'
        title='React'
        width='20'
        height='20'
        className='rounded-full hover:scale-125 transition-all duration-200 ease-in-out'
      />
      <Image
        src='/logos/nodejs.png'
        alt='NodeJS logo'
        title='NodeJS'
        width='20'
        height='20'
        className='rounded-full hover:scale-125 transition-all duration-200 ease-in-out'
      />
    </div>
  )
}
