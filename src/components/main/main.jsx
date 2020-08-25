/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../header/header";
import { useSelector } from "react-redux";
import { getLocations, getHotels } from "../../reducer/offersReducer/selectors";
import LacationList from "../lacation-list/lacation-list";
import Cities from "../cities/cities";
import NoPlacesAvailable from "../no-places-available/no-places-available";
import { getHotelsByLocation } from "../../utils";
import { getActiveLocation } from "../../reducer/app-state/selector";

const Main = () => {
  const locations = useSelector(getLocations);
  const activeLocation = useSelector(getActiveLocation);
  const hotels = useSelector(getHotels);
  let hotelsByLocation = getHotelsByLocation(hotels, activeLocation);

  if (activeLocation === `Cologne`) {
    hotelsByLocation = [];
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${
          !hotelsByLocation.length && `page__main--index-empty`
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>

        <LacationList
          activeLocation={activeLocation}
          locations={locations}
        />

        {hotelsByLocation.length ? (
          <Cities
            key={activeLocation}
            hotels={hotelsByLocation}
            activeLocation={activeLocation}
          />
        ) : (
          <NoPlacesAvailable activeLocation={activeLocation} />
        )}
      </main>
    </div>
  );
};

export default Main;
