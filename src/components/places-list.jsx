import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./place-card";
import { hotelType } from "../types";

const PlacesList = ({hotels, setActiveMarker}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} setActiveMarker={setActiveMarker} /> )}
    </div>
  );
};

PlacesList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape(hotelType)).isRequired,
  setActiveMarker: PropTypes.func.isRequired
};

export default PlacesList;