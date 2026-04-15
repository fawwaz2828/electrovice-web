import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Trusted by 10,000+ customers</p>
          <h1 className={styles.headline}>
            Fast.<br />
            <span className={styles.highlight}>Transparent.</span><br />
            Trusted Repair.
          </h1>
          <p className={styles.subtext}>
            Find verified technicians for your electronics and vehicles. OTP-based trust system will protect your repair always.
          </p>
          <div className={styles.actions}>
            <a href="#book" className={styles.btnPrimary}>Book Repair Now</a>
            <a href="#technicians" className={styles.btnSecondary}>Browse Technicians</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10K+</span>
              <span className={styles.statLabel}>Customers</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Technicians</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg} />
          <div className={styles.imageCard}>
            <div className={styles.techBadge}>
              <span className={styles.techBadgeDot} />
              <span>Available Now</span>
            </div>
            <div className={styles.techAvatar}>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=face"
                alt="Technician"
              />
            </div>
            <div className={styles.techInfo}>
              <p className={styles.techName}>Ahmad Rizky</p>
              <p className={styles.techRole}>Electronics Specialist</p>
              <div className={styles.techRating}>
                {'★★★★★'} <span>4.9</span>
              </div>
            </div>
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingIcon}>🔒</span>
            <div>
              <p className={styles.floatingTitle}>OTP Verified</p>
              <p className={styles.floatingSubtitle}>6-digit protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
