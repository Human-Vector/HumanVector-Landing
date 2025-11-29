import { useEffect } from 'react';
import styles from './SuccessModal.module.css';

export default function SuccessModal({ userName, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/modal/close-icon.svg" alt="" />
        </button>

        {/* Checkmark Icon */}
        <div className={styles.iconContainer}>
          <img src="/images/modal/checkmark-circle.svg" alt="" />
        </div>

        {/* Text Content */}
        <div className={styles.textContainer}>
          <h2 id="modal-title" className={styles.heading}>
            You're all set, {userName}!
          </h2>
          <p className={styles.description}>
            George will get in touch <span className={styles.bold}>within 24 hours</span> to confirm the exact time and share the meeting link.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className={styles.ctaButton}
          onClick={onClose}
        >
          Cool, see you soon
        </button>
      </div>
    </div>
  );
}
