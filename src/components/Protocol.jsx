import styles from './Protocol.module.css'

const steps = [
  {
    icon: '🔐',
    title: 'Secure Match',
    desc: 'Our system intelligently matches you with verified, nearby technicians based on your device type and location.',
  },
  {
    icon: '📋',
    title: 'Content Verification',
    desc: 'Every repair detail is documented and confirmed before work begins — no hidden surprises.',
  },
  {
    icon: '✅',
    title: 'Knowledge Verify',
    desc: 'Technicians pass rigorous certification checks. You get peace of mind knowing experts handle your device.',
  },
]

export default function Protocol() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Our Process</span>
          <h2 className={styles.title}>The 6-Digit Protocol</h2>
          <p className={styles.subtitle}>
            Our unique trust system ensures full transparency between technicians and customers at every stage of your repair.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
