import React from "react";

// Components
import { Switch, Route } from "react-router-dom";

// Sections
import Home from "./containers/Home";
import Teams from "./containers/Teams";
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
      {/* Catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;