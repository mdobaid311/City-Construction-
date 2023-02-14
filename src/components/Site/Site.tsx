import styles from "./Site.module.scss";

const Site = () => {
  const tabs = ["Expenses", "Analysis", "Project Details"];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Site-1</h1>
      </div>
      <div className={styles.details}>
        <div className={styles.heading}>
          <h1>Details</h1>
        </div>
        <div className={styles.tabs}>
          {tabs.map((tab) => {
            return <div className={styles.tab}>{tab}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Site;
