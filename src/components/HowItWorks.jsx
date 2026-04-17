import { LayoutGrid, KeyRound, CheckCircle2, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    Icon: LayoutGrid,
    title: 'Pilih Kategori Kerusakan',
    desc: 'Pilih kategori perangkat elektronik atau kendaraanmu. GPS otomatis menampilkan teknisi terdekat dengan spesialisasi yang relevan.',
  },
  {
    num: '02',
    Icon: KeyRound,
    title: 'Kode 6 Digit Diterbitkan',
    desc: 'Setelah memilih teknisi, aplikasi menerbitkan kode unik 6 digit sebagai alat verifikasi identitas mitra saat tiba di lokasi.',
  },
  {
    num: '03',
    Icon: CheckCircle2,
    title: 'Pantau Perbaikan Live',
    desc: 'Pantau setiap tahap perbaikan secara real-time langsung dari aplikasi. Kamu tahu persis apa yang sedang dikerjakan teknisi.',
  },
  {
    num: '04',
    Icon: CreditCard,
    title: 'Bayar & Simpan Riwayat',
    desc: 'Pembayaran aman via aplikasi. Seluruh detail perbaikan tersimpan otomatis di Riwayat Pemesanan sebagai dokumen garansi digital.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.pill}>Cara Kerja</span>
          <h2 className={styles.title}>Mudah dari<br />Pesan hingga Selesai</h2>
          <p className={styles.subtitle}>
            Empat langkah sederhana yang dirancang untuk melindungi kepentinganmu dan memastikan pengalaman servis yang aman setiap saat.
          </p>
          <div className={styles.steps}>
            {steps.map(({ num, Icon, title, desc }, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{num}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <Icon size={18} strokeWidth={2} color="#2563eb" />
                    <h3 className={styles.stepTitle}>{title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.cardBadge}>
              <span className={styles.dot} />
              Live Dashboard
            </div>
            <h3 className={styles.cardTitle}>Kontrol Penuh.<br />Transparan Sepenuhnya.</h3>
            <p className={styles.cardSubtitle}>
              Pantau setiap tahap servis secara real-time. Visibilitas penuh dari pemesanan hingga selesai.
            </p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>6-Digit</span>
                <span className={styles.metricLabel}>Kode Verifikasi</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>Real-time</span>
                <span className={styles.metricLabel}>Tracking</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>Transparan</span>
              </div>
            </div>
            <div className={styles.progressSection}>
              <div className={styles.progressLabel}>
                <span>Repair Progress</span>
                <span>75%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '75%' }} />
              </div>
            </div>
            <Link to="/download" className={styles.cardBtn}>Start a Repair →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
