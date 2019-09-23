import React, { useState } from "react";
import { OperatorButton } from "./OperatorButton";
import { operators } from "../../../data";

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
      {operatorState.map((index) => (
        <OperatorButton operator={index} />
      ))}
    </div>
  );
};

export default Operators;
