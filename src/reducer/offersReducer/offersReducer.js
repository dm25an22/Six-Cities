const initialState = {
  hotels: [],
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
};

const ActionCreator = {
  loadHotels: (hotels) => {
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
      const json = await response.json();
      dispatch(ActionCreator.loadHotels(json))
    } 
  }     
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return Object.assign({}, state, {
        hotels: action.payload
      })

    default:
      return state
  }
};

export {reducer, ActionCreator, Operation};