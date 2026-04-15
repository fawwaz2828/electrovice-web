import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    icon: '🗂️',
    title: 'Choose Category',
    desc: 'Select your device or vehicle type to get matched with the right specialist.',
  },
  {
    num: '02',
    icon: '🔑',
    title: 'OTP Matching',
    desc: 'Receive a unique 6-digit code that links you securely to your assigned technician.',
  },
  {
    num: '03',
    icon: '✔️',
    title: '4-Digit Verification',
    desc: 'Confirm repair completion with a second verification code before any payment.',
  },
  {
    num: '04',
    icon: '💳',
    title: 'Track & Pay',
    desc: 'Monitor your repair in real time and pay only after you are satisfied.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.pill}>How It Works</span>
          <h2 className={styles.title}>Seamless from<br />Click to Completion</h2>
          <p className={styles.subtitle}>
            Four simple steps designed to protect your interests and ensure a hassle-free repair experience every time.
          </p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepIcon}>{step.icon}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{step.desc}</p>
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
            <h3 className={styles.cardTitle}>Total Control.<br />Instant Transparency.</h3>
            <p className={styles.cardSubtitle}>
              Track every repair step in real time. Full visibility from booking to completion.
            </p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>6-Digit</span>
                <span className={styles.metricLabel}>OTP Security</span>
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
            <a href="#book" className={styles.cardBtn}>Start a Repair →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
