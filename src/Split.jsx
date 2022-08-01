import React from "react";
import "./Split.css";
import { Button } from "@mui/material";
import "./Components.css";
import { Link } from 'react-router-dom'

const Split = ({ image, title, content }) => {
  return (
    <div className="split">
      <figure className="split__backgroundImg">
        <img src={image} />
      </figure>
      <div className="split__content">
        <Link className="button__link" to="/rand">
          <Button className="split__button main__button">{title}</Button>
        </Link>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Split;
