import { Leaf } from 'lucide-react'
import { navItems } from '../data/siteContent'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="De Wilde Tuinvrouw home">
        <span className="brand-mark"><Leaf size={20} /></span>
        <span>
          <strong>De Wilde Tuinvrouw</strong>
          <small>Ecologisch tuinontwerp</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Hoofdnavigatie">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Plan een kennismaking</a>
    </header>
  )
}
