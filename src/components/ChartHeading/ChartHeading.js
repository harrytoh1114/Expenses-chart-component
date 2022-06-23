import React from "react";

import styles from "./ChartHeading.module.css";

const ChartHeading = () => {
  return (
    <div className={styles["card-balance"]}>
      <div className={styles["card-balance-content"]}>
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <div className={styles["card-design"]}>
        <div className={`${styles.circle} ${styles.solid}`}></div>
        <div className={`${styles.circle} ${styles.outline}`}></div>
      </div>
    </div>
  );
};

export default ChartHeading;
