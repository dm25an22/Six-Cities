import { extend } from "../../utils";
import { getAdaptedUserDate } from "../../adapter";

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
        const response = await fetch(
          `https://4.react.pages.academy/six-cities/login`,
          {
            credentials: "include",
          }
        );

        if (response.status === 401) {
          dispatch(ActionCreator.checkAuthStatus(false));
        } else {
          dispatch(ActionCreator.checkAuthStatus(true));
        }

        const authInfo = await response.json();
        dispatch(ActionCreator.setUserData(getAdaptedUserDate(authInfo)));
    };
  },

  login: (userData, onSuccess, onError) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `https://4.react.pages.academy/six-cities/login`,
          {
            method: `POST`,
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(userData),
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error()
        }

        const authInfo = await response.json();
        dispatch(ActionCreator.checkAuthStatus(true));
        dispatch(ActionCreator.setUserData(getAdaptedUserDate(authInfo)));
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
