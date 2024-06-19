import React, { useEffect, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/Todo/TodoTemplate";
// bootStrap
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const todo = [
    {
      id: 1,
      title: "ㄴㅁㅇㅁㄴㅇㅁㄴㅇzzzzㅁㄴㅇ123",
    },
    {
      id: 2,
      title: "ㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ12aasdasdsdasd3",
    },
  ];

  const [todoList, setTodoList] = useState(todo);

  const onAddExpense = (userInput) => {
    console.log("App.js 가 내려보낸 함수 호출!");
    // console.log(userInput);
    // todoList.push(userInput);
    setTodoList([...todoList, userInput]);
    // console.log(expense);
  };

  const onDeleteExpense = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate
      onSave={onAddExpense}
      onList={todoList}
      onDelete={onDeleteExpense}
    ></TodoTemplate>
  );
};

export default App;
