import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to fix your device?</h2>
          <p className={styles.subtitle}>
            Click a button below, and we will get you to a skilled hardware marketplace now.
          </p>
          <div className={styles.actions}>
            <a href="#book" className={styles.btnPrimary}>Book Your Repair Now</a>
          </div>
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🛡️</span>
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
