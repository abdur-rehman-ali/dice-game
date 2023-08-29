import { useState } from "react";

const Play = () => {
  const [activeButtons, setActiveButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleActiveButtons = (index) => {
    setActiveButtons((previousActiveButtons) => {
      const updatedProviousActiveButtons = [...previousActiveButtons];
      updatedProviousActiveButtons[index] = !previousActiveButtons[index];
      return updatedProviousActiveButtons;
    });
  };

  return (
    <div className="container mx-auto flex justify-between items-center my-7">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-8xl">0</h1>
        <h1 className="font-medium text-2xl">Total Score</h1>
      </div>
      <div className="flex flex-col items-end justify-between">
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
  );
};

export default Play;
