
import React, {useState} from "react";
import Header from "../header/header";
import LacationList from "../lacation-list/lacation-list";
import {useSelector} from "react-redux";
import {getLocations, getHotels} from "../../reducer/offersReducer/selectors";
import {getSortedHotels} from "../../utils";
import {TypeSort} from "../../enums";
import CitiesContainer from "../cities-container/cities-container";
import NoPlacesAvailable from "../no-places-available/no-places-available";

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
        {hotelsByActiveLocation.length 
          ?
        <CitiesContainer
          activeLocation={activeLocation} 
          hotelsByActiveSort={hotelsByActiveSort} 
          activeSortType={activeSortType} 
          setActiveSortType={setActiveSortType}
         />
          :
         <NoPlacesAvailable activeLocation={activeLocation} />
        }
      </main>
    </div>
  );
}

export default Main;