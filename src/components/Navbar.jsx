import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>ELECTROVICE</span>
        </NavLink>

        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/benefits"
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              Benefits
            </NavLink>
          </li>
        </ul>

        <div className={styles.navActions}>
          <a href="#login" className={styles.loginLink}>Login</a>
          <a href="#book" className={styles.btnPrimary}>Book Now</a>
        </div>
      </div>
    </nav>
  )
}
