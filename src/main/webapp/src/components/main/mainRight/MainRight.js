import React from "react";
import GithubAbout from "./GithubAbout";
import DataAbout from "./DataAbout";
import TodayILearned from "./TodayILearned";

const MainRight = () => {
  return (
    <div
      className="w-full bg-dark flex justify-between items-start 
    mt-10
    xl:mt-0 xl:pl-5 xl:w-[500px] xl:flex-col xl:justify-start"
    >
      <GithubAbout></GithubAbout>
      <TodayILearned></TodayILearned>
      <DataAbout></DataAbout>
    </div>
  );
};

export default MainRight;
