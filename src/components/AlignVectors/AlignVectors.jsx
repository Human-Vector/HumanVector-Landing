import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './AlignVectors.module.css';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

export default function AlignVectors() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: feature1Ref, isVisible: feature1Visible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: articleRef, isVisible: articleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: feature2Ref, isVisible: feature2Visible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: feature3Ref, isVisible: feature3Visible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: feature4Ref, isVisible: feature4Visible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <h2
          ref={titleRef}
          className={`${styles.title} animate-on-scroll animate-fade-up ${titleVisible ? 'is-visible' : ''}`}
        >
          <span className={styles.titleDark}>Align the vectors.</span>{' '}
          <span className={styles.titleGray}>Remove underperformers before they hurt your business</span>
        </h2>

        <div className={styles.content}>
          {/* Feature 1: Turn middle performers */}
          <div
            ref={feature1Ref}
            className={`${styles.featureRow} animate-on-scroll animate-fade-up ${feature1Visible ? 'is-visible' : ''}`}
          >
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
              <ProgressiveImage src="/images/align-vectors/feature-1.webp" alt="Employee tracking dashboard" style={{ aspectRatio: '2556 / 1434' }} />
            </div>
          </div>

          {/* Article Quote */}
          <div
            ref={articleRef}
            className={`${styles.articleBox} animate-on-scroll animate-fade-up ${articleVisible ? 'is-visible' : ''}`}
          >
            <div className={styles.quoteIcon}>
              <img
                src="/images/quote/quote-icon.svg"
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className={styles.articleContent}>
              <blockquote className={styles.quoteContainer}>
                <p className={styles.articleQuoteText}>
                  It's easier to make specialist from right human than right human from specialist!
                </p>
              </blockquote>

              <div className={styles.authorContainer}>
                <div className={styles.authorImage}>
                  <img
                    src="/images/article/author.png"
                    alt="Oleg Kondrashov"
                    loading="lazy"
                  />
                </div>

                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>
                    <span>Oleg Kondrashov</span>
                    <img
                      src="/images/quote/verified-badge.svg"
                      alt="Verified"
                      className={styles.verifiedBadge}
                    />
                  </div>

                  <a
                    href="https://www.linkedin.com/in/olegkondrashov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                  >
                    <span>LinkedIn profile</span>
                    <img
                      src="/images/quote/external-link.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Stop being the bottleneck */}
          <div
            ref={feature2Ref}
            className={`${styles.featureRow} animate-on-scroll animate-fade-up ${feature2Visible ? 'is-visible' : ''}`}
          >
            <div className={styles.featureImage}>
              <ProgressiveImage src="/images/align-vectors/feature-2.webp" alt="Department work schedule settings" style={{ aspectRatio: '1416 / 676' }} />
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
          <div
            ref={feature3Ref}
            className={`${styles.featureRow} animate-on-scroll animate-fade-up ${feature3Visible ? 'is-visible' : ''}`}
          >
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
              <ProgressiveImage src="/images/align-vectors/feature-3.webp" alt="Payroll tracking interface" style={{ aspectRatio: '2560 / 1433' }} />
            </div>
          </div>

          {/* Feature 4: Build a culture that scales */}
          <div
            ref={feature4Ref}
            className={`${styles.featureRow} animate-on-scroll animate-fade-up ${feature4Visible ? 'is-visible' : ''}`}
          >
            <div className={styles.featureImage}>
              <ProgressiveImage src="/images/align-vectors/feature-4.webp" alt="Employee suggestions dashboard" style={{ aspectRatio: '1416 / 794' }} />
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
