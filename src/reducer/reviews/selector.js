import { createSelector } from "reselect";
import { NameSpace } from "../name-space";

const getReviews = (state) => {
  return state[NameSpace.REVIEWS].reviews;
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

export {
  getReviews,
  getSortedReviews
}