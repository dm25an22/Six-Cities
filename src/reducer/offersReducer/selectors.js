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
  getNearbyHotelsMax,
}