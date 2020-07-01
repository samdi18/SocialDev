import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
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
};

export default App;
