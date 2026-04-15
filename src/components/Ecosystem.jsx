import styles from './Ecosystem.module.css'

const categories = [
  {
    title: 'Electronics',
    desc: 'Smartphones, laptops, tablets, and all consumer electronics',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=360&fit=crop',
    tag: 'Most Popular',
    tagColor: '#2563eb',
  },
  {
    title: 'Electrical',
    desc: 'Home wiring, circuit breakers, and electrical systems',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=360&fit=crop',
    tag: 'Trending',
    tagColor: '#16a34a',
  },
  {
    title: 'Automotive',
    desc: 'Car diagnostics, engine repair, and vehicle maintenance',
    img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=360&fit=crop',
    tag: 'New',
    tagColor: '#9333ea',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Categories</span>
          <h2 className={styles.title}>Repair Ecosystem</h2>
          <p className={styles.subtitle}>
            From consumer gadgets to vehicles — one platform covers all your repair needs.
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
