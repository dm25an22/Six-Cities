
import React from "react";
import PlacesSorting from "../places-sorting/places-sorting";
import PlacesList from "../places-list/places-list";

const Offers = ({activeLocation}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <PlacesSorting />
      <PlacesList activeLocation={activeLocation} />
    </section>
  )
};

export default Offers;