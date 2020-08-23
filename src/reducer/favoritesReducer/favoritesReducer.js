import { getAdaptedHotel } from "../../adapter";

const { extend, removeHotelFromFavorites } = require("../../utils");

const initialState = {
  favorites: []
};

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  TOGGLE_IS_FAVORITE: `TOGGLE_IS_FAVORITE`,
  ADD_IN_FAVORITES: `ADD_IN_FAVORITES`,
  REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`
};

const ActionCreator = {
  loadFavorites(favorites) {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites
    }
  },

  addInFavorites(hotel) {
    return {
      type: ActionType.ADD_IN_FAVORITES,
      payload: hotel
    }
  },

  removeFromFavorites(id) {
    return {
      type: ActionType.REMOVE_FROM_FAVORITES,
      payload: id
    }
  }
};

const Operation = {
  loadFavorites: () => {
    return async (dispatch) => {
      const response = await fetch(`https://4.react.pages.academy/six-cities/favorite`, {
        credentials: "include",
      });
      const favorites = await response.json();
      const adaptedFavorites = favorites.map((hotel) => getAdaptedHotel(hotel));

      dispatch(ActionCreator.loadFavorites(adaptedFavorites));
    }
  },

  toggleIsFavorite: (id, status) => {
    return async (dispatch) => {
      const response = await fetch(`https://4.react.pages.academy/six-cities/favorite/${id}/${status}`, {
        method: `POST`,
        credentials: "include"
      });

      const hotel = await response.json();
      const adaptedHotel = getAdaptedHotel(hotel);

      if (status) {
        dispatch(ActionCreator.addInFavorites(adaptedHotel));
      } else {
        dispatch(ActionCreator.removeFromFavorites(id));
      }
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      })

    case ActionType.ADD_IN_FAVORITES:
      return extend(state, {
        favorites: [...state.favorites, action.payload]
      })

    case ActionType.REMOVE_FROM_FAVORITES:
      return extend(state, {
        favorites: removeHotelFromFavorites([...state.favorites], action.payload)
      })

    default:
      return state;
  }
};

export {
  ActionCreator,
  Operation,
  reducer
}