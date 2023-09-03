import React from "react";

const Rule = ({ rulesSection }) => {
  return (
    <div
      className={`bg-[#FBF1F1] p-4 rounded-lg mt-5 ${
        rulesSection ? "" : "hidden"
      }`}
    >
      <h1 className="font-semibold text-xl my-2">How to Play Dice game</h1>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be dedcuted</li>
      </ul>
    </div>
  );
};

export default Rule;
