import { extend } from "../../utils";
import { api } from "../../api";

const initialState = {
  hotels: [],
  nearbyHotels: []
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY_HOTELS: `LOAD_NEARBY_HOTELS`,
  CLEANUP_REVIEWS: `CLEANUP_REVIEWS`,
  CLEANUP_NEARBY_HOTELS: `CLEANUP_NEARBY_HOTELS`
};

const ActionCreator = {
  loadHotels(hotels) {
    return {
      type: ActionType.LOAD_HOTELS,
      payload: hotels
    }
  },

  loadNearbyHotels(nearbyHotels) {
    return {
      type: ActionType.LOAD_NEARBY_HOTELS,
      payload: nearbyHotels
    }
  },

  claenupNearbyHotels() {
    return {
      type: ActionType.CLEANUP_NEARBY_HOTELS,
      payload: []
    }
  }
};

const Operation = {
  loadHotels: () => {
    return async (dispatch) => {
      try {
        const hotels = await api.getHotels();
        dispatch(ActionCreator.loadHotels(hotels))
      } catch {
        console.log(`nok`)
      }
    }
  },

  loadNearbyHotels: (id, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const nearbyHotels = await api.getNearbyHotels(id);
        dispatch(ActionCreator.loadNearbyHotels(nearbyHotels))
        onSuccess();
      } catch {
        onError();
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        hotels: action.payload
      });

    case ActionType.LOAD_NEARBY_HOTELS:
      return extend(state, {
        nearbyHotels: action.payload
      });

    case ActionType.CLEANUP_NEARBY_HOTELS:
      return extend(state, {
        nearbyHotels: action.payload
      });

    default:
      return state;
  }
};

export { reducer, ActionCreator, Operation };