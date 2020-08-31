import React, { useEffect } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./components/main";
import Room from "./components/room";
import {AppRoute} from "./enums";
import SignIn from "./components/sign-in";
import PrivateRoute from "./components/private-route";
import Favorites from "./components/favorites";
import NotFoundPage from "./components/not-found-page";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Operation as OffersOperation } from "./reducer/offers/offers";
import WarringWrapper from "./components/warring-wrapper";


const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(null);

  const onSuccess = () => {
    setIsLoaded(true);
  };

  const onError = () => {
    setIsLoaded(false);
  };

  useEffect(() => {
    dispatch(OffersOperation.loadHotels(onSuccess, onError));
  }, [dispatch]);

  if (isLoaded === null) {
    return null;
  }

  if (!isLoaded) {
    return (
      <WarringWrapper>
        <h1>Server not available</h1>
      </WarringWrapper>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={AppRoute.ROOT} component={Main} />
          <Route exact path={AppRoute.LOGIN} component={SignIn} />
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            render={(props) => {
              return (
                <Favorites {...props} />
              )
            }}
          />
        <Route exact path={`${AppRoute.ROOM}/:id`} component={Room} />
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;