import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Career', href: '#career' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand">NASHELL</a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        <a href="/cv.pdf" download className="nav__cta btn btn-outline">Download CV</a>

        <button
          className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav__mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/cv.pdf" download className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
