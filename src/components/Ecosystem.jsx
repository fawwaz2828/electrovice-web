import styles from './Ecosystem.module.css'

const categories = [
  {
    title: 'Elektronik',
    desc: 'TV, laptop, kulkas, smartphone, AC, dan semua perangkat elektronik rumah tangga. Teknisi terdekat siap dipanggil ke lokasi.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=360&fit=crop',
    tag: 'Paling Populer',
    tagColor: '#2563eb',
  },
  {
    title: 'Kendaraan',
    desc: 'Servis motor, mobil, dan kendaraan operasional. Teknisi bengkel profesional siap datang ke lokasi mogokmu.',
    img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=360&fit=crop',
    tag: 'Home Service',
    tagColor: '#9333ea',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Kategori Layanan</span>
          <h2 className={styles.title}>Ekosistem Perbaikan</h2>
          <p className={styles.subtitle}>
            Dari perangkat elektronik rumah tangga hingga kendaraan — satu platform untuk semua kebutuhan servismu.
          </p>
        </div>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={cat.img} alt={cat.title} />
                <span className={styles.tag} style={{ background: cat.tagColor }}>{cat.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <a href="#book" className={styles.cardLink}>
                  Cari Teknisi →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
