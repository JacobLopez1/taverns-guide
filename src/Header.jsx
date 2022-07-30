import { Button } from "@mui/material";
import React from "react";
import "./Header.css";
import Logo from "./assets/icon.png";
import './Components.css'
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
            <a href="/rand">Random Cards</a>
          </li>
          <li className="header__link link__hover-effect">
            <a href="/rand30">Random List</a>
          </li>
          <Button>Browse Cards</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
