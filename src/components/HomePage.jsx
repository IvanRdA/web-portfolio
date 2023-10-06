import HomeLeftBox from './HomeLeftBox'
import HomeRightBox from './HomeRightBox'

export default function HomePage() {
  return (
    <section className='flex flex-row md:flex-row bg-gradient-to-r from-reactBlue to-darkReactBlue text-JSYellow justify-center items-center'>
      <HomeLeftBox />
      <HomeRightBox />
    </section>
  )
}
