import React from "react";
import Offers from "../offers/offers";
import CityMap from "../city-map/city-map";

const itiesContainer = ({activeLocation, hotelsByActiveSort, activeSortType, setActiveSortType}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Offers 
          activeLocation={activeLocation} 
          hotelsByActiveSort={hotelsByActiveSort} 
          activeSortType={activeSortType} 
          setActiveSortType={setActiveSortType}
        />
        <div className="cities__right-section">
          <CityMap />
        </div>
      </div>
    </div>
  );
}

export default itiesContainer;