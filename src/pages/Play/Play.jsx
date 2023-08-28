import { useState } from "react";

const Play = () => {
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);
  const [activeFive, setActiveFive] = useState(false);
  const [activeSix, setActiveSix] = useState(false);

  const toggleActiveOne = () => {
    setActiveOne(!activeOne);
  };

  const toggleActiveTwo = () => {
    setActiveTwo(!activeTwo);
  };

  const toggleActiveThree = () => {
    setActiveThree(!activeThree);
  };

  const toggleActiveFour = () => {
    setActiveFour(!activeFour);
  };

  const toggleActiveFive = () => {
    setActiveFive(!activeFive);
  };

  const toggleActiveSix = () => {
    setActiveSix(!activeSix);
  };

  return (
    <div className="container mx-auto flex justify-between items-center my-7">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-8xl">0</h1>
        <h1 className="font-medium text-2xl">Total Score</h1>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="mb-2">
          <button
            className={`primary-button ${
              activeOne ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveOne}
          >
            1
          </button>
          <button
            className={`primary-button ${
              activeTwo ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveTwo}
          >
            2
          </button>
          <button
            className={`primary-button ${
              activeThree ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveThree}
          >
            3
          </button>
          <button
            className={`primary-button ${
              activeFour ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveFour}
          >
            4
          </button>
          <button
            className={`primary-button ${
              activeFive ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveFive}
          >
            5
          </button>
          <button
            className={`primary-button ${
              activeSix ? "primary-button-active" : ""
            }`}
            onClick={toggleActiveSix}
          >
            6
          </button>
        </div>
        <div className="mx-2">
          <h1 className="font-medium text-xl">Please Select a number</h1>
        </div>
      </div>
    </div>
  );
};

export default Play;
