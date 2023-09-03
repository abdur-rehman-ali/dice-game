import React from "react";
import Rule from "./Rule";

const Game = ({
  initalDiceImageState,
  diceValue,
  roleTheDice,
  setScore,
  setRulesSection,
  rulesSection,
}) => {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div>
        <button className="w-40" onClick={() => roleTheDice()}>
          <img src={initalDiceImageState[diceValue]} alt="Image here" />
        </button>
        <h1 className="font-medium text-lg my-4">Click on dice to roll</h1>
        <button
          className="border-2 border-black rounded-md w-40 py-1 my-1 block"
          onClick={() => setScore(0)}
        >
          Reset Score
        </button>
        <button
          className="border-2 border-black bg-black text-white rounded-md w-40 py-1 my-1 block"
          onClick={() => setRulesSection(!rulesSection)}
        >
          {rulesSection ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
      <Rule rulesSection={rulesSection} />
    </div>
  );
};

export default Game;
