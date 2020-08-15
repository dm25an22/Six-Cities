
import React, {useState} from "react";
import Header from "../header/header";
import LacationList from "../lacation-list/lacation-list";
import Offers from "../offers/offers";
import CityMap from "../city-map/city-map";
import {useSelector} from "react-redux";
import {getLocations, getHotels} from "../../reducer/offersReducer/selectors";

const Main = () => {
  const locations = useSelector(getLocations)
  const [activeLocation, setActiveLocation] = useState(locations[0])
  const hotels = useSelector(getHotels)
  const hotelsByActiveLocation = hotels.filter((hotel) => hotel.city.name === activeLocation)

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
          <Offers  hotelsByActiveLocation={hotelsByActiveLocation} />
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