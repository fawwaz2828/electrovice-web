import styles from './Hero.module.css'
import prototypeImg from '../assets/electrovice-prototype.png'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Indonesia's Digital Repair Platform Innovation</p>
          <h1 className={styles.headline}>
            Fast.<br />
            <span className={styles.highlight}>Transparent.</span><br />
            Trusted.
          </h1>
          <p className={styles.subtext}>
            Find the nearest electronics technician or professional workshop via GPS. Our unique 6-digit code system ensures the technician who arrives is the right one.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>2 Categories</span>
              <span className={styles.statLabel}>Electronics & Vehicles</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>6-Digit</span>
              <span className={styles.statLabel}>Verification Code</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Real-time</span>
              <span className={styles.statLabel}>Repair Tracking</span>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={prototypeImg} alt="Electrovice Prototype" className={styles.prototypeImage} />
        </div>
      </div>
    </section>
  )
}
