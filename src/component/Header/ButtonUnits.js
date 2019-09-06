import React from "react";

const ButtonUnits = ({ handleUnitChange }) => {
  return (
    <div className="btn-temp-container">
      <div className="btn-temp">
        <label for="celsius">C°</label>
        <input
          defaultChecked
          type="radio"
          name="unit"
          id="celsius"
          onClick={() => handleUnitChange("celsius")}
        ></input>
      </div>
      <div className="btn-temp">
        <label for="farhenheit">F°</label>
        <input
          type="radio"
          name="unit"
          id="farhenheit"
          onClick={() => handleUnitChange("farhenheit")}
        ></input>
      </div>
    </div>
  );
};

export default ButtonUnits;
