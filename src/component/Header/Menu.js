import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="nav-container">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active-nav-link">Currently</NavLink>
        </li>
        <li>
          <NavLink  to="/hourly" className="nav-link" activeClassName="active-nav-link">Hourly</NavLink>
        </li>
        <li>
          <NavLink to="/forecast" className="nav-link" activeClassName="active-nav-link">Forecast</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
