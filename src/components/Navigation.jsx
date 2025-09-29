import { navLinks } from '../data/portfolio'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">WJ</div>
        <div className="nav-links">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}