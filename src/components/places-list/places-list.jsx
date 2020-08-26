import React from "react";
import PlaceCard from "../place-card/place-card";

const PlacesList = ({hotels, setActiveMarker}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} setActiveMarker={setActiveMarker} /> )}
    </div>
  );
}

export default PlacesList;