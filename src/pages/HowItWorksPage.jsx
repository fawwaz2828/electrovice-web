import styles from './HowItWorksPage.module.css'

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>⚙️ Technical Stewardship</span>
            <h1 className={styles.heroTitle}>
              Engineering a<br />
              <span className={styles.heroHighlight}>Seamless Cycle.</span>
            </h1>
            <p className={styles.heroDesc}>
              ELECTROVICE bridges the gap between high-performance hardware repair and ecological responsibility. Our four-step protocol ensures your devices are handled with digital precision.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=420&fit=crop"
                alt="Circuit Board"
              />
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>🛡️</span>
                <div>
                  <p className={styles.certTitle}>Certified Security</p>
                  <p className={styles.certSub}>The technician is verified with a multi-stage authentication protocol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          {/* Step 01 */}
          <div className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Category Selection via GPS</h2>
                <p className={styles.stepDesc}>
                  Instantly locate the nearest specialized repair hubs. Our system auto-detects your location to provide a curated list of certified Digital Artisans in your vicinity.
                </p>
                <div className={styles.stepTags}>
                  <span>Electronics</span>
                  <span>Electrical</span>
                  <span>Automotive</span>
                </div>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.mapCard}>
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=280&fit=crop"
                  alt="GPS Map"
                  className={styles.mapImg}
                />
                <div className={styles.mapPin}>📍 Nearest Hub: 0.8 km</div>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>02</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Secure Matching Protocol</h2>
                <p className={styles.stepDesc}>
                  Security is our bedrock. Upon arrival, you and the technician exchange a unique 6-Digit Secure Code generated in-app. No work begins until every digital handshake is verified.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.otpCard}>
                <p className={styles.otpCardLabel}>Your Secure Code</p>
                <div className={styles.otpBoxes}>
                  {['4','9','_','2','_','_'].map((d, i) => (
                    <div key={i} className={`${styles.otpBox} ${d === '_' ? styles.otpEmpty : ''}`}>
                      {d !== '_' ? d : ''}
                    </div>
                  ))}
                </div>
                <p className={styles.otpNote}>🔒 Share only with your assigned technician</p>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Real-Time Repair Tracking</h2>
                <p className={styles.stepDesc}>
                  Watch the lifecycle of your repair. Our dashboard provides real-time telemetry on diagnostic phases, parts replacement, and final QA testing.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.trackCard}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackDot} /> Live Tracking
                </div>
                <div className={styles.trackStages}>
                  {[
                    { label: 'Diagnosed', done: true },
                    { label: 'Parts Ordered', done: true },
                    { label: 'Repairing', done: false, active: true },
                    { label: 'QA Testing', done: false },
                    { label: 'Done', done: false },
                  ].map((s, i) => (
                    <div key={i} className={`${styles.trackStage} ${s.done ? styles.stageDone : ''} ${s.active ? styles.stageActive : ''}`}>
                      <span className={styles.stageDot} />
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.trackBar}>
                  <div className={styles.trackProgress} style={{ width: '55%' }} />
                </div>
                <div className={styles.trackLabels}>
                  <span>STATUS: REPAIRING</span>
                  <span>ETA: 13:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>04</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Secure Payment &amp; History</h2>
                <p className={styles.stepDesc}>
                  Transactions are encrypted and only released upon your final approval. Maintain a permanent digital record of every component replaced and service performed.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.payCard}>
                <div className={styles.payMethod}>
                  <span className={styles.payIcon}>🏦</span>
                  <span className={styles.payLabel}>Digital Vault</span>
                  <span className={styles.payCheck}>✓</span>
                </div>
                <div className={styles.payMethod}>
                  <span className={styles.payIcon}>🔒</span>
                  <span className={styles.payLabel}>Encrypted Pay</span>
                  <span className={styles.payCheck}>✓</span>
                </div>
                <p className={styles.payNote}>Funds released only after your confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Reliability */}
      <section className={styles.reliabilitySection}>
        <div className={styles.container}>
          <div className={styles.reliabilityHeader}>
            <h2 className={styles.reliabilityTitle}>Designed for Reliability.</h2>
            <p className={styles.reliabilityDesc}>
              Our platform combines high-tech hardware matching with a commitment to zero e-waste. By extending the life of your devices, we protect both your investment and the planet.
            </p>
          </div>
          <div className={styles.reliabilityBadges}>
            <div className={styles.relBadge}>
              <span>✅</span>
              <span>100% Secure</span>
            </div>
            <div className={styles.relBadge}>
              <span>🌿</span>
              <span>Carbon Neutral</span>
            </div>
            <div className={styles.relBadge}>
              <span>🏅</span>
              <span>Pro Certified</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
