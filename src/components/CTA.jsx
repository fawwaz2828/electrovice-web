import { Lock, Star, ShieldCheck } from 'lucide-react'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Siap perbaiki perangkatmu?</h2>
          <p className={styles.subtitle}>
            Download ELECTROVICE dan temukan teknisi elektronik atau bengkel profesional terdekat sekarang juga.
          </p>
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <Lock size={16} strokeWidth={2} className={styles.trustIcon} />
              <span>SSL Terenkripsi</span>
            </div>
            <div className={styles.trustItem}>
              <Star size={16} strokeWidth={2} fill="#f59e0b" color="#f59e0b" className={styles.trustIcon} />
              <span>Rating 4.9/5</span>
            </div>
            <div className={styles.trustItem}>
              <ShieldCheck size={16} strokeWidth={2} className={styles.trustIcon} />
              <span>Garansi Uang Kembali</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
