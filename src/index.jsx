import React from "react";
import ReacrDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./app";
import { rootReducer } from "./reducer/rootReducer";
import { Operation as UserOpertaion } from "./reducer/user/user";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

new Promise((resolve) => {
  resolve(store.dispatch(UserOpertaion.checkAuthStatus()));
}).finally(() => {
    ReacrDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
    );
  });