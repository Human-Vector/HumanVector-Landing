import styles from './ChooseScale.module.css';

function ChooseScale() {
  const comparisonData = [
    {
      challenge: 'Culture at scale',
      genericTools: 'Generic HR Tools',
      doingNothing: 'Dilutes naturally',
      humanVector: 'Human Vector'
    },
    {
      challenge: 'Performance tracking',
      genericTools: 'Subjective ratings',
      doingNothing: 'Annual reviews',
      humanVector: 'Vector methodology'
    },
    {
      challenge: 'Employee feedback loop',
      genericTools: 'Surveys once a year',
      doingNothing: 'Doing nothing is the worst-case scenario',
      humanVector: 'Tracked suggestion lists with status updates'
    },
    {
      challenge: 'Team composition insight',
      genericTools: 'Basic skill tags',
      doingNothing: 'Gut feel',
      humanVector: '5-dimension vectors'
    },
    {
      challenge: 'Remote accountability',
      genericTools: 'Surveillance software',
      doingNothing: "Hope they're working",
      humanVector: 'Task tracker integration + time tracking'
    }
  ];

  return (
    <section className={styles.chooseScale}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Choose how you want to scale</h2>

        <div className={styles.tableScrollContainer}>
          <div className={styles.tableWrapper}>
            {/* Background boxes */}
            <div className={styles.redOverlayBox}></div>
            <div className={styles.whiteBgBox}></div>

            {/* Table content */}
            <div className={styles.tableContent}>
              {/* Header Row */}
              <div className={styles.headerRow}>
                <p className={styles.challengeHeader}>Challenge</p>
                <div className={styles.columnsContainer}>
                  <p className={styles.columnHeader}>Generic HR Tools</p>
                  <p className={styles.columnHeader}>Doing Nothing</p>
                  <p className={`${styles.columnHeader} ${styles.humanVectorHeader}`}>Human Vector</p>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className={styles.comparisonRows}>
                {comparisonData.map((row, index) => (
                  <div key={index}>
                    <div className={styles.comparisonRow}>
                      <p className={styles.challengeCell}>{row.challenge}</p>
                      <div className={styles.columnsContainer}>
                        <p className={styles.columnCell}>{row.genericTools}</p>
                        <p className={styles.columnCell}>{row.doingNothing}</p>
                        <p className={`${styles.columnCell} ${styles.humanVectorCell}`}>{row.humanVector}</p>
                      </div>
                    </div>
                    {index < comparisonData.length - 1 && (
                      <div className={styles.divider}>
                        <img src="/images/choose-scale/divider-line.svg" alt="" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseScale;
