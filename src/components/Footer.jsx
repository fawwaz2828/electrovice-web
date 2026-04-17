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
              Cepat. Transparan. Terpercaya.<br />
              Perangkatmu aman di tangan kami.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/privacy-policy">Kebijakan Privasi</Link></li>
              <li><Link to="/terms">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy-policy#cookies">Kebijakan Cookie</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Bantuan</h4>
            <ul className={styles.colLinks}>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Pusat Bantuan</a></li>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Daftar Jadi Teknisi</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Dapatkan tips servis dan info terbaru langsung di inbox-mu.</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="email@kamu.com"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterBtn}>Langganan</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ELECTROVICE. Membangun ekosistem perbaikan digital Indonesia.
            {' '}·{' '}
            <Link to="/privacy-policy" className={styles.footerLink}>Privasi</Link>
            {' '}·{' '}
            <Link to="/terms" className={styles.footerLink}>Ketentuan</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
