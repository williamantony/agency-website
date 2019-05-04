import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Reset.css';
import './App.css';

/* Error Pages */
import Landing from './pages/Landing/Landing';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={ErrorPage} />
  </Switch>
);

export default App;
