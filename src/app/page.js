import About from '@/components/About'
import HomePage from '@/components/HomePage'
import NavBar from '@/components/NavBar'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <section>
      <header>
        <NavBar />
      </header>

      <main className='snap-mandatory snap-y h-screen overflow-y-scroll'>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </section>
  )
}
