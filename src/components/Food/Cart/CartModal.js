import React from "react";
import styles from "./CartModal.module.scss";

const Modaloverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children }) => {
  return (
    <>
      <div className="backdrop"></div>
      <Modaloverlay>{children}</Modaloverlay>
    </>
  );
};

export default CartModal;
