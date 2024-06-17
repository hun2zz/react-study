import React, { useState, useRef } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/Modal/ErrorModal";

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
  //회원들이 저장될 배열~
  const [userList, setUserList] = useState([]);

  //useRef는 참조값을 기억을 해두고, 전역변수처럼 사용할 수 잇음
  const count = useRef(1);

  const addUserHandler = (user) => {
    count.current++;
    console.log("count : ", count.current);
    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };
  return (
    <>
      {/* <ErrorModal title={'모달 제목~'} message={'내용'}></ErrorModal> */}
      <AddUsers onAddUser={addUserHandler}> </AddUsers>
      <UserList users={userList} />
    </>
  );
};

export default App;
