import React from 'react';
import styles from './StatsCard.module.css';

/**
 * StatsCard Component
 * Displays a statistic with an icon and description
 * @param {string} icon - Path to the icon image
 * @param {string} iconAlt - Alt text for the icon
 * @param {string} highlight - Highlighted text (bold)
 * @param {string} description - Regular description text
 * @param {string} iconType - 'image' or 'custom' for different layouts
 * @param {string} href - Optional link URL
 * @param {boolean} linkIndividual - If true, only icon and text are links (not whole card)
 * @param {string} linkPrefix - Text to show before the link (not part of link)
 */
const StatsCard = ({
  icon,
  iconAlt = '',
  highlight,
  description,
  iconType = 'custom',
  className = '',
  href,
  linkIndividual = false,
  linkPrefix = ''
}) => {
  // Individual links on icon and text only
  if (href && linkIndividual) {
    return (
      <div className={`${styles.card} ${className}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconContainer} ${styles[iconType]} ${styles.iconLink}`}
        >
          <img src={icon} alt={iconAlt} className={styles.icon} />
        </a>
        <div className={styles.text}>
          {linkPrefix && (
            <span className={styles.linkPrefix}>{linkPrefix} </span>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
          >
            <span className={styles.highlight}>{highlight}</span>
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </a>
        </div>
      </div>
    );
  }

  // Whole card as link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${styles.cardLink} ${className}`}
      >
        <div className={`${styles.iconContainer} ${styles[iconType]}`}>
          <img src={icon} alt={iconAlt} className={styles.icon} />
        </div>
        <div className={styles.text}>
          <span className={styles.highlight}>{highlight}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </div>
      </a>
    );
  }

  // Regular card without link
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={`${styles.iconContainer} ${styles[iconType]}`}>
        <img src={icon} alt={iconAlt} className={styles.icon} />
      </div>
      <div className={styles.text}>
        <span className={styles.highlight}>{highlight}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
