import { Link } from 'react-router-dom'

import styles from './Footer.module.css'
import logoImg from '../assets/ELECTROVICE_LOGO_HD.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logoImg} alt="Electrovice" className={styles.logoImg} />
            </Link>
            <p className={styles.tagline}>
              Fast. Transparent. Trusted.<br />
              Your device is safe in our hands.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Get repair tips and the latest news straight to your inbox.</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ELECTROVICE. Building Indonesia's digital repair ecosystem.
            {' '}·{' '}
            <Link to="/privacy-policy" className={styles.footerLink}>Privacy</Link>
            {' '}·{' '}
            <Link to="/terms" className={styles.footerLink}>Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
