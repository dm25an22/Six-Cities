import React from "react";
import PropTypes from "prop-types";
import { getRatingByPercent } from "../utils";

const RatingCard = ({ rating }) => {
  const ratingInPercent = getRatingByPercent(rating);

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${ratingInPercent}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

RatingCard.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingCard;
