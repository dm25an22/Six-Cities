import React from "react";
import ReacrDom from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux"
import ReduxThunk from 'redux-thunk'; 
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./app"
import {rootReducer} from "./reducer/rootReducer"
import {Operation as HotelsOperation} from "./reducer/offersReducer/offersReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
    )
  );

store.dispatch(HotelsOperation.loadHotels());

ReacrDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
