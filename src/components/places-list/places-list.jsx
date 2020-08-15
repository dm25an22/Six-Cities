import React from "react";
import PlaceCard from "../place-card/place-card";

const PlacesList = ({hotelsByActiveLocation}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelsByActiveLocation.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} /> )}
    </div>
  );
}

export default PlacesList;