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
 */
const StatsCard = ({
  icon,
  iconAlt = '',
  highlight,
  description,
  iconType = 'custom',
  className = ''
}) => {
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
