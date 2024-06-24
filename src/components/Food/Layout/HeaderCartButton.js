import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {
  const { cartItems, totalPrice, totalSum } = useContext(CartContext);
  const { button, icon, badge } = styles;
  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{totalSum}</span>
    </button>
  );
};

export default HeaderCartButton;
