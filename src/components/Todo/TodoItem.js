import React from "react";
import { MdDelete, MdDone } from "react-icons/md";

import "./scss/TodoItem.scss";

const TodoItem = ({ text, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="todo-list-item">
      <div className="check-circle">
        <MdDone />
      </div>
      <span className="text">{text}</span>
      <div className="remove" onClick={handleDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
