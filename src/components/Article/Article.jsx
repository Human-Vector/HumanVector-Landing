import styles from './Article.module.css';

export default function Article() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.articleBox}>
          <div className={styles.quoteIcon}>
            <img
              src="/images/quote/quote-icon.svg"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.quoteContainer}>
              <p className={styles.quoteText}>
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
      </div>
    </section>
  );
}
