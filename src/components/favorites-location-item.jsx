import React from "react";
import PropTypes from "prop-types";
import FavoriteCard from "./favorite-card";
import { Link } from "react-router-dom";
import { AppRoute } from "../enums";
import { ActionCreator as appStateActionCreator} from "../reducer/app-state/app-state";
import { useDispatch } from "react-redux";
import { hotelType } from "../types";

const FavoritesLocationItem = ({ location, hotels }) => {
  const dispatch = useDispatch();

  const setActiveLocation = (city) => {
    dispatch(appStateActionCreator.changeLocation(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            to={AppRoute.ROOT}
            onClick={() => {
              setActiveLocation(location);
            }}
            className="locations__item-link"
          >
            <span>{location}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel) => (
          <FavoriteCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </li>
  );
};

FavoritesLocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  hotels: PropTypes.arrayOf(PropTypes.shape(hotelType)).isRequired
};

export default FavoritesLocationItem;
