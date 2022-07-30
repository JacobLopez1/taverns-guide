import React from "react";
import "./Split.css";
import { Button } from "@mui/material";
import "./Components.css";

const Split = ({ image, title, content }) => {
  return (
    <div className="split">
      <figure className="split__backgroundImg">
        <img src={image} />
      </figure>
      <div className="split__content">
        <Button className="split__button main__button">{title}</Button>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Split;
