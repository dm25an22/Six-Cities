import React from "react";
import PlaceCard from "../place-card/place-card";

const PlacesList = ({hotelsByActiveSort}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelsByActiveSort.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} /> )}
    </div>
  );
}

export default PlacesList;