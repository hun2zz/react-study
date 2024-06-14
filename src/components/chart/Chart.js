import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  /*
    dataPoints 배열에서 12개의 요소의 value를 합산하여 연도 지출 총액을 계산
    그리고 각 chartBar에 해당월지출총액 / 연도지출 총액 비율을 전달
  */

  //1년치 총액
  const totalValue = dataPoints
    .map((e) => e.value)
    .reduce((accum, currentValue) => accum + currentValue, 0);
  console.log(totalValue);
  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          currentMonthValue={dp.value}
          totalValue={totalValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
