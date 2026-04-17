import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import logoImg from '../assets/ELECTROVICE_LOGO_HD.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <img src={logoImg} alt="Electrovice" className={styles.logoImg} />
        </NavLink>

        <ul className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setOpen(false)}>
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/benefits" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setOpen(false)}>
              Benefits
            </NavLink>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
