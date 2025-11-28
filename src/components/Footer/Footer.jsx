import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© 2025 Human Vector</p>

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
