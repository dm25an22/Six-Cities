
import React from "react";
import Header from "../header/header";
import LacationList from "../lacation-list/lacation-list";
import CitiesPlaces from "../cities-places/cities-places";
import CityMap from "../city-map/city-map";

const Main = () => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LacationList />
        <div className="cities">
          <div className="cities__places-container container">
          <CitiesPlaces />
            <div className="cities__right-section">
              <CityMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;