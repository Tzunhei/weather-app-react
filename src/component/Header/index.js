import React from "react";
import Menu from "./Menu";
import ButtonUnits from "./ButtonUnits";

const Header = ({handleUnitChange}) => {
  return (
    <header>
      <h1>My React Weather App</h1>
      <Menu />
      <ButtonUnits handleUnitChange={handleUnitChange}/>
      <h2>Paris, France</h2>
    </header>
  );
};

export default Header;
