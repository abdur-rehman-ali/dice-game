import React from "react";

const Score = ({ score }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-8xl">{score}</h1>
      <h1 className="font-medium text-2xl">Total Score</h1>
    </div>
  );
};

export default Score;
