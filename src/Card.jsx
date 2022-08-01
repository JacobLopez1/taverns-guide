import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

const Card = ({ card, random }) => {
  return (
    <div className="card__page">
      <div className="card__container">
        <div className="card__img">
          <img src={card?.img} alt="" />
        </div>

        <div className="card__info">
          <h1>{card.name}</h1>
          <p>{card.flavor}</p>

          <ul className="card__stats">
            <li>
              <span className="card__statsHighlight">Type: </span>
              {card.race || card.type}
            </li>
            <li>
              <span className="card__statsHighlight">Rarity: </span>
              {card.rarity}
            </li>
            <li>
              <span className="card__statsHighlight">Set: </span>
              {card.cardSet}
            </li>
            <li>
              <span className="card__statsHighlight">Class: </span>
              {card.playerClass}
            </li>
            <li>
              <span className="card__statsHighlight">Artist: </span>
              {card.artist}
            </li>
          </ul>
          {random && <Button onClick={() => window.location.reload()}>Generate New Card</Button>}
        </div>
      </div>
    </div>
  );
};

export default Card;
