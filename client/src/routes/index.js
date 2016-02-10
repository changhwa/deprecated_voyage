import React from 'react';
import { Route } from 'react-router';
import Main from '../containers/Main';
import Login from '../containers/Login';

export default (
  <Route path="/" component={Main}>
    <Route path="/login" component={Login} />
  </Route>
);
