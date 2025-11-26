import React from 'react';
import Button from '../Button/Button';
import StatsCard from '../StatsCard/StatsCard';
import styles from './Hero.module.css';

/**
 * Hero Component
 * Main hero section with headline, CTA, stats, and hero image
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Text */}
          <div className={styles.textContainer}>
            <h1 className={styles.headline}>
              Scale to 100+ Employees{' '}
              <span className={styles.headlineSecondary}>
                While Increasing Profit Margins
              </span>
            </h1>
            <p className={styles.subheadline}>
              <span className={styles.subheadlineLight}>
                Stop guessing where your payroll dollars go. Human Vector gives you
              </span>{' '}
              <span className={styles.subheadlineBold}>
                complete visibility into time, performance, and compensation
              </span>
            </p>
          </div>

          {/* CTA Container */}
          <div className={styles.ctaContainer}>
            <Button variant="primary" size="large">
              See how It works
            </Button>

            <div className={styles.ctaInfo}>
              <div className={styles.ctaAvatar}>
                <img
                  src="/images/hero/cta-avatar.png"
                  alt="George Kachanouski"
                />
              </div>
              <p className={styles.ctaText}>
                <span className={styles.ctaTextLight}>30-minute call with </span>
                <span className={styles.ctaTextBold}>co-founder George Kachanouski</span>
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={styles.statsContainer}>
            <StatsCard
              icon="/images/hero/encata-logo.png"
              iconAlt="ENCATA - Engineering Catalyst"
              highlight="30+ portfolio companies"
              description="scaled"
              iconType="custom"
            />
            <StatsCard
              icon="/images/hero/stat-book.png"
              iconAlt="The Human Vector book"
              highlight="Based on «The Human Vector»"
              description="by Oleg Kondrashov"
              iconType="image"
            />
          </div>
        </div>

        {/* Hero Video */}
        <div className={styles.imageContainer}>
          <video
            src="/videos/hero-video.webm"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroImage}
            poster="/images/hero/hero-main.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
