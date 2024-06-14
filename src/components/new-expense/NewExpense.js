import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const sideBar = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseForm onAdd={onSave} setIsFormVisible={setIsFormVisible} />
      ) : (
        <button onClick={sideBar}>새로운 지출 추가하기</button>
      )}
    </div>
  );
};

export default NewExpense;
