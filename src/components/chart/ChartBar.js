import React from "react";

import "./ChartBar.css";

const ChartBar = ({ label, currentMonthValue, totalValue }) => {
  let barFillHeight = "0%";
  if (totalValue > 0) {
    const precentage = (currentMonthValue / totalValue) * 100;
    barFillHeight = precentage + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
