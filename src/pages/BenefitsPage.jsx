import {
  Zap, BarChart2, Clock, Lock, CheckCircle2, Star, ClipboardList,
  MapPin, ShieldCheck, Leaf, Sprout
} from 'lucide-react'
import styles from './BenefitsPage.module.css'

export default function BenefitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Zap size={13} strokeWidth={2.5} /> Digital Repair Platform
            </span>
            <h1 className={styles.heroTitle}>
              Practical Service.<br />
              <span className={styles.heroHighlight}>Real Impact.</span>
            </h1>
            <p className={styles.heroDesc}>
              ELECTROVICE is here to make access to safe, transparent, and eco-friendly repairs easier — for users, MSME technicians, and communities that care about e-waste.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.otpCard}>
              <p className={styles.otpLabel}>Your 6-Digit Code</p>
              <div className={styles.otpBoxes}>
                {['4','9','_','2','_','_'].map((d, i) => (
                  <div key={i} className={`${styles.otpBox} ${d === '_' ? styles.otpEmpty : ''}`}>{d !== '_' ? d : ''}</div>
                ))}
              </div>
              <p className={styles.otpSub}>Share only with your technician</p>
            </div>

          </div>
        </div>
      </section>

      {/* For Individuals */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <span className={styles.pill}>For Users</span>
              <h2 className={styles.sectionTitle}>Hassle-Free Service</h2>
              <p className={styles.sectionDesc}>
                For those who don't have the time, energy, or technical expertise — ELECTROVICE brings professional technicians directly to your location.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <span className={styles.featureIconWrap}>
                    <BarChart2 size={22} strokeWidth={1.8} color="#2563eb" />
                  </span>
                  <div>
                    <strong>GPS-Based Search</strong>
                    <p>The system automatically finds the nearest technician based on damage category and area of expertise.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.featureIconWrap}>
                    <Clock size={22} strokeWidth={1.8} color="#2563eb" />
                  </span>
                  <div>
                    <strong>Digital Order History</strong>
                    <p>All repair details are automatically saved as a digital warranty document accessible anytime.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.colImage}>
              <div className={styles.imageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                  alt="Individual using laptop"
                />
                <div className={styles.imageTag}>
                  <Lock size={13} strokeWidth={2} /> OTP Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Technicians & UMKM */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.pill}>For Technicians &amp; Workshop MSMEs</span>
            <h2 className={styles.sectionTitle}>Digitize Your Service Business</h2>
            <p className={styles.sectionDesc}>
              Join as an ELECTROVICE technician partner to expand your customer reach, manage orders digitally, and build a professional reputation.
            </p>
          </div>
          <div className={styles.twoColReverse}>
            <div className={styles.techCard}>
              <h3 className={styles.techCardTitle}>Digital Management Hub</h3>
              <p className={styles.techCardDesc}>
                Manage all orders, schedules, repair status, and payment records from one dashboard. Build a digital portfolio that enhances your business credibility.
              </p>
              <div className={styles.techStats}>
                <div className={styles.techStat}><span>Job History</span></div>
                <div className={styles.techStat}><span>Analytics</span></div>
                <div className={styles.techStat}><span>Earnings</span></div>
              </div>
            </div>
            <div className={styles.credCard}>
              <div className={styles.credBadge}>
                <Zap size={13} strokeWidth={2.5} /> Instant Credibility
              </div>
              <h3 className={styles.credTitle}>Build Trust</h3>
              <p className={styles.credDesc}>
                Get a verified badge, ratings, and customer reviews. Boost your business credibility before meeting your first customer.
              </p>
              <ul className={styles.credList}>
                <li><CheckCircle2 size={15} strokeWidth={2} /> Verified Profile</li>
                <li><Star size={15} strokeWidth={2} fill="currentColor" /> Customer Ratings</li>
                <li><ClipboardList size={15} strokeWidth={2} /> Certified Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Eco-Conscious */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <span className={styles.pill}>
                <Leaf size={13} strokeWidth={2} /> For the Environment
              </span>
              <h2 className={styles.sectionTitle}>Reduce E-Waste Together</h2>
              <p className={styles.sectionDesc}>
                By making repair access easier, ELECTROVICE supports a repair culture — extending the lifespan of devices and reducing electronic waste (e-waste) in Indonesia.
              </p>
              <div className={styles.ecoStats}>
                <div className={styles.ecoStat}>
                  <span className={styles.ecoNum}>80k</span>
                  <span className={styles.ecoLabel}>Devices Repaired</span>
                </div>
                <div className={styles.ecoStat}>
                  <span className={styles.ecoNum}>120+</span>
                  <span className={styles.ecoLabel}>Tons CO₂ Saved</span>
                </div>
              </div>
              <p className={styles.ecoQuote}>
                "Repairing is more than just a service — it's how we protect our investments and preserve the environment for future generations."
              </p>
            </div>
            <div className={styles.colImage}>
              <div className={styles.ecoImageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&h=400&fit=crop"
                  alt="Recycling and e-waste reduction"
                />
                <div className={styles.ecoTag}>
                  <Sprout size={13} strokeWidth={2} /> Carbon Neutral Repairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features: Real-Time + 8-Digit */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <MapPin size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Monitor repair progress live. Know when the technician arrives, what was found, and when your device is ready.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIconWrap}>
                <ShieldCheck size={26} strokeWidth={1.8} color="#2563eb" />
              </div>
              <h3>6-Digit Verification Code</h3>
              <p>A unique code issued by the system for every order. No work starts before the technician verifies this code — your device's layer of protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to experience better service?</h2>
          <p className={styles.ctaDesc}>
            Download ELECTROVICE and be part of Indonesia's first digital repair ecosystem.
          </p>
        </div>
      </section>
    </main>
  )
}
