import React, { useState } from "react";
import { SpecialButton } from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {specialState.map((index) => (
        <SpecialButton special={index} />
      ))}
    </div>
  );
};

export default Specials;
