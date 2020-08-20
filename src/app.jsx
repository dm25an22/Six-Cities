import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./components/main/main";
import Room from "./components/room/room";
import {AppRoute} from "./enums";
import SignIn from "./components/sign-in/sign-in";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={AppRoute.ROOT} component={Main} />
          <Route exact path={AppRoute.LOGIN} component={SignIn} />
        <Route exact path={`${AppRoute.ROOM}/:id`} component={Room} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;