import { extend } from "../../utils";
import { api } from "../../api";

const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CLEANUP_REVIEWS: `CLEANUP_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`
};

const ActionCreator = {
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

  addReview(reviews) {
    return {
      type: ActionType.ADD_REVIEW,
      payload: reviews
    }
  }
}

const Operation = {
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

  addReview: (id, newReview, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const reviews = await api.addReview(id, newReview);
        dispatch(ActionCreator.addReview(reviews));
        onSuccess();
      } catch {
        onError();
      }
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case ActionType.CLEANUP_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: action.payload
      });

    default:
      return state;
  }
}

export {
  ActionCreator,
  Operation,
  reducer
}