import {extend} from "../../utils";
import { getAdaptedHotel, getAdaptedReview } from "../../adapter";

const initialState = {
  hotels: [],
  reviews: []
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CLEANUP_REVIEWS: `CLEANUP_REVIEWS`
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
      payload: null
    }
  }
};

const Operation = {
  loadHotels: () => {
    return async (dispatch) => {
      const response = await fetch(`https://4.react.pages.academy/six-cities/hotels`);
      const hotels = await response.json();
      const adaptedHotels = hotels.map(getAdaptedHotel)
      dispatch(ActionCreator.loadHotels(adaptedHotels))
    } 
  },
  
  loadReviews: (id, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://4.react.pages.academy/six-cities/comments/${id}`);
        const reviews = await response.json();
        const adapted = reviews.map(getAdaptedReview);
        dispatch(ActionCreator.loadReviews(adapted))
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

    default:
      return state;
  }
};

export {reducer, ActionCreator, Operation};