import React from 'react';
import Button from '../Button/Button';
import StatsCard from '../StatsCard/StatsCard';
import { useScrollToForm } from '../../hooks/useScrollToForm';
import styles from './Hero.module.css';

/**
 * Hero Component
 * Main hero section with headline, CTA, stats, and hero image
 */
const Hero = () => {
  const scrollToForm = useScrollToForm();

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
            <Button variant="primary" size="large" onClick={scrollToForm}>
              See how It works
            </Button>

            <div className={styles.ctaInfo}>
              <div className={styles.ctaAvatar}>
                <img
                  src="/images/hero/cta-avatar.png"
                  alt="George Kachanouski"
                />
              </div>
              <div className={styles.ctaTextWrapper}>
                <p className={styles.ctaTextTop}>
                  30-minute call with <span className={styles.ctaTextBold}>CEO and Co-founder</span>
                </p>
                <a
                  href="https://www.linkedin.com/in/georgekachanouski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaLink}
                >
                  George Kachanouski
                </a>
              </div>
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
              linkPrefix="Based on"
              highlight="«The Human Vector»"
              description="by Oleg Kondrashov"
              iconType="image"
              href="https://www.amazon.ca/Human-Vector-Pivot-Profitability/dp/1642251534"
              linkIndividual={true}
            />
          </div>
        </div>

        {/* Hero Video */}
        <div className={styles.imageContainer}>
          <video
            src="/videos/hero-video.mp4?v=5"
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
