import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqData = [
    {
      question: "Will this slow us down?",
      answer: "No. The system is designed for speed. Founders report saving 10-15 hours/week within month one. Less bureaucracy, not more."
    },
    {
      question: "Does this work for remote/hybrid teams?",
      answer: "Yes. The methodology was developed during the shift to remote work. Planfix integration tracks work regardless of location."
    },
    {
      question: "What if my team resists?",
      answer: "Yes. The methodology was developed during the shift to remote work. Planfix integration tracks work regardless of location."
    },
    {
      question: "Do you help with setup?",
      answer: "Yes, we provide full onboarding support and guide you through the entire setup process."
    },
    {
      question: "What's the investment?",
      answer: "We'll discuss pricing on the demo call based on your team size. ROI is typically 5-15X in year one."
    }
  ];

  // First question (index 0) is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What founders ask us</h2>

        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.faqHeader}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={styles.question}>{faq.question}</h3>
                <img
                  src="/images/faq/chevron-down.svg"
                  alt=""
                  className={styles.chevron}
                />
              </button>

              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
