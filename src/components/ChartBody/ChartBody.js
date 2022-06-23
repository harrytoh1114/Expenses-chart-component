import React, { useEffect, useState } from "react";

import { data } from "../../util/data";

import styles from "./ChartBody.module.css";

const ChartBody = () => {
  const [barheight, setBarHeight] = useState([]);
  const [showUsage, setShowUsage] = useState([]);

  useEffect(() => {
    const barHeight = () => {
      let height = [];
      data.forEach((item) => {
        switch (true) {
          case parseInt(item.amount) > 0 && parseInt(item.amount) <= 10:
            height.push(20);
            break;
          case parseInt(item.amount) > 10 && parseInt(item.amount) <= 20:
            height.push(40);
            break;
          case parseInt(item.amount) > 20 && parseInt(item.amount) <= 30:
            height.push(60);
            break;
          case parseInt(item.amount) > 30 && parseInt(item.amount) <= 40:
            height.push(80);
            break;
          case parseInt(item.amount) > 40 && parseInt(item.amount) <= 50:
            height.push(100);
            break;
          case parseInt(item.amount) > 50 && parseInt(item.amount) <= 60:
            height.push(120);
            break;
          case parseInt(item.amount) > 70 && parseInt(item.amount) <= 80:
            height.push(140);
            break;
          default:
            break;
        }
      });
      setBarHeight(height);
    };
    barHeight();
  }, []);
  return (
    <div className={styles["card-spending"]}>
      <h3>Spending - Last 7 days</h3>
      <div className={styles["card-chart"]}>
        {data.map((item) => (
          <div className={styles["card-chart-inner"]} key={item.day}>
            {showUsage.length !== 0
              ? showUsage.includes(item) && (
                  <p className={styles.amount}>${item.amount}</p>
                )
              : ""}
            <div
              className={`${styles["card-chart-bar"]} ${
                styles["height-" + barheight[data.indexOf(item)]]
              } ${
                Math.max(...barheight) === barheight[data.indexOf(item)] &&
                styles.highest
              }`}
              onClick={() => {
                let array = [...showUsage];

                if (array.indexOf(item) !== -1) {
                  array = array.filter((a) => a !== item);
                } else {
                  array.push(item);
                }
                setShowUsage(array);
              }}
            ></div>
            <p className={styles.day}>{item.day}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className={styles["card-total"]}>
        <div className={styles["card-total-detials"]}>
          <p>Total this month</p>
          <h2>$478.33</h2>
        </div>
        <div className={styles.percentage}>
          <p className={styles.percent}>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartBody;
