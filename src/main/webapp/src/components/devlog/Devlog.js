import React, { useState } from "react";

import DevlogLeft from "./DevlogLeft";
import DevlogMain from "./DevlogMain";
import DevlogRight from "./DevlogRight";

const Devlog = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex justify-between text-white">
      <DevlogLeft isSelected={isSelected} setIsSelected={setIsSelected} />
      <DevlogMain />
      <DevlogRight isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};

export default Devlog;
