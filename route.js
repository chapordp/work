import { Switch, Route } from "react-router-dom";

import React from "react";
import Home from "./component/pages/Home";


const route = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
    </>
  );
};

export default route;
