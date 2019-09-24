import React from "react";

export const SpecialButton = (props) => {
  const { special } = props;
  return <button className="special-btn">{special}</button>;
};
