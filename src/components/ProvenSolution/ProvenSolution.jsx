import styles from './ProvenSolution.module.css';

export default function ProvenSolution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.headingGray}>Human Vector is a proven solution for </span>
          <span className={styles.headingDark}>scaling your business</span>
          <span className={styles.headingGray}> while improving profitability</span>
        </h2>

        <div className={styles.imageWrapper}>
          <img
            src="/images/proven-solution/dashboard-screenshot.png"
            alt="Human Vector dashboard showing employee tracking and work schedule management"
            className={styles.image}
          />
        </div>

        <div className={styles.ctaContainer}>
          <a
            href="https://calendly.com/georgekachanouski/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            See how It works
          </a>

          <div className={styles.ctaInfo}>
            <p className={styles.ctaTextTop}>
              30-minute call with <span className={styles.coFounder}>co-founder</span>
            </p>
            <div className={styles.ctaFounderRow}>
              <img
                src="/images/proven-solution/george-avatar.png"
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
