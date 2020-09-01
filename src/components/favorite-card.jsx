import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppRoute } from "../enums";
import RatingCard from "./rating-card";
import PriceCard from "./price-card";
import BookMarkCard from "./book-mark-card";
import { hotelType } from "../types";

const FavoriteCard = ({ hotel }) => {
  const { price, rating, title, type, previewImage, id } = hotel;
  const status = 0;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <PriceCard price={price} />
          <BookMarkCard id={id} status={status} />
        </div>
        <RatingCard rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  hotel: PropTypes.shape(hotelType).isRequired
};

export default FavoriteCard;
