import React from "react";
import "./scss/TodoHeader.scss";
import dateContext from "../../store/auth-context";

const TodoHeader = ({ onDate, setThisDate, onList }) => {
  console.log(onDate);
  const month = onDate.getMonth() + 1;
  let day =
    onDate.getFullYear() + "년" + month + "월" + onDate.getDate() + "일";

  let day2 = onDate.getDay();
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  return (
    <header>
      <h1>{day}</h1>
      <div className="day">{week[day2]}</div>
      <div className="tasks-left">{onList.length}개 남음~해</div>
    </header>
  );
};

export default TodoHeader;
