import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../layout/Home';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../layout/Dashboard';

import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile/forms/CreateProfile';
import AddExperienceForm from '../profile/forms/AddExperienceForm';
import AddEducationForm from '../profile/forms/AddEducationForm';
import Profile from '../profile/Profile';

const Routes = (props) => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/register' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-profile' component={CreateProfile} />
        <Route exact path='/add-experience' component={AddExperienceForm} />
        <Route exact path='/add-education' component={AddEducationForm} />
        <Route exact path='/my-profile' component={Profile} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
