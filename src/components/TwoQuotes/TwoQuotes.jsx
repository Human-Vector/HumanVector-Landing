import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './TwoQuotes.module.css';

export default function TwoQuotes() {
  const { ref: quote1Ref, isVisible: quote1Visible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: quote2Ref, isVisible: quote2Visible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Quote 1: Sundar Pichai */}
        <div
          ref={quote1Ref}
          className={`${styles.quoteBlock} animate-on-scroll animate-fade-up ${quote1Visible ? 'is-visible' : ''}`}
        >
          <div className={styles.topRow}>
            <div className={styles.logoContainer}>
              <img
                src="/images/quotes/google-icon.svg"
                alt="Google"
                className={styles.logo}
              />
            </div>
            <div className={styles.attributionMobile}>
              <span className={styles.attributionText}>Sundar Pichai, CEO of Alphabet Inc.</span>
            </div>
            <div className={styles.textContentDesktop}>
              <p className={styles.quoteText}>
                «The future of AI is not about replacing humans, it's about augmenting human capabilities.»
              </p>
              <div className={styles.attribution}>
                <span className={styles.attributionText}>Sundar Pichai, CEO of Alphabet Inc.</span>
              </div>
            </div>
          </div>
          <p className={styles.quoteTextMobile}>
            «The future of AI is not about replacing humans, it's about augmenting human capabilities.»
          </p>
        </div>

        {/* Quote 2: Jack Ma */}
        <div
          ref={quote2Ref}
          className={`${styles.quoteBlock} animate-on-scroll animate-fade-up animate-delay-200 ${quote2Visible ? 'is-visible' : ''}`}
        >
          <div className={styles.topRow}>
            <div className={styles.logoContainer}>
              <img
                src="/images/quotes/alibaba-icon.svg"
                alt="Alibaba"
                className={styles.logo}
              />
            </div>
            <div className={styles.attributionMobile}>
              <span className={styles.attributionText}>Jack Ma, Alibaba founder</span>
            </div>
            <div className={styles.textContentDesktop}>
              <p className={`${styles.quoteText} ${styles.quoteTextShort}`}>
                «My job is to make sure smart people are working together.»
              </p>
              <div className={styles.attribution}>
                <span className={styles.attributionText}>Jack Ma, Alibaba founder</span>
              </div>
            </div>
          </div>
          <p className={styles.quoteTextMobile}>
            «My job is to make sure smart people are working together.»
          </p>
        </div>
      </div>
    </section>
  );
}
