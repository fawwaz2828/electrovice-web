import { Settings2, Shield, MapPin, CheckCircle2, Leaf, Award } from 'lucide-react'
import styles from './HowItWorksPage.module.css'

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Settings2 size={13} strokeWidth={2} /> Cara Kerja ELECTROVICE
            </span>
            <h1 className={styles.heroTitle}>
              Dari Pesan
              <br />
              <span className={styles.heroHighlight}>Hingga Selesai.</span>
            </h1>
            <p className={styles.heroDesc}>
              ELECTROVICE menjembatani pemilik perangkat rusak dengan teknisi
              profesional melalui empat langkah mudah yang cepat, transparan,
              dan terjamin keamanannya.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImgWrap}>
              <img
                src=".\src\assets\steps.png"
                alt="Seseorang menggunakan aplikasi ELECTROVICE di smartphone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          {/* Step 01 */}
          <div className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Pilih Kategori via GPS</h2>
                <p className={styles.stepDesc}>
                  Pilih kategori kerusakan perangkat atau kendaraanmu. Sistem
                  menggunakan GPS untuk otomatis menampilkan teknisi dan bengkel
                  terdekat dengan spesialisasi yang relevan.
                </p>
                <div className={styles.stepTags}>
                  <span>Elektronik</span>
                  <span>Peralatan Listrik</span>
                  <span>Kendaraan</span>
                </div>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.mapCard}>
                <img
                  src=".\src\assets\gps.png"
                  alt="GPS Map"
                  className={styles.mapImg}
                />
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>
                02
              </div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Kode Verifikasi 6 Digit</h2>
                <p className={styles.stepDesc}>
                  Setelah memilih teknisi, aplikasi menerbitkan kode unik 6
                  digit. Berikan kode ini hanya kepada teknisi yang datang untuk
                  memastikan identitasnya sebelum pekerjaan dimulai.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src=".\src\assets\veriff.png"
                  alt="Kode Verifikasi 6 Digit ELECTROVICE"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Pantau Perbaikan Real-Time</h2>
                <p className={styles.stepDesc}>
                  Pantau setiap tahap perbaikan secara langsung dari aplikasi —
                  dari pengecekan awal, penggantian suku cadang, hingga
                  pengujian akhir. Kamu tahu persis apa yang terjadi.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src=".\src\assets\tep.png"
                  alt="Pantau Perbaikan Real-Time ELECTROVICE"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>
                04
              </div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>
                  Bayar Aman &amp; Simpan Riwayat
                </h2>
                <p className={styles.stepDesc}>
                  Pembayaran dilakukan secara aman via aplikasi dan hanya
                  diproses setelah kamu konfirmasi. Semua detail pengerjaan
                  tersimpan otomatis sebagai dokumen garansi digital.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src=".\src\assets\pay.png"
                  alt="Bayar Aman & Simpan Riwayat ELECTROVICE"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Reliability */}
      <section className={styles.reliabilitySection}>
        <div className={styles.container}>
          <div className={styles.reliabilityHeader}>
            <h2 className={styles.reliabilityTitle}>
              Dirancang untuk Kepercayaan.
            </h2>
            <p className={styles.reliabilityDesc}>
              Platform kami menggabungkan pencocokan teknisi berbasis GPS dengan
              komitmen terhadap pengurangan e-waste. Dengan memperpanjang usia
              pakai perangkatmu, kita jaga investasi sekaligus lingkungan.
            </p>
          </div>
          <div className={styles.reliabilityBadges}>
            <div className={styles.relBadge}>
              <CheckCircle2 size={18} strokeWidth={2} color="#16a34a" />
              <span>100% Aman</span>
            </div>
            <div className={styles.relBadge}>
              <Leaf size={18} strokeWidth={2} color="#16a34a" />
              <span>Kurangi E-Waste</span>
            </div>
            <div className={styles.relBadge}>
              <Award size={18} strokeWidth={2} color="#2563eb" />
              <span>Teknisi Terverifikasi</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
