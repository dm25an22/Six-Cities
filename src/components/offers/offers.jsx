
import React, { useContext } from "react";
import PlacesSorting from "../places-sorting/places-sorting";
import PlacesList from "../places-list/places-list";
import {ContextMain} from "../../context";

const Offers = () => {
  const {activeLocation, hotelsByActiveSort} = useContext(ContextMain);

  return (
    <section key={activeLocation} className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotelsByActiveSort.length} places to stay in {activeLocation}</b>
      <PlacesSorting />
      <PlacesList />
    </section>
  )
};

export default Offers;