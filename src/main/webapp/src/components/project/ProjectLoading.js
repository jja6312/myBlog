import React from "react";
import hexagonCss from "../devlog/hexagon.module.css";

const ProjectLoading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 w-9/12 gap-7 mt-10">
        <div
          className={`${hexagonCss.opacityAnimation0} flex flex-col items-center justify-between w-full h-[700px] rounded bg-slate-800  p-5`}
        ></div>
        <div
          className={`${hexagonCss.opacityAnimation1} flex flex-col items-center justify-between w-full h-[700px] rounded bg-slate-800  p-5`}
        ></div>
      </div>
    </div>
  );
};

export default ProjectLoading;
