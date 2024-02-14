import React from "react";

import Card from "./card/Card";

const Skill = () => {
  return (
    <div
      id="skillContainer"
      className="bg-dark text-white pl-5 min-h-screen flex justify-center"
    >
      <div className="grid grid-cols-3 gap-10 p-4 mt-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Skill;
