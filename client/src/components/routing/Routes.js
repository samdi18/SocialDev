import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../layout/Dashboard";

import PrivateRoute from "../routing/PrivateRoute";
import CreateProfile from "../profile/forms/CreateProfile";

const Routes = (props) => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/register" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-profile" component={CreateProfile} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
