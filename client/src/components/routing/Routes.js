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
import Members from '../members/Members';
import Threads from '../threads/Threads';
import Thread from '../thread/Thread';
import ThreadForm from '../threads/ThreadForm';

const Routes = (props) => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Auth} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/members' component={Members} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/my-profile' component={MyProfile} />
        <Route exact path='/profile/:id' component={MyProfile} />
        <PrivateRoute exact path='/edit-profile' component={CreateProfile} />
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
        <PrivateRoute exact path='/threads' component={Threads} />
        <PrivateRoute exact path='/create-thread' component={ThreadForm} />
        <PrivateRoute exact path='/threads/:id' component={Thread} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
