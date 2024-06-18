import React, { useRef, useState } from "react";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";

const App = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <home></home>
        {/* <Login></Login> */}
      </main>
    </>
  );
};

export default App;
