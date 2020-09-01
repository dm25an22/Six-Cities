import React from "react";
import Header from "./header";
import { useSelector } from "react-redux";
import { getLocations, getHotels } from "../reducer/offers/selectors";
import LacationList from "./lacation-list";
import Cities from "./cities";
import NoPlacesAvailable from "./no-places-available";
import { getHotelsByLocation } from "../utils";
import { getActiveLocation } from "../reducer/app-state/selector";

const Main = () => {
  const locations = useSelector(getLocations);
  const activeLocation = useSelector(getActiveLocation);
  const hotels = useSelector(getHotels);
  let hotelsByLocation = getHotelsByLocation(hotels, activeLocation);

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
