import React from "react";
import PlaceCard from "../place-card/place-card";
import {useSelector} from "react-redux";
import {getHotels} from "../../reducer/offersReducer/selectors";

const PlacesList = ({activeLocation}) => {
  const hotels = useSelector(getHotels)
  const hotelsByActiveLocation = hotels.filter((hotel) => hotel.city.name === activeLocation)

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelsByActiveLocation.map((hotel) => <PlaceCard key={hotel.id} hotel={hotel} /> )}
    </div>
  );
}

export default PlacesList;