import { useState } from "react";

import dice1 from "../../assets/dice_1.png";
import dice2 from "../../assets/dice_2.png";
import dice3 from "../../assets/dice_3.png";
import dice4 from "../../assets/dice_4.png";
import dice5 from "../../assets/dice_5.png";
import dice6 from "../../assets/dice_6.png";

import Score from "./Score.jsx";
import Menu from "./Menu";
import Game from "./Game";

const Play = () => {
  const initialButtonsState = [false, false, false, false, false, false];
  const [activeButtons, setActiveButtons] = useState(initialButtonsState);
  const [rulesSection, setRulesSection] = useState(true);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [diceValue, setDiceValue] = useState(3);
  const initalDiceImageState = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  const toggleActiveButtons = (index) => {
    setActiveButtons(() => {
      const updatedProviousActiveButtons = [...initialButtonsState];
      updatedProviousActiveButtons[index] = true;
      return updatedProviousActiveButtons;
    });
    setMessage("");
    setSelectedNumber(index + 1);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleTheDice = () => {
    const atLeaseOneNumberSelected = activeButtons.some(
      (activeButton) => activeButton === true,
    );
    if (!atLeaseOneNumberSelected) {
      setMessage("You have not selected any number");
      return;
    }
    const rndInt = randomIntFromInterval(1, 6);
    setDiceValue(rndInt);
    if (rndInt === selectedNumber) {
      setScore((previouseScore) => previouseScore + rndInt);
    } else {
      setScore((previouseScore) => previouseScore - 2);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center">
        <Score score={score} />
        <Menu
          activeButtons={activeButtons}
          message={message}
          toggleActiveButtons={toggleActiveButtons}
        />
      </div>
      <Game
        initalDiceImageState={initalDiceImageState}
        diceValue={diceValue}
        roleTheDice={roleTheDice}
        setScore={setScore}
        setRulesSection={setRulesSection}
        rulesSection={rulesSection}
      />
    </div>
  );
};

export default Play;
