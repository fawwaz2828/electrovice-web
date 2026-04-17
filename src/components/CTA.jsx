import { Lock, Star, ShieldCheck } from 'lucide-react'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to fix your device?</h2>
          <p className={styles.subtitle}>
            Download ELECTROVICE and find the nearest electronics technician or professional workshop right now.
          </p>
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <Lock size={16} strokeWidth={2} className={styles.trustIcon} />
              <span>SSL Encrypted</span>
            </div>
            <div className={styles.trustItem}>
              <Star size={16} strokeWidth={2} fill="#f59e0b" color="#f59e0b" className={styles.trustIcon} />
              <span>Rating 4.9/5</span>
            </div>
            <div className={styles.trustItem}>
              <ShieldCheck size={16} strokeWidth={2} className={styles.trustIcon} />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
