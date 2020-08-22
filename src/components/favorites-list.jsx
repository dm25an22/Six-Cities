import React from "react";
import FavoritesLocationItem from "./favorites-location-item";
import { getUniqueLocations, getHotelsByLocation } from "../utils";

const FavoritesList = ({ favoriteHotels }) => {
  const locations = getUniqueLocations(favoriteHotels);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {locations.map((location) => (
              <FavoritesLocationItem
                key={location}
                location={location}
                hotels={getHotelsByLocation(favoriteHotels, location)}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritesList;
