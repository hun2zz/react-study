import React from "react";
import styles from "./Header.module.scss";

//정적 이미지 로딩
import foodImage from "../../../assets/img/meals.jpg";
const Header = () => {
  const { header, "main-image": mainImage } = styles;
  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={mainImage}>
        <img src={foodImage} alt=""></img>
      </div>
    </>
  );
};

export default Header;
