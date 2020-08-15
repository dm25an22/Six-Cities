import React from "react";

const LocationItem = ({city, isActive, setActiveLocation}) => {
  return (
    <li className="locations__item">
      <a 
        className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`}
        href="/"
        onClick={(evt) => {
          evt.preventDefault();
          setActiveLocation(city)
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;