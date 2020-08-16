import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./components/main/main";
import Room from "./components/room/room"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <Main />
        </Route>
        <Route exact path={`/room`}>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;