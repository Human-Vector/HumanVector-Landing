import styles from './ProblemBlock.module.css';

const ProblemBlock = () => {
  return (
    <section className={styles.problemBlock}>
      <div className={styles.content}>
        {/* Decorative Brackets */}
        <div className={styles.bracketGray}>
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/problem-block/GreyArrowMobile.svg" />
            <img src="/images/problem-block/GreyArrowDesktop.svg" alt="" />
          </picture>
        </div>
        <div className={styles.bracketRed}>
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/problem-block/RedArrowMobile.svg" />
            <img src="/images/problem-block/RedArrowDesktop.svg" alt="" />
          </picture>
        </div>

        {/* First Section: At 40+ employees */}
        <div className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.headingGray}>At 40+ employees, </span>
            <span className={styles.headingDark}>everything breaks</span>
          </h2>
          <div className={styles.cardsRow}>
            <div className={styles.card}>
              <p className={styles.cardText}>
                Your A-players are burning out while B-players coast
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardText}>
                You're paying for 320 hours/month but getting 280
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardText}>
                Founder work inside of business but not on top of business
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: You've tried */}
        <div className={styles.section}>
          <h2 className={styles.headingRed}>You've tried</h2>
          <div className={styles.cardsRow}>
            <div className={styles.card}>
              <p className={styles.cardText}>Spreadsheets</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardText}>«Trust the team»</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardText}>
                Working 60-hour weeks to hold it together
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className={styles.conclusion}>
          <h2 className={styles.conclusionHeading}>None of it scales</h2>
        </div>
      </div>
    </section>
  );
};

export default ProblemBlock;
