import styles from './Hero.module.css'
import prototypeImg from '../assets/electrovice-prototype.png'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Inovasi Platform Digital Perbaikan Indonesia</p>
          <h1 className={styles.headline}>
            Cepat.<br />
            <span className={styles.highlight}>Transparan.</span><br />
            Terpercaya.
          </h1>
          <p className={styles.subtext}>
            Temukan teknisi elektronik dan bengkel profesional terdekat via GPS. Sistem kode unik 6 digit kami memastikan teknisi yang datang adalah teknisi yang benar.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>2 Kategori</span>
              <span className={styles.statLabel}>Elektronik & Kendaraan</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>6-Digit</span>
              <span className={styles.statLabel}>Kode Verifikasi</span>
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
