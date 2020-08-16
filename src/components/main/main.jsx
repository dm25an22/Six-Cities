
import React, {useState} from "react";
import Header from "../header/header";
import LacationList from "../lacation-list/lacation-list";
import Offers from "../offers/offers";
import CityMap from "../city-map/city-map";
import {useSelector} from "react-redux";
import {getLocations, getHotels} from "../../reducer/offersReducer/selectors";
import {getSortedHotels} from "../../utils";
import {TypeSort} from "../../enums";

const Main = () => {
  const locations = useSelector(getLocations);
  const hotels = useSelector(getHotels);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [activeSortType, setActiveSortType] = useState(TypeSort.POPULAR);

  const hotelsByActiveLocation = hotels.filter((hotel) => hotel.city.name === activeLocation);
  const hotelsByActiveSort = getSortedHotels(hotelsByActiveLocation, activeSortType)

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LacationList
          locations={locations}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
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
      </main>
    </div>
  );
}

export default Main;