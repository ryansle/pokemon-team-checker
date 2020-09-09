import React from "react";

// Components
import { Switch, Route } from "react-router-dom";

// Sections
import Home from "./containers/Home";
import Teams from "./containers/Teams";
import Favorites from "./containers/Favorites";
import NotFound from "./containers/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/teams"
        exact
        component={Teams}
      />
      <Route
        path="/favorites"
        exact
        component={Favorites}
      />
      {/* Catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;