import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Awards from './components/Awards'
import HobbiesLanguages from './components/HobbiesLanguages'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Awards />
        <HobbiesLanguages />
      </main>
      <Footer />
    </>
  )
}
