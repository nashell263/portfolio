import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Certifications from './components/Certifications'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Career from './components/Career'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Certifications />
        <About />
        <Work />
        <Projects />
        <Career />
        <Contact />
      </main>
    </>
  )
}

export default App
