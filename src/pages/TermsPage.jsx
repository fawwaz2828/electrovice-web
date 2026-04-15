import styles from './LegalPage.module.css'

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.headerTitleLarge}>
            Terms of <span className={styles.headerTitleBlue}>Service</span>
          </h1>
        </div>

        {/* Acceptance of Terms */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>📜</div>
          <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
          <div className={styles.textBlock}>
            <p>
              By accessing or using the ELECTROVICE platform, hardware diagnostic tools, or digital services, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, you are prohibited from using the services.
            </p>
            <p>
              These terms constitute a legally binding agreement between you and ELECTROVICE. We reserve the right to modify these terms at any time to reflect changes in regulatory requirements or hardware standards.
            </p>
          </div>
        </section>

        {/* User Obligations */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>👤</div>
          <h2 className={styles.sectionTitle}>User Obligations</h2>
          <p className={styles.sectionDesc}>As a user of the ELECTROVICE ecosystem, you represent and warrant that:</p>
          <div className={styles.obligationsGrid}>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>1</div>
              <div>
                <strong>Identity Accuracy</strong>
                <p>You provide true, correct, and complete registration information for all hardware interactions.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>2</div>
              <div>
                <strong>Ethical Disposal</strong>
                <p>Components sent through our platform must be disposed of according to ELECTROVICE's ecological guidelines.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>3</div>
              <div>
                <strong>Legal Compliance</strong>
                <p>Use of the platform does not violate any, state, or international laws regarding technical security.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>4</div>
              <div>
                <strong>Account Integrity</strong>
                <p>You are solely responsible for maintaining the confidentiality of your technical access credentials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Protocol */}
        <section className={styles.mandateSection}>
          <div className={styles.mandateInner}>
            <div className={styles.mandateHeader}>
              <div className={styles.sectionIcon}>🔐</div>
              <h2 className={styles.mandateTitle}>Security Protocol: The 6-Digit Mandate</h2>
            </div>
            <p className={styles.mandateDesc}>
              To ensure the highest level of technical precision and account security, ELECTROVICE enforces a strictly enforced multi-factor authentication protocol.
            </p>
            <div className={styles.mandateCols}>
              <div className={styles.mandateCard}>
                <h4>Dynamic Codes</h4>
                <p>Each active repair assignment requires a unique 6-digit code generated in real-time.</p>
              </div>
              <div className={styles.mandateCard}>
                <h4>Zero-Trace Policy</h4>
                <p>6-digit codes expire after 120 seconds and are never stored on peripheral servers.</p>
              </div>
            </div>
            <p className={styles.mandateWarning}>
              ⚠️ Failure to provide the 6-digit code will result in immediate session termination.
            </p>
          </div>
        </section>

        {/* Service Limitations */}
        <section className={styles.section}>
          <div className={styles.sectionIcon}>⚙️</div>
          <h2 className={styles.sectionTitle}>Service Limitations</h2>
          <p className={styles.sectionDesc}>
            ELECTROVICE services are provided on an "as-is" and "as-available" basis. While we strive for absolute technical precision, the following limitations apply:
          </p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <span className={styles.limitationIconBlue}>🔵</span>
              <p>Uptime is not guaranteed during scheduled maintenance of high-voltage diagnostic arrays.</p>
            </div>
            <div className={styles.limitationItem}>
              <span className={styles.limitationIconBlue}>🔵</span>
              <p>Remote diagnostics may be limited by local network latency or hardware signal interference.</p>
            </div>
            <div className={styles.limitationItem}>
              <span className={styles.limitationIconBlue}>🔵</span>
              <p>Legacy hardware support is subject to component availability and ecological stewardship guidelines.</p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className={styles.liabilitySection}>
          <div className={styles.liabilityHeader}>
            <span className={styles.liabilityIcon}>⚠️</span>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          </div>
          <p className={styles.liabilityLegal}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ELECTROVICE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
          </p>
          <div className={styles.liabilityBox}>
            <p>
              Our aggregate liability for all claims relating to the service shall not exceed the greater of the amount paid by the user for the specific service giving rise to the claim in the twelve (12) months preceding the incident.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
