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

        <div className={styles.tableWrapper}>
          <div className={styles.backgroundBoxes}>
            <div className={styles.lightBgBox}></div>
            <div className={styles.whiteBgBox}></div>
          </div>

          <div className={styles.tableContent}>
            {/* Header Row */}
            <div className={styles.headerRow}>
              <div className={styles.challengeHeader}>Challenge</div>
              <div className={styles.columnsContainer}>
                <div className={styles.columnHeader}>Generic HR Tools</div>
                <div className={`${styles.columnHeader} ${styles.accentText}`}>Doing Nothing</div>
                <div className={styles.columnHeader}>Human Vector</div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className={styles.comparisonRows}>
              {comparisonData.map((row, index) => (
                <div key={index}>
                  <div className={styles.comparisonRow}>
                    <div className={styles.challengeCell}>{row.challenge}</div>
                    <div className={styles.columnsContainer}>
                      <div className={styles.columnCell}>{row.genericTools}</div>
                      <div className={`${styles.columnCell} ${styles.accentText}`}>{row.doingNothing}</div>
                      <div className={styles.columnCell}>{row.humanVector}</div>
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
    </section>
  );
}

export default ChooseScale;
