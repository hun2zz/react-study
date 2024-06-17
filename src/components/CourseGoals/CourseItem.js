import React from "react";
import styles from "./CourseItem.module.css";
const CourseItem = ({ item, onDelete }) => {
  const deleteHandler = (e) => {
    console.log("삭제해종");
    onDelete(item.id);
    // 여기서 App.js 에게 삭제 대상의 id를 전달
  };
  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {item.text}
    </li>
  );
};

export default CourseItem;
