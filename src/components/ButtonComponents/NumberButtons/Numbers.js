import React, { useState } from "react";
import { NumberButton } from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = () => {
  const [numbersState, setNumbersState] = useState(numbers);

  return (
    <div>
      {numbersState.map((index) => (
        <NumberButton number={index} />
      ))}
    </div>
  );
};

export default Numbers;
