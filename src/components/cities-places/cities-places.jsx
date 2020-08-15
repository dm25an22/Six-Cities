
import React from "react";
import PlacesSorting from "../places-sorting/places-sorting";
import CitiesPlacesList from "../places-list/places-list";

const CitiesPlaces = () => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <PlacesSorting />
      <CitiesPlacesList />
    </section>
  )
};

export default CitiesPlaces;