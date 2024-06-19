import React, { useState } from "react";
import "./scss/TodoTemplate.scss";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";
import dateContext from "../../store/auth-context";

const TodoTemplate = () => {
  const [thisDate, setThisDate] = useState(new Date());

  return (
    <div className="TodoTemplate">
      <TodoHeader onDate={thisDate} setDate={setThisDate} />
      <TodoMain />
      <TodoInput />
    </div>
  );
};

export default TodoTemplate;
