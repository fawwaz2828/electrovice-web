import {
  FileText, User, Lock, Settings2, AlertTriangle, Circle,
  Scale, ShieldCheck, Pencil, Ban, Mail, Globe, Trash2
} from 'lucide-react'
import styles from './LegalPage.module.css'

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerBadge}>
            <FileText size={12} strokeWidth={2.5} /> Perjanjian Legal
          </span>
          <h1 className={styles.headerTitleLarge}>
            Syarat &amp; <span className={styles.headerTitleBlue}>Ketentuan</span>
          </h1>
          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Harap baca Syarat &amp; Ketentuan ini dengan seksama sebelum menggunakan aplikasi mobile dan platform ELECTROVICE. Dengan mengakses atau menggunakan layanan kami, Anda menyetujui untuk terikat oleh ketentuan ini.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>TERAKHIR DIPERBARUI</span>
              <span className={styles.lastUpdatedDate}>15 April 2025</span>
            </div>
          </div>
        </div>

        {/* Penerimaan Ketentuan */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><FileText size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>1. Penerimaan Ketentuan</h2>
          <div className={styles.textBlock}>
            <p>
              Dengan mengunduh, menginstal, atau menggunakan aplikasi ELECTROVICE ("Aplikasi") atau layanan terkait ("Layanan"), Anda ("Pengguna") menyetujui untuk terikat oleh Syarat &amp; Ketentuan ("Ketentuan") ini dan Kebijakan Privasi kami. Jika Anda tidak menyetujui Ketentuan ini, jangan gunakan Aplikasi.
            </p>
            <p>
              Ketentuan ini merupakan perjanjian yang mengikat secara hukum antara Anda dan ELECTROVICE. Kami berhak mengubah Ketentuan ini kapan saja. Penggunaan Aplikasi yang berkelanjutan setelah perubahan apa pun merupakan persetujuan Anda terhadap Ketentuan yang direvisi. Kami akan memberi tahu pengguna tentang perubahan material melalui Aplikasi atau email.
            </p>
          </div>
        </section>

        {/* Deskripsi Layanan */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Globe size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>2. Deskripsi Layanan</h2>
          <div className={styles.textBlock}>
            <p>
              ELECTROVICE adalah platform marketplace yang menghubungkan pengguna ("Pelanggan") dengan teknisi perbaikan independen terverifikasi ("Teknisi") untuk layanan perbaikan elektronik, peralatan listrik, dan kendaraan. ELECTROVICE bertindak sebagai platform perantara dan bukan merupakan penyedia layanan perbaikan itu sendiri.
            </p>
            <p>
              Kami menyediakan alat termasuk pencocokan teknisi berbasis GPS, sesi perbaikan aman dengan kode OTP, pelacakan perbaikan real-time, dan pemrosesan pembayaran aman dalam aplikasi. Kualitas pekerjaan perbaikan sepenuhnya merupakan tanggung jawab Teknisi yang bersangkutan.
            </p>
          </div>
        </section>

        {/* Kelayakan Pengguna */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><User size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>3. Kelayakan &amp; Kewajiban Pengguna</h2>
          <p className={styles.sectionDesc}>Untuk menggunakan ELECTROVICE, Anda harus memenuhi persyaratan berikut dan menyetujui kewajiban ini:</p>
          <div className={styles.obligationsGrid}>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>1</div>
              <div>
                <strong>Batas Usia</strong>
                <p>Anda harus berusia minimal 13 tahun untuk menggunakan Aplikasi ini. Pengguna di bawah 18 tahun harus mendapatkan persetujuan orang tua atau wali.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>2</div>
              <div>
                <strong>Informasi Akurat</strong>
                <p>Anda menyetujui untuk memberikan informasi yang benar, akurat, dan lengkap saat mendaftar dan menjaga informasi akun Anda tetap terkini.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>3</div>
              <div>
                <strong>Keamanan Akun</strong>
                <p>Anda sepenuhnya bertanggung jawab atas kerahasiaan kredensial login Anda dan semua aktivitas yang terjadi di bawah akun Anda.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>4</div>
              <div>
                <strong>Kepatuhan Hukum</strong>
                <p>Penggunaan platform Anda tidak boleh melanggar hukum atau peraturan lokal, nasional, atau internasional yang berlaku.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Perilaku Terlarang */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Ban size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>4. Perilaku yang Dilarang</h2>
          <p className={styles.sectionDesc}>Anda menyetujui untuk tidak:</p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Menggunakan Aplikasi untuk tujuan penipuan, melanggar hukum, atau tidak sah.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Menyamar sebagai orang atau entitas lain, atau menyalahartikan afiliasi Anda dengan orang atau entitas mana pun.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Melewati, menonaktifkan, atau mengganggu sistem keamanan OTP atau fitur keamanan lainnya dari Aplikasi.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Mengambil atau mengumpulkan data dari platform tanpa izin tertulis eksplisit dari ELECTROVICE.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Mengirimkan virus, malware, atau kode berbahaya lainnya melalui platform.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Melecehkan, menyalahgunakan, atau menyakiti teknisi, pelanggan, atau staf ELECTROVICE.</p>
            </div>
          </div>
        </section>

        {/* Protokol Keamanan OTP */}
        <section className={styles.mandateSection}>
          <div className={styles.mandateInner}>
            <div className={styles.mandateHeader}>
              <Lock size={22} strokeWidth={1.8} color="#fff" />
              <h2 className={styles.mandateTitle}>5. Protokol Keamanan OTP</h2>
            </div>
            <p className={styles.mandateDesc}>
              Untuk memastikan integritas setiap sesi perbaikan, ELECTROVICE menggunakan sistem One-Time Password (OTP) 6 digit. Kode ini harus dipertukarkan antara Pelanggan dan Teknisi yang ditugaskan sebelum pekerjaan perbaikan dimulai.
            </p>
            <div className={styles.mandateCols}>
              <div className={styles.mandateCard}>
                <h4>Kode Dinamis</h4>
                <p>Setiap sesi perbaikan menghasilkan OTP unik 6 digit secara real-time. Kode hanya berlaku untuk sesi tersebut.</p>
              </div>
              <div className={styles.mandateCard}>
                <h4>Kebijakan Tanpa Jejak</h4>
                <p>Kode OTP kedaluwarsa setelah 120 detik dan tidak pernah disimpan di server kami setelah kedaluwarsa. Bagikan kode Anda hanya kepada teknisi yang ditugaskan.</p>
              </div>
            </div>
            <p className={styles.mandateWarning}>
              <AlertTriangle size={14} strokeWidth={2} /> ELECTROVICE tidak akan pernah meminta kode OTP Anda melalui telepon, SMS, atau email. Jangan pernah membagikannya kepada siapa pun selain teknisi yang ditugaskan secara langsung.
            </p>
          </div>
        </section>

        {/* Kekayaan Intelektual */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><ShieldCheck size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>6. Kekayaan Intelektual</h2>
          <div className={styles.textBlock}>
            <p>
              Aplikasi ELECTROVICE, termasuk konten, fitur, desain, logo, merek dagang, dan perangkat lunaknya, dimiliki oleh ELECTROVICE dan dilindungi oleh hukum kekayaan intelektual yang berlaku. Anda diberikan lisensi terbatas, non-eksklusif, tidak dapat dipindahtangankan, dan dapat dicabut untuk menggunakan Aplikasi semata-mata untuk keperluan pribadi, non-komersial.
            </p>
            <p>
              Anda tidak boleh menyalin, memodifikasi, mendistribusikan, menjual, atau menyewakan bagian mana pun dari Aplikasi atau kontennya, maupun merekayasa balik atau mencoba mengekstrak kode sumber Aplikasi, kecuali diizinkan oleh hukum yang berlaku.
            </p>
          </div>
        </section>

        {/* Batasan Layanan */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Settings2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>7. Batasan Layanan &amp; Penafian</h2>
          <p className={styles.sectionDesc}>
            Layanan ELECTROVICE disediakan berdasarkan "sebagaimana adanya" dan "sebagaimana tersedia". Kami tidak memberikan jaminan, tersurat maupun tersirat, mengenai hal-hal berikut:
          </p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Operasi Aplikasi yang tidak terputus atau bebas kesalahan setiap saat.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Kualitas, akurasi, atau keandalan pekerjaan perbaikan yang dilakukan oleh Teknisi independen.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Ketersediaan Teknisi di semua wilayah geografis setiap saat.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Kompatibilitas Aplikasi dengan semua model perangkat, versi sistem operasi, atau konfigurasi jaringan.</p>
            </div>
          </div>
        </section>

        {/* Batasan Tanggung Jawab */}
        <section className={styles.liabilitySection}>
          <div className={styles.liabilityHeader}>
            <AlertTriangle size={22} strokeWidth={1.8} color="#f59e0b" className={styles.liabilityIcon} />
            <h2 className={styles.sectionTitle}>8. Batasan Tanggung Jawab</h2>
          </div>
          <p className={styles.liabilityLegal}>
            SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, ELECTROVICE DAN PEJABAT, DIREKTUR, KARYAWAN, SERTA AGENNYA TIDAK BERTANGGUNG JAWAB ATAS KERUGIAN TIDAK LANGSUNG, INSIDENTAL, KHUSUS, KONSEKUENSIAL, ATAU HUKUMAN YANG TIMBUL DARI PENGGUNAAN ATAU KETIDAKMAMPUAN ANDA MENGGUNAKAN APLIKASI ATAU LAYANAN.
          </p>
          <div className={styles.liabilityBox}>
            <p>
              Total tanggung jawab agregat kami untuk klaim apa pun terkait Aplikasi atau Layanan tidak akan melebihi total jumlah yang Anda bayarkan kepada ELECTROVICE dalam dua belas (12) bulan sebelum peristiwa yang menimbulkan klaim, atau IDR 500.000 — mana yang lebih besar.
            </p>
          </div>
        </section>

        {/* Penghentian Akun */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Trash2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>9. Penghentian Akun</h2>
          <div className={styles.textBlock}>
            <p>
              Anda dapat menghapus akun kapan saja melalui <strong>Pengaturan → Akun → Hapus Akun</strong> di Aplikasi, atau dengan menghubungi kami di <strong>support@electrovice.app</strong>. Setelah penghapusan, data pribadi Anda akan dihapus dalam 30 hari, kecuali catatan transaksi yang disimpan untuk kepatuhan hukum.
            </p>
            <p>
              ELECTROVICE berhak menangguhkan atau menghentikan akun Anda tanpa pemberitahuan sebelumnya jika Anda melanggar Ketentuan ini, terlibat dalam aktivitas penipuan, atau jika kami diwajibkan demikian oleh hukum. Penangguhan atau penghentian tidak membebaskan Anda dari kewajiban pembayaran yang timbul sebelum penghentian.
            </p>
          </div>
        </section>

        {/* Hukum yang Berlaku */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Scale size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>10. Hukum yang Berlaku &amp; Penyelesaian Sengketa</h2>
          <div className={styles.textBlock}>
            <p>
              Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan ketentuan pertentangan hukumnya.
            </p>
            <p>
              Sengketa apa pun yang timbul dari atau terkait dengan Ketentuan ini pertama-tama akan diselesaikan melalui negosiasi dengan itikad baik. Jika tidak terselesaikan dalam 30 hari, sengketa akan diajukan ke pengadilan yang berwenang di Indonesia.
            </p>
          </div>
        </section>

        {/* Hubungi Kami */}
        <section className={styles.agreementSection}>
          <div className={styles.sectionIconWrap} style={{ marginBottom: '1rem' }}><Mail size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.agreementTitle}>Hubungi Kami</h2>
          <p className={styles.agreementDesc}>
            Jika Anda memiliki pertanyaan tentang Syarat &amp; Ketentuan ini, silakan hubungi kami:
          </p>
          <div className={styles.textBlock}>
            <p><strong>ELECTROVICE</strong></p>
            <p>Email: <strong>support@electrovice.app</strong></p>
            <p>Untuk permintaan privasi: <strong>privacy@electrovice.app</strong></p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', color: '#64748b' }}>
              Kami akan merespons semua pertanyaan dalam 14 hari kerja.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
