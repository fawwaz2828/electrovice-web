import { Settings2, Shield, MapPin, CheckCircle2, Leaf, Award } from 'lucide-react'
import styles from './HowItWorksPage.module.css'
import stepsImg from '../assets/steps.png'
import gpsImg from '../assets/gps.png'
import veriffImg from '../assets/veriff.png'
import tepImg from '../assets/tep.png'
import payImg from '../assets/pay.png'

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Settings2 size={13} strokeWidth={2} /> How ELECTROVICE Works
            </span>
            <h1 className={styles.heroTitle}>
              From Booking
              <br />
              <span className={styles.heroHighlight}>To Done.</span>
            </h1>
            <p className={styles.heroDesc}>
              ELECTROVICE bridges device owners with professional technicians through four easy steps that are fast, transparent, and fully secured.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImgWrap}>
              <img
                src={stepsImg}
                alt="Someone using the ELECTROVICE app on a smartphone"
              />
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
                <h2 className={styles.stepTitle}>Choose Category via GPS</h2>
                <p className={styles.stepDesc}>
                  Select your device or vehicle damage category. The system uses GPS to automatically display nearby technicians and workshops with relevant specializations.
                </p>
                <div className={styles.stepTags}>
                  <span>Electronics</span>
                  <span>Electrical Equipment</span>
                  <span>Vehicles</span>
                </div>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.mapCard}>
                <img
                  src={gpsImg}
                  alt="GPS Map"
                  className={styles.mapImg}
                />
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>
                02
              </div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>6-Digit Verification Code</h2>
                <p className={styles.stepDesc}>
                  After selecting a technician, the app issues a unique 6-digit code. Share this code only with the technician who arrives to confirm their identity before work begins.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src={veriffImg}
                  alt="ELECTROVICE 6-Digit Verification Code"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Monitor Repair in Real-Time</h2>
                <p className={styles.stepDesc}>
                  Track every stage of the repair live from the app — from initial inspection, parts replacement, to final testing. You know exactly what's happening.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src={tepImg}
                  alt="ELECTROVICE Real-Time Repair Monitoring"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
            <div className={styles.stepLeft}>
              <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>
                04
              </div>
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>
                  Pay Securely &amp; Save History
                </h2>
                <p className={styles.stepDesc}>
                  Payment is made securely via the app and only processed after your confirmation. All repair details are automatically saved as a digital warranty document.
                </p>
              </div>
            </div>
            <div className={styles.stepRight}>
              <div className={styles.veriffImgWrap}>
                <img
                  src={payImg}
                  alt="ELECTROVICE Secure Payment & Save History"
                  className={styles.veriffImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Reliability */}
      <section className={styles.reliabilitySection}>
        <div className={styles.container}>
          <div className={styles.reliabilityHeader}>
            <h2 className={styles.reliabilityTitle}>
              Designed for Trust.
            </h2>
            <p className={styles.reliabilityDesc}>
              Our platform combines GPS-based technician matching with a commitment to reducing e-waste. By extending the lifespan of your devices, we protect your investment and the environment.
            </p>
          </div>
          <div className={styles.reliabilityBadges}>
            <div className={styles.relBadge}>
              <CheckCircle2 size={18} strokeWidth={2} color="#16a34a" />
              <span>100% Secure</span>
            </div>
            <div className={styles.relBadge}>
              <Leaf size={18} strokeWidth={2} color="#16a34a" />
              <span>Reduce E-Waste</span>
            </div>
            <div className={styles.relBadge}>
              <Award size={18} strokeWidth={2} color="#2563eb" />
              <span>Verified Technicians</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
