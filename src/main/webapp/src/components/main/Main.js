import React from "react";

import MainLeft from "./MainLeft";
import MainMiddle from "./MainMiddle";
import MainRight from "./MainRight";

const Main = () => {
  return (
    <>
      <div
        id="mainContainer"
        className="bg-dark text-white lg:px-20 block xl:flex xl:px-5"
      >
        <MainLeft></MainLeft>
        <MainMiddle></MainMiddle>
        <MainRight></MainRight>
      </div>
    </>
  );
};

export default Main;
