import React from "react";
import { useHistory } from "react-router-dom";
import { AppRoute } from "../enums";
import { getRatingByPercent } from "../utils";
import { useDispatch } from "react-redux";
import { Operation } from "../reducer/favoritesReducer/favoritesReducer";

const FavoriteCard = ({ hotel }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { price, rating, title, type, previewImage, id } = hotel;
  const ratingInPercent = getRatingByPercent(rating);
  const status = 0;

  return (
    <article
      
      className="favorites__card place-card"
    >
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a
        onClick={(evt) => {
          evt.preventDefault();
          history.push(`${AppRoute.ROOM}/${id}`);
        }} 
        href="/">
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={() => {
              dispatch(Operation.toggleIsFavorite(id, status));
            }}
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingInPercent}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default FavoriteCard;
