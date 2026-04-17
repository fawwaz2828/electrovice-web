import { ShieldCheck, ClipboardList, BadgeCheck } from 'lucide-react'
import styles from './Protocol.module.css'

const steps = [
  {
    Icon: ShieldCheck,
    title: 'Unique 6-Digit Code',
    desc: 'After booking a technician, the app issues a unique 6-digit code. Share this code only with the technician who arrives to verify their identity.',
  },
  {
    Icon: ClipboardList,
    title: 'Real-Time Tracking',
    desc: 'Monitor every stage of the repair live — from initial inspection, parts replacement, to completion. Transparent with no hidden surprises.',
  },
  {
    Icon: BadgeCheck,
    title: 'Instant Pop-Up Notifications',
    desc: 'If a technician suddenly encounters an issue, a pop-up notification is sent immediately so you can quickly find a replacement without waiting.',
  },
]

export default function Protocol() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Our Advantage</span>
          <h2 className={styles.title}>ELECTROVICE 6-Digit Protocol</h2>
          <p className={styles.subtitle}>
            Our unique trust system ensures full transparency between technicians and customers at every stage of the repair.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <Icon size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
