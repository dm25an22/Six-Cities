import {extend} from "../../utils";
import { getAdaptedHotel, getAdaptedReview } from "../../adapter";
import { api } from "../../api";

const initialState = {
  hotels: [],
  reviews: [],
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

  loadReviews(reviews) {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    }
  },

  cleanupReviews() {
    return {
      type: ActionType.CLEANUP_REVIEWS,
      payload: []
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
      const hotels = await api.getHotels();
      dispatch(ActionCreator.loadHotels(hotels))
    } 
  },
  
  loadReviews: (id, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const reviews = await api.getReviews(id);
        dispatch(ActionCreator.loadReviews(reviews))
        onSuccess();
      } catch {
        onError();
      }  
    }
  },

  loadNearbyHotels: (id, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://4.react.pages.academy/six-cities/hotels/${id}/nearby`);
        const nearbyHotels = await response.json();
        const adaptedNearbyHotels = nearbyHotels.map(getAdaptedHotel);
        dispatch(ActionCreator.loadNearbyHotels(adaptedNearbyHotels))
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
    
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    
    case ActionType.CLEANUP_REVIEWS:
      return extend(state, {
        reviews: action.payload
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

export {reducer, ActionCreator, Operation};