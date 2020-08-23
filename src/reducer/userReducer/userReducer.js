import { extend } from "../../utils";
import {Operation as favoritesOperation} from "../favoritesReducer/favoritesReducer"
import { api } from "../../api";

const initialState = {
  authorizationStatus: false,
  userData: null
};

const ActionType = {
  CHECK_AUTH_STATUS: `CHECK_AUTH_STATUS`,
  LOGIN: `LOGIN`,
  SET_USER_DATA: `SET_USER_DATA`
};

const ActionCreator = {
  checkAuthStatus(authStatus) {
    return {
      type: ActionType.CHECK_AUTH_STATUS,
      payload: authStatus,
    };
  },

  login(userData) {
    return {
      type: ActionType.LOGIN,
      payload: userData
    };
  },

  setUserData(userData) {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData
    }
  }
};

const Operation = {
  checkAuthStatus: () => {
    return async (dispatch) => {
      try {
        const authInfo = await api.checkAuthStatus();
        dispatch(ActionCreator.checkAuthStatus(true));
        dispatch(ActionCreator.setUserData(authInfo));
        dispatch(favoritesOperation.loadFavorites());
      } catch {
        dispatch(ActionCreator.checkAuthStatus(false));
      }
    };
  },

  login: (userData, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const authInfo = await api.login(userData);
        dispatch(ActionCreator.setUserData(authInfo));
        dispatch(ActionCreator.checkAuthStatus(true));
        dispatch(favoritesOperation.loadFavorites());
        onSuccess();
      }
      catch {
        onError();
      }
    };
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECK_AUTH_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.LOGIN:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });

    default:
      return state;
  }
};

export { ActionCreator, Operation, reducer };
