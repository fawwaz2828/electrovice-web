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
            <FileText size={12} strokeWidth={2.5} /> Legal Agreement
          </span>
          <h1 className={styles.headerTitleLarge}>
            Terms &amp; <span className={styles.headerTitleBlue}>Conditions</span>
          </h1>
          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Please read these Terms &amp; Conditions carefully before using the ELECTROVICE mobile app and platform. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>LAST UPDATED</span>
              <span className={styles.lastUpdatedDate}>April 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Acceptance of Terms */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><FileText size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <div className={styles.textBlock}>
            <p>
              By downloading, installing, or using the ELECTROVICE application ("App") or related services ("Services"), you ("User") agree to be bound by these Terms &amp; Conditions ("Terms") and our Privacy Policy. If you do not agree to these Terms, do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and ELECTROVICE. We reserve the right to modify these Terms at any time. Your continued use of the App after any changes constitutes your acceptance of the revised Terms. We will notify users of material changes through the App or by email.
            </p>
          </div>
        </section>

        {/* Service Description */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Globe size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>2. Service Description</h2>
          <div className={styles.textBlock}>
            <p>
              ELECTROVICE is a marketplace platform that connects users ("Customers") with verified independent repair technicians ("Technicians") for electronics, electrical appliance, and vehicle repair services. ELECTROVICE acts as an intermediary platform and is not itself a repair service provider.
            </p>
            <p>
              We provide tools including GPS-based technician matching, secure OTP-code repair sessions, real-time repair tracking, and secure in-app payment processing. The quality of repair work is solely the responsibility of the respective Technician.
            </p>
          </div>
        </section>

        {/* User Eligibility */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><User size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>3. User Eligibility &amp; Obligations</h2>
          <p className={styles.sectionDesc}>To use ELECTROVICE, you must meet the following requirements and agree to these obligations:</p>
          <div className={styles.obligationsGrid}>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>1</div>
              <div>
                <strong>Age Requirement</strong>
                <p>You must be at least 13 years old to use this App. Users under 18 must obtain parental or guardian consent.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>2</div>
              <div>
                <strong>Accurate Information</strong>
                <p>You agree to provide true, accurate, and complete information when registering and to keep your account information up to date.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>3</div>
              <div>
                <strong>Account Security</strong>
                <p>You are solely responsible for maintaining the confidentiality of your login credentials and all activities that occur under your account.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>4</div>
              <div>
                <strong>Legal Compliance</strong>
                <p>Your use of the platform must not violate any applicable local, national, or international laws or regulations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prohibited Conduct */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Ban size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>4. Prohibited Conduct</h2>
          <p className={styles.sectionDesc}>You agree not to:</p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Use the App for fraudulent, unlawful, or unauthorized purposes.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Bypass, disable, or interfere with the OTP security system or other security features of the App.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Scrape or collect data from the platform without explicit written permission from ELECTROVICE.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Transmit viruses, malware, or other harmful code through the platform.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#ef4444" color="#ef4444" />
              <p>Harass, abuse, or harm technicians, customers, or ELECTROVICE staff.</p>
            </div>
          </div>
        </section>

        {/* OTP Security Protocol */}
        <section className={styles.mandateSection}>
          <div className={styles.mandateInner}>
            <div className={styles.mandateHeader}>
              <Lock size={22} strokeWidth={1.8} color="#fff" />
              <h2 className={styles.mandateTitle}>5. OTP Security Protocol</h2>
            </div>
            <p className={styles.mandateDesc}>
              To ensure the integrity of every repair session, ELECTROVICE uses a 6-digit One-Time Password (OTP) system. This code must be exchanged between the Customer and the assigned Technician before repair work begins.
            </p>
            <div className={styles.mandateCols}>
              <div className={styles.mandateCard}>
                <h4>Dynamic Code</h4>
                <p>Each repair session generates a unique 6-digit OTP in real-time. The code is only valid for that session.</p>
              </div>
              <div className={styles.mandateCard}>
                <h4>No-Trace Policy</h4>
                <p>The OTP expires after 120 seconds and is never stored on our servers after expiration. Share your code only with the assigned technician.</p>
              </div>
            </div>
            <p className={styles.mandateWarning}>
              <AlertTriangle size={14} strokeWidth={2} /> ELECTROVICE will never ask for your OTP via phone, SMS, or email. Never share it with anyone other than the assigned technician in person.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><ShieldCheck size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
          <div className={styles.textBlock}>
            <p>
              The ELECTROVICE application, including its content, features, design, logos, trademarks, and software, is owned by ELECTROVICE and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, and revocable license to use the App solely for personal, non-commercial purposes.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or lease any part of the App or its content, nor reverse engineer or attempt to extract the App's source code, except as permitted by applicable law.
            </p>
          </div>
        </section>

        {/* Service Limitations */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Settings2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>7. Service Limitations &amp; Disclaimers</h2>
          <p className={styles.sectionDesc}>
            ELECTROVICE Services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the following:
          </p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Uninterrupted or error-free operation of the App at all times.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>The quality, accuracy, or reliability of repair work performed by independent Technicians.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Availability of Technicians in all geographic areas at all times.</p>
            </div>
            <div className={styles.limitationItem}>
              <Circle size={8} fill="#2563eb" color="#2563eb" className={styles.limitationIconBlue} />
              <p>Compatibility of the App with all device models, operating system versions, or network configurations.</p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className={styles.liabilitySection}>
          <div className={styles.liabilityHeader}>
            <AlertTriangle size={22} strokeWidth={1.8} color="#f59e0b" className={styles.liabilityIcon} />
            <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
          </div>
          <p className={styles.liabilityLegal}>
            TO THE EXTENT PERMITTED BY APPLICABLE LAW, ELECTROVICE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP OR SERVICES.
          </p>
          <div className={styles.liabilityBox}>
            <p>
              Our total aggregate liability for any claim related to the App or Services shall not exceed the total amount you paid to ELECTROVICE in the twelve (12) months prior to the event giving rise to the claim, or IDR 500,000 — whichever is greater.
            </p>
          </div>
        </section>

        {/* Account Termination */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Trash2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>9. Account Termination</h2>
          <div className={styles.textBlock}>
            <p>
              You may delete your account at any time via <strong>Settings → Account → Delete Account</strong> in the App, or by contacting us at <strong>support@electrovice.app</strong>. Upon deletion, your personal data will be removed within 30 days, except for transaction records retained for legal compliance.
            </p>
            <p>
              ELECTROVICE reserves the right to suspend or terminate your account without prior notice if you violate these Terms, engage in fraudulent activity, or if we are required to do so by law. Suspension or termination does not relieve you of any payment obligations incurred prior to termination.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Scale size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>10. Governing Law &amp; Dispute Resolution</h2>
          <div className={styles.textBlock}>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or related to these Terms shall first be resolved through good-faith negotiation. If unresolved within 30 days, the dispute shall be submitted to the competent courts in Indonesia.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className={styles.agreementSection}>
          <div className={styles.sectionIconWrap} style={{ marginBottom: '1rem' }}><Mail size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.agreementTitle}>Contact Us</h2>
          <p className={styles.agreementDesc}>
            If you have any questions about these Terms &amp; Conditions, please contact us:
          </p>
          <div className={styles.textBlock}>
            <p><strong>ELECTROVICE</strong></p>
            <p>Email: <strong>support@electrovice.app</strong></p>
            <p>For privacy requests: <strong>privacy@electrovice.app</strong></p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', color: '#64748b' }}>
              We will respond to all inquiries within 14 business days.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
