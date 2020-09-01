import React from "react";
import PropTypes from "prop-types";

const PriceCard = ({ price }) => {
  return (
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;{price}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
  );
};

PriceCard.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceCard;
