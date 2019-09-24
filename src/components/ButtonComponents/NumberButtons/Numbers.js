import React, { useState } from "react";
import { NumberButton } from "./NumberButton";
import { numbers } from "../../../data";
import "./Numbers.css";

const Numbers = (props) => {
  const { numberState, setNumberState } = props;

  const [numbersState, setNumbersState] = useState(numbers);
  const btnClass = "number-btn";
  const zeroClass = "zero-btn";

  return (
    <div className="numbers-div">
      {numbersState.map((index) => {
        return index != 0 ? (
          <NumberButton
            numberState={numberState}
            setNumberState={setNumberState}
            btnStyle={btnClass}
            number={index}
          />
        ) : (
          <NumberButton
            numberState={numberState}
            setNumberState={setNumberState}
            btnStyle={zeroClass}
            number={index}
          />
        );
      })}
    </div>
  );
};

export default Numbers;
