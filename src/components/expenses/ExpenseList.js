import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
};

export default ExpenseList;
