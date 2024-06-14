import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar key={dp.label} label={dp.label}></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
