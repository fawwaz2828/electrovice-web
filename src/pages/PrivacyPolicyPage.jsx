import styles from './LegalPage.module.css'

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerBadge}>🔒 Policy Rights</span>
          <h1 className={styles.headerTitle}>Privacy Policy</h1>
          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              At ELECTROVICE, technical precision extends beyond our hardware to how we handle your data. This policy outlines our commitment to transparency, security, and your digital rights.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>LAST UPDATED</span>
              <span className={styles.lastUpdatedDate}>October 24, 2024</span>
            </div>
          </div>
        </div>

        {/* Data Collection */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>📋</div>
          <h2 className={styles.sectionTitle}>Data Collection</h2>
          <div className={styles.twoCol}>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <span className={styles.dataCardIconBlue}>🪪</span>
                <h3>Identity Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Information you provide when creating an account or purchasing hardware.</p>
              <ul className={styles.dataList}>
                <li>Legal Name &amp; Billing Address</li>
                <li>Verified Email &amp; Phone</li>
                <li>Hardware Serial Numbers</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <span className={styles.dataCardIconBlue}>⚙️</span>
                <h3>Technical Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Hardware telemetry data transmitted through our diagnostic services.</p>
              <ul className={styles.dataList}>
                <li>IP Address &amp; MAC ID</li>
                <li>Browser Fingerprints</li>
                <li>Operational Log Files</li>
              </ul>
            </div>
          </div>
          <blockquote className={styles.quote}>
            "We minimize collection to the bare technical requirements. If an artisan can build without it, we don't ask for it."
          </blockquote>
        </section>

        {/* How We Use Your Information */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>🔍</div>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <div className={styles.threeCol}>
            <div className={styles.useCard}>
              <h4>Service Execution</h4>
              <p>Processing transactions, managing your hardware warranties, and providing technical support.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Optimization</h4>
              <p>Analyzing system logs to improve circuit efficiency and interface responsiveness.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Legal Compliance</h4>
              <p>Fulfilling our regulatory duties regarding technical disclosure and environmental reporting.</p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>🔐</div>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p className={styles.sectionDesc}>
            Our security infrastructure is modeled after Industrial-grade hardware isolation. We employ multi-layer encryption and strict access controls to ensure your data remains your own.
          </p>
          <div className={styles.securityBox}>
            <div className={styles.securityItem}>
              <span className={styles.securityItemIcon}>⚠️</span>
              <div>
                <strong>AES-256 Encryption</strong>
                <p>All data at rest and in-transit using bank-level operations.</p>
              </div>
            </div>
            <div className={styles.securityDivider} />
            <div className={styles.securityItem}>
              <span className={styles.securityItemIcon}>🔵</span>
              <div>
                <strong>Zero Trust Access</strong>
                <p>Our internal engineers only access data through audited hardware tokens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies & Tracking */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>🍪</div>
          <h2 className={styles.sectionTitle}>Cookies &amp; Tracking</h2>
          <p className={styles.sectionDesc}>
            ELECTROVICE uses cookies as "digital tools" to remember your workbench settings. We do not use third-party advertising trackers.
          </p>
          <div className={styles.cookieTags}>
            <span className={styles.cookieTagGreen}>✅ Session Management</span>
            <span className={styles.cookieTagGreen}>✅ Layout Preferences</span>
            <span className={styles.cookieTagGray}>❌ Analytics (Dismissed)</span>
          </div>
        </section>

        {/* Your Rights */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>⚖️</div>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.sectionDesc}>
            Under global data protection laws (GDPR, CCPA), you hold specific rights over your information. We provide the tools to exercise these rights directly within your dashboard.
          </p>
          <div className={styles.rightsGrid}>
            <div className={styles.rightCard}>
              <span className={styles.rightIcon}>📁</span>
              <div>
                <strong>Right to Access</strong>
                <p>Request a comprehensive account of all technical and personal data we store about you.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <span className={styles.rightIcon}>🗑️</span>
              <div>
                <strong>Right to Erasure</strong>
                <p>Request permanent deletion of your account and associated diagnostic logs from our servers.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <span className={styles.rightIcon}>✏️</span>
              <div>
                <strong>Right to Rectification</strong>
                <p>Directly update inaccurate information via your ELECTROVICE Artisan Profile.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <span className={styles.rightIcon}>🚫</span>
              <div>
                <strong>Right to Object</strong>
                <p>Opt out of any processing activities not strictly necessary for hardware operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agreement to Terms */}
        <section className={styles.agreementSection}>
          <h2 className={styles.agreementTitle}>Agreement to Terms</h2>
          <p className={styles.agreementDesc}>
            By continuing to use ELECTROVICE services and hardware, you acknowledge the practices described in this Privacy Policy.
          </p>
          <div className={styles.agreementActions}>
            <button className={styles.agreementBtnPrimary}>Accept Terms</button>
            <button className={styles.agreementBtnSecondary}>Download PDF</button>
          </div>
        </section>

      </div>
    </main>
  )
}
