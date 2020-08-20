
import React from "react";
import PlacesSorting from "../places-sorting/places-sorting";
import PlacesList from "../places-list/places-list";

const Offers = () => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{} places to stay in {}</b>
      <PlacesSorting />
      <PlacesList />
    </section>
  )
};

export default Offers;