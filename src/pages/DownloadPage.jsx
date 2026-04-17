import styles from './DownloadPage.module.css'
import electroviceLogo from '../assets/ELECTROVICE_LOGO_HD.png'

export default function DownloadPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img src={electroviceLogo} alt="Electrovice" className={styles.logo} />
        <h1 className={styles.title}>Download ELECTROVICE</h1>
        <p className={styles.subtitle}>
          Find trusted technicians, monitor repairs in real-time, and pay securely — all in one app.
        </p>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.playstoreBtn}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className={styles.playstoreBadge}
          />
        </a>
        <p className={styles.note}>Available for Android. iOS coming soon.</p>
      </div>
    </div>
  )
}
