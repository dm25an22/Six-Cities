import {createSelector} from "reselect";
import {NameSpace} from "../name-space";

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
)

export {
  getHotels,
  getLocations,
  getReviews,
  getSortedReviews
}