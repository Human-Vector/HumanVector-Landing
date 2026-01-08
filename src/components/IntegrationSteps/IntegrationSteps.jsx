import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './IntegrationSteps.module.css';

const IntegrationSteps = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      number: '1',
      title: 'Request Demo',
      description: '30-minute call with George to understand your challenges'
    },
    {
      number: '2',
      title: 'Pilot Program',
      description: 'We configure Human Vector for your team structure'
    },
    {
      number: '3',
      title: 'Week 1 Visibility',
      description: 'Find out who moves your business ahead and who keeps it stuck'
    },
    {
      number: '4',
      title: 'Month 3 Results',
      description: 'Remove underperformers and scale your business faster'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2
          ref={headingRef}
          className={`${styles.heading} animate-on-scroll animate-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          How we integrate this system into your business
        </h2>

        <div
          ref={stepsRef}
          className={`${styles.stepsContainer} animate-on-scroll animate-fade-up ${stepsVisible ? 'is-visible' : ''}`}
        >
          <div className={styles.row}>
            {steps.slice(0, 2).map((step) => (
              <div key={step.number} className={styles.stepWrapper}>
                <p className={styles.stepLabel}>Step {step.number}</p>
                <div className={styles.stepCard}>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.row}>
            {steps.slice(2, 4).map((step) => (
              <div key={step.number} className={styles.stepWrapper}>
                <p className={styles.stepLabel}>Step {step.number}</p>
                <div className={styles.stepCard}>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSteps;
