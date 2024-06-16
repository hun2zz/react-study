import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";

const DUMMY_DATA = [
  {
    id: "g1",
    text: "리액트 컴포넌트 스타일링 마스터하기",
  },
  {
    id: "g2",
    text: "UI/UX 프로그래밍 쌉고수 되기",
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);
  //CourseInput에게 전달할 함수
  const addGoalHandler = (goalObject) => {
    setGoals([...goals, goalObject]);
  };

  //CourseItem에게 전달할 함수
  const deleteGoalHandler = (id) => {
    // goals.splice(
    //   goals.findIndex((g) => g.id === id),
    //   1
    // );
    const filteredGoals = goals.filter((g) => g.id !== id);
    setGoals(filteredGoals);
  };
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} onDelete={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;
