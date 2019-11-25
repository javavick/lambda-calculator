import React, { useState } from "react";
import { SpecialButton } from "./SpecialButton";
import { specials } from "../../../data";
import "./Specials.css";

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div className="specials-row">
      {specialState.map((index) => (
        <SpecialButton special={index} />
      ))}
    </div>
  );
};

export default Specials;
