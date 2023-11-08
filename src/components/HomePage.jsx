import HomeLeftBox from './HomeLeftBox'
import HomeRightBox from './HomeRightBox'

export default function HomePage() {
  return (
    <section className='flex flex-col md:flex-row bg-gradient-to-r from-purple-900 to-purple-950 text-beige-200 justify-center items-center'>
      <HomeLeftBox />
      <HomeRightBox />
    </section>
  )
}
