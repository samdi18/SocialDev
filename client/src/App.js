import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

const App = () => (
  <Fragment>
    <Navbar />

    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
