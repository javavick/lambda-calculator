import React from "react";

export const NumberButton = (props) => {
  const { number, btnStyle, numberState, setNumberState } = props;

  function clickHandler() {
    setNumberState(numberState === "0" ? number : numberState + number);
  }

  return (
    <button onClick={clickHandler} className={btnStyle}>
      {number}
    </button>
  );
};
