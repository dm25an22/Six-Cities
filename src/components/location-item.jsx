import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../reducer/app-state/app-state";

const LocationItem = ({city, isActive}) => {
  const dispatch = useDispatch();

  const setActiveLocation = (city) => {
    dispatch(ActionCreator.changeLocation(city));
  }

  return (
    <li className="locations__item">
      <a 
        className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`}
        href="/"
        onClick={(evt) => {
          evt.preventDefault();
          setActiveLocation(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default LocationItem;