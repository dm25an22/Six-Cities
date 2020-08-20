/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useCallback } from "react";
import Header from "../header/header";
import { useSelector, useDispatch } from "react-redux";
import {
  getLocations,
  getHotelsByActiveSortType,
} from "../../reducer/offersReducer/selectors";
import { TypeSort } from "../../enums";

import {
  getActiveLocation,
  getActiveSortType,
} from "../../reducer/app-state/selector";
import { ActionCreator } from "../../reducer/app-state/app-state";
import PlacesList from "../places-list/places-list";
import LacationList from "../lacation-list/lacation-list";
import PlacesSorting from "../places-sorting/places-sorting";

const Main = () => {
  const locations = useSelector(getLocations);
  const dispatch = useDispatch();
  const activeLocation = useSelector(getActiveLocation);
  const hotels = useSelector(getHotelsByActiveSortType);
  const activeSortType = useSelector(getActiveSortType);

  const setActiveLocation = useCallback(
    (location) => {
      dispatch(ActionCreator.setActiveLocation(location));
    },
    [dispatch]
  );

  const setActiveSortType = useCallback(
    (typeSort) => {
      dispatch(ActionCreator.setActiveSortType(typeSort));
    },
    [dispatch]
  );

  useEffect(() => {
    setActiveLocation(locations[0]);
    setActiveSortType(TypeSort.POPULAR);
  }, [locations, setActiveLocation, setActiveSortType]);

  console.log(`render`, activeLocation, hotels);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LacationList
          setActiveLocation={setActiveLocation}
          locations={locations}
          activeLocation={activeLocation}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {hotels.length} places to stay in {activeLocation}
              </b>
              <PlacesSorting
                key={activeLocation}
                setActiveSortType={setActiveSortType}
                activeSortType={activeSortType}
              />
              <PlacesList hotels={hotels} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
