import React from "react";

const Menu = ({ activeButtons, message, toggleActiveButtons }) => {
  return (
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
  );
};

export default Menu;
