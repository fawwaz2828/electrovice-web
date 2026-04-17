import {
  Lock, ClipboardList, BadgeCheck, Search, ShieldCheck,
  Cookie, Scale, Folder, Trash2, Pencil, Ban, Share2,
  Clock, Baby, Mail, MapPin, Smartphone
} from 'lucide-react'
import styles from './LegalPage.module.css'

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerBadge}>
            <Lock size={12} strokeWidth={2.5} /> Kebijakan Privasi
          </span>
          <h1 className={styles.headerTitle}>Kebijakan Privasi</h1>
          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              ELECTROVICE ("kami") berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat menggunakan aplikasi mobile dan layanan ELECTROVICE.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>TERAKHIR DIPERBARUI</span>
              <span className={styles.lastUpdatedDate}>15 April 2025</span>
            </div>
          </div>
        </div>

        {/* Informasi yang Kami Kumpulkan */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><ClipboardList size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Informasi yang Kami Kumpulkan</h2>
          <p className={styles.sectionDesc}>
            Kami mengumpulkan kategori informasi berikut saat Anda menggunakan aplikasi kami:
          </p>
          <div className={styles.twoCol}>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <BadgeCheck size={18} strokeWidth={2} color="#2563eb" />
                <h3>Data Akun &amp; Identitas</h3>
              </div>
              <p className={styles.dataCardDesc}>Informasi yang Anda berikan saat mendaftar atau menggunakan layanan kami.</p>
              <ul className={styles.dataList}>
                <li>Nama Lengkap &amp; Alamat Email</li>
                <li>Nomor Telepon</li>
                <li>Foto Profil (opsional)</li>
                <li>Alamat Penagihan &amp; Pengiriman</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <MapPin size={18} strokeWidth={2} color="#2563eb" />
                <h3>Data Lokasi</h3>
              </div>
              <p className={styles.dataCardDesc}>Digunakan untuk mencocokkan Anda dengan teknisi terverifikasi terdekat.</p>
              <ul className={styles.dataList}>
                <li>Lokasi GPS Presisi (jika diizinkan)</li>
                <li>Lokasi Perkiraan (kota/wilayah)</li>
                <li>Riwayat lokasi selama sesi perbaikan aktif</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <Smartphone size={18} strokeWidth={2} color="#2563eb" />
                <h3>Data Perangkat &amp; Teknis</h3>
              </div>
              <p className={styles.dataCardDesc}>Dikumpulkan secara otomatis saat Anda menggunakan aplikasi.</p>
              <ul className={styles.dataList}>
                <li>Model Perangkat &amp; Sistem Operasi</li>
                <li>Identifikasi Perangkat Unik (Android ID)</li>
                <li>Versi Aplikasi &amp; Log Crash</li>
                <li>Alamat IP &amp; Jenis Jaringan</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <ShieldCheck size={18} strokeWidth={2} color="#2563eb" />
                <h3>Data Transaksi &amp; Penggunaan</h3>
              </div>
              <p className={styles.dataCardDesc}>Data yang dihasilkan melalui aktivitas Anda di platform.</p>
              <ul className={styles.dataList}>
                <li>Riwayat Pesanan Perbaikan</li>
                <li>Catatan Pembayaran (tanpa data kartu lengkap)</li>
                <li>Komunikasi In-App dengan Teknisi</li>
                <li>Rating &amp; Ulasan yang Diberikan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cara Kami Menggunakan Informasi */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Search size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Cara Kami Menggunakan Informasi Anda</h2>
          <div className={styles.threeCol}>
            <div className={styles.useCard}>
              <h4>Penyediaan Layanan</h4>
              <p>Memproses pemesanan perbaikan, mencocokkan Anda dengan teknisi tersertifikasi, dan mengaktifkan sistem keamanan kode 6 digit.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Keamanan &amp; Perlindungan</h4>
              <p>Memverifikasi identitas teknisi, mendeteksi penipuan, dan menegakkan protokol keamanan kode OTP 6 digit kami.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Komunikasi</h4>
              <p>Mengirimkan konfirmasi pemesanan, pembaruan status perbaikan, dan notifikasi layanan penting melalui push notification dan email.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Peningkatan Platform</h4>
              <p>Menganalisis data penggunaan agregat untuk meningkatkan performa aplikasi, memperbaiki bug, dan mengembangkan fitur baru.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Pemrosesan Pembayaran</h4>
              <p>Memfasilitasi pembayaran aman melalui mitra payment gateway pihak ketiga kami.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Kepatuhan Hukum</h4>
              <p>Memenuhi kewajiban regulasi berdasarkan hukum Indonesia yang berlaku dan kerangka perlindungan data internasional.</p>
            </div>
          </div>
        </section>

        {/* Berbagi Informasi */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Share2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Berbagi Informasi &amp; Pihak Ketiga</h2>
          <p className={styles.sectionDesc}>
            Kami tidak menjual data pribadi Anda. Kami hanya membagikan informasi Anda dalam kondisi berikut:
          </p>
          <div className={styles.obligationsGrid}>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>1</div>
              <div>
                <strong>Teknisi</strong>
                <p>Nama, nomor kontak, dan lokasi Anda dibagikan kepada teknisi yang ditugaskan untuk memenuhi permintaan perbaikan Anda.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>2</div>
              <div>
                <strong>Pemroses Pembayaran</strong>
                <p>Kami menggunakan payment gateway pihak ketiga (misalnya Midtrans) untuk memproses transaksi dengan aman. Kami tidak menyimpan detail kartu pembayaran lengkap.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>3</div>
              <div>
                <strong>Penyedia Analitik</strong>
                <p>Kami menggunakan Firebase Analytics dan Crashlytics (Google) untuk memantau stabilitas dan penggunaan aplikasi — hanya data anonim atau agregat yang dibagikan.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>4</div>
              <div>
                <strong>Kewajiban Hukum</strong>
                <p>Kami dapat mengungkapkan data jika diwajibkan oleh hukum, perintah pengadilan, atau untuk melindungi hak dan keselamatan ELECTROVICE serta penggunanya.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Retensi Data */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Clock size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Retensi Data</h2>
          <p className={styles.sectionDesc}>
            Kami menyimpan data pribadi Anda hanya selama diperlukan untuk menyediakan layanan kami dan mematuhi kewajiban hukum:
          </p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Data Akun:</strong> Disimpan selama akun aktif. Dihapus dalam 30 hari setelah permintaan penghapusan akun yang terverifikasi.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Catatan Transaksi:</strong> Disimpan selama 5 tahun untuk memenuhi regulasi keuangan dan pajak berdasarkan hukum Indonesia.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Data Lokasi:</strong> Lokasi sesi aktif dihapus segera setelah sesi perbaikan selesai. Kami tidak menyimpan jejak lokasi historis.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Log Crash &amp; Teknis:</strong> Dihapus otomatis setelah 90 hari.</p>
            </div>
          </div>
        </section>

        {/* Keamanan Data */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Lock size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Keamanan Data</h2>
          <p className={styles.sectionDesc}>
            Kami menerapkan langkah-langkah teknis dan organisasi standar industri untuk melindungi data pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah.
          </p>
          <div className={styles.securityBox}>
            <div className={styles.securityItem}>
              <ShieldCheck size={24} strokeWidth={1.8} color="#f59e0b" className={styles.securityItemIcon} />
              <div>
                <strong>Enkripsi AES-256</strong>
                <p>Semua data saat disimpan dan dalam transit dienkripsi menggunakan standar tingkat perbankan (TLS 1.2+).</p>
              </div>
            </div>
            <div className={styles.securityDivider} />
            <div className={styles.securityItem}>
              <Lock size={24} strokeWidth={1.8} color="#2563eb" className={styles.securityItemIcon} />
              <div>
                <strong>Keamanan Sesi Berbasis OTP</strong>
                <p>Setiap sesi perbaikan dilindungi oleh OTP unik 6 digit yang kedaluwarsa setelah 120 detik dan tidak pernah disimpan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hak Anda */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Scale size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Hak Anda &amp; Penghapusan Data</h2>
          <p className={styles.sectionDesc}>
            Anda memiliki kendali penuh atas data pribadi Anda. Anda dapat menggunakan hak-hak berikut kapan saja:
          </p>
          <div className={styles.rightsGrid}>
            <div className={styles.rightCard}>
              <Folder size={22} strokeWidth={1.8} color="#2563eb" className={styles.rightIcon} />
              <div>
                <strong>Hak Akses</strong>
                <p>Minta salinan semua data pribadi yang kami simpan tentang Anda dengan menghubungi kami di email di bawah.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Trash2 size={22} strokeWidth={1.8} color="#ef4444" className={styles.rightIcon} />
              <div>
                <strong>Hak Penghapusan (Hapus Akun)</strong>
                <p>Anda dapat menghapus akun dan semua data terkait kapan saja melalui <strong>Pengaturan → Akun → Hapus Akun</strong> di aplikasi, atau dengan mengirim email ke <strong>privacy@electrovice.app</strong>. Penghapusan diproses dalam 30 hari.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Pencil size={22} strokeWidth={1.8} color="#2563eb" className={styles.rightIcon} />
              <div>
                <strong>Hak Perbaikan Data</strong>
                <p>Perbarui informasi yang tidak akurat atau tidak lengkap langsung melalui pengaturan profil di aplikasi.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Ban size={22} strokeWidth={1.8} color="#f59e0b" className={styles.rightIcon} />
              <div>
                <strong>Hak Keberatan / Opt Out</strong>
                <p>Berhenti dari pemrosesan data non-esensial (misalnya email pemasaran) kapan saja melalui pengaturan aplikasi atau dengan menghubungi kami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privasi Anak */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Baby size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Privasi Anak-Anak</h2>
          <p className={styles.sectionDesc}>
            ELECTROVICE tidak ditujukan untuk pengguna di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak di bawah 13 tahun. Jika kami mengetahui bahwa seorang anak di bawah 13 tahun telah memberikan data pribadi kepada kami, kami akan segera menghapus informasi tersebut. Jika Anda adalah orang tua atau wali dan percaya anak Anda telah memberikan informasi pribadi kepada kami, silakan hubungi kami di <strong>privacy@electrovice.app</strong>.
          </p>
        </section>

        {/* Cookie */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Cookie size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Cookie &amp; Teknologi Pelacakan</h2>
          <p className={styles.sectionDesc}>
            Aplikasi mobile kami tidak menggunakan cookie browser. Kami menggunakan teknologi pelacakan berikut dalam aplikasi:
          </p>
          <div className={styles.cookieTags}>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Firebase Analytics (anonim)
            </span>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Crashlytics (laporan error)
            </span>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Token Sesi (autentikasi)
            </span>
            <span className={styles.cookieTagGray}>
              <Ban size={13} strokeWidth={2} /> Pelacak iklan pihak ketiga (Tidak digunakan)
            </span>
          </div>
        </section>

        {/* Perubahan Kebijakan */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Pencil size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Perubahan Kebijakan Privasi Ini</h2>
          <p className={styles.sectionDesc}>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Saat kami membuat perubahan signifikan, kami akan memberi tahu Anda melalui aplikasi atau email. Tanggal "Terakhir Diperbarui" di bagian atas halaman ini selalu mencerminkan revisi terbaru. Penggunaan aplikasi ELECTROVICE yang berkelanjutan setelah perubahan apa pun merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
          </p>
        </section>

        {/* Hubungi Kami */}
        <section className={styles.agreementSection}>
          <div className={styles.sectionIconWrap} style={{ marginBottom: '1rem' }}><Mail size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.agreementTitle}>Hubungi Kami</h2>
          <p className={styles.agreementDesc}>
            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau praktik data kami, silakan hubungi kami:
          </p>
          <div className={styles.textBlock}>
            <p><strong>ELECTROVICE</strong></p>
            <p>Email: <strong>privacy@electrovice.app</strong></p>
            <p>Subjek: "Permintaan Privasi – [Nama Anda]"</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', color: '#64748b' }}>
              Kami akan merespons semua permintaan terkait privasi dalam 14 hari kerja.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
