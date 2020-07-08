import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../auth/Login";
import Alert from "../layout/Alert";

import PrivateRoute from "../routing/PrivateRoute";
import CreateProfile from "../profile/forms/CreateProfile";
import AddExperienceForm from "../profile/forms/AddExperienceForm";
import AddEducationForm from "../profile/forms/AddEducationForm";
import MyProfile from "../profile/MyProfile";

const Routes = (props) => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute
          exact
          path="/add-experience"
          component={AddExperienceForm}
        />
        <PrivateRoute
          exact
          path="/add-education"
          component={AddEducationForm}
        />
        <PrivateRoute exact path="/" component={MyProfile} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
