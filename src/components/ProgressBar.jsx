import React from "react";
import styles from "../styles/about.module.css";

const ProgressBar = ({
  area,
  years,
  maxYears,
  color,
  ballBorderColor,
  hidden,
}) => {
  const percentage = (years / maxYears) * 100;

  const barStyle = {
    width: `${percentage}%`,
    background: color,
    height: "100%",
  };

  const ballStyle = {
    border: `2px solid ${ballBorderColor}`,
    left: `${percentage}%`,
    transform: `translateX(-${percentage < 15 ? percentage : 15}%)`,
  };

  return (
    <div style={{ margin: "10px 0" }} className={hidden ? styles.hidden : ""}>
      <span>
        {area}
        <span className={styles.yearsText}> {years} years</span>
      </span>
      <div
        style={{
          background: "#e0e0e0",
          borderRadius: "8px",
          overflow: "visible",
          height: "10px",
          margin: "5px 0",
          position: "relative",
        }}
      >
        <div style={barStyle} className={styles.barStyle} />
        <div style={ballStyle} className={styles.ballStyle} />
      </div>
    </div>
  );
};

export default ProgressBar;
