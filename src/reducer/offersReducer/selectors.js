import {createSelector} from "reselect";
import {NameSpace} from "../name-space";
import { getUniqueLocations } from "../../utils";

const getHotels = (state) => {
  return state[NameSpace.OFFERS].hotels;
};

const getLocations = createSelector(
  getHotels,
  (hotels) => getUniqueLocations(hotels)
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

export {
  getHotels,
  getLocations,
  getReviews,
  getSortedReviews,
  getNearbyHotelsMax,
}