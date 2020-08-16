
import React from "react";
import PlacesSorting from "../places-sorting/places-sorting";
import PlacesList from "../places-list/places-list";

const Offers = ({hotelsByActiveSort, setActiveSortType, activeSortType, activeLocation}) => {
  return (
    <section key={activeLocation} className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotelsByActiveSort.length} places to stay in {activeLocation}</b>
      <PlacesSorting 
        setActiveSortType={setActiveSortType} 
        activeSortHotels={activeSortType}
      />
      <PlacesList hotelsByActiveSort={hotelsByActiveSort} />
    </section>
  )
};

export default Offers;