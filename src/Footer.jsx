import React from "react";
import "./Footer.css";
import "./Components.css";
import Logo from "./assets/icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={Logo} />
      </div>

      <ul className="footer__links">
        <li className="footer__link link__hover-effect no-cursor">
          <a href="">About</a>
        </li>
        <li className="footer__link link__hover-effect no-cursor">
          <a href="">Support</a>
        </li>
        <li className="footer__link link__hover-effect no-cursor">
          <a href="">Contact Us</a>
        </li>
        <li className="footer__link link__hover-effect no-cursor">
          <a href="">Legal</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p>Copyright &copy; 2022 Jacob Lopez</p>
      </div>
    </div>
  );
};

export default Footer;
