import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Lentevuur, naar boven">Lentevuur</a>
    <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Hoofdnavigatie">
      <a href="#werk">Projecten</a><a href="#disciplines">Wat ik doe</a><a href="#over">Over</a><a href="#contact">Contact</a>
    </nav>
    <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu openen">{menuOpen ? 'Sluit' : 'Menu'}</button>
  </header>
}
