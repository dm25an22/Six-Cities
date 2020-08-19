import React, { useContext } from "react";
import PlaceCard from "../place-card/place-card";
import {ContextMain} from "../../context";

const PlacesList = () => {
  const {hotelsByActiveSort} = useContext(ContextMain);
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelsByActiveSort.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} /> )}
    </div>
  );
}

export default PlacesList;