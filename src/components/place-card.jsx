import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppRoute } from "../enums";
import { useSelector } from "react-redux";
import { getAuthStatus } from "../reducer/user/selector";
import { getFavorites } from "../reducer/favorites/selector";
import { checkInFavorites } from "../utils";
import RatingCard from "./rating-card";
import PriceCard from "./price-card";
import BookMarkCard from "./book-mark-card";
import { hotelType } from "../types";

const PlaceCard = ({ hotel, setActiveMarker }) => {
  const authStatus = useSelector(getAuthStatus);
  const favorites = useSelector(getFavorites);
  const { price, rating, title, type, previewImage, isPremium, id } = hotel;
  const isFavorite = checkInFavorites(favorites, id);

  const status = isFavorite ? 0 : 1;

  return (
    <article
      onMouseEnter={() => {
        setActiveMarker(id);
      }}
      onMouseLeave={() => {
        setActiveMarker(null);
      }}
      className="cities__place-card place-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <PriceCard price={price}/>
          {authStatus && 
            <BookMarkCard id={id} status={status}/>
          }
        </div>
        <RatingCard rating={rating}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes ={
  hotel: PropTypes.shape(hotelType).isRequired,
  setActiveMarker: PropTypes.func.isRequired
};

export default PlaceCard;
