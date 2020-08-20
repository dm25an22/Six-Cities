import { extend } from "../../utils"

const initialState = {
  activeLocation: null,
  activeSortType: null
};

const ActionType = {
  SET_ACTIVE_LOCATION: `SET_ACTIVE_LOCATION`,
  SET_ACTIVE_SORT_TYPE: `SET_ACTIVE_SORT_TYPE`
};

const ActionCreator = {
  setActiveLocation(currentLocation) {
    return {
      type: ActionType.SET_ACTIVE_LOCATION,
      payload: currentLocation
    }
  },

  setActiveSortType(currentSortType) {
    return {
      type: ActionType.SET_ACTIVE_SORT_TYPE,
      payload: currentSortType
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_ACTIVE_LOCATION:
      return extend(state, {
        activeLocation: action.payload
      });

    case ActionType.SET_ACTIVE_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload
      });

    default:
      return state;
  }
}

export {
  reducer,
  ActionCreator
}
