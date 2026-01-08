import { useScrollToForm } from '../../hooks/useScrollToForm';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './ProvenSolution.module.css';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

export default function ProvenSolution() {
  const scrollToForm = useScrollToForm();
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="solution" className={styles.section}>
      {/* White Triangle Decoration */}
      <div className={styles.triangle}>
        <img src="/images/proven-solution/WhiteTriangle.svg" alt="" />
      </div>

      <div className={styles.container}>
        <h2
          ref={headingRef}
          className={`${styles.heading} animate-on-scroll animate-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <span className={styles.headingGray}>Human Vector is a proven solution for </span>
          <span className={styles.headingDark}>scaling your business</span>
          <span className={styles.headingGray}> while improving profitability</span>
        </h2>

        <div
          ref={imageRef}
          className={`${styles.imageWrapper} animate-on-scroll animate-scale-in ${imageVisible ? 'is-visible' : ''}`}
        >
          <ProgressiveImage
            src="/images/proven-solution/dashboard-screenshot.webp"
            alt="Human Vector dashboard showing employee tracking and work schedule management"
            className={styles.image}
          />
        </div>

        <div
          ref={ctaRef}
          className={`${styles.ctaContainer} animate-on-scroll animate-fade-up ${ctaVisible ? 'is-visible' : ''}`}
        >
          <button
            onClick={scrollToForm}
            className={styles.ctaButton}
          >
            See how It works
          </button>

          <div className={styles.ctaInfo}>
            <p className={styles.ctaTextTop}>
              30-minute call with <span className={styles.coFounder}>CEO and Co-founder</span>
            </p>
            <div className={styles.ctaFounderRow}>
              <img
                src="/images/proven-solution/george-avatar.webp"
                alt="George Kachanouski"
                className={styles.avatar}
              />
              <a
                href="https://www.linkedin.com/in/georgekachanouski/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.founderLink}
              >
                George Kachanouski
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
