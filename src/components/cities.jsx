import React, { useState } from "react";
import PlacesSorting from "./places-sorting";
import PlacesList from "./places-list";
import { TypeSort } from "../enums";
import { getSortedHotels } from "../utils";
import CityMap from "./city-map";

const Cities = ({ hotels, activeLocation }) => {
  const [activeSortType, setSorttype] = useState(TypeSort.POPULAR);
  const [activeMarker, setActiveMarker] = useState(null);
  const hotelsBySort = getSortedHotels(hotels, activeSortType);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {hotels.length} places to stay in {activeLocation}
          </b>
          <PlacesSorting
            setActiveSortType={setSorttype}
            activeSortType={activeSortType}
          />
          <PlacesList hotels={hotelsBySort} setActiveMarker={setActiveMarker} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <CityMap
              hotels={hotels}
              activeMarker={activeMarker}
              setActiveMarker={setActiveMarker}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cities;
