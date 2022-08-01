import { Button } from "@mui/material";
import React from "react";
import "./Header.css";
import Logo from "./assets/icon.png";
import "./Components.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__background">
      <div className="header">
        <div className="header__icon">
          <a href="/">
            <img src={Logo} alt="" />
            <h1>Tavern's Guide</h1>
          </a>
        </div>
        <ul className="header__links">
          <li className="header__link link__hover-effect">
            <Link to="/rand">Random Card</Link>
          </li>
          <Link className="button__link" to="/browse">
            <Button>Browse Cards</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
