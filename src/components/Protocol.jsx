import { ShieldCheck, ClipboardList, BadgeCheck } from 'lucide-react'
import styles from './Protocol.module.css'

const steps = [
  {
    Icon: ShieldCheck,
    title: 'Kode Unik 6 Digit',
    desc: 'Setelah memesan teknisi, aplikasi menerbitkan kode unik 6 digit. Berikan kode ini hanya kepada teknisi yang datang untuk memverifikasi identitasnya.',
  },
  {
    Icon: ClipboardList,
    title: 'Pelacakan Real-Time',
    desc: 'Pantau setiap tahap perbaikan secara langsung — dari pengecekan awal, penggantian suku cadang, hingga selesai. Transparan tanpa kejutan tersembunyi.',
  },
  {
    Icon: BadgeCheck,
    title: 'Pop-Up Notifikasi Instan',
    desc: 'Jika teknisi tiba-tiba terkendala, notifikasi pop-up langsung dikirim sehingga kamu bisa segera mencari teknisi pengganti tanpa menunggu.',
  },
]

export default function Protocol() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Keunggulan Kami</span>
          <h2 className={styles.title}>Protokol 6 Digit ELECTROVICE</h2>
          <p className={styles.subtitle}>
            Sistem kepercayaan unik kami memastikan transparansi penuh antara teknisi dan pelanggan di setiap tahap perbaikan.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <Icon size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
