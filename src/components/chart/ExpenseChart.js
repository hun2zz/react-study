import React from "react";
import Chart from "./Chart";

const ExpenseChart = ({ onFilter }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  /*
    -해당 연도의 모든 지출데이터 배열에서 월별로 지출액을 합산하여 
    -chartDataPoints 배열에 value 값에 누적 저장
  */

  onFilter.forEach((exp) => {
    const expensePrice = exp.price;
    const expenseMonth = exp.date.getMonth();
    chartDataPoints[expenseMonth].value += expensePrice;
  });

  console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
