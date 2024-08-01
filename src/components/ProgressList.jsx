import React from "react";
import ProgressBar from "./ProgressBar";

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
        />
      ))}
    </div>
  );
};

export default ProgressList;
