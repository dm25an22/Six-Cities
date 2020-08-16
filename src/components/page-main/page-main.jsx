import React from "react";
import LacationList from "../lacation-list/lacation-list";
import Offers from "../offers/offers";
import CityMap from "../city-map/city-map";

const PageMain = () => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LacationList />
      <div className="cities">
      <div className="cities__places-container container">
        <Offers />
        <div className="cities__right-section">
          <CityMap />
        </div>
      </div>
    </div>
  </main>
  );
};

export default PageMain;