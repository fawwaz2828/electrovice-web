import { LayoutGrid, KeyRound, CheckCircle2, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    Icon: LayoutGrid,
    title: 'Choose Repair Category',
    desc: 'Select your electronics or vehicle category. GPS automatically displays the nearest technicians with relevant specializations.',
  },
  {
    num: '02',
    Icon: KeyRound,
    title: '6-Digit Code Issued',
    desc: 'After selecting a technician, the app issues a unique 6-digit code as an identity verification tool when they arrive at your location.',
  },
  {
    num: '03',
    Icon: CheckCircle2,
    title: 'Monitor Repair Live',
    desc: 'Track every stage of the repair in real-time directly from the app. You know exactly what the technician is working on.',
  },
  {
    num: '04',
    Icon: CreditCard,
    title: 'Pay & Save History',
    desc: 'Secure payment via the app. All repair details are automatically saved in Order History as a digital warranty document.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.pill}>How It Works</span>
          <h2 className={styles.title}>Simple from<br />Order to Done</h2>
          <p className={styles.subtitle}>
            Four simple steps designed to protect your interests and ensure a safe service experience every time.
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
            <h3 className={styles.cardTitle}>Full Control.<br />Complete Transparency.</h3>
            <p className={styles.cardSubtitle}>
              Monitor every stage of service in real-time. Full visibility from booking to completion.
            </p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>6-Digit</span>
                <span className={styles.metricLabel}>Verification Code</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>Real-time</span>
                <span className={styles.metricLabel}>Tracking</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>Transparent</span>
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
