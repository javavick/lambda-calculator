import React from "react";

export const OperatorButton = (props) => {
  const { operator } = props;
  return <button>{operator.char};</button>;
};
