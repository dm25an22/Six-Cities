import React from "react";
import FavoriteCard from "./favorite-card";

const FavoritesLocationItem = ({location, hotels}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel) => <FavoriteCard key={hotel.id} hotel={hotel} /> )}
      </div>
    </li>
  );
};

export default FavoritesLocationItem;
