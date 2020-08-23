import React, { useContext } from "react";
import { ContextRoom } from "../../context";
import { getRatingByPercent, checkInFavorites } from "../../utils";
import RoomInsideList from "../room-inside-list/room-inside-list";
import RoomHost from "../room-host/room-host";
import { useSelector, useDispatch } from "react-redux";
import { getAuthStatus } from "../../reducer/userReducer/selector";
import { getFavorites } from "../../reducer/favoritesReducer/selector";
import { Operation } from "../../reducer/favoritesReducer/favoritesReducer";

const RoomInfo = () => {
  const { hotel } = useContext(ContextRoom);
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);
  const favorites = useSelector(getFavorites);
  const isFavorite = checkInFavorites(favorites, hotel.id);

  const status = isFavorite ? 0 : 1;

  const {
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    id
  } = hotel;

  return (
    <React.Fragment>
      {isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>

        {authStatus && (
          <button onClick={() => {
            dispatch(Operation.toggleIsFavorite(id, status))
          }} className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        )}
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{ width: `${getRatingByPercent(rating)}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">{type}</li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">€{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <RoomInsideList goods={goods} />
      <RoomHost host={host} description={description} />
    </React.Fragment>
  );
};

export default RoomInfo;
