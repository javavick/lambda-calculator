import React from "react";

export const OperatorButton = (props) => {
  const { operator } = props;
  return <button className="operator-btn">{operator.char}</button>;
};
