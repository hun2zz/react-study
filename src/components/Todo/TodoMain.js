import React from "react";

import "./scss/TodoMain.scss";
import TodoItem from "./TodoItem";

const TodoMain = ({ onList, onDelete }) => {
  console.log(onList);
  let noContent = <p>항목이 없습니다.</p>;

  // 지출 데이터가 있을 때 보여줄 태그
  if (onList.length > 0) {
    noContent = onList.map((ex) => (
      <TodoItem
        key={Math.random().toString()}
        id={ex.id}
        text={ex.title}
        onDelete={onDelete}
      />
    ));
  }
  return <ul className="todo-list">{noContent}</ul>;
};

export default TodoMain;
