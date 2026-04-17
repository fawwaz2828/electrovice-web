import { MessageCircle, Phone } from 'lucide-react'
import styles from './ContactPage.module.css'

const WHATSAPP_NUMBER = '6289806217011'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <MessageCircle size={40} strokeWidth={1.5} color="#25d366" />
        </div>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Have a question or need help? Reach us directly via WhatsApp — we're happy to assist you.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <MessageCircle size={20} strokeWidth={2} />
          Chat on WhatsApp
        </a>
        <div className={styles.phoneLine}>
          <Phone size={15} strokeWidth={2} />
          <span>+62 898-0621-701</span>
        </div>
      </div>
    </div>
  )
}
