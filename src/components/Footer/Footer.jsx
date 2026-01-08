import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Footer.module.css';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer className={styles.footer}>
      <div
        ref={footerRef}
        className={`${styles.container} animate-on-scroll animate-fade-in ${footerVisible ? 'is-visible' : ''}`}
      >
        <p className={styles.copyright}>© 2026 Human Vector</p>

        <img
          src="/images/faq/dot.svg"
          alt=""
          className={styles.dot}
        />

        <p className={styles.text}>
          Built on Oleg Kondrashov's book and 15+ years scaling EnCata
        </p>

        <img
          src="/images/faq/dot.svg"
          alt=""
          className={styles.dot}
        />

        <Link to="/privacy-policy" className={styles.privacy}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
