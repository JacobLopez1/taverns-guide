import React from "react";
import "./Card.css";

const CardSkeleton = () => {
  return (
    <div className="card__page">
      <div className="card__container">
        <div className="card__img">
          <div className="card__imgSkeleton" />
        </div>

        <div className="card__info">
            <div className="card__titleSkeleton" />
            <div className="card__flavorSkeleton" />
          <ul className="card__stats">
            <li><div className="card__statSkeleton" /></li>
            <li><div className="card__statSkeleton" /></li>
            <li><div className="card__statSkeleton" /></li>
            <li><div className="card__statSkeleton" /></li>
            <li><div className="card__statSkeleton" /></li>
            <li><div className="card__statSkeleton" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
