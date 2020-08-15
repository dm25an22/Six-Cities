import {extend} from "../../utils";
import { getAdaptedHotel } from "../../adapter";

const initialState = {
  hotels: [],
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
};

const ActionCreator = {
  loadHotels(hotels) {
    return {
      type: ActionType.LOAD_HOTELS,
      payload: hotels
    }
  }
};

const Operation = {
  loadHotels: () => {
    return async (dispatch) => {
      const response = await fetch(`https://4.react.pages.academy/six-cities/hotels`);
      const hotels = await response.json();
      const adaptedHotels = hotels.map((hotel) => getAdaptedHotel(hotel))
      dispatch(ActionCreator.loadHotels(adaptedHotels))
    } 
  }     
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        hotels: action.payload
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, Operation};