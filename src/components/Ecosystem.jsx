import styles from './Ecosystem.module.css'

const categories = [
  {
    title: 'Electronics',
    desc: 'TVs, laptops, refrigerators, smartphones, AC units, and all home electronics. The nearest technician is ready to be called to your location.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=360&fit=crop',
    tag: 'Most Popular',
    tagColor: '#2563eb',
  },
  {
    title: 'Vehicles',
    desc: 'Motorcycle, car, and operational vehicle service. Professional workshop technicians are ready to come to your breakdown location.',
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
          <span className={styles.pill}>Service Categories</span>
          <h2 className={styles.title}>Repair Ecosystem</h2>
          <p className={styles.subtitle}>
            From home electronics to vehicles — one platform for all your service needs.
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
                  Find Technician →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
