import {createSelector} from "reselect";
import {NameSpace} from "../name-space";

const getHotels = (state) => {
  return state[NameSpace.OFFERS].hotels;
}

const getLocations = createSelector(
  getHotels,
  (hotels) => [...new Set(hotels.map((it) => it.city.name))].sort()
)

export {
  getHotels,
  getLocations
}