import "./App.css";
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {
  // jsx 문법
  // const $h2 = React.createElement("h2", null, "방가방가햄토링~");

  // jsx 규칙
  //1. return 안에 있는 태그는 형제 태그가 있을 경우 부모 태그 하나로 반드시 묶어야 함.
  //2. 빈 태그 (닫는 태그가 없는)는 반드시 />로 마감 작업을 해줘야함.
  //3. 태그의 class 속성은 자바스크립트 키워드 class 와 겹쳐서 className 으로 표기.
  //4. 의미없는 부모는 <React.Fragment>로 감싸면 됨. -> 축약해서 <> 다이아몬드로 축약 가능.
  //5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

  return (
    <>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </>
  );
};

export default App;
