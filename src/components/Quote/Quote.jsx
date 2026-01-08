import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Quote.module.css';

export default function Quote() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className={styles.quote}>
      <div className={styles.container}>
        <div
          ref={ref}
          className={`${styles.quoteSection} animate-on-scroll animate-fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          <div className={styles.quoteIcon}>
            <img
              src="/images/quote/quote-icon.svg"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className={styles.quoteContent}>
            <div className={styles.quoteTextContainer}>
              <p className={styles.quoteText}>
                The outcome of any given company is the vector sum of the people within it. Improve the alignment of the individual vectors and their amplitude and the outcome will improve accordingly.
              </p>
              <p className={styles.attribution}>
                (quote of Elon Musk based on the «The Human Vector» by Oleg Kondrashov)
              </p>
            </div>

            <div className={styles.authorContainer}>
              <div className={styles.authorImage}>
                <img
                  src="/images/quote/author.webp"
                  alt="Elon Musk"
                  loading="lazy"
                />
              </div>

              <div className={styles.authorInfo}>
                <div className={styles.authorName}>
                  <span>Elon Musk</span>
                  <img
                    src="/images/quote/verified-badge.svg"
                    alt="Verified"
                    className={styles.verifiedBadge}
                  />
                </div>

                <a
                  href="https://x.com/elonmusk/status/1871997501970235656?s=48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.postLink}
                >
                  <span>Link to the post</span>
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
      </div>
    </section>
  );
}
