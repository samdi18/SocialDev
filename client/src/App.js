import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Navbar />
      <Alert />

      <Switch>
        <Route path='/register' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </Fragment>
  </Provider>
);

export default App;
