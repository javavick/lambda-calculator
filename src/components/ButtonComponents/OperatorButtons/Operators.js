import React, { useState } from "react";
import { OperatorButton } from "./OperatorButton";
import { operators } from "../../../data";
import "./Operators.css";

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className="operators-column">
      {operatorState.map((index) => (
        <OperatorButton operator={index} />
      ))}
    </div>
  );
};

export default Operators;
