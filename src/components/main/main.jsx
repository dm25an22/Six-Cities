import React, {useState} from "react";
import Header from "../header/header";
import {useSelector} from "react-redux";
import {getLocations, getHotels} from "../../reducer/offersReducer/selectors";
import {getSortedHotels} from "../../utils";
import {TypeSort} from "../../enums";
import PageMain from "../page-main/page-main";
import NoPlacesAvailable from "../no-places-available/no-places-available";
import {ContextMain} from "../../context";

const Main = () => {
  const locations = useSelector(getLocations);
  const hotels = useSelector(getHotels);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [activeSortType, setActiveSortType] = useState(TypeSort.POPULAR);

  let hotelsByActiveLocation = hotels.filter((hotel) => hotel.city.name === activeLocation);
  const hotelsByActiveSort = getSortedHotels(hotelsByActiveLocation, activeSortType)

  if (activeLocation === `Cologne`) {
    hotelsByActiveLocation = []
  } // Времмено для тестов
 
  return (
    <ContextMain.Provider value={{
      locations,
      activeLocation,
      setActiveLocation,
      activeSortType,
      setActiveSortType,
      hotelsByActiveSort
    }}>
      <div className="page page--gray page--main">
        <Header />
        {hotelsByActiveLocation.length 
          ?
        <PageMain />
        :
        <NoPlacesAvailable />
        }
      </div>
    </ContextMain.Provider>
  );
}

export default Main;