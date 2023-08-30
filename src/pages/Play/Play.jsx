import { useState } from "react";

import dice1 from "../../assets/dice_1.png";

const Play = () => {
  const [activeButtons, setActiveButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [rulesSection, setRulesSection] = useState(true);
  const [message, setMessage] = useState("");

  const toggleActiveButtons = (index) => {
    setActiveButtons(() => {
      const updatedProviousActiveButtons = [
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      updatedProviousActiveButtons[index] = true;
      return updatedProviousActiveButtons;
    });
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
    console.log(rndInt);
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-8xl">0</h1>
          <h1 className="font-medium text-2xl">Total Score</h1>
        </div>
        <div className="flex flex-col items-end justify-between">
          <h1 className="mx-2 font-medium text-red-500">{message}</h1>
          <div className="mb-2">
            {activeButtons.map((isActiveButton, index) => (
              <button
                className={`primary-button ${
                  isActiveButton ? "primary-button-active" : ""
                }`}
                key={index}
                onClick={() => toggleActiveButtons(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mx-2">
            <h1 className="font-medium text-xl">Please Select a number</h1>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col items-center justify-center">
        <div>
          <button className="w-40" onClick={() => roleTheDice()}>
            <img src={dice1} alt="Image here" />
          </button>
          <h1 className="font-medium text-lg my-4">Click on dice to roll</h1>
          <button className="border-2 border-black rounded-md w-40 py-1 my-1 block">
            Reset Score
          </button>
          <button
            className="border-2 border-black bg-black text-white rounded-md w-40 py-1 my-1 block"
            onClick={() => setRulesSection(!rulesSection)}
          >
            Show rules
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default Play;
