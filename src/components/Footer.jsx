import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span>⚡</span>
              <span>ELECTROVICE</span>
            </Link>
            <p className={styles.tagline}>
              Fast. Transparent. Trusted Repair.<br />
              Your device is in safe hands.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social}>in</a>
              <a href="#" className={styles.social}>𝕏</a>
              <a href="#" className={styles.social}>fb</a>
              <a href="#" className={styles.social}>ig</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy-policy#cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Help</h4>
            <ul className={styles.colLinks}>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Become a Technician</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Get repair tips and updates in your inbox.</p>
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
            © {new Date().getFullYear()} ELECTROVICE. Empowering a smarter repair economy.
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
