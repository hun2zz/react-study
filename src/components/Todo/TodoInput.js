import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./scss/TodoInput.scss";

const TodoInput = ({ onSave }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    console.log("gd");
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSave({ title: inputValue });
      setInputValue("");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form className="insert-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력 후, 엔터를 누르세요!"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <button className="insert-btn">
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
