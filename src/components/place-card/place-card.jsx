import React from "react";
import { getRatingByPercent, checkInFavorites } from "../../utils";
import { useHistory } from "react-router-dom";
import { AppRoute } from "../../enums";
import { useSelector, useDispatch } from "react-redux";
import { getAuthStatus } from "../../reducer/userReducer/selector";
import { getFavorites } from "../../reducer/favoritesReducer/selector";
import { Operation } from "../../reducer/favoritesReducer/favoritesReducer";

const PlaceCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authStatus = useSelector(getAuthStatus);
  const favorites = useSelector(getFavorites);
  const { price, rating, title, type, previewImage, isPremium, id } = hotel;
  const ratingInPercent = getRatingByPercent(rating);
  const isFavorite = checkInFavorites(favorites, id);
  
  const status = isFavorite ? 0 : 1;

  return (
    <article
  
    className="cities__place-card place-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a 
          onClick={(evt) => {
            evt.preventDefault();
            history.push(`${AppRoute.ROOM}/${id}`);
          }}
          href="/"
        >
          
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {authStatus && (
            <button
              onClick={() => {
                dispatch(Operation.toggleIsFavorite(id, status));
              }}
              className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingInPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
