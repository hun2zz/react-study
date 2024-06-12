import "./Card.css";

import React from "react";

const Card = ({ className, children }) => {
  const cn = "card " + className;
  return <div className={cn}>{children}</div>;
};

export default Card;
