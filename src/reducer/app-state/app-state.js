import { extend } from "../../utils";

const initialState = {
  activeLocation: null
};

const ActionType = {
  ACTIVE_LOCATION: `ACTIVE_LOCATION`
};

const ActionCreator = {
  changeLocation(location) {
    return {
      type: ActionType.ACTIVE_LOCATION,
      payload: location
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTIVE_LOCATION:
      return extend(state, {
        activeLocation: action.payload
      });

    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer
}