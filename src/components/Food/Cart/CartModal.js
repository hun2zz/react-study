import React from "react";
import styles from "./CartModal.module.scss";

const Modaloverlay = ({ children, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <Modaloverlay>{children}</Modaloverlay>
    </>
  );
};

export default CartModal;
