import styles from './TwoQuotes.module.css';

export default function TwoQuotes() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Quote 1: Sundar Pichai */}
        <div className={styles.quoteBlock}>
          <div className={styles.topRow}>
            <div className={styles.photoContainer}>
              <img
                src="/images/quotes/sundar-pichai.png"
                alt="Sundar Pichai"
                className={styles.photo}
              />
            </div>
            <div className={styles.attributionMobile}>
              <img src="/images/quotes/google-icon.svg" alt="Google" className={styles.icon} />
              <span className={styles.attributionText}>Sundar Pichai, CEO of Alphabet Inc.</span>
            </div>
            <div className={styles.textContentDesktop}>
              <p className={styles.quoteText}>
                «The future of AI is not about replacing humans, it's about augmenting human capabilities.»
              </p>
              <div className={styles.attribution}>
                <img src="/images/quotes/google-icon.svg" alt="Google" className={styles.icon} />
                <span className={styles.attributionText}>Sundar Pichai, CEO of Alphabet Inc.</span>
              </div>
            </div>
          </div>
          <p className={styles.quoteTextMobile}>
            «The future of AI is not about replacing humans, it's about augmenting human capabilities.»
          </p>
        </div>

        {/* Quote 2: Jack Ma */}
        <div className={styles.quoteBlock}>
          <div className={styles.topRow}>
            <div className={styles.photoContainer}>
              <img
                src="/images/quotes/jack-ma.png"
                alt="Jack Ma"
                className={styles.photo}
              />
            </div>
            <div className={styles.attributionMobile}>
              <img src="/images/quotes/alibaba-icon.svg" alt="Alibaba" className={styles.icon} />
              <span className={styles.attributionText}>Jack Ma, Alibaba founder</span>
            </div>
            <div className={styles.textContentDesktop}>
              <p className={`${styles.quoteText} ${styles.quoteTextShort}`}>
                «My job is to make sure smart people are working together.»
              </p>
              <div className={styles.attribution}>
                <img src="/images/quotes/alibaba-icon.svg" alt="Alibaba" className={styles.icon} />
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
