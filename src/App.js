import "./App.css";
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";

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
      date: new Date(2024, 6 - 1, 2),
    },
    {
      title: "죄책감에 헬스장 등록함 ㅋ...",
      price: 300000,
      date: new Date(2024, 6 - 1, 10),
    },
  ];
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
      <ExpenseItem
        title={expense[0].title}
        price={expense[0].price}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        price={expense[1].price}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        price={expense[2].price}
        date={expense[2].date}
        z
      ></ExpenseItem>
    </>
  );
};

export default App;
