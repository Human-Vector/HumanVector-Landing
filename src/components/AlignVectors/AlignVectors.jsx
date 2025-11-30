import styles from './AlignVectors.module.css';

export default function AlignVectors() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <h2 className={styles.title}>
          <span className={styles.titleDark}>Align the vectors.</span>{' '}
          <span className={styles.titleGray}>Remove underperformers before they hurt your business</span>
        </h2>

        <div className={styles.content}>
          {/* Feature 1: Turn middle performers */}
          <div className={styles.featureRow}>
            <div className={styles.featureText}>
              <h3 className={styles.featureHeading}>
                <span className={styles.textGray}>Turn </span>
                middle performers into top performers
              </h3>
              <ul className={styles.featureList}>
                <li>
                  Employee Vectors{' '}
                  <span className={styles.textMedium}>track Skills, Loyalty, Gravity, Integration, Speed</span>
                </li>
                <li>Daily standards testing ensures knowledge retention</li>
                <li>
                  Structured training levels with{' '}
                  <span className={styles.textMedium}>clear progression</span>
                </li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <img src="/images/align-vectors/feature-1.png" alt="Employee tracking dashboard" />
            </div>
          </div>

          {/* Article Quote */}
          <div className={styles.articleBox}>
            <div className={styles.quoteIcon}>
              <img
                src="/images/quote/quote-icon.svg"
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className={styles.articleContent}>
              <div className={styles.quoteContainer}>
                <p className={styles.articleQuoteText}>
                  It's easier to make specialist from right human than right human from specialist!
                </p>
              </div>

              <div className={styles.authorContainer}>
                <div className={styles.authorImage}>
                  <img
                    src="/images/article/author.png"
                    alt="Aleh Kandrashou"
                  />
                </div>

                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>
                    <span>Aleh Kandrashou</span>
                    <img
                      src="/images/quote/verified-badge.svg"
                      alt="Verified"
                      className={styles.verifiedBadge}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Stop being the bottleneck */}
          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <img src="/images/align-vectors/feature-2.png" alt="Department work schedule settings" />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureHeading}>
                Stop being the bottleneck
              </h3>
              <ul className={styles.featureList}>
                <li>Department heads get self-service reporting</li>
                <li>
                  <span className={styles.textMedium}>Save 10-15 hours/week of management time</span>
                </li>
                <li>
                  Decisions{' '}
                  <span className={styles.textMedium}>backed by data,</span>
                  {' '}not gut feel
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Know exactly where every payroll dollar goes */}
          <div className={styles.featureRow}>
            <div className={styles.featureText}>
              <h3 className={styles.featureHeading}>
                <span className={styles.textGray}>Know exactly </span>
                where every payroll dollar goes
              </h3>
              <ul className={styles.featureList}>
                <li>
                  <span className={styles.textSemiBold}>Real-time time tracking</span>
                  {' '}with overtime visibility
                </li>
                <li>
                  <span className={styles.textSemiBold}>Transparent salary </span>
                  calculations employees can verify
                </li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <img src="/images/align-vectors/feature-3.png" alt="Payroll tracking interface" />
            </div>
          </div>

          {/* Feature 4: Build a culture that scales */}
          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <img src="/images/align-vectors/feature-4.png" alt="Employee suggestions dashboard" />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureHeading}>
                Build a culture that scales
              </h3>
              <p className={styles.featureParagraph}>
                When employees know their ideas matter, they stop leaving.{' '}
                <span className={styles.textMedium}>Transparent suggestion tracking ≈ 32% less turnover.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
