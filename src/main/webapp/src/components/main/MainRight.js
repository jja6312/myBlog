import React from "react";
import GithubAbout from "./mainRight/GithubAbout";
import DataAbout from "./mainRight/DataAbout";
import WriteAbout from "./mainRight/WriteAbout";

const MainRight = () => {
  return (
    // <div className="mainRight flex flex-col px-5">
    <div className="w-full bg-dark flex justify-between items-start xl:pl-5 xl:w-[500px] xl:flex-col xl:justify-start">
      <GithubAbout></GithubAbout>
      <DataAbout></DataAbout>
      <WriteAbout></WriteAbout>
    </div>
  );
};

export default MainRight;
