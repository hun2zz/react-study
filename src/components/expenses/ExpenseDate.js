import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ exDate }) => {
  console.log(exDate);
  const month = exDate.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{exDate.getFullYear()}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{exDate.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
