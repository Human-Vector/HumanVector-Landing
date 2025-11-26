import React from 'react';
import styles from './Button.module.css';

/**
 * Button Component
 * @param {string} variant - 'primary' or 'secondary'
 * @param {string} size - 'medium' or 'large'
 * @param {string} children - Button text
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className = '',
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
