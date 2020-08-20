import {createSelector} from "reselect";
import {NameSpace} from "../name-space";
import { getActiveLocation, getActiveSortType } from "../app-state/selector";
import { getSortedHotels } from "../../utils";

const getHotels = (state) => {
  return state[NameSpace.OFFERS].hotels;
};

const getLocations = createSelector(
  getHotels,
  (hotels) => [...new Set(hotels.map((it) => it.city.name))].sort()
);

const getReviews = (state) => {
  return state[NameSpace.OFFERS].reviews;
}

const getSortedReviews = createSelector(
  getReviews,
  (reviews) => {
    if (!reviews) {
      return [];
    }

    const reviewsCopy = [...reviews];
    const sortedReviews = reviewsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedReviews.slice(0, 10);
  }
);

const getNearbyHotels = (state) => {
  return state[NameSpace.OFFERS].nearbyHotels;
}

const getNearbyHotelsMax = createSelector(
  getNearbyHotels,
  (hotels) => {
    if (!hotels) {
      return [];
    }

    return hotels.slice(0, 3);
  }
);

const getHotelsByFilter = createSelector(
  getHotels,
  getActiveLocation,
  (hotels, location) => hotels.filter((hotel) => hotel.city.name === location)
);

const getHotelsByActiveSortType = createSelector(
  getHotelsByFilter,
  getActiveSortType,
  (hotels, sortType) => getSortedHotels(hotels, sortType)
)

export {
  getHotels,
  getLocations,
  getReviews,
  getSortedReviews,
  getNearbyHotelsMax,
  getHotelsByActiveSortType,
  getHotelsByFilter
}