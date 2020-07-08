import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../layout/Auth';
import Login from '../auth/Login';
import Alert from '../layout/Alert';

import PrivateRoute from '../routing/PrivateRoute';
import Home from '../layout/Home';
import MyProfile from '../profile/MyProfile';
import CreateProfile from '../profile/forms/CreateProfile';
import AddExperienceForm from '../profile/forms/AddExperienceForm';
import AddEducationForm from '../profile/forms/AddEducationForm';

const Routes = (props) => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Auth} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/my-profile' component={MyProfile} />
        <PrivateRoute
          exact
          path='/add-experience'
          component={AddExperienceForm}
        />
        <PrivateRoute
          exact
          path='/add-education'
          component={AddEducationForm}
        />
      </Switch>
    </Fragment>
  );
};

export default Routes;
