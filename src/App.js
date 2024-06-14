import "./App.css";
import React, { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Greet from "./components/Greet";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

const App = () => {
  //서버에서 지출항목 JSON 배열을 응답받음
  const expense = [
    {
      title: "치킨머금",
      price: 30000,
      date: new Date(2024, 6 - 1, 4),
    },
    {
      title: "족발머금...",
      price: 50000,
      date: new Date(2023, 6 - 1, 2),
    },
    {
      title: "죄책감에 헬스장 등록함 ㅋ...",
      price: 100000,
      date: new Date(2024, 6 - 1, 10),
    },
    {
      title: "파파존스피자",
      price: 400000,
      date: new Date(2022, 3 - 1, 20),
    },
    {
      title: "파리채",
      price: 30000,
      date: new Date(2023, 5 - 1, 20),
    },
  ];

  const [expenseList, setExpenseList] = useState(expense);
  // jsx 문법
  // const $h2 = React.createElement("h2", null, "방가방가햄토링~");

  // jsx 규칙
  //1. return 안에 있는 태그는 형제 태그가 있을 경우 부모 태그 하나로 반드시 묶어야 함.
  //2. 빈 태그 (닫는 태그가 없는)는 반드시 />로 마감 작업을 해줘야함.
  //3. 태그의 class 속성은 자바스크립트 키워드 class 와 겹쳐서 className 으로 표기.
  //4. 의미없는 부모는 <React.Fragment>로 감싸면 됨. -> 축약해서 <> 다이아몬드로 축약 가능.
  //5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

  const onAddExpense = (userInput) => {
    console.log("App.js 가 내려보낸 함수 호출!");
    // console.log(userInput);
    expenseList.push(userInput);
    setExpenseList([...expenseList, userInput]);
    // console.log(expense);
  };
  return (
    <>
      <NewExpense onSave={onAddExpense}></NewExpense>
      <ExpenseList expenses={expenseList}></ExpenseList>
    </>
  );
};

export default App;
