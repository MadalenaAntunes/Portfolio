import React from "react";
import ProgressBar from "./ProgressBar";
import styles from "../styles/about.module.css";

const ProgressList = ({ data }) => {
  const maxYears = Math.max(...data.map((item) => item.years));

  return (
    <div>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          area={item.area}
          years={item.years}
          maxYears={maxYears}
          color={index < 2 ? "#be12da" : "#fd6f00"}
          ballBorderColor={index < 2 ? "#fd6f00" : "#be12da"}
          hidden={item.area === "test"}
        />
      ))}
    </div>
  );
};

export default ProgressList;
