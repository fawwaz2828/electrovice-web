import {
  Zap, BarChart2, Clock, Lock, CheckCircle2, Star, ClipboardList,
  MapPin, ShieldCheck, Leaf, Sprout
} from 'lucide-react'
import styles from './BenefitsPage.module.css'

export default function BenefitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Zap size={13} strokeWidth={2.5} /> Platform Digital Perbaikan
            </span>
            <h1 className={styles.heroTitle}>
              Servis Praktis.<br />
              <span className={styles.heroHighlight}>Dampak Nyata.</span>
            </h1>
            <p className={styles.heroDesc}>
              ELECTROVICE hadir untuk memudahkan akses perbaikan yang aman, transparan, dan ramah lingkungan — bagi pengguna, teknisi UMKM, maupun masyarakat yang peduli e-waste.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.otpCard}>
              <p className={styles.otpLabel}>Your 6-Digit Code</p>
              <div className={styles.otpBoxes}>
                {['4','9','_','2','_','_'].map((d, i) => (
                  <div key={i} className={`${styles.otpBox} ${d === '_' ? styles.otpEmpty : ''}`}>{d !== '_' ? d : ''}</div>
                ))}
              </div>
              <p className={styles.otpSub}>Share only with your technician</p>
            </div>
           
          </div>
        </div>
      </section>

      {/* For Individuals */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <span className={styles.pill}>Untuk Pengguna</span>
              <h2 className={styles.sectionTitle}>Servis Tanpa Ribet</h2>
              <p className={styles.sectionDesc}>
                Bagi kamu yang tidak punya waktu, tenaga, atau keahlian teknis — ELECTROVICE menghadirkan teknisi profesional langsung ke lokasimu.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <span className={styles.featureIconWrap}>
                    <BarChart2 size={22} strokeWidth={1.8} color="#2563eb" />
                  </span>
                  <div>
                    <strong>Pencarian Berbasis GPS</strong>
                    <p>Sistem otomatis menemukan teknisi terdekat sesuai kategori kerusakan dan spesialisasi keahlian.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.featureIconWrap}>
                    <Clock size={22} strokeWidth={1.8} color="#2563eb" />
                  </span>
                  <div>
                    <strong>Riwayat Pemesanan Digital</strong>
                    <p>Semua detail perbaikan tersimpan otomatis sebagai dokumen garansi digital yang bisa diakses kapan saja.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.colImage}>
              <div className={styles.imageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                  alt="Individual using laptop"
                />
                <div className={styles.imageTag}>
                  <Lock size={13} strokeWidth={2} /> OTP Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Technicians & UMKM */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.pill}>Untuk Teknisi &amp; UMKM Bengkel</span>
            <h2 className={styles.sectionTitle}>Digitalisasi Usaha Servismu</h2>
            <p className={styles.sectionDesc}>
              Bergabung sebagai mitra teknisi ELECTROVICE untuk memperluas jangkauan pelanggan, mengelola pesanan secara digital, dan membangun reputasi profesional.
            </p>
          </div>
          <div className={styles.twoColReverse}>
            <div className={styles.techCard}>
              <h3 className={styles.techCardTitle}>Pusat Manajemen Digital</h3>
              <p className={styles.techCardDesc}>
                Kelola semua pesanan, jadwal, status perbaikan, dan catatan pembayaran dari satu dashboard. Bangun portofolio digital yang meningkatkan kredibilitas usahamu.
              </p>
              <div className={styles.techStats}>
                <div className={styles.techStat}><span>Job History</span></div>
                <div className={styles.techStat}><span>Analytics</span></div>
                <div className={styles.techStat}><span>Earnings</span></div>
              </div>
            </div>
            <div className={styles.credCard}>
              <div className={styles.credBadge}>
                <Zap size={13} strokeWidth={2.5} /> Instant Credibility
              </div>
              <h3 className={styles.credTitle}>Bangun Kepercayaan</h3>
              <p className={styles.credDesc}>
                Dapatkan badge terverifikasi, rating, dan ulasan pelanggan. Tingkatkan kredibilitas usahamu sebelum bertemu pelanggan pertama.
              </p>
              <ul className={styles.credList}>
                <li><CheckCircle2 size={15} strokeWidth={2} /> Verified Profile</li>
                <li><Star size={15} strokeWidth={2} fill="currentColor" /> Customer Ratings</li>
                <li><ClipboardList size={15} strokeWidth={2} /> Certified Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Eco-Conscious */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <span className={styles.pill}>
                <Leaf size={13} strokeWidth={2} /> Untuk Lingkungan
              </span>
              <h2 className={styles.sectionTitle}>Kurangi E-Waste Bersama</h2>
              <p className={styles.sectionDesc}>
                Dengan memudahkan akses perbaikan, ELECTROVICE mendukung budaya repair culture — memperpanjang usia pakai perangkat dan menekan limbah elektronik (e-waste) di Indonesia.
              </p>
              <div className={styles.ecoStats}>
                <div className={styles.ecoStat}>
                  <span className={styles.ecoNum}>80k</span>
                  <span className={styles.ecoLabel}>Devices Repaired</span>
                </div>
                <div className={styles.ecoStat}>
                  <span className={styles.ecoNum}>120+</span>
                  <span className={styles.ecoLabel}>Tons CO₂ Saved</span>
                </div>
              </div>
              <p className={styles.ecoQuote}>
                "Memperbaiki bukan sekadar servis — ini cara kita menjaga investasi dan melindungi lingkungan untuk generasi berikutnya."
              </p>
            </div>
            <div className={styles.colImage}>
              <div className={styles.ecoImageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&h=400&fit=crop"
                  alt="Daur ulang dan pengurangan e-waste"
                />
                <div className={styles.ecoTag}>
                  <Sprout size={13} strokeWidth={2} /> Carbon Neutral Repairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features: Real-Time + 8-Digit */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <MapPin size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3>Pelacakan Real-Time</h3>
              <p>Pantau progres perbaikan secara langsung. Tahu kapan teknisi tiba, apa yang ditemukan, dan kapan perangkatmu siap diambil.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <ShieldCheck size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3>Kode Verifikasi 6 Digit</h3>
              <p>Kode unik yang diterbitkan sistem untuk setiap pemesanan. Tidak ada pekerjaan dimulai sebelum teknisi memverifikasi kode ini — lapisan perlindungan perangkatmu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Siap merasakan servis yang lebih baik?</h2>
          <p className={styles.ctaDesc}>
            Download ELECTROVICE dan jadilah bagian dari ekosistem perbaikan digital pertama di Indonesia.
          </p>
        </div>
      </section>
    </main>
  )
}
