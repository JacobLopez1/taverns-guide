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
        <li className="footer__link link__hover-effect">
          <a href="">About</a>
        </li>
        <li className="footer__link link__hover-effect">
          <a href="">Support</a>
        </li>
        <li className="footer__link link__hover-effect">
          <a href="">Contact Us</a>
        </li>
        <li className="footer__link link__hover-effect">
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
