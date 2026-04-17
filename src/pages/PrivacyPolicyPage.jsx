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
            <Lock size={12} strokeWidth={2.5} /> Privacy Policy
          </span>
          <h1 className={styles.headerTitle}>Privacy Policy</h1>
          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              ELECTROVICE ("we") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the ELECTROVICE mobile app and services.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>LAST UPDATED</span>
              <span className={styles.lastUpdatedDate}>April 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><ClipboardList size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.sectionDesc}>
            We collect the following categories of information when you use our app:
          </p>
          <div className={styles.twoCol}>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <BadgeCheck size={18} strokeWidth={2} color="#2563eb" />
                <h3>Account &amp; Identity Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Information you provide when registering or using our services.</p>
              <ul className={styles.dataList}>
                <li>Full Name &amp; Email Address</li>
                <li>Phone Number</li>
                <li>Profile Photo (optional)</li>
                <li>Billing &amp; Shipping Address</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <MapPin size={18} strokeWidth={2} color="#2563eb" />
                <h3>Location Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Used to match you with the nearest verified technician.</p>
              <ul className={styles.dataList}>
                <li>Precise GPS Location (if permitted)</li>
                <li>Approximate Location (city/region)</li>
                <li>Location history during active repair sessions</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <Smartphone size={18} strokeWidth={2} color="#2563eb" />
                <h3>Device &amp; Technical Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Automatically collected when you use the app.</p>
              <ul className={styles.dataList}>
                <li>Device Model &amp; Operating System</li>
                <li>Unique Device Identifier (Android ID)</li>
                <li>App Version &amp; Crash Logs</li>
                <li>IP Address &amp; Network Type</li>
              </ul>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.dataCardHeader}>
                <ShieldCheck size={18} strokeWidth={2} color="#2563eb" />
                <h3>Transaction &amp; Usage Data</h3>
              </div>
              <p className={styles.dataCardDesc}>Data generated through your activity on the platform.</p>
              <ul className={styles.dataList}>
                <li>Repair Order History</li>
                <li>Payment Records (without full card data)</li>
                <li>In-App Communication with Technicians</li>
                <li>Ratings &amp; Reviews Given</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Search size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <div className={styles.threeCol}>
            <div className={styles.useCard}>
              <h4>Service Delivery</h4>
              <p>Processing repair orders, matching you with certified technicians, and activating the 6-digit code security system.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Security &amp; Protection</h4>
              <p>Verifying technician identity, detecting fraud, and enforcing our 6-digit OTP security protocol.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Communication</h4>
              <p>Sending order confirmations, repair status updates, and important service notifications via push notifications and email.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Platform Improvement</h4>
              <p>Analyzing aggregated usage data to improve app performance, fix bugs, and develop new features.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Payment Processing</h4>
              <p>Facilitating secure payments through our third-party payment gateway partners.</p>
            </div>
            <div className={styles.useCard}>
              <h4>Legal Compliance</h4>
              <p>Fulfilling regulatory obligations under applicable Indonesian law and international data protection frameworks.</p>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Share2 size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Information Sharing &amp; Third Parties</h2>
          <p className={styles.sectionDesc}>
            We do not sell your personal data. We only share your information under the following circumstances:
          </p>
          <div className={styles.obligationsGrid}>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>1</div>
              <div>
                <strong>Technicians</strong>
                <p>Your name, contact number, and location are shared with the assigned technician to fulfill your repair request.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>2</div>
              <div>
                <strong>Payment Processors</strong>
                <p>We use third-party payment gateways (e.g., Midtrans) to process transactions securely. We do not store full payment card details.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>3</div>
              <div>
                <strong>Analytics Providers</strong>
                <p>We use Firebase Analytics and Crashlytics (Google) to monitor app stability and usage — only anonymous or aggregated data is shared.</p>
              </div>
            </div>
            <div className={styles.obligationCard}>
              <div className={styles.obligationNum}>4</div>
              <div>
                <strong>Legal Obligations</strong>
                <p>We may disclose data if required by law, court order, or to protect the rights and safety of ELECTROVICE and its users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Clock size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
          <p className={styles.sectionDesc}>
            We retain your personal data only as long as necessary to provide our services and comply with legal obligations:
          </p>
          <div className={styles.limitationsList}>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Account Data:</strong> Retained while the account is active. Deleted within 30 days after a verified account deletion request.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Transaction Records:</strong> Retained for 5 years to comply with Indonesian financial and tax regulations.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Location Data:</strong> Active session location is deleted immediately after the repair session ends. We do not store historical location trails.</p>
            </div>
            <div className={styles.limitationItem}>
              <BadgeCheck size={14} fill="#2563eb" color="#2563eb" />
              <p><strong>Crash &amp; Technical Logs:</strong> Automatically deleted after 90 days.</p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Lock size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p className={styles.sectionDesc}>
            We implement industry-standard technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className={styles.securityBox}>
            <div className={styles.securityItem}>
              <ShieldCheck size={24} strokeWidth={1.8} color="#f59e0b" className={styles.securityItemIcon} />
              <div>
                <strong>AES-256 Encryption</strong>
                <p>All data at rest and in transit is encrypted using banking-grade standards (TLS 1.2+).</p>
              </div>
            </div>
            <div className={styles.securityDivider} />
            <div className={styles.securityItem}>
              <Lock size={24} strokeWidth={1.8} color="#2563eb" className={styles.securityItemIcon} />
              <div>
                <strong>OTP-Based Session Security</strong>
                <p>Every repair session is protected by a unique 6-digit OTP that expires after 120 seconds and is never stored.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Scale size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Your Rights &amp; Data Deletion</h2>
          <p className={styles.sectionDesc}>
            You have full control over your personal data. You may exercise the following rights at any time:
          </p>
          <div className={styles.rightsGrid}>
            <div className={styles.rightCard}>
              <Folder size={22} strokeWidth={1.8} color="#2563eb" className={styles.rightIcon} />
              <div>
                <strong>Right of Access</strong>
                <p>Request a copy of all personal data we hold about you by contacting us at the email below.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Trash2 size={22} strokeWidth={1.8} color="#ef4444" className={styles.rightIcon} />
              <div>
                <strong>Right to Erasure (Delete Account)</strong>
                <p>You may delete your account and all associated data at any time via <strong>Settings → Account → Delete Account</strong> in the app, or by emailing <strong>privacy@electrovice.app</strong>. Deletion is processed within 30 days.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Pencil size={22} strokeWidth={1.8} color="#2563eb" className={styles.rightIcon} />
              <div>
                <strong>Right to Rectification</strong>
                <p>Update inaccurate or incomplete information directly through the profile settings in the app.</p>
              </div>
            </div>
            <div className={styles.rightCard}>
              <Ban size={22} strokeWidth={1.8} color="#f59e0b" className={styles.rightIcon} />
              <div>
                <strong>Right to Object / Opt Out</strong>
                <p>Opt out of non-essential data processing (e.g., marketing emails) at any time through app settings or by contacting us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Baby size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Children's Privacy</h2>
          <p className={styles.sectionDesc}>
            ELECTROVICE is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal data, we will promptly delete that information. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <strong>privacy@electrovice.app</strong>.
          </p>
        </section>

        {/* Cookies */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Cookie size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Cookies &amp; Tracking Technologies</h2>
          <p className={styles.sectionDesc}>
            Our mobile app does not use browser cookies. We use the following tracking technologies within the app:
          </p>
          <div className={styles.cookieTags}>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Firebase Analytics (anonymous)
            </span>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Crashlytics (error reporting)
            </span>
            <span className={styles.cookieTagGreen}>
              <BadgeCheck size={13} strokeWidth={2} /> Session Tokens (authentication)
            </span>
            <span className={styles.cookieTagGray}>
              <Ban size={13} strokeWidth={2} /> Third-party ad trackers (Not used)
            </span>
          </div>
        </section>

        {/* Policy Changes */}
        <section className={styles.section}>
          <div className={styles.sectionIconWrap}><Pencil size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={styles.sectionDesc}>
            We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app or by email. The "Last Updated" date at the top of this page always reflects the most recent revision. Your continued use of the ELECTROVICE app after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Contact Us */}
        <section className={styles.agreementSection}>
          <div className={styles.sectionIconWrap} style={{ marginBottom: '1rem' }}><Mail size={22} strokeWidth={1.8} color="#2563eb" /></div>
          <h2 className={styles.agreementTitle}>Contact Us</h2>
          <p className={styles.agreementDesc}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className={styles.textBlock}>
            <p><strong>ELECTROVICE</strong></p>
            <p>Email: <strong>privacy@electrovice.app</strong></p>
            <p>Subject: "Privacy Request – [Your Name]"</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', color: '#64748b' }}>
              We will respond to all privacy-related requests within 14 business days.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
