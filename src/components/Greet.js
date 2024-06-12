import React from "react";
import Card from "./UI/Card";

const Greet = (ccc) => {
  return (
    <Card className="border-green">
      <h1>Hello REACT!</h1>
      {ccc.children}
    </Card>
  );
};

export default Greet;
