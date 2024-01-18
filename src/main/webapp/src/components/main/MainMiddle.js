import React from "react";
import GithubDashboard from "./mainMiddle/GithubDashboard";
import DataDashboard from "./mainMiddle/DataDashboard";
import WriteDashboard from "./mainMiddle/WriteDashboard";

const MainMiddle = () => {
  return (
    <div
      className="bg-darkDeep flex flex-col px-5
    sm:w-full 
    md:ml-0 md:w-full 
    xl:ml-0"
    >
      <GithubDashboard></GithubDashboard>
      <DataDashboard></DataDashboard>
      <WriteDashboard></WriteDashboard>
    </div>
  );
};

export default MainMiddle;
