import React from "react";

const ProgressBar = ({ area, years, maxYears }) => {
  const percentage = (years / maxYears) * 100;

  return (
    <div style={{ margin: "10px 0" }}>
      <span>{area}</span>
      <div
        style={{
          background: "#e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          height: "10px",
          margin: "5px 0",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
