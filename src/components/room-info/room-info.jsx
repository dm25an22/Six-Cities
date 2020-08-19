import React, { useContext } from "react";
import {ContextRoom} from "../../context";
import {getRatingByPercent} from "../../utils";
import RoomInsideList from "../room-inside-list/room-inside-list";
import RoomHost from "../room-host/room-host";

const RoomInfo = () => {
  const {hotel} = useContext(ContextRoom);

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
    description
  } = hotel;

  return (
    <React.Fragment>
      {isPremium 
        &&
      <div className="property__mark">
        <span>Premium</span>
      </div>
      }
      
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${getRatingByPercent(rating)}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
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
      <RoomInsideList goods={goods}/>
      <RoomHost host={host} description={description}/>
    </React.Fragment>
  );
}

export default RoomInfo;