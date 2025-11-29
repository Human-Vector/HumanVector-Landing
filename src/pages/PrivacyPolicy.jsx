import { Link } from 'react-router-dom';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>

        <h1 className={styles.mainTitle}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: November 28, 2025</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Human Vector ("we," "our," or "us"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, company name, and team size when you fill out our contact form or request a demo.</li>
              <li><strong>Communication Data:</strong> Information from your communications with us, including the content of messages and metadata.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, device information, pages visited, and time spent on pages.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and schedule demo calls</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as email delivery, hosting, analytics, and customer support.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your personal information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your information</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              or content of these third-party sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal
              information from children under 16. If you become aware that a child has provided us with personal
              information, please contact us.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: go@human-vector.work</li>
              <li>Website: <a href="https://human-vector.work" target="_blank" rel="noopener noreferrer">human-vector.work</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
