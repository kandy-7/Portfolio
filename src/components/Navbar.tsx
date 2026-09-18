import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'

const links = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']

export function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)
  return <header className="navbar">
    <a className="brand" href="#home" aria-label="Go to home"><span>{profile.shortName}</span><i>.</i></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      {links.map((link) => <a key={link} className={activeSection === link ? 'active' : ''} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
    </nav>
    <button className="icon-button menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
  </header>
}