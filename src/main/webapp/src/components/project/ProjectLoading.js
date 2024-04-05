import React from "react";
import loading from "../devlog/loading/loading.module.css";

const ProjectLoading = () => {
  return (
    <div className="flex w-full justify-center items-center mt-32">
      <div className={`${loading.loadingSpiner}`}></div>
    </div>
  );
};

export default ProjectLoading;
