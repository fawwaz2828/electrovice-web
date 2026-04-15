import styles from './BenefitsPage.module.css'

export default function BenefitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>⚡ Technical Stewardship</span>
            <h1 className={styles.heroTitle}>
              Precision Service.<br />
              <span className={styles.heroHighlight}>Sustainable Impact.</span>
            </h1>
            <p className={styles.heroDesc}>
              We bridge hardware engineering precision with ecological responsibility to redefine affordable repair for everyone.
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
            <div className={styles.heroImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=380&fit=crop&crop=face"
                alt="Technician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Individuals */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <span className={styles.pill}>For Individuals</span>
              <h2 className={styles.sectionTitle}>The Gift of Clarity</h2>
              <p className={styles.sectionDesc}>
                The complete technical service factor time, automated repairs, saving you hours of frustration and research.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <span className={styles.featureIcon}>📊</span>
                  <div>
                    <strong>Data-Based Diagnostics</strong>
                    <p>Accurate issue detection powered by real repair data and technician expertise.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.featureIcon}>🕐</span>
                  <div>
                    <strong>Precise Timestamps</strong>
                    <p>Every repair step is logged with exact timing so you always know what happened and when.</p>
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
                  <span>🔒</span> OTP Protected
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
            <span className={styles.pill}>For Technicians &amp; UMKM</span>
            <h2 className={styles.sectionTitle}>Grow Your Repair Business</h2>
            <p className={styles.sectionDesc}>
              Join thousands of technicians using digital tools to build legitimacy and attract more customers.
            </p>
          </div>
          <div className={styles.twoColReverse}>
            <div className={styles.techCard}>
              <h3 className={styles.techCardTitle}>The Digital Command Center</h3>
              <p className={styles.techCardDesc}>
                Manage all your repair jobs, customer communications, and payment records from one powerful dashboard. Complete navigation to your business.
              </p>
              <div className={styles.techStats}>
                <div className={styles.techStat}><span>Job History</span></div>
                <div className={styles.techStat}><span>Analytics</span></div>
                <div className={styles.techStat}><span>Earnings</span></div>
              </div>
            </div>
            <div className={styles.credCard}>
              <div className={styles.credBadge}>⚡ Instant Credibility</div>
              <h3 className={styles.credTitle}>Build Trust Fast</h3>
              <p className={styles.credDesc}>
                Get a verified badge, ratings, and reviews. Customers can trust you before the first handshake.
              </p>
              <ul className={styles.credList}>
                <li>✅ Verified Profile</li>
                <li>⭐ Customer Ratings</li>
                <li>📋 Certified Skills</li>
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
              <span className={styles.pill}>🌿 For the Eco-Conscious</span>
              <h2 className={styles.sectionTitle}>Healing the Planet</h2>
              <p className={styles.sectionDesc}>
                Use a trustworthy electronics repair network replacement. We are building a future where every repair becomes a resource for a better world.
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
                "Repairing is not just fixing electronics, it's protecting your investments and your environment."
              </p>
            </div>
            <div className={styles.colImage}>
              <div className={styles.ecoImageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop"
                  alt="Circuit board"
                />
                <div className={styles.ecoTag}>🌱 Carbon Neutral Repairs</div>
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
              <div className={styles.featureCardIcon}>📍</div>
              <h3>Real-Time Tracking</h3>
              <p>Track repair progress live. Know exactly when your technician arrives, what they find, and when your device is ready.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardIcon}>🔐</div>
              <h3>The 8-Digit Guarantee</h3>
              <p>A tamper-proof system security code that's unique to your repair. No work begins without it — your device's protection layer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to experience technical excellence?</h2>
          <p className={styles.ctaDesc}>
            Join thousands of users who trust Electrovice for every repair, every time.
          </p>
          <div className={styles.ctaActions}>
            <a href="#book" className={styles.ctaBtnPrimary}>Get Started</a>
            <a href="#services" className={styles.ctaBtnSecondary}>View All Services</a>
          </div>
        </div>
      </section>
    </main>
  )
}
