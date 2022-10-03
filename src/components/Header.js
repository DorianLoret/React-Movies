import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coups-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coups de coeurs
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
